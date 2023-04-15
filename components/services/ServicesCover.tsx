import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { StyledServicesCover } from "./style";
import {
  StyledButtonContainer,
  StyledCoverContactLink,
  StyledMainTitle,
  StyledDescription,
} from "../index";

import { NextImage, StyledCoverContent, StyledLinearGradient } from "../common";

const ServicesCover: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.cover?.textContent;
  const assetUrls = servicesLeafs?.cover?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledServicesCover>
      <NextImage
        containerDimensions={{
          height: "80vh",
          width: "100%",
        }}
        containerPositioning={{
          position: "relative",
        }}
        imagePositioning={{
          objectFit: "cover",
        }}
        imageProps={{
          src: assetUrls?.window ?? "",
          alt: "cover-image",
        }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="reversePartial"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 0.6 }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 0.8 }}
      />

      <StyledCoverContent>
        <StyledMainTitle>{textContent?.title ?? ""}</StyledMainTitle>
        <StyledDescription>{textContent?.introText ?? ""}</StyledDescription>

        <StyledButtonContainer>
          <NextImage
            containerPositioning={{
              right: "-80px",
              bottom: "-120px",
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
          <StyledCoverContactLink
            key={assetUrls?.cover ?? ""}
            href={assetUrls?.cover ?? ""}
          >
            {textContent?.introCta ?? ""}
          </StyledCoverContactLink>
        </StyledButtonContainer>
      </StyledCoverContent>
    </StyledServicesCover>
  );
};

export default ServicesCover;
