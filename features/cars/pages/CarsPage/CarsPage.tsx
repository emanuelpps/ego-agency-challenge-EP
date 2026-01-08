import { getCars } from "../../services/car.service";
import CarsPageClient from "./CarsPageClient";

export async function CarsPage() {
  const cars = await getCars();
  console.log(cars);
  return <CarsPageClient cars={cars} />;
}
