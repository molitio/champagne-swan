import { SystemContext } from "@molitio/ui-core";
import React from "react";
import { NextImage, StyledLinearGradient } from "../common";
import { IconGroup } from "../common/IconGroup";
import {
  StyledOpinions,
  StyledOpinionText,
  StyledOpinionTitle,
  StyledOpinionsContentContainer,
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
        opacity={1}
      />
      <StyledLinearGradient direction="top" variation="partial" opacity={1} />

      <StyledOpinionsIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold}
          starCount={5}
        />
      </StyledOpinionsIconContainer>

      <StyledOpinionsMainTitle>
        {textContent?.title ?? ""}
      </StyledOpinionsMainTitle>

      <StyledOpinionsContentContainer>
        <NextImage
          containerPositioning={{
            position: "relative",
          }}
          containerDimensions={{ width: "120px", height: "120px" }}
          imageProps={{
            src: commonAssetUrls?.stockPersonAvatar ?? "",
            alt: "person-avatar",
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
      </StyledOpinionsContentContainer>

      <StyledOpinionsContentContainer>
        <NextImage
          containerPositioning={{
            position: "relative",
          }}
          containerDimensions={{ width: "120px", height: "120px" }}
          imageProps={{
            src: commonAssetUrls?.stockPersonAvatar ?? "",
            alt: "person-avatar",
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
      </StyledOpinionsContentContainer>
      <StyledOpininsLogo>
        <NextImage
          containerDimensions={{ width: "150px", height: "150px" }}
          containerPositioning={{ position: "relative" }}
          imageProps={{
            src: commonAssetUrls?.logo ?? "",
            alt: "logo",
          }}
        />
      </StyledOpininsLogo>
    </StyledOpinions>
  );
};

export default Opinions;
