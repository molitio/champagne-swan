import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  StyledOpinions,
  InternalOpinionsContentContainer,
  ServiceEvaluatorContainerText,
  ServiceEvaluatorContainerName,
  StyledContentContainer,
  StyledMainTitle,
} from "../index";

const AboutOpinions: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const textContent = aboutLeafs?.opinions?.textContent;

  return (
    <>
      <StyledOpinions
      /* TODO: trace back the effects of the refactor */
      /*         tabletHeight={"600px"}
        height={"600px"}
        mobileHeight={"600px"} */
      >
        <StyledMainTitle
        /*           padding={" 0em 0 0.3em 0"}
          color={"#C1A87D"}
          className="title" */
        >
          {textContent?.title ?? ""}
        </StyledMainTitle>
        <InternalOpinionsContentContainer>
          <StyledContentContainer>
            <ServiceEvaluatorContainerText color={"#C1A87D"}>
              {textContent?.defaultCustomerOpinion ?? ""}
            </ServiceEvaluatorContainerText>
            <ServiceEvaluatorContainerName color={"#C1A87D"}>
              {textContent?.defaultCustomerName ?? ""}
            </ServiceEvaluatorContainerName>
          </StyledContentContainer>
          <StyledContentContainer>
            <ServiceEvaluatorContainerText color={"#C1A87D"}>
              {textContent?.defaultCustomerOpinion ?? ""}
            </ServiceEvaluatorContainerText>
            <ServiceEvaluatorContainerName color={"#C1A87D"}>
              {textContent?.defaultCustomerName ?? ""}
            </ServiceEvaluatorContainerName>
          </StyledContentContainer>
        </InternalOpinionsContentContainer>
      </StyledOpinions>

      {/*   

TODO: this layer will be replaced when next/image is implemented

<SimpledLayer top={"4px"} src={commonAssetUrls?.gradientBottom ?? ""} /> */}
    </>
  );
};

export default AboutOpinions;
