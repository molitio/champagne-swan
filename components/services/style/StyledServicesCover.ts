import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledServicesCover = styled.div`
  position: relative;
`;

export const StyledServicesCoverMainTitle = styled.h1`
  position: relative;
  text-align: center;
  margin: 0.4em 0;
  font-style: normal;
  font-weight: 200;
  font-size: 3.8em;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 3.2rem;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    display: block;
    margin: 1.8em auto 1.8em auto;
    width: 12em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    display: block;
    margin: 30px auto 30px auto;
    font-size: 2.25rem;
    width: 8em;
    line-height: 50px;
  }
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
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 28px;
    width: 16em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    font-size: 21px;
    width: 13em;
    padding: 0;
  }
`;
