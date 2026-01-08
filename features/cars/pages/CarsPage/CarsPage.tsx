import CarsHeader from "./CarsHeader";
import FilterBar from "./FilterBar";
import CarsGrid from "./CarsGrid";
import { getCars } from "../../services/car.service";

export async function CarsPage() {
  const cars = await getCars();
console.log(cars);
  return (
    <main className="max-w-5xl min-h-screen px-4 mx-auto">
      <CarsHeader />
      <FilterBar />
      <CarsGrid cars={cars} />
    </main>
  );
}
