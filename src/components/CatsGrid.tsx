import React, { FC, useState, useCallback } from "react";
import { CatModel } from "../services/catsService";

interface CatsGridProps {
  catsData: CatModel[];
}

const DESCRIPTION_THRESHOLD = 150;

const CatsGrid: FC<CatsGridProps> = React.memo(({ catsData }) => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {catsData.map((cat) => {
        const isExpanded = expandedIds[cat.id] || false;
        return (
          <div
            key={cat.id}
            className="group 
              flex flex-col 
              h-full 
              bg-white 
              border border-gray-200 
              shadow-sm 
              rounded-xl 
              transition-transform 
              hover:scale-[1.02]"
          >
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {cat.name}
              </h3>
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                Origin: {cat.origin || "Unknown"}
              </span>
              <p
                className={`mt-3 text-gray-500 ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {cat.description || "No description available"}
              </p>
              {cat.description &&
                cat.description.length > DESCRIPTION_THRESHOLD && (
                  <button
                    onClick={() => toggleExpand(cat.id)}
                    className="mt-2 text-blue-500 hover:underline cursor-pointer"
                  >
                    {isExpanded ? "Less..." : "More..."}
                  </button>
                )}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Adaptability:</span>
                  <span>{cat.adaptability}/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Affection Level:</span>
                  <span>{cat.affection_level}/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Life Span:</span>
                  <span>{cat.life_span} years</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default CatsGrid;
