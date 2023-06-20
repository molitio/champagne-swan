import styled from "styled-components";
import Image from "next/image";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledWaterSplash = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledButtonWaterSplashContainer = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  right: -60px;
  bottom: -80px;
  transform: rotate(-15deg);
`;

export const StyledBrandMessageInfoWaterSplash = styled(StyledWaterSplash)`
  right: -60px;
  bottom: -90px;
  transform: rotate(-15deg);
  overflow: hidden;
`;

export const StyledServicesLandingPanelImageWaterSplash = styled(
  StyledBrandMessageInfoWaterSplash
)``;

export const StyledContactContentPanelWaterSplash = styled(StyledWaterSplash)`
  right: -60px;
  bottom: -90px;
  transform: rotate(-15deg);
  /*   @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "xl")}) {
    right: -60px;
    bottom: -100px;
  } */
`;
