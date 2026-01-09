import { CarDetail } from "@/features/cars/pages/CarDetail";
import { getCarById } from "@/features/cars/services/car.service";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = await getCarById(slug);
  if (!car) {
    return notFound();
  }
  return <CarDetail car={car} />;
}
