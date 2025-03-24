import { FC } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LifeSpanData {
  name: string;
  years: number;
}

interface LifeSpanChartProps {
  data: LifeSpanData[];
}

const LifeSpanChart: FC<LifeSpanChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="years" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LifeSpanChart;
