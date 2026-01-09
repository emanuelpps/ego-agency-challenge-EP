"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  side?: "left" | "right";
  className?: string;
  delay?: number;
}

export const RevealFromSide: React.FC<Props> = ({
  children,
  side = "left",
  className = "",
  delay = 0,
}) => {
  const xInitial = side === "left" ? -50 : 50;
  return (
    <motion.div
      initial={{ opacity: 0, x: xInitial }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
