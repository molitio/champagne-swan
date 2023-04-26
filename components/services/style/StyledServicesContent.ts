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
  padding-top: 3em;
  position: relative;

  @media (max-width: 1440px) {
    font-size: 4em;
    margin-bottom: 1em;
  }

  @media (max-width: 975px) {
    font-size: 3.1em;
  }

  @media (max-width: 660px) {
    font-size: 1.7em;
  }
`;

export const StyledServicesContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 2em;
  gap: 1em;
  width: 40%;
  @media (max-width: 1440px) {
    width: 60%;
    flex-direction: column;
  }
`;

export const StyledServicesContentBlockItem = styled.div`
  outline: 1px solid red;
  align-self: center;
  flex: 1 0 50%;

  @media (max-width: 1440px) {
    outline: 1px solid violet;
    order: 1;
    flex: 1 0 100%;
  }
`;

export const StyledServicesContentBlockImage = styled.div`
  outline: 1px solid red;
  flex: 1 0 50%;
  @media (max-width: 1440px) {
    outline: 1px solid violet;
    order: 2;
    flex: 1 0 100%;
  }
`;

export const StyledContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};
  font-size: 2.4em;
  margin-top: 0;
  margin-bottom: 3.4em;

  /* @media (max-width: 1440px) { */
  @media (max-width: 800px) {
    outline: 3px dashed purple;
    display: block;
    margin: 0 auto 55px auto;
    text-align: center;
    /* width: 28em; */
  }

  @media (max-width: 665px) {
    /* width: 20em; */
    font-size: 25px;
  }
`;

export const StyledContentBoxText = styled.p`
  font-family: "Lato", sans-serif;
  text-align: start;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-size: 1.2em;
  font-weight: 400;
  outline: 1px solid red;

  @media (max-width: 1440px) {
    outline: 1px solid violet;
  }
  @media (max-width: 975px) {
  }

  @media (max-width: 665px) {
  }
`;
