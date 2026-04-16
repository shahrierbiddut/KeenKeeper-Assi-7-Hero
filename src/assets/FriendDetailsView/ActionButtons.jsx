import React from "react";
import { MdAlarm, MdArchive, MdDelete } from "react-icons/md";

export default function ActionButtons() {
  return (
    <div className="space-y-3 mt-6">
      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-800 rounded-lg shadow border border-gray-300 hover:shadow-md transition font-semibold">
        <MdAlarm size={20} className="text-gray-700" />
        Snooze 2 Weeks
      </button>
      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-800 rounded-lg shadow border border-gray-300 hover:shadow-md transition font-semibold">
        <MdArchive size={20} className="text-gray-700" />
        Archive
      </button>
      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-red-600 rounded-lg shadow border border-red-300 hover:shadow-md transition font-semibold">
        <MdDelete size={20} className="text-red-600" />
        Delete
      </button>
    </div>
  );
}
