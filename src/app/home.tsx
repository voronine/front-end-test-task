import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../store/store";
import { useGetBreedsQuery } from "../services/catsService";
import ChartCard from "../components/ChartCard";
import CatsGrid from "../components/CatsGrid";
import useChartData from "../hooks/useChartData";
import AdaptabilityChart from "../components/charts/AdaptabilityChart";
import AffectionChart from "../components/charts/AffectionChart";
import OriginsChart from "../components/charts/OriginsChart";
import IndoorOutdoorChart from "../components/charts/IndoorOutdoorChart";
import LapChart from "../components/charts/LapChart";
import LifeSpanChart from "../components/charts/LifeSpanChart";

const COLORS: string[] = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: catsData, isLoading, error } = useGetBreedsQuery();
  const {
    adaptabilityData,
    affectionData,
    originData,
    indoorData,
    lapData,
    lifeSpanData,
  } = useChartData(catsData);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500">Error loading cats data</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cat Breeds Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ChartCard title="Adaptability Distribution">
          <AdaptabilityChart data={adaptabilityData} />
        </ChartCard>

        <ChartCard title="Affection Levels">
          <AffectionChart data={affectionData} />
        </ChartCard>

        <ChartCard title="Origins (Number of Breeds)">
          <OriginsChart data={originData} colors={COLORS} />
        </ChartCard>

        <ChartCard title="Indoor vs Outdoor Preference">
          <IndoorOutdoorChart data={indoorData} colors={COLORS} />
        </ChartCard>

        <ChartCard title="Lap Cat Distribution">
          <LapChart data={lapData} colors={COLORS} />
        </ChartCard>

        <ChartCard title="Life Span Distribution">
          <LifeSpanChart data={lifeSpanData} />
        </ChartCard>
      </div>

      <CatsGrid catsData={catsData || []} />
    </div>
  );
};

export default HomePage;
