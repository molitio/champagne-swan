import React from "react";
import {
  FormContainer,
  ContactInfoContainer,
  ContactInfo,
  StyledLogoImage,
  ResponsiveFormBox,
  StyledContentContainer,
  StyledContentBackgroundLayer,
} from "./style";
import { ContactForm, StyledAnchor } from "../common";
import { SystemContext } from "@molitio/ui-core";

const ContactPageContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);

  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledContentContainer heightTablet={"1900px"} height={"1200px"}>
      <StyledContentBackgroundLayer height={"1200px"} heightTablet={"1900px"}>
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
      </StyledContentBackgroundLayer>
    </StyledContentContainer>
  );
};

export default ContactPageContent;
