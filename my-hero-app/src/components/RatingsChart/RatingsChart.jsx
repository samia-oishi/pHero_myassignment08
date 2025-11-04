import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const RatingsChart = ({ ratings }) => {
  if (!ratings) return null;

  // Handle both object and array formats
  let data;
  
  if (Array.isArray(ratings)) {
    // If ratings is an array: [{name: "5", count: 12000}, ...]
    data = ratings.map(item => ({
      name: `${item.name || item.star} star`,
      value: Number(item.count || item.value) || 0,
    })).sort((a, b) => {
      const starA = parseInt(a.name);
      const starB = parseInt(b.name);
      return starB - starA; // Sort 5 → 1
    });
  } else {
    // If ratings is an object: { 5: 12000, 4: 7000, ... }
    data = Object.entries(ratings)
      .sort((a, b) => b[0] - a[0]) // Sort 5 → 1
      .map(([star, count]) => ({
        name: `${star} star`,
        value: Number(count) || 0,
      }));
  }

  return (
    <div className="w-[1180px] h-64 m-10 max-sm:w-[70%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#374151", fontSize: 14 }}
            width={80}
          />
          <Tooltip 
            formatter={(value) => value.toLocaleString()}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <Bar dataKey="value" fill="#FF8C00" radius={[0, 4, 4, 0]}>
            <LabelList 
              dataKey="value" 
              position="right" 
              fill="#111827" 
              fontSize={12}
              formatter={(value) => value.toLocaleString()}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;