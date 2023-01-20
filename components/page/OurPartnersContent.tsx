import styled from "styled-components";
import React from "react";

const OurPartnerContainer = styled.div``;

const OurPartnersTitle = styled.h1`
  position: relative;
  text-align: center;
  color: #c1a87d;
  font-weight: 400;
  font-size: 105px;
  margin-top: 0em;
  margin-bottom: 1em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

const OurPartnersConten = styled.div`
  margin-top: 180px;
  margin-bottom: 140px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1440px) {

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

const OurPartnersContent: React.FC = () => {
  return (
    <OurPartnerContainer>
      <OurPartnersTitle className="title">{"PARTNEREINK"}</OurPartnersTitle>
      <OurPartnersConten>
        <PartnersImageContainer>
          <PartnerImg
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/mlogo.png"
            }
          />
        </PartnersImageContainer>
        <PartnersImageContainer>
          <HouseLogo
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/houselogo.png"
            }
          />
        </PartnersImageContainer>
        <PartnersImageContainer>
          <BrandLogo
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/brand.png"
            }
          />
        </PartnersImageContainer>
        <PartnersImageContainer>
          <PartnerImg
            src={
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officelogo.png"
            }
          />
        </PartnersImageContainer>
      </OurPartnersConten>
    </OurPartnerContainer>
  );
};

export default OurPartnersContent;
