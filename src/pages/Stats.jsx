import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

export default function Stats() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Colors for the pie chart
  const COLORS = {
    call: "#3B82F6",      // Blue
    text: "#10B981",      // Green
    video: "#A855F7",     // Purple
  };

  useEffect(() => {
    // Load timeline data from localStorage
    const savedTimeline = localStorage.getItem("timeline");
    if (savedTimeline) {
      const timeline = JSON.parse(savedTimeline);

      // Count interactions by type
      const counts = {
        call: 0,
        text: 0,
        video: 0,
      };

      timeline.forEach((entry) => {
        const type = entry.type.toLowerCase();
        if (type in counts) {
          counts[type]++;
        }
      });

      // Format data for pie chart
      const data = [
        {
          name: "Call",
          value: counts.call,
          color: COLORS.call,
        },
        {
          name: "Text",
          value: counts.text,
          color: COLORS.text,
        },
        {
          name: "Video",
          value: counts.video,
          color: COLORS.video,
        },
      ];

      setChartData(data);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-700">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Friendship Analytics</h1>

        {/* Chart Container */}
        <div className="bg-white rounded-lg shadow-lg p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">By Interaction Type</h2>

          {/* Check if there's data */}
          {chartData.every((item) => item.value === 0) ? (
            <div className="flex items-center justify-center h-80">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-600">
                  No interactions recorded yet
                </p>
                <p className="text-gray-500 mt-2">
                  Start adding check-ins to see your interaction analytics
                </p>
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => value}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value, entry) => `${entry.payload.name}: ${entry.payload.value}`}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
