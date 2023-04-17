import Link from "next/link";
import styled from "styled-components";

export const StyledAboutCover = styled.section`
  position: relative;
`;

export const StyledAboutMainTitle = styled.h1`
  position: relative;
  margin: auto;
  text-align: center;
  font-size: 3.8em;
  font-weight: 300;
  line-height: 2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: 975px) {
    white-space: pre;
    font-size: 2.8em;
  }

  @media (max-width: 665px) {
    font-size: 2.2em;
  }
`;

export const StyledAboutSubTitle = styled.h2`
  position: relative;
  margin: auto;
  text-align: center;
  font-size: 3.6rem;
  font-weight: 300;
  line-height: 2em;
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverSubTitleShadow"]?.textShadow ??
    ""};

  @media (max-width: 975px) {
    white-space: pre;
    font-size: 2.6em;
  }

  @media (max-width: 665px) {
    font-size: 2rem;
  }
`;

export const StyledAboutDescription = styled.p`
  width: 36em;
  margin: 0 auto;
  padding: 0 2em;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5em;
  text-align: center;
  white-space: pre-wrap;
  font-family: "Lato", sans-serif;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};

  @media (max-width: 975px) {
    font-size: 1.8em;
    width: 16em;
  }

  @media (max-width: 660px) {
    font-size: 1.5em
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
  background-color: ${(props) => props?.theme?.palette?.tertiary?.main};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverCtaShadow"]?.boxShadow ?? ""};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${(props) => props?.theme?.palette?.tertiary?.main};
    background-color: ${(props) => props?.theme?.palette?.text?.secondary};
  }
`;
