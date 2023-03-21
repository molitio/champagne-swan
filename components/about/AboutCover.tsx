import React from "react";
import {
  StyledCallToAction,
  StyledDescription,
  StyledMainTitle,
  SystemContext,
} from "@molitio/ui-core";
import { ChampagneSwanContext } from "../context";
import {
  RotatedLayer,
  ImageLayer,
  HeroWaterSplash,
  StyledCoverContentContainer,
  HeroContactLink,
  StyledButtonContainer,
  StyledSubTitle,
} from "../common";
import { StyledCoverImage } from "./style";
import { StyledLinearGradient } from "../common";
import { useLineBreakParser } from "../utils";

const AboutCover: React.FC = () => {
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
    <StyledCoverImage>
      <ImageLayer src={commonAssetUrls?.gradientBottom ?? ""} />
      <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <div>
        <StyledCoverContentContainer>
          <div>
            <StyledMainTitle>{textContent?.title ?? ""}</StyledMainTitle>
            <StyledSubTitle>{textContent?.subTitle ?? ""}</StyledSubTitle>
            <StyledDescription>
              {useLineBreakParser(textContent?.description ?? "")}
            </StyledDescription>
            <StyledCallToAction>
              {
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
            </StyledCallToAction>
          </div>
        </StyledCoverContentContainer>
      </div>
    </StyledCoverImage>
  );
};

export default AboutCover;
