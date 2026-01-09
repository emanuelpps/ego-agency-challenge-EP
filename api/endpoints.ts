export const API_BASE_URL = "https://challenge.egodesign.dev/api";

export const API_ENDPOINTS = {
  CARS: `${API_BASE_URL}/models`,
  CAR_BY_ID: (id: string) => `${API_BASE_URL}/models/${id}`,
};
