import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  StyledServicesCover,
  StyledServicesCoverMainTitle,
  StyledServicesCoverDescription,
  StyledServicesCoverButtonContainer,
  StyledServicesCoverImage,
} from "./style";
import {
  StyledCoverContactLink,
  StyledWaterSplash,
  StyledWaterSplashButtonContainer,
} from "../common";

import { NextImage, StyledCoverContent, StyledLinearGradient } from "../common";
import { resolveThemeBreakPointValues } from "../utils";

const ServicesCover: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.cover?.textContent;
  const assetUrls = servicesLeafs?.cover?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledServicesCover>
      <StyledServicesCoverImage
        src={assetUrls?.window ?? ""}
        alt={"cover-image"}
        fill={true}
        sizes={`(max-width: ${resolveThemeBreakPointValues(
          systemContext?.theme,
          "xl"
        )}) 50vw,
                33vw`}
      />
      {/*       <NextImage
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
          fill: true,
        }}
      /> */}
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
        visual={{ opacity: 1 }}
      />

      <StyledCoverContent>
        <StyledServicesCoverMainTitle>
          {textContent?.title ?? ""}
        </StyledServicesCoverMainTitle>
        <StyledServicesCoverDescription>
          {textContent?.introText ?? ""}
        </StyledServicesCoverDescription>

        <StyledServicesCoverButtonContainer>
          <StyledWaterSplashButtonContainer>
            <StyledWaterSplash
              src={commonAssetUrls?.waterSplash ?? ""}
              alt={"water-splash"}
              fill={true}
              sizes={`(max-width: ${resolveThemeBreakPointValues(
                systemContext?.theme,
                "xl"
              )}) 50vw,
              33vw`}
            />
          </StyledWaterSplashButtonContainer>
          <StyledCoverContactLink
            key={assetUrls?.cover ?? ""}
            href={assetUrls?.cover ?? ""}
          >
            {textContent?.introCta ?? ""}
          </StyledCoverContactLink>
        </StyledServicesCoverButtonContainer>
      </StyledCoverContent>
    </StyledServicesCover>
  );
};

export default ServicesCover;
