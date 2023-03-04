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
  StyledNextImage,
} from "./style";
import { StyledLinearGradient } from "../common";

const AboutHeroSegment: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const assetUrls = aboutLeafs?.cover?.assetUrls;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = aboutLeafs?.cover?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <>
      <StyledNextImage src={assetUrls?.cleaners ?? ""} layout={"fill"} />
      {/*   <ImageLayer src={commonAssetUrls?.gradientBottom ?? ""} /> */}
      {/*      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        opacity={1}
      /> */}
      {/*       <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} /> */}

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
    </>
  );
};

export default AboutHeroSegment;
