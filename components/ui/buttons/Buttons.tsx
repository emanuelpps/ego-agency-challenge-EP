import React from "react";
import { ButtonProps } from "./button.types";

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="flex min-w-[152px] h-[34px] rounded-[40px] bg-[#191919] text-[#FFFFFF] text-[13px] font-semibold hover:bg-[#333333] transition-all duration-300 cursor-pointer justify-center items-center border border-[#191919] px-8 py-5"
    aria-label={typeof label === "string" ? label : "primary button"}
    onClick={onClick}
  >
    <div className="flex w-full justify-center items-center gap-2 text-xs lg:text-lg">
      {label}
    </div>
  </button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="flex w-[152px] h-[34px] rounded-[40px] bg-[#FFFFFF] text-[#191919] text-[13px] font-semibold hover:bg-[#333333] transition-all duration-300 cursor-pointer justify-center items-center border border-[#191919]"
    aria-label={typeof label === "string" ? label : "secondary button"}
    onClick={onClick}
  >
    {label}
  </button>
);
