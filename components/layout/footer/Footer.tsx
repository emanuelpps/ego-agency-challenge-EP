"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icons/Logo.svg"
            width={38}
            height={39}
            alt="EGO Logo"
            className="invert"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white text-sm font-semibold tracking-wide">
              EGO
            </span>
            <span className="text-white/60 text-xs tracking-wide">
              Challenge Frontend
            </span>
          </div>
        </Link>
        <div className="flex flex-col md:flex-row gap-4 text-xs text-white/60">
          <span>© {new Date().getFullYear()} EGO</span>
          <span className="hidden md:inline">•</span>
          <span>Frontend Technical Challenge</span>
        </div>
      </div>
    </footer>
  );
}
