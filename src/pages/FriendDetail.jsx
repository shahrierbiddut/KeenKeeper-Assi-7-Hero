import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function FriendDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch("/friends.json");
        const data = await response.json();
        const foundFriend = data.find((f) => f.id === parseInt(id));
        setFriend(foundFriend);
        setLoading(false);
      } catch (error) {
        console.error("Error loading friend:", error);
        setLoading(false);
      }
    };

    fetchFriends();
  }, [id]);

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

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!friend) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Friend not found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Friend Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-200"
              />
            </div>

            {/* Name */}
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
              {friend.name}
            </h1>

            {/* Age */}
            {friend.age && (
              <p className="text-center text-gray-600 mb-4">Age: {friend.age}</p>
            )}

            {/* Status */}
            <div className="flex justify-center mb-6">
              <button
                className={`px-6 py-2 rounded-full text-lg font-semibold ${getStatusColor(
                  friend.status
                )}`}
                disabled
              >
                {friend.status}
              </button>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Bio</h3>
              <p className="text-gray-700 leading-relaxed">{friend.bio}</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700 break-all">
                <a href={`mailto:${friend.email}`} className="text-blue-500 hover:underline">
                  {friend.email}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Days Since Contact Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Status
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Days Since Last Contact</p>
                  <p className="text-4xl font-bold text-blue-500">
                    {friend.days_since_contact}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Contact Goal (days)</p>
                  <p className="text-4xl font-bold text-green-500">
                    {friend.goal}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Next Due Date</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {new Date(friend.next_due_date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Actions</h2>
              <button className="w-full mb-3 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                Mark as Contacted
              </button>
              <button className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-400 transition">
                Edit Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
