import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ImageBox, IconGroup } from "../common";
import {
  StyledIconContainer,
  StyledMainTitle,
  StyledContentContainer,
  StyledContentBox,
  InternalContentContainer,
  StyledContentBoxTitle,
  StyledContentBoxText,
  ExternalContentContainer,
  StyledServices,
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

  return (
    <StyledServices>
      <StyledIconContainer mobilePaddingTop={"40em"}>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
      </StyledIconContainer>
      <StyledMainTitle id="main-content">
        {textContent?.title ?? ""}
      </StyledMainTitle>

      <div>
        <StyledContentContainer>
          <ImageBox
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
          />

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
        </StyledContentContainer>

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
      </div>

      <ExternalContentContainer>
        <InternalContentContainer
        /*           tabletTop={"200px"}
          mobileTop={"250px"}
          smallMobileTop={"550px"} */
        >
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
          <ImageBox
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
          />
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
        <StyledContentContainer
        /*          tabletTop={"390px"}
          mobileTop={"480px"}
          smallMobileTop={"1150px"} */
        >
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
        </StyledContentContainer>
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
    </StyledServices>
  );
};

export default ServicesContent;