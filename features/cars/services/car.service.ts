import { API_ENDPOINTS } from "@/app/lib/api/endpoints";
import { Car } from "../types/car.types";

export async function getCars(): Promise<Car[]> {
  try {
    const response = await fetch(API_ENDPOINTS.CARS, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      console.error(`Error al obtener los modelos (status ${response.status})`);
      return [];
    }
    return response.json();
  } catch {
    console.error("Error de red al obtener los modelos");
    return [];
  }
}
