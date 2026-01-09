"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface RevealFromSideProps {
  children: ReactNode;
  side?: "left" | "right";
  className?: string;
}

export function RevealFromSide({
  children,
  side = "left",
  className = "",
}: RevealFromSideProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: side === "left" ? -60 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
