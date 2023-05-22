import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  NextImage,
  StyledLinearGradient,
  StyledImageAndEffect,
} from "../common";
import {
  StyledServicesContent,
  StyledServicesLandingMainTitle,
  StyledServicesContentContainer,
  StyledContentBox,
  StyledContactLink,
  StyledServicesContentBoxTitle,
  StyledServicesContentBoxText,
  StyledServicesIconContainer,
  StyledServicesContentBlockImage,
} from "./style";

const ServicesLanding: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const navLeafs = navTree?.services?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.home?.textContent;
  const assetUrls = servicesLeafs?.home?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledServicesContent>
      <StyledLinearGradient
        direction="top"
        variation="landingServicesContent"
        visual={{ opacity: 1 }}
        positioning={{ position: "absolute", top: "0px" }}
      />

      <StyledLinearGradient
        direction="bottom"
        variation="landingServicesContent"
        visual={{ opacity: 1 }}
        positioning={{ position: "absolute", bottom: "0px" }}
      />
      <StyledServicesIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold}
          starCount={5}
        />
      </StyledServicesIconContainer>
      <StyledServicesLandingMainTitle>
        {textContent?.title ?? ""}
      </StyledServicesLandingMainTitle>

      <StyledServicesContentContainer>
        <StyledContentBox>
          <StyledServicesContentBoxTitle>
            {textContent?.comercialServicesContentTitle ?? ""}
          </StyledServicesContentBoxTitle>
          <StyledServicesContentBoxText>
            {textContent?.comercialServicesContentText ?? ""}
          </StyledServicesContentBoxText>
          <StyledContactLink href={navLeafs?.mainContent?.path ?? ""}>
            {navLeafs?.mainContent?.label ?? ""}
          </StyledContactLink>
        </StyledContentBox>
        <StyledServicesContentBlockImage>
          <StyledImageAndEffect
            dimensions={{
              height: "353px",
              width: "529px",
            }}
            positioning={{ margin: "3em" }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                right: "-80px",
                bottom: "-120px",
                transform: "rotate(-15deg)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
                fill: true,
              }}
            />
            <NextImage
              containerPositioning={{
                position: "absolute",
              }}
              containerDimensions={{
                width: "25em",
                height: "15em",
              }}
              imageProps={{
                src: assetUrls?.morning ?? "",
                alt: "morning-sunshine",
                fill: true,
              }}
              imageVisual={{
                boxShadow: "2px 4px 4px #C1DFE6ff",
                borderRadius: "1em",
              }}
            />
          </StyledImageAndEffect>
        </StyledServicesContentBlockImage>
      </StyledServicesContentContainer>

      <StyledServicesContentContainer reversed>
        <StyledContentBox>
          <StyledServicesContentBoxTitle>
            {textContent?.privateServicesContentTitle ?? ""}
          </StyledServicesContentBoxTitle>
          <StyledServicesContentBoxText>
            {textContent?.privateServicesContentText ?? ""}
          </StyledServicesContentBoxText>
          <StyledContactLink href={navLeafs?.privateServices?.path ?? ""}>
            {navLeafs?.privateServices?.label ?? ""}
          </StyledContactLink>
        </StyledContentBox>
        <StyledServicesContentBlockImage>
          <StyledImageAndEffect
            dimensions={{
              height: "353px",
              width: "529px",
            }}
            positioning={{ margin: "3em" }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                right: "-80px",
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
                fill: true,
              }}
            />
            <NextImage
              containerPositioning={{
                position: "absolute",
              }}
              containerDimensions={{
                width: "25em",
                height: "15em",
              }}
              imageProps={{
                src: assetUrls?.flatRoom ?? "",
                alt: "flat-room",
                fill: true,
              }}
              imageVisual={{
                boxShadow: "2px 4px 4px #C1DFE6ff",
                borderRadius: "1em",
              }}
            />
          </StyledImageAndEffect>
        </StyledServicesContentBlockImage>
      </StyledServicesContentContainer>
      <StyledServicesContentContainer>
        <StyledContentBox>
          <StyledServicesContentBoxTitle>
            {textContent?.highCeilingContentTitle ?? ""}
          </StyledServicesContentBoxTitle>
          <StyledServicesContentBoxText>
            {textContent?.highCeilingContentText ?? ""}
          </StyledServicesContentBoxText>
          <StyledContactLink href={navLeafs?.highCeilingServices?.path ?? ""}>
            {navLeafs?.highCeilingServices?.label ?? ""}
          </StyledContactLink>
        </StyledContentBox>
        <StyledServicesContentBlockImage>
          <StyledImageAndEffect
            dimensions={{
              height: "353px",
              width: "529px",
            }}
            positioning={{ margin: "3em" }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                right: "-80px",
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
                fill: true,
              }}
            />
            <NextImage
              containerPositioning={{
                position: "absolute",
              }}
              containerDimensions={{
                width: "25em",
                height: "15em",
              }}
              imageProps={{
                src: assetUrls?.industry ?? "",
                alt: "industry-park",
                fill: true,
              }}
              imageVisual={{
                boxShadow: "2px 4px 4px #C1DFE6ff",
                borderRadius: "1em",
              }}
            />
          </StyledImageAndEffect>
        </StyledServicesContentBlockImage>
      </StyledServicesContentContainer>
    </StyledServicesContent>
  );
};

export default ServicesLanding;
