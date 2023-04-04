import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  StyledPartners,
  StyledPartnersTitle,
  StyledPartnersContentContainer,
  StyledPartnersImageContainer,
  NextImage,
} from "../common";

const Partners: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const partnersLeafs = systemContext?.contentRoot?.partners?.leafs;
  const textContent = partnersLeafs?.cover?.textContent;
  const assetUrls = partnersLeafs?.cover?.assetUrls;

  return (
    <StyledPartners>
      <StyledPartnersTitle>{textContent?.title ?? ""}</StyledPartnersTitle>
      <StyledPartnersContentContainer>
        <StyledPartnersImageContainer>
          <NextImage
            containerPositioning={{
              position: "relative",
            }}
            containerDimensions={{ width: "10em", height: "10em" }}
            imageProps={{
              src: assetUrls?.mLogo ?? "",
              alt: "m-logo",
            }}
          />
        </StyledPartnersImageContainer>
        <StyledPartnersImageContainer>
          <NextImage
            containerPositioning={{
              position: "relative",
            }}
            containerDimensions={{ width: "12em", height: "10em" }}
            imageProps={{
              src: assetUrls?.houseLogo ?? "",
              alt: "house-logo",
            }}
          />
        </StyledPartnersImageContainer>
        <StyledPartnersImageContainer>
          <NextImage
            containerPositioning={{
              position: "relative",
            }}
            containerDimensions={{ width: "100%", height: "100%" }}
            imageProps={{
              src: assetUrls?.brandLogo ?? "",
              alt: "brand-logo",
            }}
          />
        </StyledPartnersImageContainer>
        <StyledPartnersImageContainer>
          <NextImage
            containerPositioning={{
              position: "relative",
            }}
            containerDimensions={{ width: "10em", height: "10em" }}
            imageProps={{
              src: assetUrls?.officeLogo ?? "",
              alt: "office-logo",
            }}
          />
        </StyledPartnersImageContainer>
      </StyledPartnersContentContainer>
    </StyledPartners>
  );
};

export default Partners;
