import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Incident } from "../types/Incident";

const COLORS = ["#DAB6C4", "#A3A9C7", "#E7D3B9"];

interface IncidentChartProps {
  incidents: Incident[];
}

const IncidentChart = ({ incidents }: IncidentChartProps) => {
  const severityCounts = {
    Low: 0,
    Medium: 0,
    High: 0,
  };

  incidents.forEach((incident) => {
    severityCounts[incident.severity]++;
  });

  const total = incidents.length;

  const data = [
    { name: "Low", value: severityCounts.Low },
    { name: "Medium", value: severityCounts.Medium },
    { name: "High", value: severityCounts.High },
  ];

  const getPercentage = (value: number) =>
    ((value / total) * 100).toFixed(1) + "%";

  return (
    <div>
      <h3
        style={{ color: "#F2A1A1" }}
        className="text-lg font-semibold mb-4 text-center"
      >
        Incidents by Severity
      </h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, value }) => `${name}: ${getPercentage(value)}`}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${getPercentage(Number(value))}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncidentChart;
