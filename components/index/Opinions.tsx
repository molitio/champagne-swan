import { SystemContext } from "@molitio/ui-core";
import React from "react";
import { IconGroup } from "../common/IconGroup";
import {
  OpinionsMainContainer,
  StyledOpinionsIconContainer,
  StyledLayer,
  StyledMiddleLayer,
  RotateLayer,
  InternalOpinionsContentContainer,
  ServiceEvaluatorContainerImage,
  ServiceEvaluatorContainerText,
  ServiceEvaluatorContainerName,
  ServiceEvaluatorContainer,
  StyledOpininsLogoImage,
  MainOpinionsTitle,
} from "./style";

const Opinions: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const opinionLeafs = systemContext?.contentRoot?.opinions?.leafs;
  const textContent = opinionLeafs?.customerOpinions?.textContent;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <OpinionsMainContainer mobileHeight={"1400px"}>
      <StyledLayer src={commonAssetUrls?.gradientBottom ?? ""} />
      <StyledMiddleLayer />
      <RotateLayer src={commonAssetUrls?.gradientBottom ?? ""} />

      <StyledOpinionsIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.white ?? ""}
          starCount={5}
        />
      </StyledOpinionsIconContainer>

      <MainOpinionsTitle>{textContent?.title ?? ""}</MainOpinionsTitle>

      <InternalOpinionsContentContainer>
        <ServiceEvaluatorContainer>
          <ServiceEvaluatorContainerImage
            src={commonAssetUrls?.stockPersonAvatar ?? ""}
          />
          <ServiceEvaluatorContainerText>
            {textContent?.defaultCostumerOpinion ?? ""}
          </ServiceEvaluatorContainerText>
          <ServiceEvaluatorContainerName>
            {textContent?.defaultCustomerName ?? ""}
          </ServiceEvaluatorContainerName>
        </ServiceEvaluatorContainer>
        <ServiceEvaluatorContainer>
          <ServiceEvaluatorContainerImage
            src={commonAssetUrls?.stockPersonAvatar ?? ""}
          />
          <ServiceEvaluatorContainerText>
            {textContent?.defaultCostumerOpinion ?? ""}
          </ServiceEvaluatorContainerText>
          <ServiceEvaluatorContainerName>
            {textContent?.defaultCustomerName ?? ""}
          </ServiceEvaluatorContainerName>
        </ServiceEvaluatorContainer>
      </InternalOpinionsContentContainer>

      <StyledOpininsLogoImage src={commonAssetUrls?.logo ?? ""} alt="logo" />
    </OpinionsMainContainer>
  );
};

export default Opinions;
