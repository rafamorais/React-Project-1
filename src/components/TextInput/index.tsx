import React from "react";

import "./style.css";

interface inputOptionsDTO {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeHolder: string;
}

export const TextInput = ({
  searchValue,
  handleChange,
  type,
  placeHolder,
}: inputOptionsDTO) => {
  return (
    <div>
      <input
        className="text-input"
        type={type}
        onChange={handleChange}
        value={searchValue}
        placeholder={placeHolder}
      />
    </div>
  );
};
