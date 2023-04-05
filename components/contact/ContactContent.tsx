import React from "react";
import {
  FormContainer,
  ContactInfoContainer,
  StyledContactInfo,
  StyledContactContent,
  StyledLogoImage,
  StyledFlexGroup,
  StyledContactContentContainer,
  StyledContentBackgroundLayer,
} from "./style";
import { ContactForm, StyledAnchor } from "../common";
import { SystemContext } from "@molitio/ui-core";

const ContactContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);

  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledContactContent>
      {/*  <StyledContentBackgroundLayer height={"1200px"} heightTablet={"1900px"}> */}
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
      {/*     </StyledContentBackgroundLayer> */}
    </StyledContactContent>
  );
};

export default ContactContent;
