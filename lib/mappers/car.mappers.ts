import {
  ModelFeatureApi,
  ModelHighlightApi,
  GalleryItem,
} from "@/features/cars/types/car.api.types";

export function mapFeaturesToGallery(
  features: ModelFeatureApi[] = []
): GalleryItem[] {
  return features.map((feature, index) => ({
    id: `feature-${index}`,
    title: feature.name,
    description: feature.description,
    image: feature.image,
  }));
}

export function mapHighlightsToGallery(
  highlights: ModelHighlightApi[] = []
): GalleryItem[] {
  return highlights.map((highlight, index) => ({
    id: `highlight-${index}`,
    title: highlight.title,
    description: highlight.content,
    image: highlight.image,
  }));
}
