import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  ImageBox,
  NextImage,
  StyledLinearGradient,
  StyledSegmentSection,
} from "../common";
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
  StyledButtonContainer,
  StyledCallToAction,
  StyledCoverContactLink,
  StyledCoverContentContainer,
  StyledDescription,
  StyledMainTitle,
  StyledSubTitle,
  StyledTitle,
  InternalOpinionsContentContainer,
  StyledOpinions,
  StyledOpinionsContentContainer,
  StyledOpinionText,
  StyledOpinionTitle,
} from "../index";
import { StyledAboutCoverContainer } from "./style";
import { useLineBreakParser } from "../utils";
import { ContactInfo } from "../contact";

const About: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};

  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;

  const commonLeafs = systemContext?.contentRoot?.common?.leafs;

  const aboutCoverTextContent = aboutLeafs?.cover?.textContent;
  const aboutCoverAssetUrls = aboutLeafs?.cover?.assetUrls;

  const brandMessageTextContent = aboutLeafs?.brandMessage?.textContent;
  const brandMessageAssetUrls = aboutLeafs?.brandMessage?.assetUrls;

  const opinionsTextContent = aboutLeafs?.opinions?.textContent;

  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  const theme = systemContext?.theme;

  return (
    <StyledSegmentSection>
      <StyledAboutCoverContainer>
        <NextImage
          containerDimensions={{
            height: theme?.dimensions?.page?.height ?? "100vh",
            width: "100%",
          }}
          imageProps={{
            src: aboutCoverAssetUrls?.cleaners ?? "",
            alt: "cleaner-working",
          }}
        />
        <StyledLinearGradient
          direction="bottom"
          variation="reversePartial"
          opacity={0.5}
        />
        <StyledLinearGradient
          direction="bottom"
          variation="partial"
          opacity={1}
        />
        <StyledCoverContentContainer>
          <StyledMainTitle>
            {aboutCoverTextContent?.title ?? ""}
          </StyledMainTitle>
          <StyledSubTitle>
            {aboutCoverTextContent?.subTitle ?? ""}
          </StyledSubTitle>
          <StyledDescription>
            {useLineBreakParser(aboutCoverTextContent?.description ?? "")}
          </StyledDescription>
          <StyledCallToAction>
            {
              <StyledButtonContainer>
                <StyledCoverContactLink
                  key={navTree?.contact?.path ?? ""}
                  href={navTree?.contact?.path ?? ""}
                >
                  {aboutCoverTextContent?.contactLinkText ?? ""}
                </StyledCoverContactLink>
                <NextImage
                  containerPositioning={{
                    bottom: "-80px",
                    position: "absolute",
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
              </StyledButtonContainer>
            }
          </StyledCallToAction>
        </StyledCoverContentContainer>
      </StyledAboutCoverContainer>

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
