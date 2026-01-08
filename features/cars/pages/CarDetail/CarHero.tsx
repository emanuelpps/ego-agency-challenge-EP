import Image from "next/image";
import { Car } from "../../types/car.types";

interface Props {
  car: Car;
}

export default function CarHero({ car }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative w-full h-[280px] sm:h-[360px]">
        <Image
          src={car.photo}
          alt={car.name}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="space-y-6 text-center lg:text-left">
        <span className="text-sm text-gray-500 font-medium">{car.name}</span>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
          Preparada para <br /> cualquier desafío
        </h1>
        <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
          Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem
          ipsum dolor sit amet orem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
