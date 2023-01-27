import React from "react";
import { IconBlueGroup } from "../common";
import SkillsComponent from "./SkillsComponent";
import Link from "next/link";
import { ChampagneSwanContext } from "../context";
import { ImageBox } from "../common/ImageBox";
import {   
  PremiumQualityContainer,
  PremiumQualityBackgroundLayerContainer,
  PremiumQualityContentBoxTitle,
  PremiumQualityContentBoxText,
  PremiumQualityWaterSplash,
  PremiumQualityContactLink,
  PremiumQualityContentTitle,
  StyledPremiumQualityIconContainer,
  PremiumQualityContentBox
 } from "./style";


const SecondaryHomePageContent: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navTree = champagneSwanContext.navTree ?? {};

  return (
    <PremiumQualityBackgroundLayerContainer>
      <SkillsComponent />
      <StyledPremiumQualityIconContainer>
        <IconBlueGroup
          fill={""}
          dx={""}
          dy={""}
          stdDeviation={""}
          floodOpacity={""}
        />
      </StyledPremiumQualityIconContainer>
      <PremiumQualityContentTitle >
        {"PRÉMIUM MINŐSÉG"}
      </PremiumQualityContentTitle>
      <PremiumQualityWaterSplash
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
            <PremiumQualityContactLink className="hiro-content">{`Bővebben`}</PremiumQualityContactLink>
          </Link>
        </PremiumQualityContentBox>
        <ImageBox
          imageBoxParams={{
            imageUrl:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officecleaners.jpg",
            positioning: {
              margin: "30px 0 0 25px",
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
