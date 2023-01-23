import React from "react";
import { IconWhiteGroup } from "../common";
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
  MainOpinionsTitle
} from "./style";

const Opinions: React.FC = () => {
  return (
    <OpinionsMainContainer>
      <StyledLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
        }
      />
      <StyledMiddleLayer />
      <RotateLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
        }
      />

      <StyledOpinionsIconContainer>
        <IconWhiteGroup
          fill={"#ffffff"}
          dx={"1"}
          dy={"1"}
          stdDeviation={"1"}
          floodOpacity={"1"}
        />
      </StyledOpinionsIconContainer>

      <MainOpinionsTitle className="title">{"VÉLEMÉNYEK"}</MainOpinionsTitle>

      <InternalOpinionsContentContainer>
        <ServiceEvaluatorContainer>
          <ServiceEvaluatorContainerImage
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/person2.png"
            }
          />
          <ServiceEvaluatorContainerText>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.consectetur adipiscing elit."
            }
          </ServiceEvaluatorContainerText>
          <ServiceEvaluatorContainerName>
            {"Lorem Ipsum"}
          </ServiceEvaluatorContainerName>
        </ServiceEvaluatorContainer>
        <ServiceEvaluatorContainer>
          <ServiceEvaluatorContainerImage
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/person2.png"
            }
          />
          <ServiceEvaluatorContainerText>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.consectetur adipiscing elit."
            }
          </ServiceEvaluatorContainerText>
          <ServiceEvaluatorContainerName>
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

export default Opinions;
