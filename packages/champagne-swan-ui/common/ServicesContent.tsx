import React from "react";
import styled from "styled-components";
import { IconGoldGroup } from "../components/IconGroups";
import ImageBox from "./ImageBox";

const StyledIconContainer = styled.div`
  padding-top: 10em;
  padding-bottom: 3em;
`;

const ServicesMainContainer = styled.div`
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

const ServicesMainTitle = styled.h1`
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

const WaterSplash = styled.img`
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

const RightSideWaterSplash = styled.img`
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
const BottomWaterSplash = styled.img`
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

const ReverseInternalContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const InternalContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column;
  }
`;

const ContentBox = styled.div`
  height: 353px;
  min-height: 353px;
  width: 529px;
  min-width: 529px;
  margin: 30px 0 0 20px;
  margin-bottom: 110px;
`;

const ContactLink = styled.a`
  font-size: 20px;
  color: #c1a87d;
  text-decoration: underline;
`;

const ContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 200;
  text-align: initial;
  color: #c1a87d;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 55px;
`;
const ContentBoxText = styled.p`
  font-family: "Lato", sans-serif;
  text-align: start;
  color: #c1a87d;
  font-size: 18px;
  font-weight: 200;
`;

const ExternalContentContainer = styled.div`
  margin-top: -100px;
`;
const UniqueExternalContentContainer = styled.div``;

const ServicesContainer: React.FC = () => {
  return (
    <ServicesMainContainer>
      <StyledIconContainer>
        <IconGoldGroup
          fill={""}
          dx={"0"}
          dy={"0"}
          stdDeviation={"0"}
          floodOpacity={"0"}
        />
      </StyledIconContainer>
      <ServicesMainTitle>{`SZOLGÁLTATÁSAINK`}</ServicesMainTitle>

      <UniqueExternalContentContainer>
        <ReverseInternalContentContainer>
          <ImageBox
            imageUrl="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/morning.jpg"
            margin={"30px 15px 0 15px"}
            height={"350px"}
            width={"490px"}
            minHeight={"350px"}
            minWidth={"490px"}
          />
          <ContentBox>
            <ContentBoxTitle>{`Szállodák és irodaházak takarítása`}</ContentBoxTitle>
            <ContentBoxText>
              {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
            </ContentBoxText>
            <ContactLink>{`Bővebben...`}</ContactLink>
          </ContentBox>
        </ReverseInternalContentContainer>
        <WaterSplash
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
          }
        />
      </UniqueExternalContentContainer>
      <ExternalContentContainer>
        <InternalContentContainer>
          <ContentBox>
            <ContentBoxTitle>{`Magánszemélyeknél végzett takarítás`}</ContentBoxTitle>
            <ContentBoxText>
              {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
            </ContentBoxText>
            <ContactLink>{`Bővebben...`}</ContactLink>
          </ContentBox>
          <ImageBox
            imageUrl="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/flatroom.jpg"
            margin={"30px 15px 0 15px"}
            height={"397px"}
            width={"556px"}
            minHeight={"397px"}
            minWidth={"556px"}
          />
        </InternalContentContainer>
        <RightSideWaterSplash
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
          }
        />
      </ExternalContentContainer>
      <ExternalContentContainer>
        <ReverseInternalContentContainer>
          <ImageBox
            imageUrl="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/industrial.jpg"
            height={"396px"}
            margin={"30px 15px 0 15px"}
            width={"529px"}
            minHeight={"396px"}
            minWidth={"529px"}
            /*       tabletHeight={"235px"}
              tabletWidth={"353px"}
              tabletMinHeight={"235px"}
              tabletMinWidth={"353px"}
              mobileHeight={"176px"}
              mobileWidth={"264px"}
              mobileMinHeight={"176px"}
              mobileMinWidth={"264px"}
              breakpoint1={"1440px"}
              breakpoint2={"900px"} */
          />

          <ContentBox>
            <ContentBoxTitle>{`Nagy belmagasságú épületek takarítása`}</ContentBoxTitle>
            <ContentBoxText>
              {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
            </ContentBoxText>
            <ContactLink>{`Bővebben...`}</ContactLink>
          </ContentBox>
        </ReverseInternalContentContainer>
        <BottomWaterSplash
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
          }
        />
      </ExternalContentContainer>
    </ServicesMainContainer>
  );
};

export default ServicesContainer;
