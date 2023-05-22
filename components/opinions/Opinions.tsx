import { SystemContext } from "@molitio/ui-core";
import React from "react";
import { NextImage, StyledLinearGradient, IconGroup } from "../common";
import {
  StyledOpinions,
  StyledOpinionText,
  StyledOpinionTitle,
  StyledOpinion,
  StyledOpininsLogo,
  StyledOpinionsMainTitle,
  StyledOpinionsIconContainer,
} from "./style";

const Opinions: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const opinionLeafs = systemContext?.contentRoot?.opinions?.leafs;
  const textContent = opinionLeafs?.customerOpinions?.textContent;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledOpinions>
      <StyledLinearGradient
        direction="top"
        variation="reversePartial"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />
      <StyledLinearGradient
        direction="top"
        variation="partial"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />

      <StyledOpinionsIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold}
          starCount={5}
        />
      </StyledOpinionsIconContainer>

      <StyledOpinionsMainTitle>
        {textContent?.title ?? ""}
      </StyledOpinionsMainTitle>

      <StyledOpinion>
        <NextImage
          containerPositioning={{
            position: "relative",
            margin: "auto",
          }}
          containerDimensions={{ width: "120px", height: "120px" }}
          imageProps={{
            src: commonAssetUrls?.stockPersonAvatar ?? "",
            alt: "person-avatar",
            fill: true,
          }}
          imageVisual={{
            borderRadius: "50%",
          }}
        />
        <StyledOpinionText>
          {textContent?.defaultCostumerOpinion ?? ""}
        </StyledOpinionText>
        <StyledOpinionTitle>
          {textContent?.defaultCustomerName ?? ""}
        </StyledOpinionTitle>
      </StyledOpinion>

      <StyledOpinion>
        <NextImage
          containerPositioning={{
            position: "relative",
            margin: "auto",
          }}
          containerDimensions={{ width: "120px", height: "120px" }}
          imageProps={{
            src: commonAssetUrls?.stockPersonAvatar ?? "",
            alt: "person-avatar",
            fill: true,
          }}
          imageVisual={{
            borderRadius: "50%",
          }}
        />
        <StyledOpinionText>
          {textContent?.defaultCostumerOpinion ?? ""}
        </StyledOpinionText>
        <StyledOpinionTitle>
          {textContent?.defaultCustomerName ?? ""}
        </StyledOpinionTitle>
      </StyledOpinion>
      <StyledOpininsLogo>
        <NextImage
          containerDimensions={{ width: "150px", height: "150px" }}
          containerPositioning={{ position: "relative" }}
          imageProps={{
            src: commonAssetUrls?.logo ?? "",
            alt: "logo",
            fill: true,
          }}
        />
      </StyledOpininsLogo>
    </StyledOpinions>
  );
};

export default Opinions;
