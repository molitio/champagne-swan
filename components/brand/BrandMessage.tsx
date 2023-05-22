import React from "react";
import Image from "next/image";
import { SystemContext } from "@molitio/ui-core";
import { StyledImageAndEffect, IconGroup, NextImage } from "../common";
import {
  StyledBrandMessage,
  StyledBrandMessageContentTitle,
  StyledBrandMessageContentText,
  StyledContactLink,
  StyledBrandMessageIconContainer,
  StyledBrandMessageContent,
  StyledBrandMessageContentContainer,
  StyledBrandMessageMainTitle,
  StyledBrandMessageImageContainer,
  StyledBrandMessageInfoImageContainer,
} from "./style";

const BrandMessage: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const theme = systemContext?.theme ?? {};
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
        <StyledBrandMessageInfoImageContainer>
          <NextImage
            chilrenSequence="before"
            containerPositioning={{
              position: "relative",
              margin: "auto",
            }}
            imageProps={{
              id: "office-cleaners",
              sizes: `(max-width: ${theme?.breakpoints?.values["xl"]}${theme?.breakpoints?.unit}) 50vw,
                33vw`,
              src: assetUrls?.officeCleaners ?? "",
              alt: "office-cleaners",
              fill: true,
              style: { objectFit: "cover", objectPosition: "top" },
            }}
            imageVisual={{
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.5)",
              borderRadius: "1em",
            }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                right: "-80px",
                bottom: "-120px",
                transform: "rotate(-15deg)",
                zIndex: "-1",
              }}
              containerDimensions={{
                width: "250px",
                height: "250px",
              }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
                fill: true,
              }}
            />
          </NextImage>
        </StyledBrandMessageInfoImageContainer>
      </StyledBrandMessageContentContainer>
    </StyledBrandMessage>
  );
};

export default BrandMessage;
