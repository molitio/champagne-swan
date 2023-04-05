import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  StyledAboutCover,
  StyledMainTitle,
  StyledDescription,
  StyledButtonContainer,
  StyledSubTitle,
  StyledCoverContactLink,
} from "./style";
import { NextImage, StyledLinearGradient } from "../common";
import { StyledCoverContentContainer } from "../common";
import { useLineBreakParser } from "../utils";

const AboutCover: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const aboutCoverTextContent = aboutLeafs?.cover?.textContent;
  const aboutCoverAssetUrls = aboutLeafs?.cover?.assetUrls;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledAboutCover>
      <NextImage
        containerDimensions={{
          height: "80vh",
          width: "100%",
        }}
        imagePositioning={{
          objectFit: "cover",
        }}
        imageProps={{
          src: aboutCoverAssetUrls?.cleaners ?? "",
          alt: "cleaner-working",
        }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="reversePartial"
        positioning={{ position: "absolute", top: "0" }}
        visual={{ opacity: 0.5 }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        positioning={{ position: "absolute", top: "0" }}
        visual={{ opacity: 1 }}
      />
      <StyledCoverContentContainer>
        <StyledMainTitle>{aboutCoverTextContent?.title ?? ""}</StyledMainTitle>
        <StyledSubTitle>{aboutCoverTextContent?.subTitle ?? ""}</StyledSubTitle>
        <StyledDescription>
          {useLineBreakParser(aboutCoverTextContent?.description ?? "")}
        </StyledDescription>

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
      </StyledCoverContentContainer>
    </StyledAboutCover>
  );
};

export default AboutCover;
