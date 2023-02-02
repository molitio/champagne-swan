import styled from "styled-components";

export const PremiumLayerContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 540px;
  z-index: -1;
  margin-top: -1px;
`;

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
  height: 1500px;
  
  @media (max-width: 1440px) {
    height: 1750px;
  }
  @media (max-width: 975px) {
    height: 1500px;
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
  height: 1905px;

  @media (max-width: 1440px) {
    height: 2476px;
  }
  
  @media (max-width: 975px) {
    height: 2500px;
  }
  @media (max-width: 900px) {
    height: 2650px;
  }

`;

export const StyledPremiumQualityIconContainer = styled.div`
  padding-top: 6em;
  
  @media (max-width: 975px) {
  
  }
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
  @media (max-width: 975px) {
  font-size: 50px;
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
  font-weight: 300;
  padding: 3em 0 1em 0;
  @media(max-width: 975px){
    display: block;
    margin: auto;
    width: 20em;
  }
`;
export const AboutQuoteAuthor = styled.p`
  color: #0c7b93;
  font-size: 24px;
  text-align: end;
  font-weight: 300;
  padding: 0em 2em 0em 0;
  @media (max-width: 975px){
    
    padding: 0em 10em 0em 0;
  }
`;
export const AboutTextPQualityContent = styled.p`
  color: #0c7b93;
  font-size: 24px;
  text-align: end;
  font-weight: 400;
  padding: 0em 0 0em 0;
`;

export const PremiumQualityContentBox = styled.div`
  height: 353px;
  min-height: 353px;
  width: 529px;
  min-width: 529px;
  margin: 30px 25px 0 0;

  @media (max-width: 1440px) {
    text-align: center;
    height: 1750px;
    margin: 150px 0px 0 0;
  }
  `;

export const PremiumQualityContentBoxTitle = styled.h1`
  text-align: initial;
  font-family: "Lato", sans-serif;
  color: #0c7b93;
  font-weight: 400;
  font-size: 35px;
  margin-top: 0;
  margin-bottom: 55px;
  
  @media (max-width: 975px) {
    display :block ;
    margin: auto;
    text-align:center;
   width:10em ;
  }
`;

type PremiumQuality = {
  fontSize?: string;
  width?: string;
  tabletFontSize?: string;
  tabletWidth?: string;
  mobileWidth?: string;
};

export const PremiumQualityContentBoxText = styled.p<PremiumQuality>`
  font-family: "Lato", sans-serif;
  position: relative;
  text-align: start;
  color: #0c7b93;
  font-weight: 300;
  font-size: ${(props) => props.fontSize || "20px"};
  margin-bottom: 2em;
  
  @media (max-width: 975px) {
    display: block;
     margin: 2em auto 2em auto;
    text-align:center;
    width: 450px;
  }
`;
export const AboutPremiumQualityContentText = styled.p<PremiumQuality>`
  display: block;
  margin: auto;
  position: relative;
  text-align: center;
  color: #0c7b93;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: ${(props) => props.fontSize || "25px"};
  width: ${(props) => props.width || ""};
  margin-bottom: 7em;

  @media (max-width: 1440px) {
    font-size: ${(props) => props.tabletFontSize || "25px"};
    width: ${(props) => props.tabletWidth || ""};
  }
  @media (max-width: 1440px) {
    width: ${(props) => props.mobileWidth || ""};
  }


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
  @media (max-width: 975px) {
    bottom: -190px;
    left: 170px;
    width: 250px;
    height: 250px;
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
