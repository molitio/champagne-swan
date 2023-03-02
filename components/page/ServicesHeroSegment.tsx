import React from "react";
import HeroSegmentContent from "./HeroSegmentContent";
import { ChampagneSwanContext } from "../context";

import {
  ServicesStyledLayerSegment,
  SimpleServicesLayer,
  RotatedServicesLayer,
  ServicesStyledImg,
  ServicesWaterSplash,
  ServicesHeroSegmentContainer,
  PremiumLayerContainer,
} from "./style";

import { StyledMainTitle, StyledDescription } from "./style";

import SelectForm from "../common/SelectForm";

const ServicesHeroSegment: React.FC = (props) => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;

  const content = `Válassza ki a tisztítandó felületet és annak nagyságát, majd a “SZÁMOL” gombra kattintva tudja meg a szolgáltatás árát! Görgessen lejjebb és ismerje meg szolgáltatásainkat, majd foglalja le online időpontját az oldal alján!`;
  const warning = `*a kalkulált árak tájékoztató jellegűek és nem minősülnek ajánlattételnek!`;

  return (
    <>
      <ServicesStyledImg>
        <SimpleServicesLayer
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
          }
        />
        <RotatedServicesLayer
          src={
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png"
          }
        />
        <ServicesStyledLayerSegment>
          {!navBarExpanded ? (
            <ServicesHeroSegmentContainer>
              <StyledMainTitle color="#0C7B93">{`A TISZTASÁG SZINONIMÁJA`}</StyledMainTitle>
              <StyledDescription textShadow="0px 0px 0px " color="#0C7B93">
                {content}
              </StyledDescription>
              {/*   <br />
              <StyledDescription textShadow="0px 0px 0px " color="#0C7B93">
                {warning}
              </StyledDescription> */}
              {/* TODO: fix select form */}
              {/*         <SelectForm /> */}
            </ServicesHeroSegmentContainer>
          ) : null}
        </ServicesStyledLayerSegment>
      </ServicesStyledImg>
      <PremiumLayerContainer src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png" />
    </>
  );
};

export default ServicesHeroSegment;
