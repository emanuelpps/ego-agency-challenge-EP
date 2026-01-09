"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/features/cars/types/car.api.types";

interface Props {
  items?: GalleryItem[];
}

export default function CarGallery({ items = [] }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    if (index < 0 || index >= items.length) return;

    const itemWidth = containerRef.current.children[0]?.clientWidth ?? 0;
    containerRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <section className="relative bg-[#f7f7f7] flex w-full justify-center rounded-xl">
      <div className="relative w-full mx-auto">
        <button
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-full w-14 items-center justify-center rounded-md bg-[#FFFFFF8F]/[56] backdrop-blur shadow disabled:opacity-40"
        >
          <Image
            src="/icons/SortArrow.svg"
            alt="Anterior"
            width={14}
            height={14}
            className="-rotate-90 opacity-80"
          />
        </button>
        <button
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-full w-14 items-center justify-center rounded-md bg-[#FFFFFF8F]/[56] backdrop-blur shadow disabled:opacity-40"
        >
          <Image
            src="/icons/SortArrow.svg"
            alt="Siguiente"
            width={14}
            height={14}
            className="rotate-90 opacity-80"
          />
        </button>
        <div
          ref={containerRef}
          className="flex gap-10 md:justify-center overflow-x-auto md:overflow-x-hidden scroll-smooth snap-x snap-mandatory md:snap-none md:mx- md:px-0 no-scrollbar"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[80%] md:min-w-[280px] max-w-[80%] md:max-w-[280px] py-10 snap-center md:snap-none"
            >
              <div className="relative h-[170px] rounded-[6px] overflow-hidden bg-black">
                <Image
                  width={268}
                  height={146}
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-[20px] font-semibold text-[#373737]">
                  {item.title}
                </h3>
                <p className="text-[16px] text-gray-600 leading-snug">
                  {item.description.replace(/<[^>]+>/g, "")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 mb-10 flex justify-center gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-[6px] rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-[#4A4A4A]/50"
                  : "w-3 bg-[#C5C5C5]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
