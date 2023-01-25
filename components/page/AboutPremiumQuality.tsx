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
  PremiumQualityContentBox,
  PremiumQualitySecondaryTitle,
  AboutPremiumQualityContainer
 } from "./style";

 const AboutPremiumQuality: React.FC = () => {
    const champagneSwanContext = React.useContext(ChampagneSwanContext);
    const navTree = champagneSwanContext.navTree ?? {};
  
    return (
      <PremiumQualityBackgroundLayerContainer>
       
        <StyledPremiumQualityIconContainer>
          <IconBlueGroup
            fill={""}
            dx={""}
            dy={""}
            stdDeviation={""}
            floodOpacity={""}
          />
        </StyledPremiumQualityIconContainer>
        <PremiumQualityContentTitle className="secondary-title">
          {"ISMERJEN MEG"}
        </PremiumQualityContentTitle>
        <PremiumQualitySecondaryTitle className="secondary-title">
          {"BENNÜNKET"}
        </PremiumQualitySecondaryTitle>
        <AboutPremiumQualityContainer>
   {/*      <PremiumQualityWaterSplash
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png"
          }
        /> */}
         {/*  <PremiumQualityContentBox>
            <PremiumQualityContentBoxTitle>
              {`Jeliza a tisztaság szinonimája`}
            </PremiumQualityContentBoxTitle> 
  
  
            <Link key={navTree.about.path} href={navTree.about.path}>
              <PremiumQualityContactLink className="hiro-content">{`Bővebben`}</PremiumQualityContactLink>
            </Link>
          </PremiumQualityContentBox>*/}
            <PremiumQualityContentBoxText fontSize={"20px"}>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Cras convallis, elit in efficitur tristique, metus metus semper massa, consequat convallis orci diam quis massa. Integer varius laoreet augue sed mollis. Curabitur id scelerisque lacus, non pellentesque tellus. Cras molestie, ligula rutrum convallis placerat, arcu ante sollicitudin elit, pretium interdum sapien tortor nec urna. Cras molestie auctor nisi, nec fringilla nisl vulputate gravida. Suspendisse potenti. Morbi eu posuere leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse quis neque mollis, porta turpis in, fermentum lectus.`}
            </PremiumQualityContentBoxText>
{/*           <ImageBox
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
          /> */}
        </AboutPremiumQualityContainer>
      </PremiumQualityBackgroundLayerContainer>
    );
  };
  
  export default AboutPremiumQuality;
  