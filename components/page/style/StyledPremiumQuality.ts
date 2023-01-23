import styled from "styled-components";

export const PremiumQualityContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 260px;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column-reverse;
    bottom: 260px;
  }
`;

export const PremiumQualityBackgroundLayerContainer = styled.div`
  position: relative;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;

  align-items: center;
  background-size: cover;
  background: #c1dadff0;
  height: 1350px;

  @media (max-width: 1440px) {
    height: 1750px;
  }
`;

export const StyledPremiumQualityIconContainer = styled.div`
  padding-top: 6em;
`;

export const PremiumQualityContentTitle = styled.h1`
  text-align: center;
  color: #0c7a93;
  font-weight: 400;
  font-size: 105px;
  opacity: 0.5;
  margin-top: 0.6em;

  @media (max-width: 1440px) {
    font-size: 67px;
    margin-bottom: 20px;
  }
`;

export const PremiumQualityContentBox = styled.div`
  height: 353px;
  min-height: 353px;
  width: 529px;
  min-width: 529px;
  margin: 30px 10px 0 0;

  @media (max-width: 1440px) {
    text-align: center;
    height: 1750px;
    margin: 150px 0px 0 0;
  }
`;

export const PremiumQualityContentBoxTitle = styled.h1`
  text-align: initial;
  color: #0c7b93;
  font-weight: 400;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 55px;
`;
export const PremiumQualityContentBoxText = styled.p`
  text-align: start;
  color: #0c7b93;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 110px;
`;

export const PremiumQualityWaterSplash = styled.img`
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-15deg);
  bottom: -255px;
  left: 490px;

  @media (max-width: 1440px) {
    bottom: -265px;
    left: 230px;
  }
`;

export const PremiumQualityContactLink = styled.a`
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