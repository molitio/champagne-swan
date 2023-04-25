import styled from "styled-components";

export const StyledServicesContent = styled.section`
  position: relative;
  padding: 5em 0 5em 0;
  width: 100%;
  align-items: center;
`;

export const StyledMainTitle = styled.h1`
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-weight: 400;
  font-size: 6.5em;
  margin-top: 0.4em;
  margin-bottom: 2em;
  position: relative;

  @media (max-width: 1440px) {
    font-size: 65px;
    margin-bottom: 1em;
  }

  @media (max-width: 975px) {
    font-size: 50px;
  }

  @media (max-width: 660px) {
    font-size: 27px;
  }
`;

export const StyledServicesContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const StyledServicesContentBlockItem = styled.div`
  flex: 1 0 50%;

  @media (max-width: 1440px) {
    flex: 1 0 100%;
  }
`;

export const StyledServicesContentBlockImage = styled.div`
  @media (max-width: 1440px) {
    order: 3;
    flex: 1 0 100%;
  }
`;

export const StyledContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: initial;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};
  font-size: 35px;
  margin-top: 0;
  margin-bottom: 55px;

  @media (max-width: 1440px) {
    display: block;
    margin: 0 auto 55px auto;
    text-align: center;
    width: 450px;
  }

  @media (max-width: 665px) {
    width: 300px;
    font-size: 25px;
  }
`;

export const StyledContentBoxText = styled.p`
  padding: 0;
  margin: 0;
  width: 529px;
  top: 0;
  bottom: 0;
  font-family: "Lato", sans-serif;
  text-align: start;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-size: 1.2em;
  font-weight: 400;

  @media (max-width: 1440px) {
    text-align: center;
    margin: auto;
    width: 450px;
  }
  @media (max-width: 975px) {
    display: block;
  }

  @media (max-width: 665px) {
    width: 290px;
  }
`;
