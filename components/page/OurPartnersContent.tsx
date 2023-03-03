import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  OurPartnersContainer,
  OurPartnersTitle,
  OurPartnersContentContainer,
  PartnersImageContainer,
  PartnerImg,
  HouseLogo,
  BrandLogo,
  SimpledLayer,
} from "./style";

const OurPartnersContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const partnersLeafs = systemContext?.contentRoot?.partners?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = partnersLeafs?.cover?.textContent;
  const assetUrls = partnersLeafs?.cover?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <OurPartnersContainer>
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
      <SimpledLayer top={"4px"} src={commonAssetUrls?.gradientBottom ?? ""} />
    </OurPartnersContainer>
  );
};

export default OurPartnersContent;
