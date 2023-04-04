import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { NextImage, StyledLinearGradient } from "../common";
import { StyledTitle, StyledContact, StyledCoverText } from "./style";
import {
  RotatedLayer,
  ImageLayer,
  /*   ContactStyledImg, */
  StyledCoverContentContainer,
} from "../index/index";

const ContactCover: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const assetUrls = contactLeafs?.contactInfo?.assetUrls;

  console.log("assetUrls", assetUrls);

  return (
    <StyledContact>
      <NextImage
        containerDimensions={{
          minHeight: "80vh",
          width: "100%",
        }}
        containerPositioning={{
          position: "relative",
          objectFit: "cover",
        }}
        imageProps={{
          src: assetUrls?.skyScraper ?? "",
          alt: "contact-cover-image",
        }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="contactCoverTop"
        positioning={{ position: "absolute", top: "0" }}
        visual={{ opacity: 1 }}
      />
      <StyledLinearGradient
        direction="top"
        variation="contactCoverBottom"
        positioning={{ position: "absolute", top: "0" }}
        visual={{ opacity: 1 }}
      />
      <StyledCoverContentContainer>
        <StyledTitle>{textContent?.title ?? ""}</StyledTitle>
        <StyledCoverText>{textContent?.formText ?? ""}</StyledCoverText>
      </StyledCoverContentContainer>
    </StyledContact>
  );
};

export default ContactCover;
