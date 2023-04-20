import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ImageBox, IconGroup, NextImage, SyledImageAndEffect } from "../common";
import {
  StyledMainTitle,
  StyledContentBox,
  InternalContentContainer,
  StyledContentBoxTitle,
  StyledContentBoxText,
  ExternalContentContainer,
  StyledServicesContent,
  WaterSplash,
  RightSideWaterSplash,
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
            src: assetUrls?.officeCleaners ?? "",
            alt: "cleaning-machine",
          }}
          imageVisual={{
            boxShadow:
              theme?.palette?.visual["brandMessageImageShadow"]?.boxShadow ??
              "",
            borderRadius: "1em",
          }}
        />
      </SyledImageAndEffect>

      {/*         <ImageBox
          imageBoxParams={{
            imageUrl: assetUrls?.officeCleaners ?? "",
            dimensions: {
              height: "350px",
              width: "490px",
              minHeight: "350px",
              minWidth: "490px",
            },
            positioning: {
              margin: "30px 15px 0 15px",
              tablet: {
                top: "220px",
              },
              mobile: {
                top: "300px",
              },
              mobileSmall: {
                top: "570px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
            },
          }}
        /> */}

      <StyledContentBox>
        <StyledContentBoxTitle>
          {textContent?.officeCleaningTitle ?? ""}
        </StyledContentBoxTitle>
        <StyledContentBoxText>
          {textContent?.officeCleaningText ?? ""}
        </StyledContentBoxText>
        <StyledContentBoxText
          width={"535px"}
          margin={"0px auto 0px auto"}
          top={"0px"}
          padding={"0px"}
          display={"none"}
          displayTablet={"block"}
          paddingTablet={"20px 0px 0px 0px"}
        >
          {textContent?.officeCleaningInfo ?? ""}
        </StyledContentBoxText>
      </StyledContentBox>

      {/* TODO: fix layout to display text content on all devices */}
      <StyledContentBoxText
        width={"1050px"}
        margin={"0px auto 0px auto"}
        top={"-50px"}
        display={"block"}
        displayTablet={"none"}
        displayMobile={"none"}
      >
        {textContent?.officeCleaningExtendedInfo ?? ""}
      </StyledContentBoxText>

      <div id="private-services"></div>

      <WaterSplash
        bottom={"430px"}
        bottomTablet={"-50px"}
        right={"500px"}
        rightTablet={"220px"}
        rightMobile={"170px"}
        bottomMobile={"-170px"}
        bottomSmallMobile={"-470px"}
        src={commonAssetUrls?.waterSplash ?? ""}
      />

      <ExternalContentContainer>
        <InternalContentContainer>
          <StyledContentBox>
            <StyledContentBoxTitle>
              {textContent?.personalCleaningTitle ?? ""}
            </StyledContentBoxTitle>
            <StyledContentBoxText>
              {textContent?.personalCleaningText ?? ""}
            </StyledContentBoxText>
            <StyledContentBoxText
              width={"535px"}
              margin={"0px auto 0px auto"}
              top={"0px"}
              padding={"0px"}
              display={"none"}
              displayTablet={"block"}
              paddingTablet={"20px 0px 0px 0px"}
            >
              {textContent?.personalCleaningInfo ?? ""}
            </StyledContentBoxText>
          </StyledContentBox>
          {/*           <ImageBox
            imageBoxParams={{
              imageUrl: assetUrls?.flatRoom ?? "",
              dimensions: {
                height: "397px",
                width: "556px",
                minHeight: "397px",
                minWidth: "397px",
              },
              positioning: {
                margin: "30px 15px 0 15px",
                tablet: {
                  top: "220px",
                },
                mobile: {
                  top: "300px",
                },
                mobileSmall: {
                  top: "570px",
                },
              },
              breakpoints: {
                breakpoint1: "1440px",
              },
            }}
          /> */}
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
                alt: "cleaning-machine",
              }}
              imageVisual={{
                boxShadow:
                  theme?.palette?.visual["brandMessageImageShadow"]
                    ?.boxShadow ?? "",
                borderRadius: "1em",
              }}
            />
          </SyledImageAndEffect>
        </InternalContentContainer>
        <StyledContentBoxText
          width={"1100px"}
          margin={"0px auto 0px auto"}
          top={"0px"}
          display={"block"}
          displayTablet={"none"}
          displayMobile={"none"}
        >
          {textContent?.personalCleaningExtendedInfo ?? ""}
        </StyledContentBoxText>

        <div id="high-ceiling-services"></div>
        <RightSideWaterSplash
          bottom={"380px"}
          bottomTablet={"-250px"}
          bottomMobile={"-420px"}
          bottomSmallMobile={"-1020px"}
          leftSmallMobile={"0px"}
          src={commonAssetUrls?.waterSplash ?? ""}
        />
      </ExternalContentContainer>

      <ExternalContentContainer>
        <ImageBox
          imageBoxParams={{
            imageUrl: assetUrls?.industrial ?? "",
            dimensions: {
              height: "396px",
              width: "529px",
              minHeight: "396px",
              minWidth: "529px",
            },
            positioning: {
              margin: "30px 15px 0 15px",
              tablet: {
                top: "240px",
              },
              mobile: {
                top: "300px",
              },
              mobileSmall: {
                top: "420px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
            },
          }}
        />

        <StyledContentBox>
          <StyledContentBoxTitle>
            {textContent?.highCeilingTitle ?? ""}
          </StyledContentBoxTitle>
          <StyledContentBoxText>
            {textContent?.highCeilingText ?? ""}
          </StyledContentBoxText>
          <StyledContentBoxText
            width={"535px"}
            margin={"0px auto 0px auto"}
            top={"0px"}
            padding={"0px"}
            display={"none"}
            displayTablet={"block"}
            paddingTablet={"20px 0px 0px 0px"}
          >
            {textContent?.highCeilingInfo ?? ""}
          </StyledContentBoxText>
        </StyledContentBox>
        <StyledContentBoxText
          width={"1080px"}
          margin={"0px auto 0px auto"}
          top={"60px"}
          display={"block"}
          displayTablet={"none"}
          displayMobile={"none"}
        >
          {textContent?.highCeilingExtendedInfo ?? ""}
        </StyledContentBoxText>
        <WaterSplash
          bottom={"380px"}
          bottomTablet={"-470px"}
          bottomMobile={"-660px"}
          bottomSmallMobile={"-1470px"}
          right={""}
          rightTablet={""}
          src={commonAssetUrls?.waterSplash ?? ""}
        />
      </ExternalContentContainer>
      {/*      
  
  
  TODO: this layer will be replaced when next/image is implemented
  
  
  <SimpledLayer top={"4px"} src={commonAssetUrls?.gradientBottom ?? ""} /> */}
    </StyledServicesContent>
  );
};

export default ServicesContent;
