import Image from "next/image";
import { ModelHighlightApi } from "@/features/cars/types/car.api.types";

interface Props {
  highlights: ModelHighlightApi[];
}

export default function CarHighlights({ highlights }: Props) {
  if (!highlights?.length) return null;

  return (
    <section className="max-w-6xl mx-auto space-y-20 px-4">
      {highlights.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={item.title}
            className={`flex lg:grid lg:grid-cols-2 gap-12 items-center ${
              isEven ? "flex-col-reverse" : "flex-col"
            }`}
          >
            {index % 2 === 1 && (
              <div className="relative w-full h-[260px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-[6px]"
                />
              </div>
            )}
            <div className="w-full">
              <h3 className="text-[20px] font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">
                {item.content.replace(/<[^>]+>/g, "")}
              </p>
            </div>
            {index % 2 === 0 && (
              <div className="relative w-full h-[260px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
