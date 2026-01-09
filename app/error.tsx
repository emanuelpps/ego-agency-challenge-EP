"use client";
import { ButtonFactory } from "@/components/ui/buttons/ButtonFactory";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-[20px] text-[#373737] font-medium mb-4">
          Error al Cargar
        </h1>
        <ButtonFactory
          type="secondary"
          label="Reintentar"
          onClick={() => reset()}
        />
      </div>
    </div>
  );
}
