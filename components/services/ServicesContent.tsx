import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup, NextImage, SyledImageAndEffect } from "../common";
import {
  StyledMainTitle,
  StyledContentBoxTitle,
  StyledContentBoxText,
  StyledServicesContent,
  StyledServicesContentBlock,
  StyledServicesContentBlockItem,
  StyledServicesContentBlockImage,
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
    <StyledServicesContent>
      <IconGroup
        fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
        starCount={5}
      />
      <StyledMainTitle id="main-content">
        {textContent?.title ?? ""}
      </StyledMainTitle>

      <StyledServicesContentBlock>
        <StyledServicesContentBlockImage>
          <SyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            positioning={{ margin: "1em", position: "relative" }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                transform: "rotate(-15deg)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
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
          </SyledImageAndEffect>
        </StyledServicesContentBlockImage>
        <StyledServicesContentBlockItem>
          <StyledContentBoxTitle>
            {textContent?.officeCleaningTitle ?? ""}
          </StyledContentBoxTitle>
          <StyledContentBoxText>
            {textContent?.officeCleaningText ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItem>
          <StyledContentBoxText>
            {textContent?.officeCleaningInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
      </StyledServicesContentBlock>

      <StyledContentBoxTitle>
        {textContent?.highCeilingTitle ?? ""}
      </StyledContentBoxTitle>
      <StyledServicesContentBlock>
        <StyledServicesContentBlockImage>
          <SyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            positioning={{ margin: "1em" }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                transform: "rotate(-15deg)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
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
              }}
              imageVisual={{
                boxShadow:
                  theme?.palette?.visual["brandMessageImageShadow"]
                    ?.boxShadow ?? "",
                borderRadius: "1em",
              }}
            />
          </SyledImageAndEffect>
        </StyledServicesContentBlockImage>
        <StyledServicesContentBlockItem>
          <StyledContentBoxText>
            {textContent?.personalCleaningInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItem>
          <StyledContentBoxText>
            {textContent?.personalCleaningExtendedInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
      </StyledServicesContentBlock>

      <StyledContentBoxTitle>
        {textContent?.highCeilingTitle ?? ""}
      </StyledContentBoxTitle>
      <StyledServicesContentBlock>
        <StyledServicesContentBlockImage>
          <SyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            positioning={{ margin: "1em" }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                transform: "rotate(-15deg)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
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
          </SyledImageAndEffect>
        </StyledServicesContentBlockImage>
        <StyledServicesContentBlockItem>
          <StyledContentBoxText>
            {textContent?.highCeilingText ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItem>
          <StyledContentBoxText>
            {textContent?.highCeilingInfo ?? ""}
          </StyledContentBoxText>
          <StyledContentBoxText>
            {textContent?.highCeilingExtendedInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
      </StyledServicesContentBlock>
    </StyledServicesContent>
  );
};

export default ServicesContent;
