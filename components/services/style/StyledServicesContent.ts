import styled from "styled-components";

export const StyledServices = styled.div<ServicesMainContainerProps>`
  margin: 0;
  margin-top: -2px;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  background-size: cover;

  /*   @media (max-width: 1440px) {
    height: ${(props) => props.tabletHeight || "4500px"};
  }

  @media (max-width: 975px) {
    height: ${(props) => props.mobileHeight || "3350px"};
  }
  @media (max-width: 665px) {
    height: ${(props) => props.smallMobileHeight || "3350px"};
  } */
`;

type StyledIconContainerProps = {
  paddingTop?: string;
  tabletPaddingTop?: string;
  mobilePaddingTop?: string;
};

export const StyledIconContainer = styled.div<StyledIconContainerProps>`
  padding-top: ${(props) => props.paddingTop || "10em"};
  padding-bottom: 3em;

  @media (max-width: 1440px) {
    padding-top: ${(props) => props.tabletPaddingTop || "26em"};
  }
  @media (max-width: 975px) {
    padding-top: ${(props) => props.mobilePaddingTop || "26em"};
  }
`;

type ServicesMainContainerProps = {
  height?: string;
  tabletHeight?: string;
  mobileHeight?: string;
  smallMobileHeight?: string;
};

export const StyledMainTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-size: 105px;
  margin-top: 0.4em;
  margin-bottom: 2em;

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

export const BottomWaterSplash = styled.img<WaterSplashProp>`
  -moz-transform: scaleX(-1) rotate(-15deg);
  -webkit-transform: scaleX(-1) rotate(-15deg);
  -o-transform: scaleX(-1) rotate(-15deg);
  -ms-transform: scaleX(-1) rotate(-15deg);
  -webkit-transform: scaleX(-1) rotate(-15deg);
  transform: scaleX(-1) rotate(-15deg);
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  bottom: 220px;
  right: 490px;

  @media (max-width: 1440px) {
    bottom: 160px;
    right: 210px;
  }

  @media (max-width: 975px) {
    width: 230px;
    height: 230px;
    bottom: ${(props) => props.bottomMobile || "130px"};
    right: ${(props) => props.rightMobile || "165px"};
  }
  @media (max-width: 665px) {
    width: 230px;
    height: 230px;
    bottom: ${(props) => props.bottomSmallMobile || "100px"};
    right: ${(props) => props.rightSmallMobile || "0px"};
    transform: scaleX(-1) rotate(-15deg);
  }
`;

type InternalContainerProps = {
  tabletTop?: string;
  mobileTop?: string;
  smallMobileTop?: string;
};

export const StyledContentContainer = styled.div<InternalContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  outline: 3px dashed orange;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column;
    /*     top: ${(props) => props.tabletTop}; */
  }
  /*   @media (max-width: 975px) {
    align-items: center;
    flex-direction: column-reverse;
    top: ${(props) => props.mobileTop};
  }
  @media (max-width: 665px) {
    top: ${(props) => props.smallMobileTop};
    align-items: center;
    flex-direction: column-reverse;
  } */
`;

export const InternalContentContainer = styled.div<InternalContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    top: ${(props) => props.tabletTop};
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 975px) {
    top: ${(props) => props.mobileTop};
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 665px) {
    top: ${(props) => props.smallMobileTop};
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledContentBox = styled.div`
  padding: 1em;
  width: 35em;
  text-align: center;
  margin-left: 3em;
  @media (max-width: 1440px) {
    margin-left: 0;
    padding-top: 6em;
  }

  outline: 3px dashed teal;

  /* 
  height: 353px;
  min-height: 353px;
  width: 529px;
  min-width: 529px;
    margin: 30px 25px 110px 25px;

  @media (max-width: 975px) {
    width: 450px;
    min-width: 450px;
  }

  @media (max-width: 645px) {
    width: 300px;
    min-width: 30px;
    margin: 30px auto 110px auto;
  } */
`;

export const ContactLink = styled.a`
  font-size: 20px;
  color: #c1a87d;
  text-decoration: underline;

  @media (max-width: 975px) {
    position: relative;
    top: 30px;
    left: 30px;
  }
`;

export const StyledContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: initial;
  color: #c1a87d;
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
  position: ${(props) => props.position || "relative"};
  padding: ${(props) => props.padding || "0px 0px 0px 0px"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  width: ${(props) => props.width || "529px"};
  top: ${(props) => props.top || "0"};
  bottom: ${(props) => props.bottom || "0"};
  font-family: "Lato", sans-serif;
  text-align: start;
  color: #c1a87d;
  font-size: 18px;
  font-weight: 300;

  @media (max-width: ${(props) => props.breakpoint1 || "1440px"}) {
    margin: ${(props) => props.marginTablet || "0px 0px 0px 0px"};
    padding: ${(props) => props.paddingTablet || "0px 0px 0px 0px"};
    display: ${(props) => props.displayTablet};
  }
  @media (max-width: ${(props) => props.breakpoint2 || "975px"}) {
    display: ${(props) => props.displayMobile || "block"};
    text-align: center;
    margin: auto;
    width: 450px;
  }

  @media (max-width: 665px) {
    width: 290px;
  }
`;

export const ExternalContentContainer = styled.div`
  margin-top: -100px;
`;
