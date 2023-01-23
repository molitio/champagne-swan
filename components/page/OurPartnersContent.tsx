import React from "react";
import {
  OurPartnersContainer,
  OurPartnersTitle,
  OurPartnersContentContainer,
  PartnersImageContainer,
  PartnerImg,
  HouseLogo,
  BrandLogo
} from "./style";

const OurPartnersContent: React.FC = () => {
  return (
    <OurPartnersContainer>
      <OurPartnersTitle className="title">{"PARTNEREINK"}</OurPartnersTitle>
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
    </OurPartnersContainer>
  );
};

export default OurPartnersContent;
