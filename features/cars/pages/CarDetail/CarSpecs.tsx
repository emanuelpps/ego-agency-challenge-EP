import Image from "next/image";

export default function CarSpecs() {
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Título de 20 px</h3>
          <p className="text-gray-600">
            Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem
            ipsum dolor sit amet orem ipsum dolor sit amet.
          </p>
        </div>
        <div className="relative w-full h-[260px]">
          <Image
            src="/specs/chassis.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[260px] order-last lg:order-first">
          <Image
            src="/specs/offroad.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Título de 20 px</h3>
          <p className="text-gray-600">
            Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem
            ipsum dolor sit amet orem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}
