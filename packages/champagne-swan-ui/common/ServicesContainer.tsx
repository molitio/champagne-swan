import React from "react";
import styled from "styled-components";
import IconGoldGroup from "../components/IconGroups";
import ImageBox from "./ImageBox";

const StyledIconContainer = styled.div`
  padding-top: 10em;
  padding-bottom: 3em;
`;

const ServicesMainContainer = styled.div`
  margin: 0;
  margin-top: -1px;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 1700px;
  align-items: center;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png);
  background-size: cover;
`;
const ServicesLayer = styled.div`
  margin: 0;
  margin-top: -1px;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 2500px;
  align-items: center;
  background-size: cover;
`;

const ServicesMainTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-size: 105px;
  opacity: 0.5;
  margin-top: 0.4em;
  margin-bottom: 2em;
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
  bottom: 160px;
  right: 490px;
`;

const RightSideWaterSplash = styled.img`
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-15deg);
  bottom: 160px;
  left: 490px;
`;

const InternalContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  height: 353px;
  min-height: 353px;
  width: 529px;
  min-width: 529px;
  margin: 30px 0 0 20px;
`;

const ContentBoxTitle = styled.h1`
  text-align: initial;
  color: #c1a87d;
  font-weight: 400;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 55px;
`;
const ContentBoxText = styled.p`
  text-align: start;
  color: #c1a87d;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 110px;
`;

const ExternalContentContainer = styled.div`
  margin-top: -100px;
`;
const UniqueExternalContentContainer = styled.div``;

const ServicesContainer: React.FC = () => {
  return (
    <ServicesLayer>
      <ServicesMainContainer>
        <StyledIconContainer>
          <IconGoldGroup
            fill={""}
            dx={""}
            dy={""}
            stdDeviation={""}
            floodOpacity={""}
          />
        </StyledIconContainer>
        <ServicesMainTitle className="title">{`SZOLGÁLTATÁSAINK`}</ServicesMainTitle>

        <UniqueExternalContentContainer>
          <InternalContentContainer>
            <ImageBox
              imageUrl="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/morning.jpg"
              height={"353px"}
              margin={"30px 10px 0 0"}
              width={"529px"}
              minHeight={"353px"}
              minWidth={"529px"}
              tabletHeight={"235px"}
              tabletWidth={"353px"}
              tabletMinHeight={"235px"}
              tabletMinWidth={"353px"}
              mobileHeight={"176px"}
              mobileWidth={"264px"}
              mobileMinHeight={"176px"}
              mobileMinWidth={"264px"}
              breakpoint1={"1440px"}
              breakpoint2={"900px"}
            />

            <ContentBox>
              <ContentBoxTitle>{`Szállodák és irodaházak`}</ContentBoxTitle>
              <ContentBoxText>
                {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
              </ContentBoxText>
            </ContentBox>
          </InternalContentContainer>
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
            </ContentBox>
            <ImageBox
              imageUrl="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/flatroom.jpg"
              height={"353px"}
              margin={"30px 10px 0 0"}
              width={"529px"}
              minHeight={"353px"}
              minWidth={"529px"}
              tabletHeight={"235px"}
              tabletWidth={"353px"}
              tabletMinHeight={"235px"}
              tabletMinWidth={"353px"}
              mobileHeight={"176px"}
              mobileWidth={"264px"}
              mobileMinHeight={"176px"}
              mobileMinWidth={"264px"}
              breakpoint1={"1440px"}
              breakpoint2={"900px"}
            />
          </InternalContentContainer>
          <RightSideWaterSplash
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </ExternalContentContainer>
        <ExternalContentContainer>
          <InternalContentContainer>
            <ImageBox
              imageUrl="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/industrial.jpg"
              height={"353px"}
              margin={"30px 10px 0 0"}
              width={"529px"}
              minHeight={"353px"}
              minWidth={"529px"}
              tabletHeight={"235px"}
              tabletWidth={"353px"}
              tabletMinHeight={"235px"}
              tabletMinWidth={"353px"}
              mobileHeight={"176px"}
              mobileWidth={"264px"}
              mobileMinHeight={"176px"}
              mobileMinWidth={"264px"}
              breakpoint1={"1440px"}
              breakpoint2={"900px"}
            />

            <ContentBox>
              <ContentBoxTitle>{`Nagy belmagasságú épületek takarítása`}</ContentBoxTitle>
              <ContentBoxText>
                {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
              </ContentBoxText>
            </ContentBox>
          </InternalContentContainer>
          <WaterSplash
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
            }
          />
        </ExternalContentContainer>
      </ServicesMainContainer>
    </ServicesLayer>
  );
};

export default ServicesContainer;
