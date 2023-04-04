import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ChampagneSwanContext } from "../context";
import { NextImage, StyledLinearGradient } from "../common";
import { StyledTitle, StyledContact, StyledCoverText } from "./style";
import {
  RotatedLayer,
  ImageLayer,
  /*   ContactStyledImg, */
  StyledCoverContentContainer,
} from "../index";

const ContactPageCover: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const assetUrls = contactLeafs?.contactInfo?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  const theme = systemContext?.theme;
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
        variation="reversePartial"
        visual={{ opacity: 1 }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        visual={{ opacity: 1 }}
      />
      {/* <ContactStyledImg> */}

      {/*       <ImageLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} /> */}
      <div>
        {!navBarExpanded ? (
          <StyledCoverContentContainer>
            <StyledTitle>{textContent?.title ?? ""}</StyledTitle>
            <StyledCoverText>{textContent?.formText ?? ""}</StyledCoverText>
          </StyledCoverContentContainer>
        ) : (
          <></>
        )}
      </div>
      {/* </ContactStyledImg> */}
    </StyledContact>
  );
};

export default ContactPageCover;
