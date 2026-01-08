"use client";

import { useMemo, useState } from "react";
import FilterBar from "./FilterBar";
import SortSelect from "./SortSelect";
import CarsGrid from "./CarsGrid";
import CarsHeader from "./CarsHeader";
import { Car } from "../../types/car.types";
import { SegmentFilter, SortOption } from "../../types/filter.types";

interface Props {
  cars: Car[];
}

export default function CarsPageClient({ cars }: Props) {
  const [segment, setSegment] = useState<SegmentFilter>("todos");
  const [sort, setSort] = useState<SortOption>(null);

  const filteredCars = useMemo(() => {
    let result = [...cars];
    if (segment !== "todos") {
      result = result.filter((car) => car.segment === segment);
    }
    if (sort === "precio-asc") {
      result.sort((a, b) => a.price - b.price);
    }
    if (sort === "precio-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    if (sort === "año-asc") {
      result.sort((a, b) => a.year - b.year);
    }
    if (sort === "año-desc") {
      result.sort((a, b) => b.year - a.year);
    }
    return result;
  }, [cars, segment, sort]);

  return (
    <main className="max-w-5xl min-h-screen px-4 mx-auto">
      <CarsHeader />
      <div className="flex items-center justify-between border-b border-gray-200 pb-2 mt-20">
        <FilterBar value={segment} onChange={setSegment} />
        <SortSelect value={sort} onChange={setSort} />
      </div>
      <CarsGrid cars={filteredCars} />
    </main>
  );
}
