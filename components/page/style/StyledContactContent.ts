import styled from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
  height: 2200px;
  width: 100%;
`;

export const SimpledLayer = styled.img`
  position: relative;
  margin: 0;
  margin-top: 0px;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  background-color: #c1dadf;
  top: 200px;
  height: 2000px;
  width: 100%;
`;

export const StyledRelIconContainer = styled.div`
  position: relative;
  bottom: 130px;
`;

export const MainTitle = styled.h1`
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

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContactInfoContainer = styled.div`
  position: relative;
  text-align: center;
  padding-top: 5em;
  color: white;
`;

export const ContactInfo = styled.p`
  font-size: 2.4rem;
  font-family: "Tenor Sans";
  text-shadow: 0px 2px 4px #8c7b6c;
`;

export const StyledLogoImage = styled.img`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 200px;
  margin: auto;
`;