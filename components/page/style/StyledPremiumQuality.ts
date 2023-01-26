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
  background: #c1dadf;
  height: 1350px;

  @media (max-width: 1440px) {
    height: 1750px;
  }
`;
export const AboutPQBackgroundLayerContainer = styled.div`
  position: relative;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  background-size: cover;
  background: #c1dadf;
  height: 1836px;

  @media (max-width: 1440px) {
    height: 2363px;
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

export const AboutPremiumQualityContainer = styled.div`
  @media (max-width: 1440px) {
  }
`;
export const AboutPremiumQualityImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const AboutPremiumQualityTitle = styled.h1`
  text-align: center;
  color: #0c7a93;
  font-weight: 400;
  font-size: 90px;
  opacity: 0.5;

  @media (max-width: 1440px) {
    font-size: 67px;
    margin-bottom: 20px;
  }
`;

export const AboutQuoteContainer = styled.div`
  width: 54em;
  display: block;
  margin: 0 auto 3em auto;
`;
export const AboutQuote = styled.p`
  color: #0c7b93;
  font-style: italic;
  font-size: 24px;
  text-align: center;
  font-weight: 100;
  padding: 3em 0 1em 0;
`;
export const AboutQuoteAuthor = styled.p`
  color: #0c7b93;
  font-size: 24px;
  text-align: end;
  font-weight: 100;
  padding: 0em 0 0em 0;
`;
export const AboutTextPQualityContent = styled.p`
  color: #0c7b93;
  font-size: 24px;
  text-align: end;
  font-weight: 100;
  padding: 0em 0 0em 0;
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

type PremiumQuality = {
  fontSize?: string;
  width?: string;
};

export const PremiumQualityContentBoxText = styled.p<PremiumQuality>`
  position: relative;
  text-align: start;
  color: #0c7b93;
  font-weight: 200;
  font-size: ${(props) => props.fontSize || "15px"};
  margin-bottom: 7em;
`;
export const AboutPremiumQualityContentText = styled.p<PremiumQuality>`
  display: block;
  margin: auto;
  position: relative;
  text-align: center;
  color: #0c7b93;
  font-weight: 100;
  font-size: ${(props) => props.fontSize || "25px"};
  width: ${(props) => props.width || ""};
  margin-bottom: 7em;
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
export const AboutPremiumQualityWaterSplash = styled.img`
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-15deg);
  top: -140px;
  @media (max-width: 1440px) {
    top: 0px;
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
