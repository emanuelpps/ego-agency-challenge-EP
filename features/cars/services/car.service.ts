import { API_ENDPOINTS } from "@/app/lib/api/endpoints";
import { Car } from "../car.types";

export async function getCars(): Promise<Car[]> {
  try {
    const response = await fetch(API_ENDPOINTS.CARS, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      console.error("Error al obtener los modelos:", response.status);
      return [];
    }
    const data: Car[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error de red al obtener los modelos:", error);
    return [];
  }
}
