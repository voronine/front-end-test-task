import { FC } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  name: string;
  value: number;
}

interface OriginsChartProps {
  data: ChartData[];
  colors: string[];
}

const OriginsChart: FC<OriginsChartProps> = ({ data, colors }) => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={false}
          labelLine={false}
          paddingAngle={2}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          wrapperStyle={{ fontSize: "12px" }}
          formatter={(value, entry) => {
            const val = entry?.payload?.value;
            return val !== undefined ? `${value} (${val})` : value;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default OriginsChart;
