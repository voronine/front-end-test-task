import { useState, useMemo } from "react";
import { CatModel } from "../services/catsService";

type SortParameter = "name" | "origin" | "adaptability" | "affection_level" | "life_span";

interface UseFilterAndSortReturn {
  filterText: string;
  setFilterText: (val: string) => void;
  selectedOrigin: string;
  setSelectedOrigin: (val: string) => void;
  sortParameter: SortParameter;
  setSortParameter: (val: SortParameter) => void;
  sortedCats: CatModel[];
  uniqueOrigins: string[];
}

export function useFilterAndSort(catsData: CatModel[] | undefined): UseFilterAndSortReturn {
  const [filterText, setFilterText] = useState<string>("");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("All");
  const [sortParameter, setSortParameter] = useState<SortParameter>("name");

  const uniqueOrigins = useMemo(() => {
    if (!catsData) return [];
    return Array.from(new Set(catsData.map((cat) => cat.origin || "Unknown")));
  }, [catsData]);

  const filteredCats = useMemo(() => {
    if (!catsData) return [];
    return catsData.filter((cat) => {
      const matchesName = cat.name.toLowerCase().includes(filterText.toLowerCase());
      const origin = cat.origin || "Unknown";
      const matchesOrigin = selectedOrigin === "All" || origin === selectedOrigin;
      return matchesName && matchesOrigin;
    });
  }, [catsData, filterText, selectedOrigin]);

  const sortedCats = useMemo(() => {
    return [...filteredCats].sort((a, b) => {
      if (sortParameter === "life_span") {
        const aNum = parseInt(a.life_span.split(" ")[0]) || 0;
        const bNum = parseInt(b.life_span.split(" ")[0]) || 0;
        return aNum - bNum;
      } else {
        const aVal = a[sortParameter];
        const bVal = b[sortParameter];
        if (typeof aVal === "number" && typeof bVal === "number") {
          return aVal - bVal;
        }
        return aVal.toString().toLowerCase().localeCompare(bVal.toString().toLowerCase());
      }
    });
  }, [filteredCats, sortParameter]);

  return {
    filterText,
    setFilterText,
    selectedOrigin,
    setSelectedOrigin,
    sortParameter,
    setSortParameter,
    sortedCats,
    uniqueOrigins,
  };
}
