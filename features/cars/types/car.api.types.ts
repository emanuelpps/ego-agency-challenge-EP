export type CarSegment =
  | "Sedan"
  | "Hatchback"
  | "SUVs"
  | "Pickups y Comerciales";

export interface CarApiModel {
  id: number;
  name: string;
  segment: CarSegment;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

export interface CarDetailApiModel extends CarApiModel {
  title: string;
  description: string;
  model_features: ModelFeatureApi[];
  model_highlights: ModelHighlightApi[];
}

export interface ModelFeatureApi {
  name: string;
  description: string;
  image: string;
}

export interface ModelHighlightApi {
  title: string;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}
