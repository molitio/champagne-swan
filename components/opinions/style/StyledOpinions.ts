import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledOpinions = styled.section`
  padding-top: 5em;
  position: relative;
`;

export const StyledOpinionsIconContainer = styled.div`
  position: relative;
`;

export const StyledOpinionsMainTitle = styled.h1`
  position: relative;
  text-align: center;
  font-size: 3.8em;
  padding: "0.3em 0 0.3em 0";
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["opinionsTitleShadow"]?.textShadow ?? ""};
  font-weight: 400;
  margin-bottom: 0em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 3.2em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    margin: auto;
    width: 10em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    padding-top: 150px;
    font-size: 2.4em;
    width: 8em;
  }
`;

export const StyledOpinion = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const StyledOpinionsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledOpinionText = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: 300;
  text-align: center;
  font-size: 1.2em;
  width: 300px;
  margin: 0.5em auto 0.5em auto;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1em;
  }
`;

export const StyledOpinionTitle = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-align: center;
  font-family: "Lato" sans-serif;
  font-weight: 100;
  font-size: 1.8em;
  width: 300px;
  margin: auto;
`;

export const StyledOpininsLogo = styled.div`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 130px;
  margin: auto;
`;
