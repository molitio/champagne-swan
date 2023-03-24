import React from "react";
import { IconGroup, NextImage } from "../common";
import { SyledImageAndEffect } from "../common";
import {
  StyledContentContainer,
  StyledPremiumQuality,
  StyledContentBoxTitle,
  StyledContentBoxText,
  StyledContactLink,
  StyledContentTitle,
  StyledIconContainer,
  StyledContentBox,
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
        <SyledImageAndEffect>
          <NextImage
            containerPositioning={{
              position: "absolute",
              right: "-50px",
              bottom: "-100px",
              transform: "rotate(-15deg)",
            }}
            containerDimensions={{
              width: "250px",
              height: "250px",
            }}
            imageProps={{
              src: commonAssetUrls?.waterSplash ?? "",
              alt: "water-splash",
            }}
          />
          <NextImage
            containerPositioning={{
              position: "relative",
            }}
            containerDimensions={{
              height: "353px",
              width: "529px",
            }}
            imageProps={{
              src: assetUrls?.officeCleaners ?? "",
              alt: "office-cleaners",
            }}
            visual={{
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          />
        </SyledImageAndEffect>
      </StyledContentContainer>
    </StyledPremiumQuality>
  );
};

export default PremiumQuality;
