import React from "react";
import {
  OpinionsMainContainer,
  InternalOpinionsContentContainer,
  ServiceEvaluatorContainerText,
  ServiceEvaluatorContainerName,
  ServiceEvaluatorContainer,
  StyledOpininsLogoImage,
  MainOpinionsTitle,
  SimpledLayer
} from "./style";

const AboutOpinions: React.FC = () => {
  return (
    <>
      <OpinionsMainContainer tabletHeight={'600px'} height={'600px'} mobileHeight={'600px'}>
        <MainOpinionsTitle
          padding={" 0em 0 0.3em 0"}
          color={"#C1A87D"}
          className="title"
        >
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
      </OpinionsMainContainer>
      <SimpledLayer
       top={"4px"}
       src={
         "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
       }
      />
    </>
  );
};

export default AboutOpinions;
