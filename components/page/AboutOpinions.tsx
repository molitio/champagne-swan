import React from "react";
import {
  OpinionsMainContainer,
  InternalOpinionsContentContainer,
  ServiceEvaluatorContainerText,
  ServiceEvaluatorContainerName,
  ServiceEvaluatorContainer,
  StyledOpininsLogoImage,
  MainOpinionsTitle,
} from "./style";

const AboutOpinions: React.FC = () => {
  return (
    <OpinionsMainContainer>
      <MainOpinionsTitle padding={"6em 0 0.3em 0"} color={"#C1A87D"} className="title">
        {"KOLLÉGÁINK MONDTÁK"}
      </MainOpinionsTitle>
      <InternalOpinionsContentContainer>
        <ServiceEvaluatorContainer>
          <ServiceEvaluatorContainerText color={"#C1A87D"}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.consectetur adipiscing elit."
            }
          </ServiceEvaluatorContainerText>
          <ServiceEvaluatorContainerName color={"#C1A87D"}>
            {"Ipsum Lorem"}
          </ServiceEvaluatorContainerName>
        </ServiceEvaluatorContainer>
        <ServiceEvaluatorContainer>
          <ServiceEvaluatorContainerText color={"#C1A87D"}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.consectetur adipiscing elit."
            }
          </ServiceEvaluatorContainerText>
          <ServiceEvaluatorContainerName color={"#C1A87D"}>
            {"Ipsum Lorem"}
          </ServiceEvaluatorContainerName>
        </ServiceEvaluatorContainer>
      </InternalOpinionsContentContainer>

      <StyledOpininsLogoImage
        src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_submark.svg"
        alt="logo"
      />
    </OpinionsMainContainer>
  );
};

export default AboutOpinions;
