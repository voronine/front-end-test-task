import { useEffect, useState } from "react";
import { CatModel } from "../services/catsService";

export interface ChartData {
  name: string;
  value: number;
}

export interface LifeSpanData {
  name: string;
  years: number;
}

interface ChartDataReturn {
  adaptabilityData: ChartData[];
  affectionData: ChartData[];
  originData: ChartData[]; 
  indoorData: ChartData[]; 
  lapData: ChartData[];   
  lifeSpanData: LifeSpanData[];
}

const useChartData = (catsData: CatModel[] | undefined): ChartDataReturn => {
  const [adaptabilityData, setAdaptabilityData] = useState<ChartData[]>([]);
  const [affectionData, setAffectionData] = useState<ChartData[]>([]);
  const [originData, setOriginData] = useState<ChartData[]>([]);
  const [indoorData, setIndoorData] = useState<ChartData[]>([]);
  const [lapData, setLapData] = useState<ChartData[]>([]);
  const [lifeSpanData, setLifeSpanData] = useState<LifeSpanData[]>([]);

  console.log(catsData);
  

  useEffect(() => {
    if (!catsData || catsData.length === 0) return;
    setAdaptabilityData(
      catsData.map((cat) => ({
        name: cat.name,
        value: cat.adaptability,
      }))
    );

    setAffectionData(
      catsData.map((cat) => ({
        name: cat.name,
        value: cat.affection_level,
      }))
    );

    const originMap = catsData.reduce<Record<string, number>>((acc, cat) => {
      const origin = cat.origin || "Unknown";
      acc[origin] = (acc[origin] || 0) + 1;
      return acc;
    }, {});
    const groupedOrigins = Object.entries(originMap).map(([country, count]) => ({
      name: country,
      value: count,
    }));
    setOriginData(groupedOrigins);

    const indoorCount = catsData.reduce<{ indoor: number; outdoor: number }>(
      (acc, cat) => {
        if (cat.indoor === 1) acc.indoor++;
        else acc.outdoor++;
        return acc;
      },
      { indoor: 0, outdoor: 0 }
    );
    setIndoorData([
      { name: "Indoor", value: indoorCount.indoor },
      { name: "Outdoor", value: indoorCount.outdoor },
    ]);

    const lapCount = catsData.reduce<{ lap: number; notLap: number }>(
      (acc, cat) => {
        if (cat.lap === 1) acc.lap++;
        else acc.notLap++;
        return acc;
      },
      { lap: 0, notLap: 0 }
    );
    setLapData([
      { name: "Lap Cat", value: lapCount.lap },
      { name: "Not Lap Cat", value: lapCount.notLap },
    ]);

    setLifeSpanData(
      catsData.map((cat) => {
        const spanString = cat.life_span;
        const firstNumber = parseInt(spanString.split(" ")[0]) || 0;
        return {
          name: cat.name,
          years: firstNumber,
        };
      })
    );
  }, [catsData]);

  return {
    adaptabilityData,
    affectionData,
    originData,
    indoorData,
    lapData,
    lifeSpanData,
  };
};

export default useChartData;
