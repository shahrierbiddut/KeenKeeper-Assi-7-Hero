import React from "react";
import { MdCall, MdMessage, MdVideoCall } from "react-icons/md";

export default function QuickCheckIn({ friend, onCheckIn }) {
  const handleCheckIn = (type) => {
    // Get friend name and create entry
    const timestamp = new Date();
    const entry = {
      id: Date.now(),
      type: type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${
        friend.name
      }`,
      friendName: friend.name,
      friendId: friend.id,
      timestamp: timestamp.toISOString(),
    };

    // Save to timeline in localStorage
    const existingTimeline = localStorage.getItem("timeline");
    const timeline = existingTimeline ? JSON.parse(existingTimeline) : [];
    timeline.push(entry);
    localStorage.setItem("timeline", JSON.stringify(timeline));

    // Call parent handler (for toast notification)
    onCheckIn(type, friend.name);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Quick Check-In
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleCheckIn("call")}
          className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <MdCall size={28} className="text-gray-700 mb-2" />
          <span className="text-sm text-gray-700 font-semibold">Call</span>
        </button>
        <button
          onClick={() => handleCheckIn("text")}
          className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <MdMessage size={28} className="text-gray-700 mb-2" />
          <span className="text-sm text-gray-700 font-semibold">Text</span>
        </button>
        <button
          onClick={() => handleCheckIn("video")}
          className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <MdVideoCall size={28} className="text-gray-700 mb-2" />
          <span className="text-sm text-gray-700 font-semibold">Video</span>
        </button>
      </div>
    </div>
  );
}
