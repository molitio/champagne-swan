import React from "react";
import { IconGroup, NextImage } from "../common";
import { StyledImageAndEffect } from "../common";
import {
  StyledBrandMessage,
  StyledBrandMessageContentTitle,
  StyledBrandMessageContentText,
  StyledContactLink,
  StyledBrandMessageIconContainer,
  StyledBrandMessageContent,
  StyledBrandMessageContentContainer,
  StyledBrandMessageMainTitle,
} from "./style";
import { SystemContext } from "@molitio/ui-core";

const BrandMessage: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext.navRoot ?? {};

  const brandMessageLeafs = systemContext?.contentRoot?.brandMessage?.leafs;
  const textContent = brandMessageLeafs?.cover?.textContent;
  const assetUrls = brandMessageLeafs?.cover?.assetUrls;

  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledBrandMessage>
      <StyledBrandMessageIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
      </StyledBrandMessageIconContainer>
      <StyledBrandMessageMainTitle>
        {textContent?.title ?? ""}
      </StyledBrandMessageMainTitle>
      <StyledBrandMessageContentContainer>
        <StyledBrandMessageContent>
          <StyledBrandMessageContentTitle>
            {textContent?.contentTitle ?? ""}
          </StyledBrandMessageContentTitle>

          <StyledBrandMessageContentText>
            {textContent?.contentText ?? ""}
          </StyledBrandMessageContentText>

          <StyledContactLink
            key={navTree?.about?.path ?? ""}
            href={navTree?.about?.path ?? ""}
          >
            {textContent?.moreInfoButton ?? ""}
          </StyledContactLink>
        </StyledBrandMessageContent>
        <StyledImageAndEffect>
          <NextImage
            containerPositioning={{
              position: "absolute",
              right: "-60px",
              bottom: "-120px",
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
            imageVisual={{
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.5)",
              borderRadius: "1em",
            }}
          />
        </StyledImageAndEffect>
      </StyledBrandMessageContentContainer>
    </StyledBrandMessage>
  );
};

export default BrandMessage;
