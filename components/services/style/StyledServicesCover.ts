import styled from "styled-components";
import Image from "next/image";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledServicesCover = styled.div`
  position: relative;
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
  margin: 2em auto;
`;
