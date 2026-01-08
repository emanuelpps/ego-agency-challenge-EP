"use client";

import { useState } from "react";
import Image from "next/image";
import { SortOption } from "../../types/filter.types";

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const options: { label: string; value: SortOption }[] = [
  { label: "Precio: Menor a Mayor", value: "precio-asc" },
  { label: "Precio: Mayor a Menor", value: "precio-desc" },
  { label: "Más nuevos primero", value: "año-desc" },
  { label: "Más viejos primero", value: "año-asc" },
];

export default function SortSelect({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative flex w-full justify-end items-center gap-2">
      <span
        className="font-semibold text-[14px] text-[#373737] cursor-pointer select-none"
        onClick={toggleOpen}
      >
        Ordenar por
      </span>
      <Image
        src="/icons/SortArrow.svg"
        alt="Ordenar"
        width={6}
        height={6}
        onClick={toggleOpen}
        className={`cursor-pointer transition-transform duration-200 ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
      />
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md z-50">
          <li
            onClick={() => {
              onChange(null);
              setIsOpen(false);
            }}
            className={`px-4 py-2 cursor-pointer border-b border-gray-100 hover:bg-gray-100 ${
              value === null ? "bg-gray-100" : ""
            }`}
          >
            Nada
          </li>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer border-b border-gray-100 hover:bg-gray-100 ${
                value === option.value ? "bg-gray-100" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
