import React from "react";
import CarsCard from "./CarsCard";
import { Car } from "../../car.types";

interface CarsGridProps {
  cars: Car[];
}

export const CarsGrid: React.FC<CarsGridProps> = ({ cars }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {cars.map((car) => (
          <CarsCard key={car.id} cars={cars} />
        ))}
      </div>
    </div>
  );
};

export default CarsGrid;
