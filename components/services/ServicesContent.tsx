import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  NextImage,
  StyledImageAndEffect,
  StyledLinearGradient,
} from "../common";
import {
  StyledServicesContentMainTitle,
  StyledServicesContentBoxTitle,
  StyledServicesContentBoxText,
  StyledServicesLanding,
  StyledServicesContentBlock,
  StyledServicesContentBlockItem,
  StyledServicesLandingPanelImageContainer,
  StyledServicesContentBlockItemInfo,
} from "./style";

const ServicesContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.content?.textContent;
  const assetUrls = servicesLeafs?.content?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;
  const theme = systemContext?.theme;

  return (
    <StyledServicesLanding>
      <StyledLinearGradient
        direction="top"
        variation="appCoverTop"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />
      <IconGroup
        fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
        starCount={5}
      />
      <StyledServicesContentMainTitle id="main-content">
        {textContent?.title ?? ""}
      </StyledServicesContentMainTitle>

      <StyledServicesContentBlock>
        <StyledServicesLandingPanelImageContainer>
          <StyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            /*            positioning={{ margin: "auto" }} */
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                left: "-120px",
                bottom: "-100px",
                transform: "rotate(40deg) scaleX(-1)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
                fill: true,
              }}
            />
            <NextImage
              containerDimensions={{
                height: "350px",
                width: "490px",
              }}
              containerPositioning={{
                position: "absolute",
              }}
              imageProps={{
                src: assetUrls?.officeCleaners ?? "",
                alt: "office-cleaners",
              }}
              imageVisual={{
                boxShadow:
                  theme?.palette?.visual["brandMessageImageShadow"]
                    ?.boxShadow ?? "",
                borderRadius: "1em",
              }}
            />
          </StyledImageAndEffect>
        </StyledServicesLandingPanelImageContainer>
        <StyledServicesContentBlockItem>
          <StyledServicesContentBoxTitle>
            {textContent?.officeCleaningTitle ?? ""}
          </StyledServicesContentBoxTitle>
          <StyledServicesContentBoxText>
            {textContent?.officeCleaningText ?? ""}
          </StyledServicesContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItemInfo>
          <StyledServicesContentBoxText>
            {textContent?.officeCleaningInfo ?? ""}
          </StyledServicesContentBoxText>
        </StyledServicesContentBlockItemInfo>
      </StyledServicesContentBlock>

      <StyledServicesContentBlock>
        <StyledServicesLandingPanelImageContainer>
          <StyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            /*             positioning={{ margin: "auto" }} */
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                left: "-120px",
                bottom: "-100px",
                transform: "rotate(40deg) scaleX(-1)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
                fill: true,
              }}
            />
            <NextImage
              containerDimensions={{
                height: "350px",
                width: "490px",
              }}
              containerPositioning={{
                position: "absolute",
              }}
              imageProps={{
                src: assetUrls?.flatRoom ?? "",
                alt: "flat-room",
                fill: true,
              }}
              imageVisual={{
                boxShadow:
                  theme?.palette?.visual["brandMessageImageShadow"]
                    ?.boxShadow ?? "",
                borderRadius: "1em",
              }}
            />
          </StyledImageAndEffect>
        </StyledServicesLandingPanelImageContainer>
        <StyledServicesContentBlockItem>
          <StyledServicesContentBoxTitle>
            {textContent?.highCeilingTitle ?? ""}
          </StyledServicesContentBoxTitle>
          <StyledServicesContentBoxText>
            {textContent?.personalCleaningInfo ?? ""}
          </StyledServicesContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItemInfo>
          <StyledServicesContentBoxText>
            {textContent?.personalCleaningExtendedInfo ?? ""}
          </StyledServicesContentBoxText>
        </StyledServicesContentBlockItemInfo>
      </StyledServicesContentBlock>

      <StyledServicesContentBlock>
        <StyledServicesLandingPanelImageContainer>
          <StyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            /*             positioning={{
              position: "relative",
            }} */
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                left: "-120px",
                bottom: "-100px",
                transform: "rotate(40deg) scaleX(-1)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
                fill: true,
              }}
            />
            <NextImage
              containerDimensions={{
                height: "350px",
                width: "490px",
              }}
              containerPositioning={{
                position: "absolute",
              }}
              imageProps={{
                src: assetUrls?.industrial ?? "",
                alt: "industry-complex",
              }}
              imageVisual={{
                boxShadow:
                  theme?.palette?.visual["brandMessageImageShadow"]
                    ?.boxShadow ?? "",
                borderRadius: "1em",
              }}
            />
          </StyledImageAndEffect>
        </StyledServicesLandingPanelImageContainer>
        <StyledServicesContentBlockItem>
          <StyledServicesContentBoxTitle>
            {textContent?.highCeilingTitle ?? ""}
          </StyledServicesContentBoxTitle>
          <StyledServicesContentBoxText>
            {textContent?.highCeilingText ?? ""}
          </StyledServicesContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItemInfo>
          <StyledServicesContentBoxText>
            {textContent?.highCeilingInfo ?? ""}
          </StyledServicesContentBoxText>
          <StyledServicesContentBoxText>
            {textContent?.highCeilingExtendedInfo ?? ""}
          </StyledServicesContentBoxText>
        </StyledServicesContentBlockItemInfo>
      </StyledServicesContentBlock>
    </StyledServicesLanding>
  );
};

export default ServicesContent;
