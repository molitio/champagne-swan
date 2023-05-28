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
  StyledContactInfoContainer,
  StyledContactInfo,
  StyledContactInfoLogoContainer,
  StyledContactInfoText,
} from "./style";

const ContactInfo: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledContactInfo>
      <StyledLinearGradient
        direction="bottom"
        variation="appCoverBottom"
        positioning={{ position: "absolute", top: "0px" }}
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
          <StyledContactInfoText>
            <StyledAnchor href={iconDefinitions?.phone?.hrefUrl ?? ""}>
              {iconDefinitions?.phone?.title ?? ""}
              <br />
              {textContent?.phoneMain ?? ""}
            </StyledAnchor>
          </StyledContactInfoText>
          <StyledContactInfoText>
            <StyledAnchor href={iconDefinitions?.email?.hrefUrl ?? ""}>
              {iconDefinitions?.email?.title ?? ""}
              <br />
              {textContent?.email ?? ""}
            </StyledAnchor>
          </StyledContactInfoText>
          <StyledContactInfoText>
            <StyledAnchor href={iconDefinitions?.address?.hrefUrl ?? ""}>
              {iconDefinitions?.address?.title ?? ""}
              <br />
              {textContent?.address1 ?? ""}
              <br />
              {textContent?.address2 ?? ""}
            </StyledAnchor>
          </StyledContactInfoText>
        </StyledContactInfoContainer>
        <StyledFormContainer>
          <ContactForm />
        </StyledFormContainer>
      </SyledFormBox>
      <StyledContactInfoLogoContainer>
        <NextImage
          containerDimensions={{ width: "150px", height: "150px" }}
          containerPositioning={{ position: "relative" }}
          imageProps={{
            src: commonAssetUrls?.logo ?? "",
            alt: "logo",
            fill: true,
          }}
        />
      </StyledContactInfoLogoContainer>
    </StyledContactInfo>
  );
};

export default ContactInfo;
