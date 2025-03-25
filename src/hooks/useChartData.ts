import { useMemo } from "react";
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
  const memoizedData = useMemo(() => {
    if (!catsData || catsData.length === 0) {
      return {
        adaptabilityData: [],
        affectionData: [],
        originData: [],
        indoorData: [],
        lapData: [],
        lifeSpanData: [],
      };
    }

    const adaptabilityData = catsData.map((cat) => ({
      name: cat.name,
      value: cat.adaptability,
    }));

    const affectionData = catsData.map((cat) => ({
      name: cat.name,
      value: cat.affection_level,
    }));

    const originMap = catsData.reduce<Record<string, number>>((acc, cat) => {
      const origin = cat.origin || "Unknown";
      acc[origin] = (acc[origin] || 0) + 1;
      return acc;
    }, {});

    const originData = Object.entries(originMap).map(([country, count]) => ({
      name: country,
      value: count,
    }));

    const indoorCount = catsData.reduce<{ indoor: number; outdoor: number }>(
      (acc, cat) => {
        if (cat.indoor === 1) acc.indoor++;
        else acc.outdoor++;
        return acc;
      },
      { indoor: 0, outdoor: 0 }
    );

    const indoorData = [
      { name: "Indoor", value: indoorCount.indoor },
      { name: "Outdoor", value: indoorCount.outdoor },
    ];

    const lapCount = catsData.reduce<{ lap: number; notLap: number }>(
      (acc, cat) => {
        if (cat.lap === 1) acc.lap++;
        else acc.notLap++;
        return acc;
      },
      { lap: 0, notLap: 0 }
    );

    const lapData = [
      { name: "Lap Cat", value: lapCount.lap },
      { name: "Not Lap Cat", value: lapCount.notLap },
    ];

    const lifeSpanData = catsData.map((cat) => ({
      name: cat.name,
      years: parseInt(cat.life_span.split(" ")[0]) || 0,
    }));

    return {
      adaptabilityData,
      affectionData,
      originData,
      indoorData,
      lapData,
      lifeSpanData,
    };
  }, [catsData]);

  return memoizedData;
};

export default useChartData;
