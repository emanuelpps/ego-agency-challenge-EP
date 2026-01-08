import React from "react";
import FilterBar from "./FilterBar";
import CarsCard from "./CarsCard";

interface Car {
  id: number;
  title: string;
  year: number;
  price: number;
  imageUrl: string;
}

interface CarsGridProps {
  cars: Car[];
}

export const CarsGrid: React.FC<CarsGridProps> = ({ cars }) => {
  return (
    <div className="w-full">
      <FilterBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {cars.map((car) => (
          <CarsCard key={car.id} cars={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsGrid;
