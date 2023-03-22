import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup } from "../common";
import { ImageBox } from "../common";
import {
  StyledPremiumQualityIconContainer,
  AboutPremiumQualityContainer,
  StyledTitle,
  AboutQuote,
  AboutQuoteAuthor,
  AboutQuoteContainer,
  AboutPremiumQualityContentText,
  AboutPremiumQualityImageBox,
  AboutPremiumQualityBackgroundLayerContainer,
  AboutPremiumQualityWaterSplash,
  RotateLayer,
} from "../common";

const AboutPremiumQuality: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = aboutLeafs?.premiumQuality?.textContent;
  const assetUrls = aboutLeafs?.premiumQuality?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <AboutPremiumQualityBackgroundLayerContainer>
      <StyledPremiumQualityIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.blue}
          starCount={5}
        />
      </StyledPremiumQualityIconContainer>
      <StyledTitle>{textContent?.title ?? ""}</StyledTitle>
      <StyledTitle>{textContent?.subTitle ?? ""}</StyledTitle>
      <AboutQuoteContainer>
        <AboutQuote>{textContent?.aboutQuote}</AboutQuote>
        <AboutQuoteAuthor>
          {textContent?.aboutQuoteAuthor ?? ""}
        </AboutQuoteAuthor>
      </AboutQuoteContainer>
      <AboutPremiumQualityContainer>
        <AboutPremiumQualityContentText
          width={"1150px"}
          fontSize={"27px"}
          tabletWidth={"800px"}
          tabletFontSize={"25px"}
          mobileWidth={"400px"}
          smallMobileFonsize={"18px"}
          smallMobileWidth={"300px"}
        >
          {textContent?.premiumQualityContentText ?? ""}
        </AboutPremiumQualityContentText>
      </AboutPremiumQualityContainer>
      <AboutPremiumQualityImageBox>
        <ImageBox
          imageBoxParams={{
            imageUrl: assetUrls?.mop ?? "",
            positioning: {
              margin: "30px 15px 15px 15px",
              tablet: { margin: "30px 0 0 0" },
            },
            dimensions: {
              height: "250px",
              width: "372px",
              minHeight: "250px",
              minWidth: "372px",
              tablet: {
                height: "250px",
                width: "372px",
                minHeight: "250px",
                minWidth: "372px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
              breakpoint2: "900px",
            },
          }}
        />
        <ImageBox
          imageBoxParams={{
            imageUrl: assetUrls?.colleague ?? "",
            positioning: {
              margin: "30px 15px 15px 15px",
              tablet: { margin: "30px 0 0 0" },
            },
            dimensions: {
              height: "250px",
              width: "372px",
              minHeight: "250px",
              minWidth: "372px",
              tablet: {
                height: "250px",
                width: "372px",
                minHeight: "250px",
                minWidth: "372px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
              breakpoint2: "900px",
            },
          }}
        />
        <ImageBox
          imageBoxParams={{
            imageUrl: assetUrls?.machine ?? "",
            positioning: {
              margin: "30px 15px 15px 15px",
              tablet: { margin: "30px 0 0 0" },
            },
            dimensions: {
              height: "250px",
              width: "372px",
              minHeight: "250px",
              minWidth: "372px",
              tablet: {
                height: "250px",
                width: "372px",
                minHeight: "250px",
                minWidth: "372px",
              },
            },
            breakpoints: {
              breakpoint1: "1440px",
              breakpoint2: "900px",
            },
          }}
        />
      </AboutPremiumQualityImageBox>

      <AboutPremiumQualityWaterSplash
        src={commonAssetUrls?.waterSplash ?? ""}
      />
      <RotateLayer
        position={"relative"}
        top={"-20px"}
        tabletTop={"-13px"}
        src={commonAssetUrls?.gradientBottom ?? ""}
      />
    </AboutPremiumQualityBackgroundLayerContainer>
  );
};

export default AboutPremiumQuality;
