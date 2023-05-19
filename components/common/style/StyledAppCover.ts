import Link from "next/link";
import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledAppCover = styled.section`
  position: relative;
  background-color: ${(props) => props?.theme?.palette?.background?.default};
`;

export const StyledAppCoverMainTitle = styled.h1`
  position: relative;
  text-align: center;
  margin: 0.4em 0;
  font-style: normal;
  font-weight: 200;
  font-size: 3.8em;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 3.2rem;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    display: block;
    margin: 1.8em auto 1.8em auto;
    width: 12em;
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

export const StyledCoverContactLink = styled(Link)`
  margin-top: 2em;
  position: relative;
  padding: 0.6em 1.2em;
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

export const StyledButtonContainer = styled.div`
  padding-top: 2em;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
`;

export const StyledAppCoverDescription = styled.pre`
  width: 40em;
  margin: auto;
  font-style: normal;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  text-align: center;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTextShadow"]?.textShadow ?? ""};
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
