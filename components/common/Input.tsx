import React, { useState } from "react";
import {SyledInput, SyledTextArea } from './style'

interface InputProps<T> {
  type?: string;
  name?: string;
  value?: string;
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
}




const Input: React.FC<InputProps< React.ChangeEventHandler<HTMLInputElement>| React.ChangeEventHandler<HTMLTextAreaElement>>> = ({
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

  return null;
};

export default Input;
