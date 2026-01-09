import { CarDetailApiModel } from "@/features/cars/types/car.api.types";
import CarFeatures from "./CarFeature";
import CarHighlights from "./CarHighlights";
import { mapFeaturesToGallery } from "@/lib/mappers/car.mappers";
import CarHero from "./CarHero";

interface Props {
  car: CarDetailApiModel;
}

export default function CarDetail({ car }: Props) {
  return (
    <section className="mx-auto px-4 lg:pt-24 pb-16 space-y-20 overflow-x-hidden">
      <CarHero car={car} />
      <CarFeatures items={mapFeaturesToGallery(car.model_features)} />
      <CarHighlights highlights={car.model_highlights} />
    </section>
  );
}
