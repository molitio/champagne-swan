import React from "react";
import Link from "next/link";
import { SystemContext } from "@molitio/ui-core";
import HeroSegmentContent from "../page/HeroSegmentContent";
import { ChampagneSwanContext } from "../context";
import {
  RotatedLayer,
  ImageLayer,
  HeroWaterSplash,
  StyledHeroSegmentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from "../common";
import { StyledAboutImg } from "./style";
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

  /*     <>
      <StyledNextImage
        src={assetUrls?.cleaners ?? ""}
        alt={"cover-image"}
        fill
      /> */
  {
    /*   <ImageLayer src={commonAssetUrls?.gradientBottom ?? ""} /> */
  }
  /*       <StyledLinearGradient
        direction="bottom"
        variation="partial"
        opacity={1}
      /> */
  {
    /*       <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} /> */
  }
  return (
    <StyledAboutImg>
      <ImageLayer src={commonAssetUrls?.gradientBottom ?? ""} />
      <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <div>
        <StyledHeroSegmentContainer>
          <HeroSegmentContent
            title={textContent?.title ?? ""}
            subTitle={textContent?.subTitle ?? ""}
            callToAction={
              <StyledButtonContainer>
                <HeroContactLink
                  className="hero-content"
                  key={navTree?.contact?.path ?? ""}
                  href={navTree?.contact?.path ?? ""}
                >
                  {textContent?.contactLinkText ?? ""}
                </HeroContactLink>
                <HeroWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
              </StyledButtonContainer>
            }
          />
        </StyledHeroSegmentContainer>
      </div>
    </StyledAboutImg>
  );
};

export default AboutHeroSegment;
