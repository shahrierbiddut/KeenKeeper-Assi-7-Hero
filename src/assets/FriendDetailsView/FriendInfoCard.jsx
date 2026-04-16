import React from "react";

export default function FriendInfoCard({ friend }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-full bg-teal-500 flex items-center justify-center shadow-md overflow-hidden border-4 border-white">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
        {friend.name}
      </h1>

      {/* Status Badge */}
      <div className="flex justify-center mb-6">
        <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold uppercase">
          {friend.status}
        </span>
      </div>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-green-700 text-xs font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Bio */}
      <div className="mb-6">
        <p className="text-gray-800 text-sm italic text-center">
          "{friend.bio}"
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Email */}
      <div className="text-center">
        <p className="text-gray-700 text-xs font-bold uppercase mb-2">
          Preferred: Email
        </p>
        <a
          href={`mailto:${friend.email}`}
          className="text-blue-600 text-sm font-semibold hover:text-blue-800"
        >
          {friend.email}
        </a>
      </div>
    </div>
  );
}
