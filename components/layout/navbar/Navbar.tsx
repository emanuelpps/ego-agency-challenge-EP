"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";
import Image from "next/image";
export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-neutral-200">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white rounded-full">
            <Image src="/icons/Logo.svg" width={38} height={39} alt="Home" />
          </div>
        </div>
        <nav className="items-center hidden w-full gap-10 pl-20 md:flex">
          <NavItem href="/" active={pathname === "/"}>
            Modelos
          </NavItem>
          <NavItem href="/cars" active={pathname.startsWith("/cars")}>
            Ficha de modelo
          </NavItem>
        </nav>
        <button className="flex items-center gap-2 text-sm text-neutral-700">
          <span>Menú</span>
          <div className="flex flex-col gap-[3px]">
            <Image src="/icons/Menu.svg" width={24} height={24} alt="Home" />
          </div>
        </button>
      </div>
    </header>
  );
}
