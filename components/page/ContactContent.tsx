import React from "react";
import { IconGoldGroup } from "../common/IconGroups";
import {
  ContactContainer,
  SimpledLayer,
  BackgroundLayer,
  StyledRelIconContainer,
  MainTitle,
  FormContainer,
  ContactInfoContainer,
  ContactInfo,
  StyledLogoImage,
} from "./style";
import ContactForm from "../common/Form";

const ContactContent: React.FC = () => {
  return (
    <ContactContainer>
      <SimpledLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
        }
      />
      <BackgroundLayer>
        <IconGoldGroup />
        <StyledRelIconContainer></StyledRelIconContainer>
        <MainTitle>{"KAPCSOLAT"}</MainTitle>
        <FormContainer>
          <ContactForm />
        </FormContainer>
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
        <StyledLogoImage
          src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_complete.svg"
          alt="logo"
        />
      </BackgroundLayer>
    </ContactContainer>
  );
};

export default ContactContent;
