// import { useEffect, useState } from "react";
// import { MdCall, MdMessage, MdVideoCall } from "react-icons/md";

// /**
//  * Timeline Component
//  * Displays all check-ins (calls, texts, videos) in chronological order
//  * Data is loaded from localStorage
//  */
// export default function Timeline() {
//   // State to store all timeline entries
//   const [timelineEntries, setTimelineEntries] = useState([]);
//   // State to track loading status
//   const [loading, setLoading] = useState(true);

//   /**
//    * useEffect Hook - Runs once when component loads
//    * Fetches all timeline entries from localStorage and sorts them
//    */
//   useEffect(() => {
//     const allEntries = [];

//     // Get all check-ins from localStorage for each friend (1-12)
//     for (let i = 1; i <= 12; i++) {
//       const checkIns = localStorage.getItem(`checkIns_${i}`);
//       if (checkIns) {
//         const parsedCheckIns = JSON.parse(checkIns);
//         allEntries.push(...parsedCheckIns);
//       }
//     }

//     // Get timeline entries that were created
//     const savedTimeline = localStorage.getItem("timeline");
//     if (savedTimeline) {
//       const parsedTimeline = JSON.parse(savedTimeline);
//       allEntries.push(...parsedTimeline);
//     }

//     // Sort entries by date - newest first
//     allEntries.sort(
//       (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
//     );

//     // Update state with fetched data
//     setTimelineEntries(allEntries);
//     setLoading(false);
//   }, []);



//   /**
//    * Helper Function - Returns readable label for check-in type
//    * "call" -> "Call", "text" -> "Text", "video" -> "Video"
//    */
//   const getTypeLabel = (type) => {
//     switch (type.toLowerCase()) {
//       case "call":
//         return "Call";
//       case "text":
//         return "Text";
//       case "video":
//         return "Video";
//       default:
//         return "Check-in";
//     }
//   };



//   /**
//    * Loading State
//    * Shows loading message while fetching data
//    */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-lg font-semibold text-gray-700">Loading timeline...</p>
//       </div>
//     );
//   }

//   /**
//    * Main Render
//    * Displays header and list of all timeline entries
//    */
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Page Header */}
//         <h1 className="text-4xl font-bold text-gray-900 mb-8">Timeline</h1>

//         {/* Filter Dropdown */}
//         <div className="mb-8">
//           <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:border-gray-400 focus:outline-none">
//             <option>Filter timeline</option>
//             <option value="all">All</option>
//             <option value="call">Calls</option>
//             <option value="text">Texts</option>
//             <option value="video">Videos</option>
//           </select>
//         </div>

//         {/* Timeline Container - Shows all entries in list format */}
//         <div className="space-y-4">
//           {/* Empty State - Shows when no entries exist */}
//           {timelineEntries.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-12 text-center">
//               <p className="text-lg font-semibold text-gray-600">
//                 No timeline entries yet
//               </p>
//               <p className="text-gray-500 mt-2">
//                 Start adding check-ins to see them here
//               </p>
//             </div>
//           ) : (
//             /**
//              * Loop through all entries and display each one
//              * map() function iterates over timelineEntries array
//              */
//             timelineEntries.map((entry, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow p-6 border-l-4 border-gray-300 hover:shadow-lg transition"
//               >
//                 <div className="flex items-start justify-between gap-6">
//                   {/* Left Section - Icon */}
//                   <div className="text-5xl shrink-0">
//                     {entry.type === "call" && "☎️"}
//                     {entry.type === "text" && "💬"}
//                     {entry.type === "video" && "📹"}
//                     {!["call", "text", "video"].includes(entry.type) && "👥"}
//                   </div>

//                   {/* Center Section - Title and Details */}
//                   <div className="flex-1">
//                     {/* Title: "Call with Alex Johnson" */}
//                     <h3 className="text-lg font-bold text-gray-900">
//                       {entry.title || `${getTypeLabel(entry.type)} with ${entry.friendName || "Friend"}`}
//                     </h3>
                    
//                     {/* Date */}
//                     <p className="text-sm text-gray-600 mt-2">
//                       {new Date(entry.timestamp).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
