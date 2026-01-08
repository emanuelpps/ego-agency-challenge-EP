import React from "react";
import Image from "next/image";

interface Car {
  id: number;
  title: string;
  year: number;
  price: number;
  imageUrl: string;
}

interface CarsCardProps {
  cars: Car[];
}

const CarsCard: React.FC<CarsCardProps> = ({ cars }) => {
  return (
    <div>
      {cars.map((car, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{car.title}</h2>
          <p style={{ fontWeight: "300", fontSize: "14px" }}>
            {car.year} | ${car.price}
          </p>
          <Image
            src={car.imageUrl}
            alt={car.title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
};

export default CarsCard;
