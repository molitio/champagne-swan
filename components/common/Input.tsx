import React, { useState } from "react";
import { SyledInput, SyledTextArea, SyledSelectInput } from "./style";

interface InputProps<T> {
  type?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: T;
  margin?: string;
  height?: string;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  position?: string;
  border?: string;
  placeholderColor?: string;
  options?: ( number | string )[];
}

const Input: React.FC<
  InputProps<
    | React.ChangeEventHandler<HTMLInputElement>
    | React.ChangeEventHandler<HTMLTextAreaElement>
    | React.ChangeEventHandler<HTMLSelectElement>
  >
> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  margin,
  height,
  width,
  position,
  border,
  placeholderColor,
  options
}) => {
  if (type === "input") {
    return (
      <div>
        <SyledInput
          position={position}
          type={type}
          name={name}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          margin={margin}
          height={height}
          width={width}
          border={border}
        />
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div>
        <SyledTextArea
          name={name}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          margin={margin}
          height={height}
          width={width}
          border={border}
        />
      </div>
    );
  }

  if (type === "select") {
    return (
      <div>
        <SyledSelectInput
          name={name}
          value={value}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          margin={margin}
          height={height}
          width={width}
          border={border}
          onChange = {onChange as React.ChangeEventHandler<HTMLSelectElement>}
        >
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </SyledSelectInput>
      </div>
    );
  }
  return null;
};

export default Input;

