import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  NextImage,
  StyledLinearGradient,
  StyledCoverContent,
} from "../common";
import { useLineBreakParser } from "../utils";
import {
  StyledCoverContactLink,
  StyledButtonContainer,
  StyledAppCoverDescription,
  StyledAppCover,
  StyledAppCoverMainTitle,
} from "./style";

const AppCover: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};

  const heroLeafs = systemContext?.contentRoot?.home?.leafs;
  const textContent = heroLeafs?.hero?.textContent;
  const assetUrls = heroLeafs?.hero?.assetUrls;

  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledAppCover>
      <NextImage
        containerDimensions={{
          height: "80vh",
          width: "100%",
        }}
        containerPositioning={{
          position: "relative",
          top: "-2em",
        }}
        imagePositioning={{
          objectFit: "cover",
        }}
        imageProps={{
          src: assetUrls?.heroBackground ?? "",
          alt: "cover-image",
          fill: true,
        }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="appCoverBottom"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />
      <StyledLinearGradient
        direction="top"
        variation="appCoverTop"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />
      <StyledCoverContent>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
        <StyledAppCoverMainTitle>
          {textContent?.title ?? ""}
        </StyledAppCoverMainTitle>
        <StyledAppCoverDescription>
          {useLineBreakParser(textContent?.description ?? "")}
        </StyledAppCoverDescription>

        <StyledButtonContainer>
          <NextImage
            containerPositioning={{
              right: "-80px",
              bottom: "-120px",
              position: "absolute",
            }}
            containerDimensions={{
              width: "250px",
              height: "250px",
            }}
            imageProps={{
              src: commonAssetUrls?.waterSplash ?? "",
              alt: "water-splash",
              fill: true,
            }}
          />
          <StyledCoverContactLink
            key={navTree?.contact?.path ?? ""}
            href={navTree?.contact?.path ?? ""}
          >
            {textContent?.moreInfoButton ?? ""}
          </StyledCoverContactLink>
        </StyledButtonContainer>
      </StyledCoverContent>
    </StyledAppCover>
  );
};

export default AppCover;
