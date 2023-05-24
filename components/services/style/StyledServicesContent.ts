import styled from "styled-components";
import Image from "next/image";
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
  font-size: 3.8em;
  padding-top: 3em;
  position: relative;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    font-size: 3.2em;
    margin-bottom: 1em;
    font-weight: 700;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 2.4em;
    margin-bottom: 1em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 1.8em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1.2em;
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
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    flex-direction: column;
  }
`;

export const StyledServicesLandingPanelImageContainer = styled.div`
  flex: 1 0 30vw;
  &:first-child {
    margin: 0;
    top: 0;
    left: 0;
  }
  align-self: flex-start;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    order: 3;
    padding: 4em 0 0 0;
    align-self: center;
    flex: 1 1 10em;
  }
`;

export const StyledServicesLandingPanelImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: 1em;
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageOfficeCleaners"]?.boxShadow ??
    ""};
`;

export const StyledServicesLandingPanelImageAndEffect = styled.div`
  position: relative;
  height: 28em;
  width: 36em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    height: 20em;
    width: 28em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    height: 20em;
    width: 28em;
    margin: auto;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    height: 20em;
    width: 28em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    height: 12em;
    width: 20em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    height: 8em;
    width: 12em;
  }
`;

export const StyledServicesContentBlockItem = styled.div`
  flex: 4 0 30vw;
  padding: 0 2.4em 1em 2.4em;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    order: 1;
    padding: 4em 0 0 0;
    flex: 1 0 10em;
  }
`;

export const StyledServicesContentBlockItemInfo = styled(
  StyledServicesContentBlockItem
)`
  order: 2;
  flex: 2 0 80vw;
  padding: 4em 0 0 0;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    flex: 1 1 10em;
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
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    display: block;
    margin: 0 auto 55px auto;
    text-align: center;
    /* width: 28em; */
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    /* width: 20em; */
    font-size: 1.6em;
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
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
  }
`;
