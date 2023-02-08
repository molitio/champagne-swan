import React from "react";
import {
  OurPartnersContainer,
  OurPartnersTitle,
  OurPartnersContentContainer,
  PartnersImageContainer,
  PartnerImg,
  HouseLogo,
  BrandLogo,
  SimpledLayer                                              
} from "./style";

const OurPartnersContent: React.FC = () => {
  return (
    <OurPartnersContainer>
      <OurPartnersTitle>{"PARTNEREINK"}</OurPartnersTitle>
      <OurPartnersContentContainer>
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
      </OurPartnersContentContainer>
      <SimpledLayer
        top={"4px"}
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
        }
      />
    </OurPartnersContainer>
  );
};

export default OurPartnersContent;
