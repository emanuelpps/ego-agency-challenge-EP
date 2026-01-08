"use client";
import { useState } from "react";
import Image from "next/image";

export default function SortSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const sortOptions = [
    { label: "Precio: Menor a Mayor", value: "precio-asc" },
    { label: "Precio: Mayor a Menor", value: "precio-desc" },
    { label: "Más nuevos primero", value: "año-desc" },
    { label: "Más viejos primero", value: "año-asc" },
  ];

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex w-full justify-end items-center gap-2">
      <span
        className="font-semibold text-[14px] text-[#373737] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Ordenar por
      </span>
      <Image
        src="/icons/SortArrow.svg"
        alt="Sort Icon"
        width={6}
        height={6}
        className={`cursor-pointer transition-transform duration-200 ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md z-50">
          <li
            onClick={() => handleSelect("")}
            className={`px-4 py-2 cursor-pointer border-b border-gray-100 hover:bg-gray-100 ${
              selectedOption === "" ? "bg-gray-100" : ""
            }`}
          >
            Nada
          </li>
          {sortOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`px-4 py-2 cursor-pointer border-b border-gray-100 hover:bg-gray-100 ${
                selectedOption === option.value ? "bg-gray-100" : ""
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
