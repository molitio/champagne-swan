import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledAboutContent = styled.section`
  padding-top: 5em;
  position: relative;
  background: ${(props) => props?.theme?.palette?.background?.default ?? ""};
`;

export const StyledBrandMessageContainer = styled.div`
  position: relative;
`;

export const StyledBrandMessageQuoteContainer = styled.div`
  width: 52em;
  display: block;
  margin: 0 auto 3em auto;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    width: 30em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    width: 25em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    width: 18em;
  }
`;
