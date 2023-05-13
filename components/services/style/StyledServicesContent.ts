import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledServicesContent = styled.section`
  position: relative;
  padding: 5em 0 5em 0;
  width: 100%;
  align-items: center;
`;

export const StyledServicesContentMainTitle = styled.h1`
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-weight: 400;
  font-size: 6.5em;
  padding-top: 3em;
  position: relative;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 4em;
    margin-bottom: 1em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 3.1em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    font-size: 1.7em;
  }
`;

export const StyledServicesContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 2em;
  gap: 1em;
  position: relative;
  width: 80vw;
  @media (max-width: 768px) {
    width: 60vw;
    flex-direction: column;
  }
`;

export const StyledServicesContentBlockImage = styled.div`
  height: 28em;
  flex: 1 0 10vw;
  @media (max-width: 768px) {
    order: 3;
    height: auto;
    width: 100%;
    flex: 1 1 10em;
  }
`;

export const StyledServicesContentBlockItem = styled.div`
  height: 28em;
  align-self: center;
  flex: 1 0 10vw;

  @media (max-width: 768px) {
    order: 1;
    height: auto;
    width: 100%;
    flex: 1 0 10em;
  }
`;

export const StyledServicesContentBlockItemInfo = styled(
  StyledServicesContentBlockItem
)`
  height: 28em;
  order: 2;
  flex: 2 0 80vw;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    flex: 1 1 10em;
  }
`;

export const StyledContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};
  font-size: 2.4em;
  margin-top: 0;
  margin-bottom: 3.4em;
  position: relative;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    display: block;
    margin: 0 auto 55px auto;
    text-align: center;
    /* width: 28em; */
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    /* width: 20em; */
    font-size: 25px;
  }
`;

export const StyledContentBoxText = styled.p`
  font-family: "Lato", sans-serif;
  text-align: start;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-size: 1.2em;
  font-weight: 400;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
  }
`;
