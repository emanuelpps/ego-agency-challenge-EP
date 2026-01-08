import CarsCard from "./CarsCard";
import { Car } from "../../types/car.types";

interface CarsGridProps {
  cars: Car[];
}

const CarsGrid: React.FC<CarsGridProps> = ({ cars }) => {
  if (cars.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No hay modelos disponibles
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 md:px-0">
      {cars.map((car) => (
        <CarsCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsGrid;
