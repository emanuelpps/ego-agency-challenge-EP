"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface NavBarMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuSections = [
  {
    items: [
      "Modelos",
      "Servicios y Accesorios",
      "Financiación",
      "Reviews y Comunidad",
    ],
    hover: "hover:bg-gray-50",
    bg: "bg-white",
  },
  {
    items: [
      "Toyota Mobility Service",
      "Toyota Gazoo Racing",
      "Toyota Híbridos",
    ],
    hover: "hover:bg-gray-50",
    bg: "bg-white",
  },
  {
    items: ["Concesionarios", "Test Drive", "Contacto"],
    hover: "hover:bg-gray-50",
    bg: "bg-white",
  },
  {
    items: [
      "Actividades",
      "Servicios al Cliente",
      "Ventas Especiales",
      "Innovación",
      "Prensa",
      "Acerca de...",
    ],
    hover: "hover:bg-gray-300",
    bg: "bg-gray-200",
  },
];

export default function NavBarMenu({
  isMenuOpen,
  setIsMenuOpen,
}: NavBarMenuProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 z-50 h-screen w-full sm:w-[375px] bg-white border-l border-gray-200 shadow-lg flex flex-col"
        >
          <div className="flex justify-end p-5">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center text-base text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Cerrar
              <Image
                src="/icons/Close.svg"
                width={15}
                height={15}
                alt="Close Menu"
                className="ml-2"
              />
            </button>
          </div>
          <div className="flex flex-col h-full">
            {menuSections.map((section, i) => (
              <div
                key={i}
                className={`py-4 ${section.bg} border-b border-gray-200`}
              >
                {section.items.map((item, j) => (
                  <Link
                    key={j}
                    href={`/${
                      item === "Modelos"
                        ? "/"
                        : item.toLowerCase().replace(/\s+/g, "-")
                    }`}
                  >
                    <motion.button
                      key={j}
                      className={`w-full text-right px-10 py-[1px] text-[20px] text-gray-800 transition-colors cursor-pointer ${section.hover}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.button>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
