import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  StyledPartners,
  OurPartnersTitle,
  OurPartnersContentContainer,
  PartnersImageContainer,
  PartnerImg,
  HouseLogo,
  BrandLogo,
} from "../common/style";

const Partners: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const partnersLeafs = systemContext?.contentRoot?.partners?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = partnersLeafs?.cover?.textContent;
  const assetUrls = partnersLeafs?.cover?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledPartners>
      <OurPartnersTitle>{textContent?.title ?? ""}</OurPartnersTitle>
      <OurPartnersContentContainer>
        <PartnersImageContainer>
          <PartnerImg src={assetUrls?.mLogo ?? ""} />
        </PartnersImageContainer>
        <PartnersImageContainer>
          <HouseLogo src={assetUrls?.houseLogo ?? ""} />
        </PartnersImageContainer>
        <PartnersImageContainer>
          <BrandLogo src={assetUrls?.brandLogo ?? ""} />
        </PartnersImageContainer>
        <PartnersImageContainer>
          <PartnerImg src={assetUrls?.officeLogo ?? ""} />
        </PartnersImageContainer>
      </OurPartnersContentContainer>
      {/* 

TODO: this layer will be replaced when next/image is implemented


<SimpledLayer top={"4px"} src={commonAssetUrls?.gradientBottom ?? ""} /> */}
    </StyledPartners>
  );
};

export default Partners;
