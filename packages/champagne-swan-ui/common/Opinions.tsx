import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IconWhiteGroup } from "../components";

const OpinionsMainContainer = styled.div`
  position: relative;
  height: 1200px;

  @media (max-width: 1440px) {
    height: 1400px;
  }
`;

const StyledIconContainer = styled.div`
  position: relative;
  padding-top: 6em;
  padding-bottom: 3em;
`;

const StyledLayer = styled.img`
  position: absolute;
  height: 400px;
  margin: 0;
  padding: 0;
  left: 0;
  width: 100%;
  align-items: center;
`;

const StyledMiddleLayer = styled.div`
  position: absolute;
  height: 236px;
  top: 400px;
  width: 100%;
  background: #c1dadf;

  @media (max-width: 1440px) {
    height: 834x;
  }
`;

const RotateLayer = styled.img`
  position: absolute;
  height: 800px;
  margin-top: 0px;
  padding: 0;
  top: 636px;
  left: 0;
  width: 100%;
  align-items: center;
  transform: rotate(180deg);
`;


const MainTitle = styled.h1`
  position: relative;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-size: 105px;
  margin-top: 0.3em;
  margin-bottom: 0em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

const InternalContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column;
  }
`;

const ServiceEvaluatorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
  margin-left: 100px;
`;

const ServiceEvaluatorContainerImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 130px;
  height: 120px;
  border-radius: 50px;
  padding: 0px;
  margin-bottom: 30px;
`;
const ServiceEvaluatorContainerText = styled.p`
  width: 320px;
  color: #0c7b93;
  text-align: center;
  margin-bottom: 30px;
`;
const ServiceEvaluatorContainerName = styled.h1`
  text-align: center;
  color: #0c7b93;
`;

const StyledLogoImage = styled.img`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 130px;
  margin: auto;
`;

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

      <StyledIconContainer>
        <IconWhiteGroup
          fill={"#ffffff"}
          dx={"1"}
          dy={"1"}
          stdDeviation={"1"}
          floodOpacity={"1"}
        />
      </StyledIconContainer>

      <MainTitle className="title">{"VÉLEMÉNYEK"}</MainTitle>

      <InternalContentContainer>
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
      </InternalContentContainer>

      <StyledLogoImage
        src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_submark.svg"
        alt="logo"
      />
    </OpinionsMainContainer>
  );
};

export default Opinions;
