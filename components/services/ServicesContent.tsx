import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  StyledLinearGradient,
  StyledServicesLandingPanelImageWaterSplash,
} from "../common";
import {
  StyledServicesContentMainTitle,
  StyledServicesContentBoxTitle,
  StyledServicesContentBoxText,
  StyledServicesLanding,
  StyledServicesContentPanel,
  StyledServicesContentBlockItem,
  StyledServicesLandingPanelImageContainer,
  StyledServicesContentBlockItemInfo,
  StyledServicesContentPanelImageAndEffect,
  StyledServicesLandingPanelImage,
  StyledServicesLandingPanelContent,
} from "./style";
import { resolveThemeBreakPointValues } from "../utils";

const ServicesContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.content?.textContent;
  const assetUrls = servicesLeafs?.content?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;
  const theme = systemContext?.theme;

  return (
    <StyledServicesLanding>
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

      <StyledServicesContentPanel>
        <StyledServicesLandingPanelContent>
          <StyledServicesContentBlockItem>
            <StyledServicesContentBoxTitle>
              {textContent?.officeCleaningTitle ?? ""}
            </StyledServicesContentBoxTitle>
            <StyledServicesContentBoxText>
              {textContent?.officeCleaningText ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItem>
        </StyledServicesLandingPanelContent>
        <StyledServicesLandingPanelContent>
          <StyledServicesContentBlockItemInfo>
            <StyledServicesContentBoxText>
              {textContent?.officeCleaningInfo ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItemInfo>
        </StyledServicesLandingPanelContent>

        <StyledServicesLandingPanelImageContainer>
          <StyledServicesContentPanelImageAndEffect>
            <StyledServicesLandingPanelImageWaterSplash
              src={commonAssetUrls?.waterSplash ?? ""}
              alt={"water-splash"}
              width={240}
              height={240}
            />
            <StyledServicesLandingPanelImage
              sizes={`(max-width: ${resolveThemeBreakPointValues(
                systemContext?.theme,
                "xl"
              )}) 50vw,
                33vw`}
              src={assetUrls?.officeCleaners ?? ""}
              alt={"office-cleaners"}
              fill={true}
            />
          </StyledServicesContentPanelImageAndEffect>
        </StyledServicesLandingPanelImageContainer>
      </StyledServicesContentPanel>

      <StyledServicesContentPanel>
        <StyledServicesLandingPanelImageContainer>
          <StyledServicesContentPanelImageAndEffect>
            <StyledServicesLandingPanelImageWaterSplash
              src={commonAssetUrls?.waterSplash ?? ""}
              alt={"water-splash"}
              width={240}
              height={240}
            />
            <StyledServicesLandingPanelImage
              sizes={`(max-width: ${resolveThemeBreakPointValues(
                systemContext?.theme,
                "xl"
              )}) 50vw,
                33vw`}
              src={assetUrls?.flatRoom ?? ""}
              alt={"flat-room"}
              fill={true}
            />
          </StyledServicesContentPanelImageAndEffect>
        </StyledServicesLandingPanelImageContainer>

        <StyledServicesLandingPanelContent>
          <StyledServicesContentBlockItem>
            <StyledServicesContentBoxTitle>
              {textContent?.highCeilingTitle ?? ""}
            </StyledServicesContentBoxTitle>
            <StyledServicesContentBoxText>
              {textContent?.personalCleaningInfo ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItem>
          <StyledServicesContentBlockItemInfo>
            <StyledServicesContentBoxText>
              {textContent?.personalCleaningExtendedInfo ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItemInfo>
        </StyledServicesLandingPanelContent>
      </StyledServicesContentPanel>

      <StyledServicesContentPanel>
        <StyledServicesLandingPanelImageContainer>
          <StyledServicesContentPanelImageAndEffect>
            <StyledServicesLandingPanelImageWaterSplash
              src={commonAssetUrls?.waterSplash ?? ""}
              alt={"water-splash"}
              width={240}
              height={240}
            />
            <StyledServicesLandingPanelImage
              sizes={`(max-width: ${resolveThemeBreakPointValues(
                systemContext?.theme,
                "xl"
              )}) 50vw,
                33vw`}
              src={assetUrls?.industrial ?? ""}
              alt={"industry-complex"}
              fill={true}
            />
          </StyledServicesContentPanelImageAndEffect>
        </StyledServicesLandingPanelImageContainer>
        <StyledServicesLandingPanelContent>
          <StyledServicesContentBlockItem>
            <StyledServicesContentBoxTitle>
              {textContent?.highCeilingTitle ?? ""}
            </StyledServicesContentBoxTitle>
            <StyledServicesContentBoxText>
              {textContent?.highCeilingText ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItem>
          <StyledServicesContentBlockItemInfo>
            <StyledServicesContentBoxText>
              {textContent?.highCeilingInfo ?? ""}
            </StyledServicesContentBoxText>
            <StyledServicesContentBoxText>
              {textContent?.highCeilingExtendedInfo ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItemInfo>
        </StyledServicesLandingPanelContent>
      </StyledServicesContentPanel>
    </StyledServicesLanding>
  );
};

export default ServicesContent;
