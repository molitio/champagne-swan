import React from "react";
import { ChampagneSwanContext } from "../context";

import {
  ServicesStyledLayerSegment,
  SimpleServicesLayer,
  RotatedServicesLayer,
  ServicesStyledImg,
  ServicesWaterSplash,
  ServicesCoverContainer,
} from "./style";
import {
  PremiumLayerContainer,
  StyledButtonContainer,
  StyledCoverContactLink,
  StyledMainTitle,
  StyledDescription,
} from "../index";

/* import SelectForm from "../common/SelectForm"; */
import { SystemContext } from "@molitio/ui-core";

const ServicesCover: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
  const textContent = servicesLeafs?.cover?.textContent;
  const assetUrls = servicesLeafs?.cover?.assetUrls;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <>
      <ServicesStyledImg>
        <SimpleServicesLayer src={commonAssetUrls?.gradientBottom ?? ""} />
        <RotatedServicesLayer src={commonAssetUrls?.gradientTop ?? ""} />
        <ServicesStyledLayerSegment>
          {!navBarExpanded ? (
            <ServicesCoverContainer>
              <StyledMainTitle color="#0C7B93">
                {textContent?.title ?? ""}
              </StyledMainTitle>
              <StyledDescription textShadow="0px 0px 0px " color="#0C7B93">
                {textContent?.introText ?? ""}
              </StyledDescription>
              {/*   <br />
              <StyledDescription textShadow="0px 0px 0px " color="#0C7B93">
                {warning}
              </StyledDescription> */}
              {/* TODO: fix select form */}
              {/*         <SelectForm /> */}
              <StyledButtonContainer>
                <StyledCoverContactLink
                  key={assetUrls?.cover ?? ""}
                  href={assetUrls?.cover ?? ""}
                >
                  {textContent?.introCta ?? ""}
                </StyledCoverContactLink>
                <ServicesWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
              </StyledButtonContainer>
            </ServicesCoverContainer>
          ) : null}
        </ServicesStyledLayerSegment>
      </ServicesStyledImg>
      <PremiumLayerContainer src={commonAssetUrls?.gradientTop ?? ""} />
    </>
  );
};

export default ServicesCover;
