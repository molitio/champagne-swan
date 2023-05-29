import styled from "styled-components";
import Image from "next/image";
import { resolveThemeBreakPointValues } from "../../utils";
import Link from "next/link";

export const StyledServicesCover = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
`;

export const StyledServicesCoverMainTitle = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 400;
  font-size: 3.8em;
  opacity: 0.8;
  padding-top: 0.6em;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 3.2em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 2.4em;
  }
`;

export const StyledServicesCoverImage = styled(Image)`
  object-fit: cover;
`;

export const StyledServicesCoverDescription = styled.pre`
  width: 40em;
  margin: auto;
  font-style: normal;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  text-align: center;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.primary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};
  white-space: pre-wrap;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 28px;
    width: 16em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 21px;
    width: 13em;
    padding: 0;
  }
`;

export const StyledServicesCoverButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 2em auto;
  width: min-content;
  height: min-content;
  outline: 3px dashed purple;
`;

export const StyledServicesCoverContactLink = styled(Link)`
  outline: 3px dashed green;
  position: relative;
  top: 0;
  padding: 0.5em 1em;
  font-size: 1.5em;
  font-weight: 300;
  width: min-content;
  height: min-content;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  background-color: ${(props) => props?.theme?.palette?.tertiary?.main};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["buttonDafaultShadow"]?.boxShadow ?? ""};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${(props) => props?.theme?.palette?.tertiary?.main};
    background-color: ${(props) => props?.theme?.palette?.text?.secondary};
  }
`;
