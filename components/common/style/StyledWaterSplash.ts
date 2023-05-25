import styled from "styled-components";
import Image from "next/image";

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
