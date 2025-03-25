import React, { FC, ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

const ChartCard: FC<ChartCardProps> = React.memo(({ title, children }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="h-[300px]">{children}</div>
  </div>
));

export default ChartCard;
