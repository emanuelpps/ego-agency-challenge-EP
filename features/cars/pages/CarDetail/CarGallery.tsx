import { ModelFeatures } from "../../types/car.api.types";
import Image from "next/image";

interface Props {
  gallery: ModelFeatures[];
}

export default function CarGallery({ gallery }: Props) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {
        !gallery?.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="min-w-[240px] space-y-3"
          >
            <Image
              width={240}
              height={160}
              src={item.image}
              alt={item.name}
              className="rounded-lg"
            />
            <h3 className="font-semibold text-sm">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))
      }
    </div>
  );
}
