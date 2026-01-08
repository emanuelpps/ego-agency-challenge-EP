"use client";
import { useState } from "react";
import Image from "next/image";
import { SegmentFilter } from "../../types/filter.types";

interface Props {
  value: SegmentFilter;
  onChange: (value: SegmentFilter) => void;
}

const filters = [
  { label: "Todos", value: "todos" },
  { label: "Autos", value: "Sedan" },
  { label: "Pickups y Comerciales", value: "Pickups y Comerciales" },
  { label: "SUVs y Crossovers", value: "SUVs" },
] as const;

export default function FilterBar({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-6">
        <div className="flex flex-nowrap items-center gap-6 w-full">
          <span className="font-semibold text-[14px] text-[#373737] whitespace-nowrap">
            Filtrar por
          </span>
          <div className="flex flex-nowrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => onChange(filter.value)}
                className={`cursor-pointer px-5 py-2 transition-colors flex justify-center items-center text-[#373737] rounded-[18px] text-[14px] whitespace-nowrap ${
                  value === filter.value ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative md:hidden flex w-full justify-start items-center gap-2">
        <span
          className="font-semibold text-[14px] text-[#373737] cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filtrar por
        </span>
        <Image
          src="/icons/SortArrow.svg"
          alt="Filtrar"
          width={6}
          height={6}
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer transition-transform duration-200 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
        {isOpen && (
          <ul className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md z-50">
            {filters.map((filter) => (
              <li
                key={filter.value}
                onClick={() => {
                  onChange(filter.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer border-b border-gray-100 hover:bg-gray-100 text-[14px] text-[#373737] ${
                  value === filter.value ? "bg-gray-100 font-bold" : ""
                }`}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
