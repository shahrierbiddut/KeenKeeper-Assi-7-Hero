import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdCall, MdMessage, MdVideoCall } from "react-icons/md";

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

  const handleCheckIn = (type) => {
    // Add timeline
    const timelineEntry = {
      id: Date.now(),
      friendId: friend.id,
      type: type,
      timestamp: new Date().toISOString(),
    };
    console.log("Check-in recorded:", timelineEntry);
    // Timeline page 
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Friend Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                />
              </div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {friend.name}
              </h1>

              {/* Status */}
              <div className="flex justify-center mb-4">
                <button
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                    friend.status
                  )}`}
                  disabled
                >
                  {friend.status}
                </button>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-4 border-t pt-4">
                <p className="text-gray-600 text-sm italic text-center">
                  "{friend.bio}"
                </p>
              </div>

              {/* Email */}
              <div className="text-center border-t pt-4">
                <p className="text-gray-500 text-xs mb-1">Preferred: email</p>
                <a
                  href={`mailto:${friend.email}`}
                  className="text-gray-700 text-sm hover:text-blue-500 break-all"
                >
                  {friend.email}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-800 rounded-lg shadow hover:shadow-md transition border border-gray-200">
                <span>⏰</span>
                Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-800 rounded-lg shadow hover:shadow-md transition border border-gray-200">
                <span>📦</span>
                Archive
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-red-600 rounded-lg shadow hover:shadow-md transition border border-red-200">
                <span>🗑️</span>
                Delete
              </button>
            </div>
          </div>

          {/* Stats & Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Days Since Contact</p>
                <p className="text-3xl font-bold text-blue-600">
                  {friend.days_since_contact}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Goal (Days)</p>
                <p className="text-3xl font-bold text-green-600">
                  {friend.goal}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Next Due</p>
                <p className="text-lg font-bold text-gray-900">
                  {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Relationship Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Relationship Goal
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                  Edit
                </button>
              </div>
              <p className="text-gray-700">
                Connect every <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>

            {/* Quick Check Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleCheckIn("call")}
                  className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
                >
                  <MdCall size={32} className="text-blue-600 mb-2" />
                  <span className="text-sm font-semibold text-gray-800">
                    Call
                  </span>
                </button>
                <button
                  onClick={() => handleCheckIn("text")}
                  className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
                >
                  <MdMessage size={32} className="text-green-600 mb-2" />
                  <span className="text-sm font-semibold text-gray-800">
                    Text
                  </span>
                </button>
                <button
                  onClick={() => handleCheckIn("video")}
                  className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
                >
                  <MdVideoCall size={32} className="text-purple-600 mb-2" />
                  <span className="text-sm font-semibold text-gray-800">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
