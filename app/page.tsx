import CarsHeader from "@/features/cars/components/list/CarsHeader";
import FilterBar from "@/features/cars/components/list/FilterBar";

export default function Home() {
  return (
    <main className="max-w-5xl min-h-screen px-4 pt-20 mx-auto">
      <CarsHeader />
      <FilterBar />
    </main>
  );
}
