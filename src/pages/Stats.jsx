import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

export default function Stats() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const COLORS = {
    call: "#3B82F6",
    text: "#10B981",
    video: "#A855F7",
  };

  useEffect(() => {
    const savedTimeline = localStorage.getItem("timeline");
    if (savedTimeline) {
      const timeline = JSON.parse(savedTimeline);
      
      const counts = {
        call: 0,
        text: 0,
        video: 0,
      };

      for (let i = 0; i < timeline.length; i++) {
        const entry = timeline[i];
        const type = entry.type.toLowerCase();
        if (type === "call") {
          counts.call = counts.call + 1;
        } else if (type === "text") {
          counts.text = counts.text + 1;
        } else if (type === "video") {
          counts.video = counts.video + 1;
        }
      }

      const dataObject1 = {
        name: "Call",
        value: counts.call,
        color: COLORS.call,
      };
      
      const dataObject2 = {
        name: "Text",
        value: counts.text,
        color: COLORS.text,
      };
      
      const dataObject3 = {
        name: "Video",
        value: counts.video,
        color: COLORS.video,
      };

      const data = [dataObject1, dataObject2, dataObject3];

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
    <div className="bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Friendship Analytics</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">By Interaction Type</h2>

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
                  {/* Set color for each data segment */}
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
