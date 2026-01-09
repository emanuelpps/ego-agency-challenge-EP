"use client";
import CarsCard from "./CarsCard";
import { Car } from "../../types/car.types";
import { motion } from "framer-motion";

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
    <motion.div
      className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {cars.map((car) => (
        <motion.div
          key={car.id}
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <CarsCard car={car} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CarsGrid;
