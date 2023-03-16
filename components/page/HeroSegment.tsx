import React from "react";
import Link from "next/link";
import { SystemContext } from "@molitio/ui-core";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import { IconGroup, NextImage, StyledSegmentSection } from "../common";
import {
  StyledLayerSegment,
  RotatedLayer,
  ImageLayer,
  HeroWaterSplash,
  StyledHeroSegmentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from "./style";

const HeroSegment: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const heroLeafs = systemContext?.contentRoot?.home?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = heroLeafs?.hero?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;
  const assetUrls = heroLeafs?.hero?.assetUrls;

  return (
    <StyledSegmentSection>
      <NextImage
        containerDimensions={{ height: "1150px", width: "100%" }}
        imageProps={{
          layout: "fill",
          src: assetUrls?.heroBackground ?? "",
          alt: "cover-image",
          fill: true,
        }}
      />

      <ImageLayer src={commonAssetUrls?.gradientTop ?? ""} />

      <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <StyledLayerSegment>
        <StyledHeroSegmentContainer>
          <IconGroup
            fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
            starCount={5}
          />
          <HeroSegmentContent
            title={textContent?.title ?? ""}
            // TODO: this needs to be extracted to common functionality as this is an adhoc solution, first discovered to solve new line from plain text
            description={textContent?.description.replace(/\\n/g, "\n") ?? ""}
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
      </StyledLayerSegment>
    </StyledSegmentSection>
  );
};

export default HeroSegment;
