import styled from "styled-components";
import Link from "next/link";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledServicesIconContainer = styled.div`
  position: relative;
  padding-top: 12em;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    padding-top: 8em;
  }
`;

type StyledServicesContentContainerProps = {
  reversed?: boolean;
};

export const StyledServicesLandingMainTitle = styled.h1`
  position: relative;
  text-align: center;
  margin: 0.4em 0;
  font-style: normal;
  font-weight: 200;
  font-size: 3.8em;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 3.2rem;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    display: block;
    /*     margin: 1.8em auto 1.8em auto;
    width: 12em; */
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    margin: 2em auto;
    font-size: 2rem;
  }
`;

export const StyledServicesContentContainer = styled.div<StyledServicesContentContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props?.reversed ? "row-reverse" : "row")};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    flex-direction: column;
  }
`;

export const StyledServicesLandingPanelContent = styled.div`
  margin: 3em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
  }
`;

export const StyledContactLink = styled(Link)`
  font-size: 20px;
  color: ${(props) => props?.theme?.palette?.text?.interactive ?? ""};
  text-decoration: underline;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    position: relative;
    top: 30px;
    left: 30px;
  }
`;
