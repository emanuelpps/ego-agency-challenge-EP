import React from "react";
import { ButtonProps } from "./button.types";

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="flex min-w-[152px] h-[34px] rounded-[40px] bg-[#191919] hover:bg-[#333333] transition-all duration-300 cursor-pointer justify-center items-center border border-[#191919]"
    aria-label={typeof label === "string" ? label : "primary button"}
    onClick={onClick}
  >
    <div className="flex w-full justify-center items-center text-[#FFFFFF] text-[13px] font-semibold">
      {label}
    </div>
  </button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="flex w-[152px] h-[34px] rounded-[40px] bg-[#FFFFFF] text-[#191919] text-[13px] font-semibold hover:bg-[#333333] hover:text-white transition-all duration-300 cursor-pointer justify-center items-center border border-[#191919]"
    aria-label={typeof label === "string" ? label : "secondary button"}
    onClick={onClick}
  >
    {label}
  </button>
);
