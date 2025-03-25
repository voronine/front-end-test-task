import React, { FC } from "react";

type SortParameter =
  | "name"
  | "origin"
  | "adaptability"
  | "affection_level"
  | "life_span";

interface FilterAndSortBarProps {
  filterText: string;
  setFilterText: (val: string) => void;
  selectedOrigin: string;
  setSelectedOrigin: (val: string) => void;
  sortParameter: SortParameter;
  setSortParameter: (val: SortParameter) => void;
  uniqueOrigins: string[];
}

const sortOptions: { value: SortParameter; label: string }[] = [
  { value: "name", label: "Sort by Name" },
  { value: "origin", label: "Sort by Origin" },
  { value: "adaptability", label: "Sort by Adaptability" },
  { value: "affection_level", label: "Sort by Affection Level" },
  { value: "life_span", label: "Sort by Life Span" },
];

const FilterAndSortBar: FC<FilterAndSortBarProps> = React.memo(
  ({
    filterText,
    setFilterText,
    selectedOrigin,
    setSelectedOrigin,
    sortParameter,
    setSortParameter,
    uniqueOrigins,
  }) => {
    return (
      <div className="mb-6 flex flex-col md:flex-row gap-4 transition-opacity duration-300">
        <input
          type="text"
          placeholder="Search by breed name..."
          className="form-input 
            px-3 py-2 rounded border 
            border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
            focus:outline-none focus:ring focus:border-blue-500"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select
          className="form-select 
            px-3 py-2 rounded border 
            border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
            focus:outline-none focus:ring focus:border-blue-500"
          value={selectedOrigin}
          onChange={(e) => setSelectedOrigin(e.target.value)}
        >
          <option value="All">All Origins</option>
          {uniqueOrigins.map((origin) => (
            <option key={origin} value={origin}>
              {origin}
            </option>
          ))}
        </select>
        <select
          className="form-select 
            px-3 py-2 rounded border 
            border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
            focus:outline-none focus:ring focus:border-blue-500"
          value={sortParameter}
          onChange={(e) =>
            setSortParameter(e.target.value as SortParameter)
          }
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default FilterAndSortBar;
