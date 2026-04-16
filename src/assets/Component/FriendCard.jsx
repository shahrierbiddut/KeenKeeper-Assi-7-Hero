import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return "bg-red-500 text-white";
      case "on-track":
        return "bg-gray-800 text-white";
      case "almost due":
        return "bg-yellow-400 text-gray-800";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  const handleCardClick = () => {
    navigate(`/friend/${friend.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer text-center"
    >
      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {friend.name}
      </h3>

      {/* Days Since Contact */}
      <p className="text-sm text-gray-500 mb-3">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <button
        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
          friend.status
        )}`}
        disabled
      >
        {friend.status}
      </button>
    </div>
  );
}
