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
  StyledContentBoxTitle,
  StyledContentBoxText,
  StyledServicesContent,
  StyledServicesContentBlock,
  StyledServicesContentBlockItem,
  StyledServicesContentBlockImage,
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
    <StyledServicesContent>
      <StyledLinearGradient
        direction="bottom"
        variation="appCoverBottom"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />
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
        <StyledServicesContentBlockImage>
          <StyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            positioning={{ margin: "auto" }}
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
          </StyledImageAndEffect>
        </StyledServicesContentBlockImage>
        <StyledServicesContentBlockItem>
          <StyledContentBoxTitle>
            {textContent?.officeCleaningTitle ?? ""}
          </StyledContentBoxTitle>
          <StyledContentBoxText>
            {textContent?.officeCleaningText ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItemInfo>
          <StyledContentBoxText>
            {textContent?.officeCleaningInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItemInfo>
      </StyledServicesContentBlock>

      <StyledContentBoxTitle>
        {textContent?.highCeilingTitle ?? ""}
      </StyledContentBoxTitle>
      <StyledServicesContentBlock>
        <StyledServicesContentBlockImage>
          <StyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            positioning={{ margin: "auto" }}
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
          </StyledImageAndEffect>
        </StyledServicesContentBlockImage>
        <StyledServicesContentBlockItem>
          <StyledContentBoxText>
            {textContent?.personalCleaningInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItemInfo>
          <StyledContentBoxText>
            {textContent?.personalCleaningExtendedInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItemInfo>
      </StyledServicesContentBlock>

      <StyledContentBoxTitle>
        {textContent?.highCeilingTitle ?? ""}
      </StyledContentBoxTitle>
      <StyledServicesContentBlock>
        <StyledServicesContentBlockImage>
          <StyledImageAndEffect
            dimensions={{
              height: "350px",
              width: "490px",
            }}
            positioning={{
              margin: "auto",
            }}
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
          </StyledImageAndEffect>
        </StyledServicesContentBlockImage>
        <StyledServicesContentBlockItem>
          <StyledContentBoxText>
            {textContent?.highCeilingText ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItem>
        <StyledServicesContentBlockItemInfo>
          <StyledContentBoxText>
            {textContent?.highCeilingInfo ?? ""}
          </StyledContentBoxText>
          <StyledContentBoxText>
            {textContent?.highCeilingExtendedInfo ?? ""}
          </StyledContentBoxText>
        </StyledServicesContentBlockItemInfo>
      </StyledServicesContentBlock>
    </StyledServicesContent>
  );
};

export default ServicesContent;
