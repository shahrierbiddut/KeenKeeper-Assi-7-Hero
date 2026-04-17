import React, { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    // Timer to auto-close the toast after 4 seconds
    const timer = setTimeout(onClose, 4000);
    
    // Cleanup: Clear the timer if component unmounts before 4 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const getStyles = () => {
    if (type === "success") {
      return "bg-green-500 text-white";
    } else if (type === "error") {
      return "bg-red-500 text-white";
    } else if (type === "info") {
      return "bg-blue-500 text-white";
    } else {
      return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className={`fixed top-8 right-8 px-6 py-4 rounded-lg shadow-lg font-semibold animate-pulse z-50 ${getStyles()}`}
    >
      {message}
    </div>
  );
}
