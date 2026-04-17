import { useEffect, useState } from "react";
import { MdCall, MdMessage, MdVideoCall, MdDelete } from "react-icons/md";

export default function Timeline() {
  const [timelineEntries, setTimelineEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");

  const loadTimeline = () => {
    const allEntries = [];
    const savedTimeline = localStorage.getItem("timeline");
    
    if (savedTimeline) {
      const parsedTimeline = JSON.parse(savedTimeline);
      for (let i = 0; i < parsedTimeline.length; i++) {
        allEntries.push(parsedTimeline[i]);
      }
    }
    
    allEntries.sort((a, b) => {
      const dateA = new Date(b.timestamp);
      const dateB = new Date(a.timestamp);
      return dateA - dateB;
    });
    
    setTimelineEntries(allEntries);
    setLoading(false);
  };

  useEffect(() => {
    loadTimeline();
  }, []);

  const handleDelete = (entryId) => {
    const savedTimeline = localStorage.getItem("timeline");
    if (savedTimeline) {
      const parsedTimeline = JSON.parse(savedTimeline);
      const updatedTimeline = [];
      
      for (let i = 0; i < parsedTimeline.length; i++) {
        const entry = parsedTimeline[i];
        if (entry.id !== entryId) {
          updatedTimeline.push(entry);
        }
      }
      
      localStorage.setItem("timeline", JSON.stringify(updatedTimeline));
    }
    loadTimeline();
  };

  const getTypeLabel = (type) => {
    const lowerType = type.toLowerCase();
    if (lowerType === "call") {
      return "Call";
    } else if (lowerType === "text") {
      return "Text";
    } else if (lowerType === "video") {
      return "Video";
    } else {
      return "Check-in";
    }
  };

  const getFilteredEntries = () => {
    if (filterType === "all") {
      return timelineEntries;
    } else {
      const filteredList = [];
      for (let i = 0; i < timelineEntries.length; i++) {
        const entry = timelineEntries[i];
        if (entry.type === filterType) {
          filteredList.push(entry);
        }
      }
      return filteredList;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-700">Loading timeline...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Timeline</h1>
        <p className="text-gray-600 font-semibold mb-8">
          View your interaction history with friends.
        </p>

        <div className="mb-8">
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:border-gray-400 focus:outline-none cursor-pointer"
          >
            <option value="all">Filter timeline</option>
            <option value="all">All</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
          </select>
        </div>

        <div className="space-y-6">
          {getFilteredEntries().length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-lg font-semibold text-gray-600">
                {timelineEntries.length === 0 ? "No timeline entries yet" : "No entries found for this filter"}
              </p>
              <p className="text-gray-500 mt-2">
                {timelineEntries.length === 0 ? "Start adding check-ins from friend details pages to see them here" : "Try selecting a different filter"}
              </p>
            </div>
          ) : (
            // Display timeline
            getFilteredEntries().map((entry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4 justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-3xl shrink-0">
                      {entry.type === "call" && "☎️"}
                      {entry.type === "text" && "💬"}
                      {entry.type === "video" && "📹"}
                      {!["call", "text", "video"].includes(entry.type) && "👥"}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900">
                        {entry.title || `${getTypeLabel(entry.type)} with ${entry.friendName || "Friend"}`}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {new Date(entry.timestamp).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition"
                    title="Delete entry"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
