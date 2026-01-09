import React from "react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { ButtonProps } from "./button.types";

interface ButtonFactoryProps extends ButtonProps {
  type: "primary" | "secondary";
}

export const ButtonFactory: React.FC<ButtonFactoryProps> = ({
  type,
  ...props
}) => {
  switch (type) {
    case "primary":
      return <PrimaryButton {...props} />;
    case "secondary":
      return <SecondaryButton {...props} />;
    default:
      return null;
  }
};
