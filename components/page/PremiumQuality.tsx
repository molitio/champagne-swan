import React from "react";
import styled from "styled-components";
import { IconBlueGroup } from "../common";
import SkillsComponent from "./SkillsComponent";
import Link from "next/link";
import { ChampagneSwanContext } from "../context";
import { ImageBox } from "../common/ImageBox";

const PremiumQualityContainer = styled.div`
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

const PremiumQualityBackgroundLayerContainer = styled.div`
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

const StyledIconContainer = styled.div`
  padding-top: 6em;
`;

const PremiumQualityContentTitle = styled.h1`
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

const PremiumQualityContentBox = styled.div`
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

const PremiumQualityContentBoxTitle = styled.h1`
  text-align: initial;
  color: #0c7b93;
  font-weight: 400;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 55px;
`;
const PremiumQualityContentBoxText = styled.p`
  text-align: start;
  color: #0c7b93;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 110px;
`;

const WaterSplash = styled.img`
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

const ContactLink = styled.a`
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

const SecondaryHomePageContent: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navTree = champagneSwanContext.navTree ?? {};

  return (
    <PremiumQualityBackgroundLayerContainer>
      <SkillsComponent />
      <StyledIconContainer>
        <IconBlueGroup
          fill={""}
          dx={""}
          dy={""}
          stdDeviation={""}
          floodOpacity={""}
        />
      </StyledIconContainer>
      <PremiumQualityContentTitle className="secondary-title">
        {"PRÉMIUM MINŐSÉG"}
      </PremiumQualityContentTitle>
      <WaterSplash
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
        }
      />
      <PremiumQualityContainer>
        <PremiumQualityContentBox>
          <PremiumQualityContentBoxTitle>
            {`Jeliza a tisztaság szinonimája`}
          </PremiumQualityContentBoxTitle>

          <PremiumQualityContentBoxText>
            {`Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen.`}
          </PremiumQualityContentBoxText>

          <Link key={navTree.about.path} href={navTree.about.path}>
            <ContactLink className="hiro-content">{`Bővebben`}</ContactLink>
          </Link>
        </PremiumQualityContentBox>
        <ImageBox
          imageBoxParams={{
            imageUrl:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officecleaners.jpg",
            positioning: {
              margin: "30px 0 0 10px",
              tablet: { margin: "30px 0 0 0" },
            },
            dimensions: {
              height: "353px",
              width: "529px",
              minHeight: "353px",
              minWidth: "529px",
              tablet: {
                height: "353px",
                width: "529px",
                minHeight: "353px",
                minWidth: "529px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
              breakpoint2: "900px",
            },
          }}
        />
      </PremiumQualityContainer>
    </PremiumQualityBackgroundLayerContainer>
  );
};

export default SecondaryHomePageContent;
