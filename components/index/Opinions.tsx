import { SystemContext } from "@molitio/ui-core";
import React from "react";
import { NextImage } from "../common";
import { IconGroup } from "../common/IconGroup";
import {
  StyledOpinions,
  StyledLayer,
  StyledMiddleLayer,
  RotateLayer,
  InternalOpinionsContentContainer,
  ServiceEvaluatorContainerImage,
  ServiceEvaluatorContainerText,
  ServiceEvaluatorContainerName,
  StyledContentContainer,
  StyledOpininsLogoImage,
  StyledMainTitle,
  StyledIconContainer,
} from "./style";

const Opinions: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const opinionLeafs = systemContext?.contentRoot?.opinions?.leafs;
  const textContent = opinionLeafs?.customerOpinions?.textContent;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledOpinions>
      {/*       <StyledLayer src={commonAssetUrls?.gradientBottom ?? ""} />
      <StyledMiddleLayer />
      <RotateLayer src={commonAssetUrls?.gradientBottom ?? ""} /> */}

      <StyledIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.white}
          starCount={5}
        />
      </StyledIconContainer>

      <StyledMainTitle>{textContent?.title ?? ""}</StyledMainTitle>

      <StyledContentContainer>
        <NextImage
          containerPositioning={{
            position: "relative",
          }}
          containerDimensions={{ width: "120px", height: "120px" }}
          imageProps={{
            src: commonAssetUrls?.stockPersonAvatar ?? "",
            alt: "water-splash",
          }}
          imageVisual={{
            borderRadius: "50%",
          }}
        />
        {/*       <ServiceEvaluatorContainerImage
            src={commonAssetUrls?.stockPersonAvatar ?? ""}
          /> */}
        <ServiceEvaluatorContainerText>
          {textContent?.defaultCostumerOpinion ?? ""}
        </ServiceEvaluatorContainerText>
        <ServiceEvaluatorContainerName>
          {textContent?.defaultCustomerName ?? ""}
        </ServiceEvaluatorContainerName>
      </StyledContentContainer>
      <StyledContentContainer>
        <NextImage
          containerPositioning={{
            position: "relative",
          }}
          containerDimensions={{ width: "120px", height: "120px" }}
          imageProps={{
            src: commonAssetUrls?.stockPersonAvatar ?? "",
            alt: "water-splash",
          }}
          imageVisual={{
            borderRadius: "50%",
          }}
        />
        <ServiceEvaluatorContainerText>
          {textContent?.defaultCostumerOpinion ?? ""}
        </ServiceEvaluatorContainerText>
        <ServiceEvaluatorContainerName>
          {textContent?.defaultCustomerName ?? ""}
        </ServiceEvaluatorContainerName>
      </StyledContentContainer>

      <StyledOpininsLogoImage src={commonAssetUrls?.logo ?? ""} alt="logo" />
    </StyledOpinions>
  );
};

export default Opinions;
