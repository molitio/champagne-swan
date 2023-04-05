import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup, ImageBox, StyledSegmentSection } from "../common";
import {
  StyledBrandMessageContainer,
  AboutPremiumQualityContainer,
  AboutPremiumQualityContentText,
  AboutPremiumQualityImageBox,
  AboutPremiumQualityWaterSplash,
  AboutQuote,
  AboutQuoteAuthor,
  AboutQuoteContainer,
  RotateLayer,
  StyledMainTitle,
  StyledTitle,
  InternalOpinionsContentContainer,
  StyledOpinions,
  StyledOpinionsContentContainer,
  StyledOpinionText,
  StyledOpinionTitle,
} from "../index";
import { ContactInfo } from "../contact";

const About: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const brandMessageTextContent = aboutLeafs?.brandMessage?.textContent;
  const brandMessageAssetUrls = aboutLeafs?.brandMessage?.assetUrls;
  const opinionsTextContent = aboutLeafs?.opinions?.textContent;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledSegmentSection>
      <StyledBrandMessageContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.blue}
          starCount={5}
        />
        <StyledTitle>{brandMessageTextContent?.title ?? ""}</StyledTitle>
        <StyledTitle>{brandMessageTextContent?.subTitle ?? ""}</StyledTitle>
        <AboutQuoteContainer>
          <AboutQuote>{brandMessageTextContent?.aboutQuote}</AboutQuote>
          <AboutQuoteAuthor>
            {brandMessageTextContent?.aboutQuoteAuthor ?? ""}
          </AboutQuoteAuthor>
        </AboutQuoteContainer>
        <AboutPremiumQualityContainer>
          <AboutPremiumQualityContentText>
            {brandMessageTextContent?.premiumQualityContentText ?? ""}
          </AboutPremiumQualityContentText>
        </AboutPremiumQualityContainer>
        <AboutPremiumQualityImageBox>
          <ImageBox
            imageBoxParams={{
              imageUrl: brandMessageAssetUrls?.mop ?? "",
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
              imageUrl: brandMessageAssetUrls?.colleague ?? "",
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
              imageUrl: brandMessageAssetUrls?.machine ?? "",
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
      </StyledBrandMessageContainer>

      <StyledOpinions>
        <StyledMainTitle>{opinionsTextContent?.title ?? ""}</StyledMainTitle>
        <InternalOpinionsContentContainer>
          <StyledOpinionsContentContainer>
            <StyledOpinionText color={"#C1A87D"}>
              {opinionsTextContent?.defaultCustomerOpinion ?? ""}
            </StyledOpinionText>
            <StyledOpinionTitle color={"#C1A87D"}>
              {opinionsTextContent?.defaultCustomerName ?? ""}
            </StyledOpinionTitle>
          </StyledOpinionsContentContainer>
          <StyledOpinionsContentContainer>
            <StyledOpinionText color={"#C1A87D"}>
              {opinionsTextContent?.defaultCustomerOpinion ?? ""}
            </StyledOpinionText>
            <StyledOpinionTitle color={"#C1A87D"}>
              {opinionsTextContent?.defaultCustomerName ?? ""}
            </StyledOpinionTitle>
          </StyledOpinionsContentContainer>
        </InternalOpinionsContentContainer>
      </StyledOpinions>

      <ContactInfo />
    </StyledSegmentSection>
  );
};

export default About;
