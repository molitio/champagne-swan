import styled from "styled-components";
import Image from "next/image";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledWaterSplash = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledWaterSplashButtonContainer = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  right: -60px;
  bottom: 20px;
  transform: rotate(-15deg);
`;

export const StyledWaterSplashButton = styled(StyledWaterSplash)``;

export const StyledBrandMessageInfoWaterSplash = styled(StyledWaterSplash)`
  right: -80px;
  bottom: -120px;
  transform: rotate(-15deg);
`;

export const StyledServicesLandingPanelImageWaterSplash = styled(
  StyledBrandMessageInfoWaterSplash
)``;

export const StyledContactContentPanelWaterSplash = styled(StyledWaterSplash)`
  right: -80px;
  bottom: -120px;
  transform: rotate(-15deg);
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    right: -60px;
    bottom: -100px;
    width: 200px;
    height: 200px;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    right: -60px;
    bottom: -90px;
    width: 180px;
    height: 180px;
  }
`;
