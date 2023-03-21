import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ImageBox, IconGroup } from "../common";
import {
  ServicesMainContainer,
  StyledIconContainer,
  ServicesMainTitle,
  WaterSplash,
  RightSideWaterSplash,
  BottomWaterSplash,
  ReverseInternalContentContainer,
  ContentBox,
  ContactLink,
  InternalContentContainer,
  ContentBoxTitle,
  ContentBoxText,
  ExternalContentContainer,
  UniqueExternalContentContainer,
} from "./style";

const ServicesHomeContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const navLeafs = navTree?.services?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.home?.textContent;
  const assetUrls = servicesLeafs?.home?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <ServicesMainContainer
      height={"2800px"}
      tabletHeight={"4200px"}
      mobileHeight={"3350px"}
      smallMobileHeight={"3150px"}
    >
      <StyledIconContainer mobilePaddingTop={"7em"} tabletPaddingTop={"10em"}>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold}
          starCount={5}
        />
      </StyledIconContainer>
      <ServicesMainTitle>{textContent?.title ?? ""}</ServicesMainTitle>

      <UniqueExternalContentContainer>
        <ReverseInternalContentContainer>
          <ImageBox
            imageBoxParams={{
              imageUrl: assetUrls?.morning ?? "",
              dimensions: {
                height: "350px",
                width: "490px",
                minHeight: "350px",
                minWidth: "490px",
              },
              positioning: {
                margin: "30px 25px 0 15px",
                tablet: {
                  top: "0px",
                },
              },
              breakpoints: {
                breakpoint1: "1440px",
              },
            }}
          />
          <ContentBox>
            <ContentBoxTitle>
              {textContent?.comercialServicesContentTitle ?? ""}
            </ContentBoxTitle>
            <ContentBoxText>
              {textContent?.comercialServicesContentText ?? ""}
            </ContentBoxText>
            <ContactLink href={navLeafs?.mainContent?.path ?? ""}>
              {navLeafs?.mainContent?.label ?? ""}
            </ContactLink>
          </ContentBox>
        </ReverseInternalContentContainer>
        <WaterSplash src={commonAssetUrls?.waterSplash} />
      </UniqueExternalContentContainer>
      <ExternalContentContainer>
        <InternalContentContainer>
          <ContentBox>
            <ContentBoxTitle>
              {textContent?.privateServicesContentTitle ?? ""}
            </ContentBoxTitle>
            <ContentBoxText>
              {textContent?.privateServicesContentText ?? ""}
            </ContentBoxText>
            <ContactLink href={navLeafs?.privateServices?.path ?? ""}>
              {navLeafs?.privateServices?.label ?? ""}
            </ContactLink>
          </ContentBox>
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
      <ExternalContentContainer>
        <ReverseInternalContentContainer>
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

          <ContentBox>
            <ContentBoxTitle>
              {textContent?.highCeilingContentTitle ?? ""}
            </ContentBoxTitle>
            <ContentBoxText>
              {textContent?.highCeilingContentText ?? ""}
            </ContentBoxText>
            <ContactLink href={navLeafs?.highCeilingServices?.path ?? ""}>
              {navLeafs?.highCeilingServices?.label ?? ""}
            </ContactLink>
          </ContentBox>
        </ReverseInternalContentContainer>
        <BottomWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
      </ExternalContentContainer>
    </ServicesMainContainer>
  );
};

export default ServicesHomeContent;
