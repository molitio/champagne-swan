import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup, StyledAnchor, ContactForm } from "../common";
import {
  StyledContentLogoImage,
  StyledContentFormContainer,
  StyledContentMainTitle,
  SyledContentFormBox,
  StyledContentFormText,
  StyledContentBackgroundLayer,
  StyledContentRelIcon,
  StyledContentContainer,
  StyledContentContactInfoContainer,
  StyledContentContactInfo,
} from "./style";

const ContactContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledContentContainer>
      <StyledContentBackgroundLayer>
        <IconGroup
          starCount={5}
          fill={systemContext?.theme?.palette?.stars?.gold}
        />
        <StyledContentRelIcon />
        <StyledContentMainTitle>
          {textContent?.title ?? ""}
        </StyledContentMainTitle>
        <StyledContentFormText>
          {textContent?.formText ?? ""}
        </StyledContentFormText>
        <SyledContentFormBox>
          <StyledContentContactInfoContainer>
            <StyledContentContactInfo>
              <StyledAnchor href={iconDefinitions?.phone?.hrefUrl ?? ""}>
                {iconDefinitions?.phone?.title ?? ""}
                <br />
                {textContent?.phoneMain ?? ""}
              </StyledAnchor>
            </StyledContentContactInfo>
            <StyledContentContactInfo>
              <StyledAnchor href={iconDefinitions?.email?.hrefUrl ?? ""}>
                {iconDefinitions?.email?.title ?? ""}
                <br />
                {textContent?.email ?? ""}
              </StyledAnchor>
            </StyledContentContactInfo>
            <StyledContentContactInfo>
              <StyledAnchor href={iconDefinitions?.address?.hrefUrl ?? ""}>
                {iconDefinitions?.address?.title ?? ""}
                <br />
                {textContent?.address1 ?? ""}
                <br />
                {textContent?.address2 ?? ""}
              </StyledAnchor>
            </StyledContentContactInfo>
          </StyledContentContactInfoContainer>
          <StyledContentFormContainer>
            <ContactForm />
          </StyledContentFormContainer>
        </SyledContentFormBox>
        <StyledContentLogoImage src={commonAssetUrls?.logo ?? ""} alt="logo" />
      </StyledContentBackgroundLayer>
    </StyledContentContainer>
  );
};

export default ContactContent;
