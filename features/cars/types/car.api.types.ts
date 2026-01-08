export interface CarApiModel {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

export interface CarDetailModel extends CarApiModel {
  title: string;
  description: string;
  gallery: ModelFeatures[];
}

export interface ModelFeatures {
  name: string;
  description: string;
  image: string;
}

