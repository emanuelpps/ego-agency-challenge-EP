import CarDetail from "@/features/cars/pages/CarDetail/CarDetail";
import { getCarById } from "@/features/cars/services/car.service";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = await getCarById(slug);
  if (!car) {
    return (
      <p className="w-full h-full flex justify-center items-center">
        Modelo no encontrado
      </p>
    );
  }
  return <CarDetail car={car} />;
}
