import styled from "styled-components";

export const ServicesStyledLayerSegment = styled.div``;

export const SimpleServicesLayer = styled.img`
  position: absolute;
  margin: 0;
  margin-top: 0px;
  top: 0;
  left: 0;
  width: 100%;
  height: 1069px;
`;

export const RotatedServicesLayer = styled.img`
  position: absolute;
  transform: rotate(180deg);
  margin: 0;
  margin-top: 535px;
  top: 0;
  left: 0;
  width: 100%;
  height: 535px;
`;

export const ServicesStyledImg = styled.div`
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/window.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1069px;
  @media (max-width: 665px) {
    height: 1069px;
  }
`;

export const ServicesWaterSplash = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const ServicesCoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${(props) => props?.theme?.dimensions?.page?.height ?? "100vh"};
  padding-top: 18em;
  position: relative;
  @media (max-width: 665px) {
    padding-top: 18em;
  }
`;

export const StyledServicesButtonContainer = styled.div`
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
