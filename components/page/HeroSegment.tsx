import React from "react";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import { IconGroup } from "../common/IconGroup";
import Link from "next/link";
import {
  StyledLayerSegment,
  RotatedLayer,
  ImageLayer,
  StyledImg,
  HeroWaterSplash,
  StyledHeroSegmentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from "./style";
import { SystemContext } from "@molitio/ui-core";

const HeroSegment: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const champagneSwanContext = React.useContext(ChampagneSwanContext);

  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;
  const navTree = systemContext?.navRoot ?? {};
  const heroLeafs = systemContext?.contentRoot?.home?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = heroLeafs?.hero?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledImg>
      {!navBarExpanded ? (
        <ImageLayer src={commonAssetUrls?.gradientHero ?? ""} />
      ) : (
        <ImageLayer src={commonAssetUrls?.gradientTop ?? ""} />
      )}

      <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <StyledLayerSegment>
        {!navBarExpanded ? (
          <StyledHeroSegmentContainer>
            <IconGroup
              fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
              starCount={5}
            />
            <HeroSegmentContent
              title={textContent?.title ?? ""}
              description={textContent?.description.replace(/\\n/g, "\n") ?? ""}
              callToAction={
                <StyledButtonContainer>
                  <Link
                    key={navTree?.contact?.path ?? ""}
                    href={navTree?.contact?.path ?? ""}
                  >
                    <HeroContactLink>
                      {textContent?.moreInfoButton ?? ""}
                    </HeroContactLink>
                  </Link>

                  <HeroWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
                </StyledButtonContainer>
              }
            />
          </StyledHeroSegmentContainer>
        ) : null}
      </StyledLayerSegment>
    </StyledImg>
  );
};

export default HeroSegment;
