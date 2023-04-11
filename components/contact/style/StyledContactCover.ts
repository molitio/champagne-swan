import styled from "styled-components";

export const StyledContact = styled.section`
  position: relative;
`;

export const StyledContactCoverTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["contactTitleShadow"]?.textShadow ?? ""};
  font-weight: 400;
  font-size: 6.5em;
  margin-top: 0.4em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
`;

export const StyledCoverText = styled.text`
  display: block;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["contactTextShadow"]?.textShadow ?? ""};
  text-align: center;
  width: 40em;
  font-size: 1.2em;
  font-weight: 600;
  margin: 2em auto auto;
`;

export const StyledFlexGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1440px) {
    flex-direction: column-reverse;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5em 0 0 10em;
  @media (max-width: 1440px) {
    padding: 5em 0 0 0;
  }
`;

export const ContactInfoContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 5em;
  color: white;
  line-height: 1.6;
`;

export const StyledLogoImage = styled.img`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 200px;
  margin: auto;
`;
