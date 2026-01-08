import { CarDetailModel } from "../../types/car.api.types";
import CarHero from "./CarHero";
import CarGallery from "./CarGallery";
import CarSpecs from "./CarSpecs";

interface Props {
  car: CarDetailModel;
}

export default function CarDetail({ car }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-20">
      <CarHero car={car} />
      <CarGallery gallery={car.gallery} />
      <CarSpecs />
    </section>
  );
}
