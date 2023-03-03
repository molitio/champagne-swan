import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ChampagneSwanContext } from "../context";
import {
  StyledLayerSegment,
  RotatedLayer,
  ImageLayer,
  ContactStyledImg,
  StyledHeroSegmentContainer,
  FormText,
  MainTitle,
} from "./style";

const ContactPageHero: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <ContactStyledImg>
      <ImageLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <RotatedLayer src={commonAssetUrls?.gradientTop ?? ""} />
      <StyledLayerSegment>
        {!navBarExpanded ? (
          <StyledHeroSegmentContainer>
            <MainTitle>{textContent?.title ?? ""}</MainTitle>
            <FormText>{textContent?.formText ?? ""}</FormText>
          </StyledHeroSegmentContainer>
        ) : null}
      </StyledLayerSegment>
    </ContactStyledImg>
  );
};

export default ContactPageHero;
