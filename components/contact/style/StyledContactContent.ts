import styled from "styled-components";

type StyledContentContainerProps = {
  height?: string;
  heightTablet?: string;
};

export const StyledContactContentContainer = styled.div<StyledContentContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "1600px"};
  @media (max-width: 1440px) {
    height: ${(props) => props.heightTablet || "2200px"};
  }

  @media (max-width: 665px) {
    height: ${(props) => props.heightTablet || "2000px"};
  }
`;

export const StyledContentBackgroundLayer = styled.div<StyledContentContainerProps>`
  position: absolute;
  background-color: #c1dadf;
  height: ${(props) => props.height || "1600px"};
  width: 100%;

  @media (max-width: 1440px) {
    height: ${(props) => props.heightTablet || "2200px"};
  }
  @media (max-width: 665px) {
    height: ${(props) => props.heightTablet || "2000px"};
  }
`;

export const StyledFormText = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  font-family: "Lato" sans-serif;
  font-size: 1.2em;
  text-align: center;
  width: 30em;
  margin: 2em auto 0 auto;
  @media (max-width: 660px) {
    width: 15em;
    font-size: 1em;
  }
`;

export const SyledFormBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1440px) {
    flex-direction: column-reverse;
  }
`;

export const StyledContentRelIcon = styled.div`
  position: relative;
  bottom: 130px;
`;

export const StyledTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual?.["contactTitleShadow"]?.textShadow ?? ""};
  font-weight: 400;
  font-size: 6.5em;
  margin-top: 1em;

  @media (max-width: 1440px) {
    font-size: 4em;
  }
  @media (max-width: 665px) {
    font-size: 2.8em;
  }
`;

export const StyledFormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5em 0 0 10em;
  @media (max-width: 1440px) {
    padding: 5em 0 0 0;
  }
`;

export const StyledContactInfoContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 5em;
  color: white;
  line-height: 1.6;

  @media (max-width: 665px) {
    padding: 5em 0 0 0;
  }
`;

export const StyledContactInfo = styled.p`
  font-size: 2.4rem;
  font-family: "Tenor Sans", sans-serif;
  font-weight: 200;
  text-shadow: 0px 2px 4px #8c7b6c;

  @media (max-width: 665px) {
    font-size: 2em;
  }
`;

export const StyledLogoContainer = styled.div`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 130px;
  margin: auto;
`;
