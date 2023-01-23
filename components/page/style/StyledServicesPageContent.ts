import styled from "styled-components";

export const StyledIconContainer = styled.div`
  padding-top: 10em;
  padding-bottom: 3em;
`;

export const ServicesMainContainer = styled.div`
  margin: 0;
  margin-top: -2px;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 2700px;
  align-items: center;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png);
  background-size: cover;

  @media (max-width: 1440px) {
    height: 3900px;
  }
`;

export const ServicesMainTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-size: 105px;
  margin-top: 0.4em;
  margin-bottom: 2em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

export const WaterSplash = styled.img`
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
  bottom: 270px;
  right: 490px;

  @media (max-width: 1440px) {
    bottom: 160px;
    right: 190px;
  }
`;

export const RightSideWaterSplash = styled.img`
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-15deg);
  bottom: 220px;
  left: 505px;

  @media (max-width: 1440px) {
    bottom: 160px;
    left: 225px;
  }
`;

export const BottomWaterSplash = styled.img`
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
  bottom: 230px;
  right: 490px;

  @media (max-width: 1440px) {
    bottom: 160px;
    right: 190px;
  }
`;

export const ReverseInternalContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;
export const InternalContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ContentBox = styled.div`
  height: 353px;
  min-height: 353px;
  width: 529px;
  min-width: 529px;
  margin: 30px 0 110px 20px;
 
`;

export const ContactLink = styled.a`
  font-size: 20px;
  color: #c1a87d;
  text-decoration: underline;
`;

export const ContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 200;
  text-align: initial;
  color: #c1a87d;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 55px;
`;

type ContentBoxTextProps = {
  position?: string;
  display?:string;
  displayTablet?:string;
  margin?:string;
  top?:string;
  bottom?:string;
  left?:string;
  right?:string;
  height?:string;
  width?:string;
  marginTablet?:string;
  padding?:string;
  paddingTablet?:string;
  breakpoint1?:string;
  breakpoint2?:string;
};

export const ContentBoxText= styled.p<ContentBoxTextProps> `
  display:${(props) => props.display}; 
  position:  ${(props) => props.position || "relative"};
  padding: ${(props) => props.padding || "0px 0px 0px 0px"};;
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  width: ${(props) => props.width || "529px"};
  top: ${(props) => props.top || "0"};
  bottom:${(props) => props.bottom || "0"};
  font-family: "Lato", sans-serif;
  text-align: start;
  color: #c1a87d;
  font-size: 18px;
  font-weight: 200;

  @media (max-width: ${(props) => props.breakpoint1 || "1440px"}) {
    margin: ${(props) => props.marginTablet || "0px 0px 0px 0px"};
    padding: ${(props) => props.paddingTablet || "0px 0px 0px 0px"};
    display:${(props) => props.displayTablet};
  }

`;

export const ExternalContentContainer = styled.div`
  margin-top: -100px;
`;
export const UniqueExternalContentContainer = styled.div``;