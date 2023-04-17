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
        }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="reversePartial"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 0.6 }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 0.8 }}
      />
      <StyledCoverContent>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
        <StyledMainTitle>{textContent?.title ?? ""}</StyledMainTitle>
        <StyledSubTitle>{textContent?.subTitle ?? ""}</StyledSubTitle>
        <StyledDescription>
          {useLineBreakParser(textContent?.description ?? "")}
        </StyledDescription>

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
