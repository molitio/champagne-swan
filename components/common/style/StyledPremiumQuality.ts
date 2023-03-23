import Link from "next/link";
import styled from "styled-components";

export const StyledPremiumQuality = styled.section`
  position: relative;
  padding: 0;
  align-items: center;
  background: ${(props) => props?.theme?.palette?.background?.default ?? ""};
`;

export const PremiumLayerContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 540px;
  z-index: -1;
  margin-top: -1px;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-top: 6em;
  align-items: center;
  text-align: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column-reverse;
    /* bottom: 260px; */
  }
`;

export const SyledImageAndEffect = styled.div`
  padding: 1em;
  position: relative;
`;

export const StyledContentBox = styled.div`
  padding: 1em;
  width: 35em;
  text-align: center;
`;

export const AboutPremiumQualityBackgroundLayerContainer = styled.div`
  position: relative;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  background-size: cover;
  background: ${(props) => props?.theme?.palette?.background?.default ?? ""};
  height: 1905px;

  @media (max-width: 1440px) {
    height: 2356px;
  }

  @media (max-width: 975px) {
    height: 2739px;
  }
  @media (max-width: 900px) {
    height: 2900px;
  }
  @media (max-width: 665px) {
    height: 2230px;
  }
  @media (max-width: 400px) {
    height: 2235px;
  }
`;

export const StyledIconContainer = styled.div`
  padding-top: 12em;
  @media (max-width: 975px) {
    padding-top: 8em;
  }
`;

export const StyledContentTitle = styled.h1`
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-weight: 400;
  font-size: 6.5em;
  opacity: 0.5;
  margin: 0;
  padding-top: 0.6em;

  @media (max-width: 1440px) {
    font-size: 4.2em;
  }

  @media (max-width: 975px) {
    font-size: 3.1em;
  }

  @media (max-width: 665px) {
    font-size: 2em;
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

export const StyledTitle = styled.h1`
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-weight: 400;
  font-size: 90px;
  opacity: 0.5;

  @media (max-width: 1440px) {
    font-size: 60px;
    margin-bottom: 20px;
  }
  @media (max-width: 665px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

export const AboutQuoteContainer = styled.div`
  width: 54em;
  display: block;
  margin: 0 auto 3em auto;

  @media (max-width: 1440px) {
    width: 30em;
  }
  @media (max-width: 665px) {
    width: 25em;
  }

  @media (max-width: 436px) {
    width: 18em;
  }
`;
export const AboutQuote = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-style: italic;
  font-size: 24px;
  text-align: center;
  font-weight: 300;
  padding: 3em 0 1em 0;
  @media (max-width: 975px) {
    display: block;
    margin: auto;
    width: 20em;
  }
  @media (max-width: 665px) {
    font-size: 17px;
    width: 17em;
  }
`;
export const AboutQuoteAuthor = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-size: 24px;
  text-align: end;
  font-weight: 300;
  padding: 0em 2em 0em 0;
  @media (max-width: 975px) {
    padding: 0em 2em 0em 0;
  }
  @media (max-width: 665px) {
    padding: 0em 3em 0em 0;
    font-size: 17px;
  }
`;
export const AboutTextPQualityContent = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-size: 24px;
  text-align: end;
  font-weight: 400;
  padding: 0em 0 0em 0;
`;

export const StyledContentBoxTitle = styled.h1`
  text-align: initial;
  font-family: "Lato", sans-serif;
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-weight: 400;
  font-size: 35px;
  margin-top: 0;
  margin-bottom: 55px;

  @media (max-width: 975px) {
    display: block;
    margin: auto;
    text-align: center;
    width: 10em;
  }
  @media (max-width: 665px) {
    font-size: 30px;
  }
`;

type PremiumQualityContentProps = {
  fontSize?: string;
  width?: string;
  tabletFontSize?: string;
  tabletWidth?: string;
  mobileWidth?: string;
  smallMobileWidth?: string;
  smallMobileFonsize?: string;
};

export const StyledContentBoxText = styled.p<PremiumQualityContentProps>`
  font-family: "Lato", sans-serif;
  position: relative;
  text-align: start;
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-weight: 300;
  font-size: ${(props) => props.fontSize || "20px"};
  margin-bottom: 2em;

  @media (max-width: 975px) {
    display: block;
    margin: 2em auto 2em auto;
    text-align: center;
  }

  @media (max-width: 665px) {
    width: 290px;
  }
`;
export const AboutPremiumQualityContentText = styled.p<PremiumQualityContentProps>`
  display: block;
  margin: auto;
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.inverse ?? ""};
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: ${(props) => props.fontSize || "25px"};
  width: ${(props) => props.width || ""};
  margin-bottom: 7em;

  @media (max-width: 1440px) {
    font-size: ${(props) => props.tabletFontSize || "25px"};
    width: ${(props) => props.tabletWidth || ""};
  }
  @media (max-width: 975px) {
    width: ${(props) => props.mobileWidth || ""};
  }
  @media (max-width: 665px) {
    width: ${(props) => props.smallMobileWidth || ""};
    font-size: ${(props) => props.smallMobileFonsize || ""};
  }
`;

export const PremiumQualityWaterSplash = styled.img`
  display: block;
  margin: auto;
  position: relative;

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
  @media (max-width: 665px) {
    bottom: -130px;
    left: 0px;
    width: 220px;
    height: 220px;
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
  @media (max-width: 655px) {
    height: 270px;
    width: 270px;
    transform: rotate(0deg);
    top: 0px;
  }
`;

export const StyledContactLink = styled(Link)`
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
