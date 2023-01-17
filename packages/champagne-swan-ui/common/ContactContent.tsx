import React from "react";
import styled from "styled-components";
import { IconGoldGroup } from "../components/IconGroups";
import Form from "./Form";

const ContactContainer = styled.div`
  position: relative;
  height: 2200px;
  width: 100%;
`;

const SimpledLayer = styled.img`
  position: relative;
  margin: 0;
  margin-top: 0px;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  background-color: #c1dadf;
  top: 200px;
  height: 2000px;
  width: 100%;
`;

const StyledIconContainer = styled.div`
  position: relative;
  bottom: 130px;
`;

const MainTitle = styled.h1`
  position: relative;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-size: 105px;
  margin-top: 0.4em;
  margin-bottom: 2em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContactInfoContainer = styled.div`
  position: relative;
  text-align: center;
  padding-top: 5em;
  color: white;
`;

const ContactInfo = styled.p`
  font-size: 2.4rem;
  font-family: "Tenor Sans";
  text-shadow: 0px 2px 4px #8c7b6c;
`;

const StyledLogoImage = styled.img`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 200px;
  margin: auto;
`;

const ContactContent: React.FC = () => {
  return (
    <ContactContainer>
      <SimpledLayer
        src={
          "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png"
        }
      />
      <BackgroundLayer >
        <IconGoldGroup />
      <StyledIconContainer>
      </StyledIconContainer>
      <MainTitle>{"KAPCSOLAT"}</MainTitle>
      <FormContainer>
        <Form />
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
     < StyledLogoImage
        src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_complete.svg"
        alt="logo"
      />
      </BackgroundLayer>
    </ContactContainer>
  );
};

export default ContactContent;
