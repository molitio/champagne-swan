import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ImageBox, IconGroup } from "../common";
import {
  StyledIconContainer,
  ServicesMainTitle,
  ReverseInternalContentContainer,
  ContentBox,
  InternalContentContainer,
  ContentBoxTitle,
  ContentBoxText,
  ExternalContentContainer,
  UniqueExternalContentContainer,
  ServicesMainContainer,
  WaterSplash,
  RightSideWaterSplash,
} from "./style";

const ServicesPageContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const navLeafs = navTree?.services?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.content?.textContent;
  const assetUrls = servicesLeafs?.content?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <>
      <ServicesMainContainer
        smallMobileHeight={"4900px"}
        mobileHeight={"4500px"}
        tabletHeight={"4500px"}
      >
        <StyledIconContainer mobilePaddingTop={"40em"}>
          <IconGroup
            fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
            starCount={5}
          />
        </StyledIconContainer>
        <ServicesMainTitle id="main-content">
          {textContent?.title ?? ""}
        </ServicesMainTitle>

        <UniqueExternalContentContainer>
          <ReverseInternalContentContainer>
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

            <ContentBox>
              <ContentBoxTitle>
                {textContent?.officeCleaningTitle ?? ""}
              </ContentBoxTitle>
              <ContentBoxText>
                {textContent?.officeCleaningText ?? ""}
              </ContentBoxText>
              <ContentBoxText
                width={"535px"}
                margin={"0px auto 0px auto"}
                top={"0px"}
                padding={"0px"}
                display={"none"}
                displayTablet={"block"}
                paddingTablet={"20px 0px 0px 0px"}
              >
                {textContent?.officeCleaningInfo ?? ""}
              </ContentBoxText>
            </ContentBox>
          </ReverseInternalContentContainer>

          {/* TODO: fix layout to display text content on all devices */}
          <ContentBoxText
            width={"1050px"}
            margin={"0px auto 0px auto"}
            top={"-50px"}
            display={"block"}
            displayTablet={"none"}
            displayMobile={"none"}
          >
            {textContent?.officeCleaningExtendedInfo ?? ""}
          </ContentBoxText>

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
        </UniqueExternalContentContainer>

        <ExternalContentContainer>
          <InternalContentContainer
            tabletTop={"200px"}
            mobileTop={"250px"}
            smallMobileTop={"550px"}
          >
            <ContentBox>
              <ContentBoxTitle>
                {textContent?.personalCleaningTitle ?? ""}
              </ContentBoxTitle>
              <ContentBoxText>
                {textContent?.personalCleaningText ?? ""}
              </ContentBoxText>
              <ContentBoxText
                width={"535px"}
                margin={"0px auto 0px auto"}
                top={"0px"}
                padding={"0px"}
                display={"none"}
                displayTablet={"block"}
                paddingTablet={"20px 0px 0px 0px"}
              >
                {textContent?.personalCleaningInfo ?? ""}
              </ContentBoxText>
            </ContentBox>
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
          <ContentBoxText
            width={"1100px"}
            margin={"0px auto 0px auto"}
            top={"0px"}
            display={"block"}
            displayTablet={"none"}
            displayMobile={"none"}
          >
            {textContent?.personalCleaningExtendedInfo ?? ""}
          </ContentBoxText>

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
          <ReverseInternalContentContainer
            tabletTop={"390px"}
            mobileTop={"480px"}
            smallMobileTop={"1150px"}
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

            <ContentBox>
              <ContentBoxTitle>
                {textContent?.highCeilingTitle ?? ""}
              </ContentBoxTitle>
              <ContentBoxText>
                {textContent?.highCeilingText ?? ""}
              </ContentBoxText>
              <ContentBoxText
                width={"535px"}
                margin={"0px auto 0px auto"}
                top={"0px"}
                padding={"0px"}
                display={"none"}
                displayTablet={"block"}
                paddingTablet={"20px 0px 0px 0px"}
              >
                {textContent?.highCeilingInfo ?? ""}
              </ContentBoxText>
            </ContentBox>
          </ReverseInternalContentContainer>
          <ContentBoxText
            width={"1080px"}
            margin={"0px auto 0px auto"}
            top={"60px"}
            display={"block"}
            displayTablet={"none"}
            displayMobile={"none"}
          >
            {textContent?.highCeilingExtendedInfo ?? ""}
          </ContentBoxText>
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
      </ServicesMainContainer>
      {/*      


TODO: this layer will be replaced when next/image is implemented


<SimpledLayer top={"4px"} src={commonAssetUrls?.gradientBottom ?? ""} /> */}
    </>
  );
};

export default ServicesPageContent;
