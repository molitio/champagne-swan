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
              right: "-60px",
              bottom: "-120px",
              transform: "rotate(-15deg)",
            }}
            containerDimensions={{ width: "250px", height: "250px" }}
            imageProps={{
              src: commonAssetUrls?.waterSplash ?? "",
              alt: "water-splash",
            }}
          />
          <NextImage
            containerPositioning={{
              position: "absolute",
            }}
            imageProps={{
              src: assetUrls?.morning ?? "",
              alt: "morning-sunshine",
            }}
            imageVisual={{
              boxShadow: "2px 4px 4px #C1DFE6ff",
              borderRadius: "1em",
            }}
          />
        </StyledImageAndEffect>
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
              position: "absolute",
            }}
            imageProps={{
              src: assetUrls?.flatRoom ?? "",
              alt: "flat-room",
            }}
            imageVisual={{
              boxShadow: "2px 4px 4px #C1DFE6ff",
              borderRadius: "1em",
            }}
          />
        </StyledImageAndEffect>
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
              position: "absolute",
            }}
            imageProps={{
              src: assetUrls?.industry ?? "",
              alt: "industry-park",
            }}
            imageVisual={{
              boxShadow: "2px 4px 4px #C1DFE6ff",
              borderRadius: "1em",
            }}
          />
        </StyledImageAndEffect>
      </StyledServicesContentContainer>
    </StyledServicesContent>
  );
};

export default ServicesLanding;
