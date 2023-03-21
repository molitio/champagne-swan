import React from "react";
import {
  StyledCallToAction,
  StyledDescription,
  StyledMainTitle,
  SystemContext,
} from "@molitio/ui-core";
import {
  IconGroup,
  NextImage,
  StyledLinearGradient,
  StyledSegmentSection,
  HeroWaterSplash,
  StyledCoverContentContainer,
  HeroContactLink,
  StyledButtonContainer,
} from ".";
import { useLineBreakParser } from "../utils";
import { StyledSubTitle } from "./style";

const AppCover: React.FC = () => {
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
      <StyledCoverContentContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
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
    </StyledSegmentSection>
  );
};

export default AppCover;
