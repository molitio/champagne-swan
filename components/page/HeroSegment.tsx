import React from "react";
import { SystemContext } from "@molitio/ui-core";
import HeroSegmentContent from "./HeroSegmentContent";
import {
  IconGroup,
  NextImage,
  StyledLinearGradient,
  StyledSegmentSection,
  HeroWaterSplash,
  StyledHeroSegmentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from "../common";
import { useLineBreakParser } from "../utils";

const HeroSegment: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const heroLeafs = systemContext?.contentRoot?.home?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = heroLeafs?.hero?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;
  const assetUrls = heroLeafs?.hero?.assetUrls;

  const theme = systemContext?.theme;

  return (
    <StyledSegmentSection>
      <NextImage
        containerDimensions={{
          height: theme?.dimensions?.page?.height ?? "100vh",
          width: "100%",
        }}
        imageProps={{
          src: assetUrls?.heroBackground ?? "",
          alt: "cover-image",
          fill: true,
        }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="reversePartial"
        opacity={1}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        opacity={1}
      />
      <StyledHeroSegmentContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
        <HeroSegmentContent
          title={textContent?.title ?? ""}
          description={useLineBreakParser(textContent?.description ?? "")}
          callToAction={
            <StyledButtonContainer>
              <HeroContactLink
                key={navTree?.contact?.path ?? ""}
                href={navTree?.contact?.path ?? ""}
              >
                {textContent?.moreInfoButton ?? ""}
              </HeroContactLink>
              <HeroWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
            </StyledButtonContainer>
          }
        />
      </StyledHeroSegmentContainer>
    </StyledSegmentSection>
  );
};

export default HeroSegment;
