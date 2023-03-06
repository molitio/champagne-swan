import React from "react";
import { ChampagneSwanContext } from "../context";

import {
  ServicesStyledLayerSegment,
  SimpleServicesLayer,
  RotatedServicesLayer,
  ServicesStyledImg,
  ServicesWaterSplash,
  StyledButtonContainer,
  ServicesHeroSegmentContainer,
  PremiumLayerContainer,
  HeroContactLink,
  HeroWaterSplash,
} from "./style";

import { StyledMainTitle, StyledDescription } from "./style";

/* import SelectForm from "../common/SelectForm"; */
import { SystemContext } from "@molitio/ui-core";
import Link from "next/link";

const ServicesHeroSegment: React.FC = (props) => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
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
            <ServicesHeroSegmentContainer>
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
                <HeroContactLink
                  key={assetUrls?.cover ?? ""}
                  href={assetUrls?.cover ?? ""}
                >
                  {textContent?.introCta ?? ""}
                </HeroContactLink>
                <ServicesWaterSplash src={commonAssetUrls?.waterSplash ?? ""} />
              </StyledButtonContainer>
            </ServicesHeroSegmentContainer>
          ) : null}
        </ServicesStyledLayerSegment>
      </ServicesStyledImg>
      <PremiumLayerContainer src={commonAssetUrls?.gradientTop ?? ""} />
    </>
  );
};

export default ServicesHeroSegment;
