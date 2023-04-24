import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup, NextImage, SyledImageAndEffect } from "../common";
import {
  StyledOpinionsMainTitle,
  StyledOpinionsContainer,
  StyledOpinions,
  StyledOpinion,
  StyledOpinionText,
  StyledOpinionTitle,
} from "../opinions";
import {
  StyledBrandMessageText,
  StyledBrandMessageImageContainer,
  StyledAboutQuoteText,
  StyledAboutQuoteAuthorText,
  StyledBrandMessageQuoteContainer,
  StyledBrandMessageTitle,
} from "../brand";
import { ContactInfo } from "../contact";
import { StyledAboutContent, StyledBrandMessageContainer } from "./style";
import { useLineBreakParser } from "../utils";

const AboutContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const brandMessageTextContent = aboutLeafs?.brandMessage?.textContent;
  const brandMessageAssetUrls = aboutLeafs?.brandMessage?.assetUrls;
  const opinionsTextContent = aboutLeafs?.opinions?.textContent;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;
  const theme = systemContext?.theme;

  return (
    <StyledAboutContent>
      <StyledBrandMessageContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold}
          starCount={5}
        />
        <StyledBrandMessageTitle>
          {useLineBreakParser(brandMessageTextContent?.title ?? "")}
        </StyledBrandMessageTitle>
        <StyledBrandMessageQuoteContainer>
          <StyledAboutQuoteText>
            {brandMessageTextContent?.aboutQuote}
          </StyledAboutQuoteText>
          <StyledAboutQuoteAuthorText>
            {brandMessageTextContent?.aboutQuoteAuthor ?? ""}
          </StyledAboutQuoteAuthorText>
        </StyledBrandMessageQuoteContainer>
        <StyledBrandMessageText>
          {brandMessageTextContent?.premiumQualityContentText ?? ""}
        </StyledBrandMessageText>
        <StyledBrandMessageImageContainer>
          <SyledImageAndEffect positioning={{ margin: "1em" }}>
            <NextImage
              containerDimensions={{
                height: "250px",
                width: "372px",
              }}
              containerPositioning={{
                position: "relative",
              }}
              imageProps={{
                src: brandMessageAssetUrls?.mop ?? "",
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
          <SyledImageAndEffect
            dimensions={{
              height: "250px",
              width: "372px",
            }}
            positioning={{ margin: "1em" }}
          >
            <NextImage
              containerPositioning={{
                position: "relative",
              }}
              imageProps={{
                src: brandMessageAssetUrls?.colleague ?? "",
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
          <SyledImageAndEffect
            dimensions={{
              height: "250px",
              width: "372px",
            }}
            positioning={{ margin: "1em" }}
          >
            <NextImage
              containerPositioning={{
                position: "absolute",
                right: "-80px",
                bottom: "-120px",
                transform: "rotate(-15deg)",
              }}
              containerDimensions={{ width: "250px", height: "250px" }}
              imageProps={{
                src: commonAssetUrls?.waterSplash ?? "",
                alt: "water-splash",
              }}
            />
            <NextImage
              containerPositioning={{
                position: "relative",
              }}
              imageProps={{
                src: brandMessageAssetUrls?.machine ?? "",
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
        </StyledBrandMessageImageContainer>
      </StyledBrandMessageContainer>
      <StyledOpinions>
        <StyledOpinionsMainTitle>
          {opinionsTextContent?.title ?? ""}
        </StyledOpinionsMainTitle>
        <StyledOpinionsContainer>
          <StyledOpinion>
            <StyledOpinionText>
              {opinionsTextContent?.defaultCustomerOpinion ?? ""}
            </StyledOpinionText>
            <StyledOpinionTitle>
              {opinionsTextContent?.defaultCustomerName ?? ""}
            </StyledOpinionTitle>
          </StyledOpinion>
          <StyledOpinion>
            <StyledOpinionText>
              {opinionsTextContent?.defaultCustomerOpinion ?? ""}
            </StyledOpinionText>
            <StyledOpinionTitle>
              {opinionsTextContent?.defaultCustomerName ?? ""}
            </StyledOpinionTitle>
          </StyledOpinion>
        </StyledOpinionsContainer>
      </StyledOpinions>
      <ContactInfo />
    </StyledAboutContent>
  );
};

export default AboutContent;