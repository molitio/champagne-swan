import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  NextImage,
  StyledLinearGradient,
  SyledImageAndEffect,
} from "../common";
import {
  StyledServices,
  StyledIconContainer,
  StyledMainTitle,
  StyledContentContainer,
  StyledContentBox,
  StyledContactLink,
  StyledContentBoxTitle,
  StyledContentBoxText,
} from "../services";

const Services: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const navLeafs = navTree?.services?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.home?.textContent;
  const assetUrls = servicesLeafs?.home?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledServices>
      <StyledLinearGradient direction="top" variation="partial" opacity={1} />

      {/*    <StyledLinearGradient
        direction="bottom"
        variation="partial"
        opacity={1}
      /> */}
      <StyledIconContainer mobilePaddingTop={"7em"} tabletPaddingTop={"10em"}>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold}
          starCount={5}
        />
      </StyledIconContainer>
      <StyledMainTitle>{textContent?.title ?? ""}</StyledMainTitle>

      <StyledContentContainer>
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
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          />
        </SyledImageAndEffect>
      </StyledContentContainer>

      <StyledContentContainer reversed>
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
              alt: "morning-sunshine",
            }}
            imageVisual={{
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          />
        </SyledImageAndEffect>
      </StyledContentContainer>
      <StyledContentContainer>
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
              alt: "morning-sunshine",
            }}
            imageVisual={{
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          />
        </SyledImageAndEffect>
      </StyledContentContainer>
    </StyledServices>
  );
};

export default Services;
