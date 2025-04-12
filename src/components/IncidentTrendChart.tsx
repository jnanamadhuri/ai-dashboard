import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Incident } from "../types/Incident";

interface IncidentTrendChartProps {
  incidents: Incident[];
}

// Color palette
const COLORS = ["#DAB6C4", "#A3A9C7", "#E7D3B9"];

const IncidentTrendChart = ({ incidents }: IncidentTrendChartProps) => {
  const monthlyCounts: { [key: string]: number } = {};

  incidents.forEach((incident) => {
    const date = new Date(incident.reported_at);
    const month = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    monthlyCounts[month] = (monthlyCounts[month] || 0) + 1;
  });

  const chartData = Object.entries(monthlyCounts).map(([month, count]) => ({
    month,
    count,
  }));

  return (
    <div
      className="p-6 rounded-2xl shadow-lg"
      style={{
        backgroundColor: "#545E75",
        color: COLORS[0],
      }}
    >
      <h3
        className="text-xl font-bold mb-6 text-center tracking-wide"
        style={{
          color: COLORS[0],
          textShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}
      >
        Monthly Incident Trend
      </h3>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid stroke={COLORS[1]} strokeDasharray="4 4" />
          <XAxis
            dataKey="month"
            tick={{ fill: COLORS[2], fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: COLORS[1] }}
            tickLine={{ stroke: COLORS[1] }}
          />
          <YAxis
            tick={{ fill: COLORS[2], fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: COLORS[1] }}
            tickLine={{ stroke: COLORS[1] }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: COLORS[2],
              borderRadius: "8px",
              color: "#333",
              border: "none",
              fontWeight: 500,
            }}
            cursor={{ stroke: COLORS[0], strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke={COLORS[0]}
            strokeWidth={3}
            dot={{ stroke: COLORS[1], strokeWidth: 2, r: 4 }}
            activeDot={{
              fill: COLORS[2],
              stroke: COLORS[1],
              strokeWidth: 3,
              r: 6,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncidentTrendChart;
