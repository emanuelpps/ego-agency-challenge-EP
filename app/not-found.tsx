"use client";

import Link from "next/link";
import Image from "next/image";
import { SecondaryButton } from "@/components/ui/buttons/Buttons";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center items-center gap-3">
          <Image
            src="/icons/Logo.svg"
            width={38}
            height={39}
            alt="EGO Logo"
            className="invert"
          />
          <div className="flex flex-col leading-tight text-left">
            <span className="text-white text-sm font-semibold tracking-wide">
              EGO
            </span>
            <span className="text-white/60 text-xs tracking-wide">
              Challenge Frontend
            </span>
          </div>
        </div>
        <h1 className="text-4xl font-semibold text-white tracking-wide">
          404 · Not Found
        </h1>
        <p className="text-white/60 text-sm leading-relaxed">
          Esta sección no fue provista en el diseño por el momento.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <SecondaryButton label="Volver al inicio" />
          </Link>
        </div>
      </div>
    </main>
  );
}
