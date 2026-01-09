import { JSX } from "react";

export interface ButtonProps {
  label: string | JSX.Element;
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
