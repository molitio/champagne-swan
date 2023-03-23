import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ImageBox, IconGroup, NextImage, SyledImageAndEffect } from "../common";
import {
  StyledServices,
  StyledIconContainer,
  StyledMainTitle,
  WaterSplash,
  RightSideWaterSplash,
  BottomWaterSplash,
  StyledContentContainer,
  StyledContentBox,
  ContactLink,
  InternalContentContainer,
  StyledContentBoxTitle,
  StyledContentBoxText,
  ExternalContentContainer,
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
          <ContactLink href={navLeafs?.mainContent?.path ?? ""}>
            {navLeafs?.mainContent?.label ?? ""}
          </ContactLink>
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
              src: assetUrls?.morning ?? "",
              alt: "morning-sunshine",
            }}
            visual={{
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          />
        </SyledImageAndEffect>
      </StyledContentContainer>

      <ExternalContentContainer>
        <InternalContentContainer>
          <StyledContentBox>
            <StyledContentBoxTitle>
              {textContent?.privateServicesContentTitle ?? ""}
            </StyledContentBoxTitle>
            <StyledContentBoxText>
              {textContent?.privateServicesContentText ?? ""}
            </StyledContentBoxText>
            <ContactLink href={navLeafs?.privateServices?.path ?? ""}>
              {navLeafs?.privateServices?.label ?? ""}
            </ContactLink>
          </StyledContentBox>
          <ImageBox
            imageBoxParams={{
              imageUrl: assetUrls?.flatRoom ?? "",
              dimensions: {
                height: "397px",
                width: "556px",
                minHeight: "397px",
                minWidth: "556px",
              },
              positioning: {
                margin: "30px 15px 0 15px",
                tablet: {
                  top: "0px",
                },
              },
              breakpoints: {
                breakpoint1: "1440px",
              },
            }}
          />
        </InternalContentContainer>
        <RightSideWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
      </ExternalContentContainer>
      {/* 
      <ExternalContentContainer>
        <StyledContentContainer>
          <ImageBox
            imageBoxParams={{
              imageUrl: assetUrls?.industry ?? "",
              dimensions: {
                height: "396px",
                width: "529px",
                minHeight: "396px",
                minWidth: "529px",
              },
              positioning: {
                margin: "30px 15px 0 15px",
                tablet: {
                  top: "0px",
                },
              },
              breakpoints: {
                breakpoint1: "1440px",
              },
            }}
          />

          <StyledContentBox>
            <StyledContentBoxTitle>
              {textContent?.highCeilingContentTitle ?? ""}
            </StyledContentBoxTitle>
            <StyledContentBoxText>
              {textContent?.highCeilingContentText ?? ""}
            </StyledContentBoxText>
            <ContactLink href={navLeafs?.highCeilingServices?.path ?? ""}>
              {navLeafs?.highCeilingServices?.label ?? ""}
            </ContactLink>
          </StyledContentBox>
        </StyledContentContainer>
        <BottomWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
      </ExternalContentContainer> */}
    </StyledServices>
  );
};

export default Services;
