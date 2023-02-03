import { Field } from "formik";
import styled from "styled-components";

type StyledInputProps = {
  position?: string;
  margin?: string;
  height?: string;
  width?: string | number;
  minHeight?: string;
  minWidth?: string;
  border?: string;
  placeholder?: string;
  placeholdercolor?: string;
  options?: (number | string)[];
};

export const StyledField = styled(Field)<StyledInputProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  height: ${(props) => props.height || "80px"};
  width: ${(props) => props.width || "486px"};
  border: ${(props) => props.border || "solid 1px #0C7B93"};
  background-color: white;
  &::placeholder {
    padding-top: 10px;
    color: ${(props) => props.placeholdercolor || "red"};
    opacity: 1;
    content: ${(props) => props.placeholder};
  }

  :focus {
    outline: none !important;
  }

    @media (max-width: 665px) {
    width: 320px;
  }
`;

export const SyledInput = styled.input<StyledInputProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  height: ${(props) => props.height || "80px"};
  width: ${(props) => props.width || "486px"};
  border: ${(props) => props.border || "solid 1px #0C7B93"};
  background-color: white;
  &::placeholder {
    color: ${(props) => props.placeholdercolor || "red"};
    opacity: 1;
    content: ${(props) => props.placeholder};
  }

  :focus {
    outline: none !important;
  }

  @media (max-width: 665px) {
    width: 320px;
  }
`;

export const SyledTextArea = styled.textarea<StyledInputProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  height: ${(props) => props.height || "320px"};
  width: ${(props) => props.width || "486px"};
  border: ${(props) => props.border || "solid 1px #0C7B93"};
  background-color: white;
  &::placeholder {
    padding-top: 10px;
    color: ${(props) => props.placeholdercolor || "red"};
    opacity: 1;
    content: ${(props) => props.placeholder};
  }

  :focus {
    outline: none !important;
  }
   @media (max-width: 665px) {
    width: 320px;
  }
`;
export const SyledSelectInput = styled.select<StyledInputProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  height: ${(props) => props.height || "80px"};
  width: ${(props) => props.width || "486px"};
  border: ${(props) => props.border || "solid 1px #0C7B93"};
  background-color: white;
  &::placeholder {
    color: ${(props) => props.placeholdercolor || "red"};
    opacity: 1;
    content: ${(props) => props.placeholder};
  }

  :focus {
    outline: none !important;
  }
   @media (max-width: 665px) {
    width: 320px;
  }
`;
