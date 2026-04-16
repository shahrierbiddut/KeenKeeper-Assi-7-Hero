import React from "react";

export default function StatsCards({ friend }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
        <p className="text-xs font-bold text-gray-700 mb-3 uppercase">
          Days Since Contact
        </p>
        <p className="text-3xl font-bold text-gray-900">{friend.days_since_contact}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
        <p className="text-xs font-bold text-gray-700 mb-3 uppercase">
          Goal (Days)
        </p>
        <p className="text-3xl font-bold text-gray-900">{friend.goal}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
        <p className="text-xs font-bold text-gray-700 mb-3 uppercase">
          Next Due
        </p>
        <p className="text-lg font-bold text-gray-900">
          {new Date(friend.next_due_date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
