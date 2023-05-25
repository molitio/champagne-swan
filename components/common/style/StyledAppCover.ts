import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledAppCover = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  background-color: ${(props) => props?.theme?.palette?.background?.default};
`;

export const StyledAppCoverMainTitle = styled.h1`
  position: relative;
  text-align: center;
  margin: 0.4em 0;
  font-style: normal;
  font-weight: 200;
  font-size: 3.8em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 2.8em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 2em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    display: block;
    margin: 30px auto 30px auto;
    font-size: 2.25rem;
    width: 8em;
    line-height: 50px;
  }
`;

export const StyledAppCoverImage = styled(Image)`
  object-fit: cover;
`;

export const StyledCoverContactLink = styled(Link)`
  position: absolute;
  top: 0;
  padding: 0.5em 1em;
  font-size: 1.5em;
  font-weight: 300;
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

export const StyledAppCoverButtonContainer = styled.div`
  position: relative;
  margin: 2em auto;
`;

export const StyledAppCoverDescription = styled.pre`
  width: 42em;
  margin: auto;
  font-style: normal;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTextShadow"]?.textShadow ?? ""};
  white-space: pre-wrap;
  position: relative;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 1.2em;
    width: 36em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1em;
    width: 24em;
    padding: 0;
  }
`;
