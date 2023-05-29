import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledAboutCover = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
`;

export const StyledAboutMainTitle = styled.h1`
  position: relative;
  text-align: center;
  font-size: 3.8em;
  font-weight: 400;
  opacity: 0.8;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    white-space: pre;
    font-size: 3.2em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 2.4em;
  }
`;

export const StyledAboutSubTitle = styled.h2`
  position: relative;
  margin: auto;
  text-align: center;
  font-size: 3.6rem;
  font-weight: 300;
  line-height: 2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverSubTitleShadow"]?.textShadow ??
    ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    white-space: pre;
    font-size: 2.6em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 2rem;
  }
`;

export const StyledAboutDescription = styled.p`
  width: 36em;
  margin: 0 auto;
  padding: 0 2em;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5em;
  text-align: center;
  white-space: pre-wrap;
  font-family: "Lato", sans-serif;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1.8em;
    width: 16em;
  }

  @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "sm")}) {
    font-size: 1.5em
    width: 13em;
    padding: 0;
  }
`;

export const StyledAboutCoverButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 2em auto;
  width: min-content;
  height: min-content;
`;

export const StyledAppCoverContactLink = styled(Link)`
  position: relative;
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

export const StyledBoutCoverImage = styled(Image)`
  object-fit: cover;
`;
