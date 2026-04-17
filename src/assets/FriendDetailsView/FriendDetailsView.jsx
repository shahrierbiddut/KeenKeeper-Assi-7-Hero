import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FriendInfoCard from "./FriendInfoCard";
import ActionButtons from "./ActionButtons";
import StatsCards from "./StatsCards";
import RelationshipGoal from "./RelationshipGoal";
import QuickCheckIn from "./QuickCheckIn";
import Toast from "../Component/Toast";

export default function FriendDetailsView() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        // Fetch all friends from JSON file
        const response = await fetch("/friends.json");
        const data = await response.json();
        
        // Find the friend with matching ID
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
    const lowerStatus = status.toLowerCase();
    if (lowerStatus === "overdue") {
      return "bg-red-500 text-white";
    } else if (lowerStatus === "on-track") {
      return "bg-gray-800 text-white";
    } else if (lowerStatus === "almost due") {
      return "bg-yellow-400 text-gray-800";
    } else {
      return "bg-gray-300 text-gray-800";
    }
  };

  const handleCheckIn = (type) => {
    setToast({
      message: `✓ ${type.charAt(0).toUpperCase() + type.slice(1)} added to timeline!`,
      type: "success",
    });
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-lg font-semibold">
          Friend not found
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition text-sm font-medium"
        >
          Back to Friends
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <FriendInfoCard friend={friend} getStatusColor={getStatusColor} />
            <ActionButtons />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <StatsCards friend={friend} />
            <RelationshipGoal friend={friend} />
            <QuickCheckIn friend={friend} onCheckIn={handleCheckIn} />
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
