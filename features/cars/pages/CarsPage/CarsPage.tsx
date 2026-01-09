import { getCars } from "../../services/car.service";
import CarsPageClient from "./CarsPageClient";

export async function CarsPage() {
  const cars = await getCars();
  return <CarsPageClient cars={cars} />;
}
