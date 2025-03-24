import { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AffectionChartProps {
  data: { name: string; value: number }[];
}

const AffectionChart: FC<AffectionChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AffectionChart;
