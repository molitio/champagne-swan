import Link from "next/link";
import styled from "styled-components";

export const StyledAboutCover = styled.section`
  position: relative;
`;

export const StyledMainTitle = styled.h1`
  position: relative;
  width: 80vw;
  margin: auto;
  font-size: 3.8em;
  font-weight: 300;
  text-align: center;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: 1400px) {
    font-size: 3.2em;
  }

  @media (max-width: 975px) {
    white-space: pre;
    font-size: 2.8em;
  }

  @media (max-width: 665px) {
    font-size: 2.2em;
  }
`;

export const StyledSubTitle = styled.h2`
  position: relative;
  width: 80vw;
  margin: auto;
  font-size: 3.6rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverSubTitleShadow"]?.textShadow ??
    ""};

  @media (max-width: 1400px) {
    font-size: 3em;
  }

  @media (max-width: 975px) {
    white-space: pre;
    font-size: 2.6em;
  }

  @media (max-width: 665px) {
    font-size: 2rem;
  }
`;

export const StyledDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  text-align: center;
  width: 36em;
  margin-top: 1em;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2em 0 2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};

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

export const StyledButtonContainer = styled.div`
  position: relative;
  width: max-content;
  margin: auto;
  padding-top: 3em;
  text-align: center;
`;

export const StyledCoverContactLink = styled(Link)`
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
