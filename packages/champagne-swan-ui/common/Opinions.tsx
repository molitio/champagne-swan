import React from "react";
import styled from "styled-components";
import { IconWhiteGroup } from "../components";

const OpinionsMainContainer = styled.div`
  position: relative;
  height: 2200px;
`;

const StyledIconContainer = styled.div`
  position: relative;
  padding-top: 5em;
  padding-bottom: 3em;
`;

const StyledLayer = styled.img`
  position: absolute;
  height: 600px;
  margin: 0;
  padding: 0;
  left: 0;
  width: 100%;
  align-items: center;
`;

const RotateLayer = styled.img`
  position: absolute;
  height: 600px;
  margin-top: 0px;
  border-bottom: 1px solid rgb(167, 203, 212);
  padding: 0;
  top: 600px;
  left: 0;
  width: 100%;
  align-items: center;
  transform: rotate(180deg);
`;

const MainTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 105px;
  opacity: 0.5;
  margin-top: 0.4em;
  margin-bottom: 1em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

const OurPartnersTitle = styled.h1`
  text-align: center;
  color: #C1A87D;
  font-weight: 400;
  font-size: 105px;
  margin-top: 1.8em;
  margin-bottom: 1em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

const OurPartnersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1440px) {
    margin: auto;
  }
`;

const PartnersImageContainer = styled.div`
  display: flex;
justify-content: space-around;
  


  margin-top: 40px;
  margin-bottom: 40px;

  flex: 25%;

  @media (max-width: 1440px) {
    flex: 50%;
  }
`;

const PartnerImg = styled.img`
     height: 130px;
     width: 130px;
`;

const HouseLogo = styled.img`
     height: 130px;
     width: 190px;
`;
const BrandLogo = styled.img`
     height: 130px;
     width: 150px;
`;

const SkillName = styled.h4`
  margin: 0;
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
  margin-top: 60px;
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

const StyledLogoPng = styled.img`
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
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_hero.png"
        }
      />
      <RotateLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_hero.png"
        }
      />

      <StyledIconContainer>
        <IconWhiteGroup
          fill={"#ffffff"}
          /*    dx={"0"}
          dy={"0"}
          stdDeviation={"0"}
          floodOpacity={"1"} */
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

      <StyledLogoPng
        src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_submark.svg"
        alt="logo"
      />
      <OurPartnersTitle className="title">{"PARTNEREINK"}</OurPartnersTitle>
      <OurPartnersContainer>
        <PartnersImageContainer>
          <PartnerImg src={"https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/mlogo.png"} />
        </PartnersImageContainer>
        <PartnersImageContainer>
          <HouseLogo src={"https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/houselogo.png"}/>
        </PartnersImageContainer>
        <PartnersImageContainer>
          <BrandLogo src={"https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/brand.png"}/>
        </PartnersImageContainer>
        <PartnersImageContainer>
          <PartnerImg src={"https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officelogo.png"}/>
        </PartnersImageContainer>
      </OurPartnersContainer>

    </OpinionsMainContainer>
  );
};

export default Opinions;
