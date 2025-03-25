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
          onChange={(e) => setSortParameter(e.target.value as SortParameter)}
        >
          <option value="name">Sort by Name</option>
          <option value="origin">Sort by Origin</option>
          <option value="adaptability">Sort by Adaptability</option>
          <option value="affection_level">Sort by Affection Level</option>
          <option value="life_span">Sort by Life Span</option>
        </select>
      </div>
    );
  }
);

export default FilterAndSortBar;
