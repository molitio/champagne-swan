import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  FormContainer,
  ContactInfoContainer,
  StyledContactInfo,
  StyledContactContent,
  StyledLogoImage,
  StyledFlexGroup,
} from "./style";
import { ContactForm, StyledAnchor } from "../common";

const ContactContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);

  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledContactContent>
      <StyledFlexGroup>
        <ContactInfoContainer>
          <StyledContactInfo>
            <StyledAnchor href={iconDefinitions?.phone?.hrefUrl ?? ""}>
              {iconDefinitions?.phone?.title ?? ""}
              <br />
              {textContent?.phoneMain ?? ""}
            </StyledAnchor>
          </StyledContactInfo>
          <StyledContactInfo>
            <StyledAnchor href={iconDefinitions?.email?.hrefUrl ?? ""}>
              {iconDefinitions?.email?.title ?? ""}
              <br />
              {textContent?.email ?? ""}
            </StyledAnchor>
          </StyledContactInfo>
          <StyledContactInfo>
            <StyledAnchor href={iconDefinitions?.address?.hrefUrl ?? ""}>
              {iconDefinitions?.address?.title ?? ""}
              <br />
              {textContent?.address1 ?? ""}
              <br />
              {textContent?.address2 ?? ""}
            </StyledAnchor>
          </StyledContactInfo>
        </ContactInfoContainer>
        <FormContainer>
          <ContactForm />
        </FormContainer>
      </StyledFlexGroup>
      <StyledLogoImage src={commonAssetUrls?.logo ?? ""} alt="logo" />
    </StyledContactContent>
  );
};

export default ContactContent;
