"use client";
import React from "react";
import { motion } from "framer-motion";

const CarsHeader: React.FC = () => {
  return (
    <header className="w-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-bold text-[#373737] text-[2rem] lg:text-[3.125rem]"
      >
        Descubrí todos los modelos
      </motion.h1>
    </header>
  );
};

export default CarsHeader;
