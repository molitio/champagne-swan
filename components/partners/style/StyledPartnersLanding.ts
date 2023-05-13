import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledPartners = styled.section`
  padding-top: 5em;
  position: relative;
`;

export const StyledPartnersTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  font-weight: 400;
  font-size: 105px;
  margin-top: 0em;
  margin-bottom: 1em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    font-size: 65px;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    font-size: 40px;
  }
`;

export const StyledPartnersContentContainer = styled.div`
  margin-top: 180px;
  margin-bottom: 140px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  flex-wrap: wrap;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
  }
`;

export const StyledPartnersImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 40px;

  flex: 25%;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    flex: 50%;
  }
`;
