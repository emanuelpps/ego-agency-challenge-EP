import CarGallery from "./CarGallery";
import { GalleryItem } from "@/features/cars/types/car.api.types";

interface Props {
  items: GalleryItem[];
}

export default function CarFeatures({ items }: Props) {
  return (
    <section className="space-y-6">
      <CarGallery items={items} />
    </section>
  );
}
