import Image from "next/image";
import { Car } from "../../types/car.types";

interface Props {
  car: Car;
}

export default function CarDetail({ car }: Props) {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-24 pb-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-semibold">{car.name}</h1>
        <p className="text-gray-500 mt-1">{car.year}</p>
      </header>
      <div className="relative w-full h-[300px] sm:h-[400px] mb-8">
        {car.photo ? (
          <Image
            src={car.photo}
            alt={car.name}
            fill
            className="object-contain rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg text-gray-500">
            Imagen no disponible
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
        <div>
          <p className="text-sm text-gray-500">Precio</p>
          <p className="text-xl font-semibold">${car.price.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Segmento</p>
          <p className="text-lg capitalize">{car.segment}</p>
        </div>
      </div>
    </section>
  );
}
