import React from "react";
import { IconGroup, NextImage } from ".";
import BrandFeats from "./BrandFeats";
import Link from "next/link";
import { ImageBox } from ".";
import {
  StyledContentContainer,
  StyledPremiumQuality,
  StyledContentBoxTitle,
  StyledContentBoxText,
  StyledContactLink,
  StyledContentTitle,
  StyledIconContainer,
  StyledContentBox,
  PremiumLayerContainer,
  SyledImageAndEffect,
} from "./style";
import { SystemContext } from "@molitio/ui-core";

const PremiumQuality: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext.navRoot ?? {};
  const premiumQualityLeafs = systemContext?.contentRoot?.premiumQuality?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = premiumQualityLeafs?.cover?.textContent;
  const assetUrls = premiumQualityLeafs?.cover?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledPremiumQuality>
      <StyledIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.blue ?? ""}
          starCount={5}
        />
      </StyledIconContainer>

      <StyledContentTitle>{textContent?.title ?? ""}</StyledContentTitle>

      <StyledContentContainer>
        <SyledImageAndEffect>
          <NextImage
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
        </SyledImageAndEffect>
        <StyledContentBox>
          <StyledContentBoxTitle>
            {textContent?.contentTitle ?? ""}
          </StyledContentBoxTitle>

          <StyledContentBoxText>
            {textContent?.contentText ?? ""}
          </StyledContentBoxText>

          <StyledContactLink
            key={navTree?.about?.path ?? ""}
            href={navTree?.about?.path ?? ""}
          >
            {textContent?.moreInfoButton ?? ""}
          </StyledContactLink>
        </StyledContentBox>

        {/*       
        
        //TODO: Add image with water splash effect as a component specific or generic that need research
        
        
        <NextImage
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
      </StyledContentContainer>
    </StyledPremiumQuality>
  );
};

export default PremiumQuality;
