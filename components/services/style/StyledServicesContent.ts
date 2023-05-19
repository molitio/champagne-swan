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
  font-size: 4.5em;
  padding-top: 3em;
  position: relative;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 3.2em;
    margin-bottom: 1em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 2.6em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    font-size: 1.7em;
  }
`;

export const StyledServicesContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  gap: 1em;
  position: relative;
  padding-top: 3em;
  width: 80vw;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    flex-direction: column;
  }
`;

export const StyledServicesContentBlockImage = styled.div`
  flex: 1 0 30vw;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    order: 3;
    width: 100%;
    margin: auto;
    flex: 1 1 10em;
  }
`;

export const StyledServicesContentBlockItem = styled.div`
  flex: 2 0 30vw;
  /* outline: 1px solid red; */
  padding: 0 2.5em 1em 2.5em;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    order: 1;
    height: auto;
    width: 100%;
    flex: 1 0 10em;
  }
`;

export const StyledServicesContentBlockItemInfo = styled(
  StyledServicesContentBlockItem
)`
  order: 2;
  flex: 2 0 80vw;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    order: 2;
    flex: 1 1 10em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    outline: 1px solid red;
    padding: 2em 0 0 0;
  }
`;

export const StyledServicesContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};
  font-size: 2.4em;
  margin: 0;
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

export const StyledServicesContentBoxText = styled.p`
  font-family: "Lato", sans-serif;
  text-align: start;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-size: 1.2em;
  font-weight: 400;
  margin: 0;

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
