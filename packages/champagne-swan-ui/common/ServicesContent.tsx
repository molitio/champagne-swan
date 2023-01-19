import React from "react";
import styled from "styled-components";
import { IconGoldGroup } from "../components/IconGroups";
import ImageBox from "./ImageBox";
import {
  ServicesMainContainer,
  StyledIconContainer,
  ServicesMainTitle,
  WaterSplash,
  RightSideWaterSplash,
  BottomWaterSplash,
  ReverseInternalContentContainer,
  ContentBox,
  ContactLink,
  InternalContentContainer,
  ContentBoxTitle,
  ContentBoxText,
  ExternalContentContainer,
  UniqueExternalContentContainer,
} from "./style";

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
            <ContactLink href="/services/#first-content">{`Bővebben...`}</ContactLink>
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
            <ContactLink href="/services/#middle-content">{`Bővebben...`}</ContactLink>
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
            /*
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
              */
          />

          <ContentBox>
            <ContentBoxTitle>{`Nagy belmagasságú épületek takarítása`}</ContentBoxTitle>
            <ContentBoxText>
              {`Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is`}
            </ContentBoxText>
            <ContactLink href="/services/#last-content">{`Bővebben...`}</ContactLink>
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
