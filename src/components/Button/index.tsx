import React from "react";
import "./style.css";

interface ButtonPropsOpitonsDTO {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

export const Button = ({ text, disabled, onClick }: ButtonPropsOpitonsDTO) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
