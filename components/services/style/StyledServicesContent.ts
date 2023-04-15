import styled from "styled-components";
import Link from "next/link";

export const StyledServicesContent = styled.section`
  position: relative;
  padding: 5em 0 5em 0;
  width: 100%;
  align-items: center;
`;

export const StyledMainTitle = styled.h1`
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-weight: 400;
  font-size: 6.5em;
  margin-top: 0.4em;
  margin-bottom: 2em;
  position: relative;

  @media (max-width: 1440px) {
    font-size: 65px;
    margin-bottom: 1em;
  }

  @media (max-width: 975px) {
    font-size: 50px;
  }

  @media (max-width: 660px) {
    font-size: 27px;
  }
`;

type WaterSplashProp = {
  bottom?: string;
  right?: string;
  left?: string;
  leftTablet?: string;
  leftMobile?: string;
  leftSmallMobile?: string;
  rightTablet?: string;
  rightMobile?: string;
  rightSmallMobile?: string;
  bottomTablet?: string;
  bottomMobile?: string;
  bottomSmallMobile?: string;
};

export const WaterSplash = styled.img<WaterSplashProp>`
  transform: scaleX(-1) rotate(-15deg);
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  bottom: ${(props) => props.bottom || "270px"};
  right: ${(props) => props.right || "490px"};

  @media (max-width: 1440px) {
    bottom: ${(props) => props.bottomTablet || "150px"};
    right: ${(props) => props.rightTablet || "200px"};
  }
  @media (max-width: 975px) {
    width: 230px;
    height: 230px;
    bottom: ${(props) => props.bottomMobile || "130px"};
    right: ${(props) => props.rightMobile || "160px"};
  }
  @media (max-width: 665px) {
    width: 230px;
    height: 230px;
    bottom: ${(props) => props.bottomSmallMobile || "100px"};
    right: ${(props) => props.rightSmallMobile || "0px"};
  }
`;

export const RightSideWaterSplash = styled.img<WaterSplashProp>`
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-15deg);
  bottom: ${(props) => props.bottom || "220px"};
  left: ${(props) => props.left || "505px"};

  @media (max-width: 1440px) {
    bottom: ${(props) => props.bottomTablet || "160px"};
    left: ${(props) => props.leftTablet || "225px"};
  }

  @media (max-width: 975px) {
    width: 230px;
    height: 230px;
    bottom: ${(props) => props.bottomMobile || "130px"};
    left: ${(props) => props.leftMobile || "170px"};
  }
  @media (max-width: 665px) {
    width: 230px;
    height: 230px;
    bottom: ${(props) => props.bottomSmallMobile || "100px"};
    left: ${(props) => props.leftSmallMobile || "0px"};
  }
`;

type StyledServicesContentContainerProps = {
  reversed?: boolean;
};

export const StyledServicesContentContainer = styled.div<StyledServicesContentContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props?.reversed ? "row-reverse" : "row")};

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const InternalContentContainer = styled.div<StyledServicesContentContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const StyledContentBox = styled.div`
  margin: 3em;
  width: 40em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  /*   margin-left: 3em; */
  @media (max-width: 1440px) {
    padding-top: 6em;
  }
`;

export const StyledContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: initial;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};
  font-size: 35px;
  margin-top: 0;
  margin-bottom: 55px;

  @media (max-width: 1440px) {
    display: block;
    margin: 0 auto 55px auto;
    text-align: center;
    width: 450px;
  }

  @media (max-width: 665px) {
    width: 300px;
    font-size: 25px;
  }
`;

type ContentBoxTextProps = {
  position?: string;
  display?: string;
  displayTablet?: string;
  displayMobile?: string;
  margin?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  height?: string;
  width?: string;
  marginTablet?: string;
  padding?: string;
  paddingTablet?: string;
  breakpoint1?: string;
  breakpoint2?: string;
  breakpoint3?: string;
};

export const StyledContentBoxText = styled.p<ContentBoxTextProps>`
  display: ${(props) => props.display};
  position: ${(props) => props.position || ""};
  padding: ${(props) => props.padding || "0px 0px 0px 0px"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  width: ${(props) => props.width || "529px"};
  top: ${(props) => props.top || "0"};
  bottom: ${(props) => props.bottom || "0"};
  font-family: "Lato", sans-serif;
  text-align: start;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-size: 1.2em;
  font-weight: 400;

  @media (max-width: ${(props) => props.breakpoint1 || "1440px"}) {
    margin: ${(props) => props.marginTablet || "0px 0px 0px 0px"};
    padding: ${(props) => props.paddingTablet || "0px 0px 0px 0px"};
    display: ${(props) => props.displayTablet};
    text-align: center;
    margin: auto;
    width: 450px;
  }
  @media (max-width: ${(props) => props.breakpoint2 || "975px"}) {
    display: ${(props) => props.displayMobile || "block"};
  }

  @media (max-width: 665px) {
    width: 290px;
  }
`;

export const StyledContactLink = styled(Link)`
  font-size: 20px;
  color: ${(props) => props?.theme?.palette?.text?.interactive ?? ""};
  text-decoration: underline;
  @media (max-width: 975px) {
    position: relative;
    top: 30px;
    left: 30px;
  }
`;

export const ExternalContentContainer = styled.div`
  margin-top: -100px;
`;
