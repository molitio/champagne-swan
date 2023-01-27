import styled from "styled-components";

export const StyledLayerSegment = styled.div``;

export const SimpledHeroLayer = styled.img`
  position: absolute;
  margin: 0;
  margin-top: 0px;
  top: 0;
  left: 0;
  width: 100%;
  height: 1069px;
`;

export const RotatedLayer = styled.img`
  position: absolute;
  transform: rotate(180deg);
  margin: 0;
  margin-top: 535px;
  top: 0;
  left: 0;
  width: 100%;
  height: 535px;
`;

export const StyledImg = styled.div`

  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/hero.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  height: 1069px;
`;

export const ContactStyledImg = styled.div`

  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/skyscraper.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  height: 1069px;
`;

export const HeroWaterSplash = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const StyledHeroSegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 850px;
  top: 23em;
  position: relative;
`;

export const HeroContactLink = styled.a`
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

  :hover {
    color: #c1a87d;
    background-color: white;
  }
`;

export const StyledButtonContainer = styled.div`
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
