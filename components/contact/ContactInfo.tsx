import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  IconGroup,
  StyledAnchor,
  ContactForm,
  StyledLinearGradient,
  NextImage,
} from "../common";
import {
  StyledFormContainer,
  StyledTitle,
  SyledFormBox,
  StyledFormText,
  StyledContactContentContainer,
  StyledContactInfoContainer,
  StyledContactInfo,
  StyledLogoContainer,
} from "./style";

const ContactInfo: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledContactContentContainer>
      <StyledLinearGradient
        direction="bottom"
        variation="cover"
        visual={{ opacity: 1 }}
      />
      <IconGroup
        starCount={5}
        fill={systemContext?.theme?.palette?.stars?.gold}
      />
      <StyledTitle>{textContent?.title ?? ""}</StyledTitle>
      <StyledFormText>{textContent?.formText ?? ""}</StyledFormText>
      <SyledFormBox>
        <StyledContactInfoContainer>
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
        </StyledContactInfoContainer>
        <StyledFormContainer>
          <ContactForm />
        </StyledFormContainer>
      </SyledFormBox>
      <StyledLogoContainer>
        <NextImage
          containerDimensions={{ width: "150px", height: "150px" }}
          containerPositioning={{ position: "relative" }}
          imageProps={{
            src: commonAssetUrls?.logo ?? "",
            alt: "logo",
          }}
        />
      </StyledLogoContainer>
    </StyledContactContentContainer>
  );
};

export default ContactInfo;
