import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  NextImage,
  StyledLinearGradient,
  SyledImageAndEffect,
} from "../common";
import {
  StyledServicesContent,
  StyledMainTitle,
  StyledServicesContentContainer,
  StyledContentBox,
  StyledContactLink,
  StyledContentBoxTitle,
  StyledContentBoxText,
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
        variation="partial"
        visual={{ opacity: 1 }}
      />

      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        visual={{ opacity: 1 }}
      />
      <StyledServicesIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold}
          starCount={5}
        />
      </StyledServicesIconContainer>
      <StyledMainTitle>{textContent?.title ?? ""}</StyledMainTitle>

      <StyledServicesContentContainer>
        <StyledContentBox>
          <StyledContentBoxTitle>
            {textContent?.comercialServicesContentTitle ?? ""}
          </StyledContentBoxTitle>
          <StyledContentBoxText>
            {textContent?.comercialServicesContentText ?? ""}
          </StyledContentBoxText>
          <StyledContactLink href={navLeafs?.mainContent?.path ?? ""}>
            {navLeafs?.mainContent?.label ?? ""}
          </StyledContactLink>
        </StyledContentBox>
        <SyledImageAndEffect
          dimensions={{
            height: "353px",
            width: "529px",
          }}
          margin="3em"
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
        </SyledImageAndEffect>
      </StyledServicesContentContainer>

      <StyledServicesContentContainer reversed>
        <StyledContentBox>
          <StyledContentBoxTitle>
            {textContent?.privateServicesContentTitle ?? ""}
          </StyledContentBoxTitle>
          <StyledContentBoxText>
            {textContent?.privateServicesContentText ?? ""}
          </StyledContentBoxText>
          <StyledContactLink href={navLeafs?.privateServices?.path ?? ""}>
            {navLeafs?.privateServices?.label ?? ""}
          </StyledContactLink>
        </StyledContentBox>

        <SyledImageAndEffect
          dimensions={{
            height: "353px",
            width: "529px",
          }}
          margin="3em"
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
        </SyledImageAndEffect>
      </StyledServicesContentContainer>
      <StyledServicesContentContainer>
        <StyledContentBox>
          <StyledContentBoxTitle>
            {textContent?.highCeilingContentTitle ?? ""}
          </StyledContentBoxTitle>
          <StyledContentBoxText>
            {textContent?.highCeilingContentText ?? ""}
          </StyledContentBoxText>
          <StyledContactLink href={navLeafs?.highCeilingServices?.path ?? ""}>
            {navLeafs?.highCeilingServices?.label ?? ""}
          </StyledContactLink>
        </StyledContentBox>
        <SyledImageAndEffect
          dimensions={{
            height: "353px",
            width: "529px",
          }}
          margin="3em"
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
        </SyledImageAndEffect>
      </StyledServicesContentContainer>
    </StyledServicesContent>
  );
};

export default ServicesLanding;
