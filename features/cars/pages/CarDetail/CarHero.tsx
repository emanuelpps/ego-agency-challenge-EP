"use client";
import Image from "next/image";
import { CarDetailApiModel } from "../../types/car.api.types";
import { RevealFromSide } from "@/components/animations/RevealFromSide";

interface Props {
  car: CarDetailApiModel;
}

export default function CarHero({ car }: Props) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:p-8">
      <RevealFromSide
        side="left"
        className="relative w-full h-[280px] sm:h-[360px]"
      >
        <Image
          src={car.photo}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </RevealFromSide>
      <RevealFromSide side="right" className="space-y-6 text-left">
        <span className="text-[20px] text-[#373737] font-medium">
          {car.name}
        </span>
        <h1 className="text-[35px] lg:text-[50px] sm:text-4xl font-semibold leading-tight">
          {car.title}
        </h1>
        <p className="text-[#373737] text-[16px] max-w-md mx-auto lg:mx-0">
          {car.description.replace(/<[^>]+>/g, "")}
        </p>
      </RevealFromSide>
    </div>
  );
}
