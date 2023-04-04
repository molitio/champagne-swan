import styled from "styled-components";

export const StyledContact = styled.section`
  outline: inset thick;
  position: relative;
`;

export const StyledTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
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
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["contactTextShadow"]?.textShadow ?? ""};
  text-align: center;
  width: 40em;
  margin: 2em auto auto;
`;

/* 


TODO: this layer will be replaced when next/image is implemented


export const SimpledLayer = styled.img<React.CSSProperties>`
  position: relative;
  margin: 0;
  margin-top: 0px;
  top:${(props)  => props.top || "0"};
  left: 0;
  height: 200px;
  width: 100%;
`; */

export const ResponsiveFormBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const StyledRelIconContainer = styled.div`
  position: relative;
  bottom: 130px;
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