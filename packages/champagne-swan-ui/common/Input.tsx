import React, { useState } from "react";
import styled from "styled-components";

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

type StyledInputProps = {
  position?: string;
  margin?: string;
  height?: string;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  border?: string;
  placeholder?: string;
  placeholderColor?: string;
};

const SyledInput = styled.input<StyledInputProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  height: ${(props) => props.height || "80px"};
  width: ${(props) => props.width || "486px"};
  border: ${(props) => props.width || "solid 1px #0C7B93"};
  &::placeholder {
    color: ${(props) => props.placeholderColor || "red"};
    opacity: 1; /* Firefox */
    /* You can use the placeholder props here */
    content: ${(props) => props.placeholder};
  }

  :focus {
    outline: none !important;
  }
`;

const SyledTextArea = styled.textarea<StyledInputProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  height: ${(props) => props.height || "320px"};
  width: ${(props) => props.width || "486px"};
  border: ${(props) => props.width || "solid 1px #0C7B93"};
  &::placeholder {
    padding-top: 10px;
    color: ${(props) => props.placeholderColor || "red"};
    opacity: 1; /* Firefox */
    /* You can use the placeholder props here */
    content: ${(props) => props.placeholder};
  }

  :focus {
    outline: none !important; 
  }
`;

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
