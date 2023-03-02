import React from "react";
import Link from "next/link";
import { SystemContext } from "@molitio/ui-core";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import {
  StyledLayerSegment,
  RotatedLayer,
  ImageLayer,
  StyledAboutImg,
  HeroWaterSplash,
  StyledHeroSegmentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from "./style";

const AboutHeroSegment: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = aboutLeafs?.cover?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledAboutImg>
      <ImageLayer src={commonAssetUrls?.gradientBottom ?? ""} />
      <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <StyledLayerSegment>
        {!navBarExpanded ? (
          <StyledHeroSegmentContainer>
            <HeroSegmentContent
              title={textContent?.title ?? ""}
              subTitle={textContent?.subTitle ?? ""}
              callToAction={
                <StyledButtonContainer>
                  <Link
                    key={navTree?.contact?.path ?? ""}
                    href={navTree?.contact?.path ?? ""}
                  >
                    <HeroContactLink className="hero-content">
                      {textContent?.contactLinkText ?? ""}
                    </HeroContactLink>
                  </Link>

                  <HeroWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
                </StyledButtonContainer>
              }
            />
          </StyledHeroSegmentContainer>
        ) : null}
      </StyledLayerSegment>
    </StyledAboutImg>
  );
};

export default AboutHeroSegment;
