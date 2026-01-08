import { Car } from "./car.types";
import { carsMock } from "./mocks/car.mocks";

export async function getCars(): Promise<Car[]> {
  await new Promise((res) => setTimeout(res, 300));

  return carsMock;
}
