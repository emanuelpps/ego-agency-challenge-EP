"use client";
import { useState } from "react";
import SortSelect from "./SortSelect";

type FilterType = "todos" | "autos" | "pickups" | "suvs";

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("todos");

  const filters: { label: string; value: FilterType }[] = [
    { label: "Todos", value: "todos" },
    { label: "Autos", value: "autos" },
    { label: "Pickups y Comerciales", value: "pickups" },
    { label: "SUVs y Crossovers", value: "suvs" },
  ];

  return (
    <div className="flex items-center justify-between gap-6 border-b border-gray-200 pb-2 mt-20">
      <div className="flex flex-nowrap items-center gap-6 w-full">
        <span className="font-semibold text-[14px] text-[#373737] whitespace-nowrap">
          Filtrar por
        </span>
        <div className="flex flex-nowrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 transition-colors flex justify-center items-center text-[#373737] rounded-[18px] text-[14px] whitespace-nowrap ${
                activeFilter === filter.value
                  ? "bg-[#F7F7F7]"
                  : "hover:bg-[#F7F7F7]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <SortSelect />
    </div>
  );
}
