import React from "react";

export default function RelationshipGoal({ friend }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">
          Relationship Goal
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
          Edit
        </button>
      </div>
      <p className="text-gray-800 font-semibold">
        Connect every <span className="font-bold text-lg">{friend.goal}</span> days
      </p>
    </div>
  );
}
