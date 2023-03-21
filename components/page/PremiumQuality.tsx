import React from "react";
import { IconGroup, NextImage } from "../common";
import SkillsComponent from "./SkillsComponent";
import Link from "next/link";
import { ImageBox } from "../common";
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
  PremiumLayerContainer,
  SyledPremiumQuality,
} from "./style";
import { SystemContext } from "@molitio/ui-core";

const SecondaryHomePageContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext.navRoot ?? {};
  const premiumQualityLeafs = systemContext?.contentRoot?.premiumQuality?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = premiumQualityLeafs?.cover?.textContent;
  const assetUrls = premiumQualityLeafs?.cover?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <SyledPremiumQuality>
      <PremiumQualityBackgroundLayerContainer>
        <StyledPremiumQualityIconContainer>
          <IconGroup
            fill={systemContext?.theme?.palette?.stars?.blue ?? ""}
            starCount={5}
          />
        </StyledPremiumQualityIconContainer>
        <PremiumQualityContentTitle>
          {textContent?.title ?? ""}
        </PremiumQualityContentTitle>

        <PremiumQualityContainer>
          <PremiumQualityContentBox>
            <PremiumQualityContentBoxTitle>
              {textContent?.contentTitle ?? ""}
            </PremiumQualityContentBoxTitle>

            <PremiumQualityContentBoxText>
              {textContent?.contentText ?? ""}
            </PremiumQualityContentBoxText>

            <PremiumQualityContactLink
              key={navTree?.about?.path ?? ""}
              href={navTree?.about?.path ?? ""}
            >
              {textContent?.moreInfoButton ?? ""}
            </PremiumQualityContactLink>
          </PremiumQualityContentBox>
          {/*        <NextImage
            containerPosition="relative"
            containerDimensions={{
              height: "353px",
              width: "529px",
            }}
            imageProps={{
              src: assetUrls?.officeCleaners ?? "",
              alt: "office-cleaners",
            }}
          />
          <NextImage
            containerPosition="absolute"
            containerDimensions={{
              width: "300px",
              height: "300px",
            }}
            imageProps={{
              src: commonAssetUrls?.waterSplash ?? "",
              alt: "water-splash",
            }}
          /> */}
          {/* <ImageBox
            imageBoxParams={{
              imageUrl: assetUrls?.officeCleaners ?? "",
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
                mobile: {
                  height: "300px",
                  width: "450px",
                  minHeight: "300px",
                  minWidth: "450px",
                },
              },
              breakpoints: {
                breakpoint1: "1440px",
                breakpoint2: "975px",
              },
            }}
          />
 */}
        </PremiumQualityContainer>
      </PremiumQualityBackgroundLayerContainer>
    </SyledPremiumQuality>
  );
};

export default SecondaryHomePageContent;
