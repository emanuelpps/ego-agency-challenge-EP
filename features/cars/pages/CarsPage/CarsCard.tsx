"use client";

import Image from "next/image";
import { useState } from "react";
import { Car } from "../../types/car.types";
import Link from "next/link";

interface CarsCardProps {
  car: Car;
}

const CarsCard: React.FC<CarsCardProps> = ({ car }) => {
  const [imageError, setImageError] = useState(false);

  const slug = `${car.id}`;

  return (
    <Link href={`/${slug}`} className="h-full">
      <article className="flex flex-col h-full rounded-lg p-4">
        <div className="text-center mb-4">
          <h2 className="font-semibold text-lg">{car.name}</h2>
          <p className="text-sm text-gray-600">
            {car.year} | ${car.price.toLocaleString()}
          </p>
        </div>
        <div className="relative w-full h-[200px] flex items-center justify-center">
          {!imageError && car.thumbnail ? (
            <Image
              src={car.thumbnail}
              alt={car.name}
              fill
              className="object-contain rounded-md"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md text-sm text-gray-500">
              Error al cargar la imagen
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default CarsCard;
