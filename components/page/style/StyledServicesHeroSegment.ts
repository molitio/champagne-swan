import styled from "styled-components";

export const ServicesStyledLayerSegment = styled.div`
`;

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
/* position:relative; */
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/window.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1069px;

`;

export const ServicesWaterSplash = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const ServicesHeroSegmentContainer = styled.div`

  display: flex;
  flex-direction: column;
  min-height: 850px;
  /* top: 23em; */
  padding-top: 23em;
  position: relative;
  margin-bottom: 10em;
`;

export const StyledServicesButtonContainer = styled.div`
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactButton = styled.button`
  display: block;
  color: white;
  background-color: #c1a87d;
  padding: 0.5em 0.93em 0.5em 0.93em;
  font-size: 24px;
  font-weight: 200;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  z-index: 100;
  margin: auto;
  :hover {
    color: #c1a87d;
    background-color: white;
  }
`;