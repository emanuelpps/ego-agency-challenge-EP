"use client";
import { SegmentFilter } from "../../types/filter.types";

interface Props {
  value: SegmentFilter;
  onChange: (value: SegmentFilter) => void;
}

export default function FilterBar({ value, onChange }: Props) {
  const filters = [
    { label: "Todos", value: "todos" },
    { label: "Autos", value: "Sedan" },
    { label: "Pickups y Comerciales", value: "Pickups y Comerciales" },
    { label: "SUVs y Crossovers", value: "SUVs" },
  ] as const;

  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex flex-nowrap items-center gap-6 w-full">
        <span className="font-semibold text-[14px] text-[#373737] whitespace-nowrap">
          Filtrar por
        </span>
        <div className="flex flex-nowrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onChange(filter.value)}
              className={`px-5 py-2 transition-colors flex justify-center items-center text-[#373737] rounded-[18px] text-[14px] whitespace-nowrap ${
                value === filter.value ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
