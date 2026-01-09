"use client";

import Image from "next/image";
import { useState } from "react";
import { Car } from "../../types/car.types";
import Link from "next/link";
import { ButtonFactory } from "@/components/ui/buttons/ButtonFactory";

interface CarsCardProps {
  car: Car;
}

const CarsCard: React.FC<CarsCardProps> = ({ car }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const slug = `${car.id}`;

  return (
    <Link
      href={`/${slug}`}
      className="h-full"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className="flex flex-col h-full rounded-lg p-4">
        <div className="text-center">
          <h2
            className={`w-full font-semibold text-balance text-center ${
              isHovered ? "text-[#EB0A1E]" : "text-[#000000]"
            }`}
            style={{
              fontSize: "clamp(16px, 2.5vw, 28px)",
              whiteSpace: "nowrap",
            }}
          >
            {car.name}
          </h2>
          <p className="text-sm text-gray-600">
            {car.year} | ${car.price.toLocaleString()}
          </p>
        </div>
        <div className="relative w-full aspect-[16/9] flex items-center justify-center">
          {!imageError && car.thumbnail ? (
            <Image
              src={car.thumbnail}
              alt={car.name}
              fill
              className="object-contain max-w-[240px] max-h-[180px]"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md text-sm text-gray-500">
              Error al cargar la imagen
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center min-h-[50px]">
          <div
            className={`transition-all duration-300 ease-in-out ${
              isHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ButtonFactory type="primary" label="Ver Modelo" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CarsCard;
