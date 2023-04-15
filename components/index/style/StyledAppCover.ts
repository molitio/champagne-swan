import Link from "next/link";
import styled from "styled-components";

export const StyledAppCover = styled.section`
  position: relative;
  background-color: ${(props) => props?.theme?.palette?.background?.default};
`;

export const StyledCoverContactLink = styled(Link)`
  margin-top: 2em;
  position: relative;
  padding: 0.6em 1.2em;
  font-size: 1.5em;
  font-weight: 300;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  background-color: ${(props) => props?.theme?.palette?.primary?.main};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverCtaShadow"]?.boxShadow ?? ""};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${(props) => props?.theme?.palette?.primary?.main};
    background-color: ${(props) => props?.theme?.palette?.text?.secondary};
  }
`;

export const StyledButtonContainer = styled.div`
  padding-top: 2em;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
`;

export const StyledMainTitle = styled.h1`
  position: relative;
  text-align: center;
  margin: 0.4em 0;
  font-style: normal;
  font-weight: 200;
  font-size: 3.8em;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: 1400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 975px) {
    display: block;
    margin: 1.8em auto 1.8em auto;
    width: 12em;
  }

  @media (max-width: 665px) {
    display: block;
    margin: 30px auto 30px auto;
    font-size: 2.25rem;
    width: 8em;
    line-height: 50px;
  }
`;

export const StyledSubTitle = styled.h2`
  position: relative;
  text-align: center;
  font-size: 3.6em;
  margin: 0px 2em 0 2em;
  font-style: normal;
  font-weight: 200;
  font-size: 2.8em;
  line-height: 4.8em;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: 1400px) {
    font-size: 3.2em;
  }

  @media (max-width: 975px) {
    margin: auto;
    width: 10em;
  }

  @media (max-width: 665px) {
    display: block;
    margin: 30px auto 30px auto;
    font-size: 2.1rem;
    width: 8em;
    line-height: 50px;
  }

  @media (max-width: 280px) {
    font-size: 1.6rem;
    width: 8em;
  }
`;

export const StyledDescription = styled.pre`
  width: 40em;
  margin: auto;
  font-style: normal;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  text-align: center;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTextShadow"]?.textShadow ?? ""};
  white-space: pre-wrap;

  @media (max-width: 975px) {
    font-size: 28px;
    width: 16em;
  }

  @media (max-width: 660px) {
    font-size: 21px;
    width: 13em;
    padding: 0;
  }
`;
