import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { ChampagneSwanContext } from "../context";
import {
  RotatedLayer,
  ImageLayer,
  ContactStyledImg,
  StyledCoverContentContainer,
} from "../common";
import { MainTitle, FormText } from "./style";

const ContactPageCover: React.FC = () => {
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
      <div>
        {!navBarExpanded ? (
          <StyledCoverContentContainer>
            <MainTitle>{textContent?.title ?? ""}</MainTitle>
            <FormText>{textContent?.formText ?? ""}</FormText>
          </StyledCoverContentContainer>
        ) : null}
      </div>
    </ContactStyledImg>
  );
};

export default ContactPageCover;
