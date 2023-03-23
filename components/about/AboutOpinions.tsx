import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  OpinionsMainContainer,
  InternalOpinionsContentContainer,
  ServiceEvaluatorContainerText,
  ServiceEvaluatorContainerName,
  ServiceEvaluatorContainer,
  MainOpinionsTitle,
} from "../index";

const AboutOpinions: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = aboutLeafs?.opinions?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <>
      <OpinionsMainContainer
        tabletHeight={"600px"}
        height={"600px"}
        mobileHeight={"600px"}
      >
        <MainOpinionsTitle
          padding={" 0em 0 0.3em 0"}
          color={"#C1A87D"}
          className="title"
        >
          {textContent?.title ?? ""}
        </MainOpinionsTitle>
        <InternalOpinionsContentContainer>
          <ServiceEvaluatorContainer>
            <ServiceEvaluatorContainerText color={"#C1A87D"}>
              {textContent?.defaultCustomerOpinion ?? ""}
            </ServiceEvaluatorContainerText>
            <ServiceEvaluatorContainerName color={"#C1A87D"}>
              {textContent?.defaultCustomerName ?? ""}
            </ServiceEvaluatorContainerName>
          </ServiceEvaluatorContainer>
          <ServiceEvaluatorContainer>
            <ServiceEvaluatorContainerText color={"#C1A87D"}>
              {textContent?.defaultCustomerOpinion ?? ""}
            </ServiceEvaluatorContainerText>
            <ServiceEvaluatorContainerName color={"#C1A87D"}>
              {textContent?.defaultCustomerName ?? ""}
            </ServiceEvaluatorContainerName>
          </ServiceEvaluatorContainer>
        </InternalOpinionsContentContainer>
      </OpinionsMainContainer>

      {/*   

TODO: this layer will be replaced when next/image is implemented

<SimpledLayer top={"4px"} src={commonAssetUrls?.gradientBottom ?? ""} /> */}
    </>
  );
};

export default AboutOpinions;
