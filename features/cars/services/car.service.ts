import { API_ENDPOINTS } from "@/api/endpoints";
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

export async function getCarById(id: string): Promise<Car | null> {
  try {
    const response = await fetch(API_ENDPOINTS.CAR_BY_ID(id), {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      console.error(
        API_ENDPOINTS.CAR_BY_ID(id),
        `Error al obtener el modelo ${id} (status ${response.status})`
      );
      return null;
    }
    return response.json();
  } catch (error) {
    console.error("Error de red al obtener el modelo", error);
    return null;
  }
}
