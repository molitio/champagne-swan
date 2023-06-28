import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  StyledLinearGradient,
  StyledParagraphBullet,
  StyledServicesLandingPanelImageWaterSplash,
} from "../common";
import {
  StyledServicesContentMainTitle,
  StyledServicesContentBoxTitle,
  StyledServicesContentBoxText,
  StyledServicesContentPanel,
  StyledServicesContentBlockItem,
  StyledServicesLandingPanelImageContainer,
  StyledServicesContentBlockItemInfo,
  StyledServicesContentPanelImageAndEffect,
  StyledServicesLandingPanelImage,
  StyledServicesContentPanelContent,
  StyledServicesContent,
} from "./style";
import { resolveThemeBreakPointValues } from "../utils";

const ServicesContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.content?.textContent;
  const assetUrls = servicesLeafs?.content?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  const officeCleaningInfoList = Array.from(
    textContent?.officeCleaningInfoList ?? ""
  );
  const highCeilingnfoList = Array.from(textContent?.highCeilingnfoList ?? "");
  const logisticsAndEcoMaintenanceInfoList = Array.from(
    textContent?.logisticsAndEcoMaintenanceInfoList ?? ""
  );

  //update context variables to reflect structure
  // refactor to grid for the services content tiles

  return (
    <StyledServicesContent>
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
        <StyledServicesContentPanelContent>
          <StyledServicesContentBlockItem>
            <StyledServicesContentBoxTitle>
              {textContent?.officeCleaningTitle ?? ""}
            </StyledServicesContentBoxTitle>

            <StyledServicesContentBoxText>
              {textContent?.officeCleaning ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItem>

          <StyledServicesContentBlockItemInfo>
            {officeCleaningInfoList.map((listItem, i) => (
              <StyledServicesContentBoxText key={i}>
                <StyledParagraphBullet>{`${"\u2B24"}`}</StyledParagraphBullet>
                {listItem}
              </StyledServicesContentBoxText>
            ))}
          </StyledServicesContentBlockItemInfo>
        </StyledServicesContentPanelContent>
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
        <StyledServicesContentPanelContent>
          <StyledServicesContentBlockItem>
            <StyledServicesContentBoxTitle>
              {textContent?.highCeilingTitle ?? ""}
            </StyledServicesContentBoxTitle>

            <StyledServicesContentBoxText>
              {textContent?.highCeiling ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItem>

          <StyledServicesContentBlockItemInfo>
            {highCeilingnfoList.map((listItem, i) => (
              <StyledServicesContentBoxText key={i}>
                <StyledParagraphBullet>{`${"\u2B24"}`}</StyledParagraphBullet>
                {listItem}
              </StyledServicesContentBoxText>
            ))}
          </StyledServicesContentBlockItemInfo>
        </StyledServicesContentPanelContent>
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
        <StyledServicesContentPanelContent>
          <StyledServicesContentBlockItem>
            <StyledServicesContentBoxTitle>
              {textContent?.logisticsAndEcoMaintenanceTitle ?? ""}
            </StyledServicesContentBoxTitle>
            <StyledServicesContentBoxText>
              {textContent?.logisticsAndEcoMaintenance ?? ""}
            </StyledServicesContentBoxText>
          </StyledServicesContentBlockItem>

          <StyledServicesContentBlockItemInfo>
            {logisticsAndEcoMaintenanceInfoList.map((listItem, i) => (
              <StyledServicesContentBoxText key={i}>
                <StyledParagraphBullet>{`${"\u2B24"}`}</StyledParagraphBullet>
                {listItem}
              </StyledServicesContentBoxText>
            ))}
          </StyledServicesContentBlockItemInfo>
        </StyledServicesContentPanelContent>
      </StyledServicesContentPanel>
    </StyledServicesContent>
  );
};

export default ServicesContent;
