import CarsHeader from "./CarsHeader";
import FilterBar from "./FilterBar";
import CarsGrid from "./CarsGrid";
import { getCars } from "../../car.service";

export async function CarsPage() {
  const cars = await getCars();

  return (
    <main className="max-w-5xl min-h-screen px-4 pt-20 mx-auto">
      <CarsHeader />
      <FilterBar />
      <CarsGrid cars={cars} />
    </main>
  );
}
