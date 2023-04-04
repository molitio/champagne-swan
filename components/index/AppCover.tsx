import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  NextImage,
  StyledLinearGradient,
  StyledSegmentSection,
} from "../common";
import { useLineBreakParser } from "../utils";
import {
  StyledCoverContentContainer,
  StyledCoverContactLink,
  StyledButtonContainer,
  StyledCallToAction,
  StyledDescription,
  StyledMainTitle,
  StyledSubTitle,
  StyledAppCover,
} from "./style";

const AppCover: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};

  const heroLeafs = systemContext?.contentRoot?.home?.leafs;
  const textContent = heroLeafs?.hero?.textContent;
  const assetUrls = heroLeafs?.hero?.assetUrls;

  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  const theme = systemContext?.theme;

  return (
    <StyledAppCover>
      <NextImage
        containerDimensions={{
          height: theme?.dimensions?.page?.height ?? "100vh",
          width: "100%",
        }}
        imageProps={{
          src: assetUrls?.heroBackground ?? "",
          alt: "cover-image",
        }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="reversePartial"
        visual={{ opacity: 1 }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        visual={{ opacity: 1 }}
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
                <StyledCoverContactLink
                  key={navTree?.contact?.path ?? ""}
                  href={navTree?.contact?.path ?? ""}
                >
                  {textContent?.moreInfoButton ?? ""}
                </StyledCoverContactLink>
                <NextImage
                  containerPositioning={{
                    bottom: "-80px",
                    position: "absolute",
                  }}
                  containerDimensions={{
                    width: "250px",
                    height: "250px",
                  }}
                  imageProps={{
                    src: commonAssetUrls?.waterSplash ?? "",
                    alt: "water-splash",
                  }}
                />
              </StyledButtonContainer>
            }
          </StyledCallToAction>
        </div>
      </StyledCoverContentContainer>
    </StyledAppCover>
  );
};

export default AppCover;
