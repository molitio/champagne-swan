import styled from "styled-components";
import Image from "next/image";

export const StyledWaterSplash = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledWaterSplashButton = styled(StyledWaterSplash)`
  right: -80px;
  bottom: -120px;
  transform: rotate(-15deg);
`;

export const StyledBrandMessageInfoWaterSplash = styled(StyledWaterSplash)`
  right: -80px;
  bottom: -120px;
  transform: rotate(-15deg);
`;

export const StyledServicesLandingPanelImageWaterSplash = styled(
  StyledBrandMessageInfoWaterSplash
)``;
/* transform: rotate(-15deg); */
