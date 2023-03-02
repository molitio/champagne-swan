import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup, StyledAnchor, ContactForm } from "../common";
import {
  ContactContainer,
  BackgroundLayer,
  StyledRelIconContainer,
  MainTitle,
  FormContainer,
  ContactInfoContainer,
  ContactInfo,
  StyledLogoImage,
  ResponsiveFormBox,
  FormText,
} from "./style";

const ContactContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <ContactContainer>
      <BackgroundLayer>
        <IconGroup
          starCount={5}
          fill={systemContext?.theme?.palette?.stars?.gold}
        />
        <StyledRelIconContainer></StyledRelIconContainer>
        <MainTitle>{textContent?.title ?? ""}</MainTitle>
        <FormText>{textContent?.formText ?? ""}</FormText>
        <ResponsiveFormBox>
          <ContactInfoContainer>
            <ContactInfo>
              <StyledAnchor href={iconDefinitions?.phone?.hrefUrl ?? ""}>
                {iconDefinitions?.phone?.title ?? ""}
                <br />
                {textContent?.phoneMain ?? ""}
              </StyledAnchor>
            </ContactInfo>
            <ContactInfo>
              <StyledAnchor href={iconDefinitions?.email?.hrefUrl ?? ""}>
                {iconDefinitions?.email?.title ?? ""}
                <br />
                {textContent?.email ?? ""}
              </StyledAnchor>
            </ContactInfo>
            <ContactInfo>
              <StyledAnchor href={iconDefinitions?.address?.hrefUrl ?? ""}>
                {iconDefinitions?.address?.title ?? ""}
                <br />
                {textContent?.address1 ?? ""}
                <br />
                {textContent?.address2 ?? ""}
              </StyledAnchor>
            </ContactInfo>
          </ContactInfoContainer>
          <FormContainer>
            <ContactForm />
          </FormContainer>
        </ResponsiveFormBox>
        <StyledLogoImage src={commonAssetUrls?.logo ?? ""} alt="logo" />
      </BackgroundLayer>
    </ContactContainer>
  );
};

export default ContactContent;
