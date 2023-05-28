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
  StyledAppCoverContactLink,
  StyledWaterSplash,
  StyledButtonWaterSplash,
} from "../common";

import { StyledCoverContent, StyledLinearGradient } from "../common";
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
          <StyledButtonWaterSplash>
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
          </StyledButtonWaterSplash>
          <StyledAppCoverContactLink
            key={assetUrls?.cover ?? ""}
            href={assetUrls?.cover ?? ""}
          >
            {textContent?.introCta ?? ""}
          </StyledAppCoverContactLink>
        </StyledServicesCoverButtonContainer>
      </StyledCoverContent>
    </StyledServicesCover>
  );
};

export default ServicesCover;
