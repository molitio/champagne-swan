import React from "react";
import {
  ContactContainer,
  BackgroundLayer,
  MainTitle,
  FormContainer,
  ContactInfoContainer,
  ContactInfo,
  StyledLogoImage,
  ResponsiveFormBox,
} from "./style/StyledContactPageContent";
import { ContactForm } from "../common";

const ContactPageContent: React.FC = () => {
  return (
    <ContactContainer heightTablet={"1900px"} height={"1200px"}>
      <BackgroundLayer height={"1200px"} heightTablet={"1900px"}>
        <ResponsiveFormBox>
          <ContactInfoContainer>
            <ContactInfo>
              {`Mobil:`}
              <br />
              {`+36 20 416 0391`}
            </ContactInfo>
            <ContactInfo>
              {`E-mail:`}
              <br />
              {`info@jeliza.com`}
            </ContactInfo>
            <ContactInfo>
              {`Cím:`}
              <br />
              {` 1134 Budapest,`}
              <br />
              {`Lehel utca 11.`}
            </ContactInfo>
          </ContactInfoContainer>
          <FormContainer>
            <ContactForm />
          </FormContainer>
        </ResponsiveFormBox>
        <StyledLogoImage
          src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_complete.svg"
          alt="logo"
        />
      </BackgroundLayer>
    </ContactContainer>
  );
};

export default ContactPageContent;
