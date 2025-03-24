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

interface AdaptabilityChartProps {
  data: { name: string; value: number }[];
}

const AdaptabilityChart: FC<AdaptabilityChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#0088FE" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AdaptabilityChart;
