import Link from "next/link";
import styled from "styled-components";

export const StyledAboutCover = styled.section`
  position: relative;
`;

export const StyledMainTitle = styled.h1`
  position: relative;
  text-align: center;
  margin: 30px 30px 0 30px;
  font-style: normal;
  font-weight: 200;
  font-size: 3.8em;
  line-height: 78px;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTitleShadow"]?.textShadow ?? ""};

  @media (max-width: 1400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 975px) {
    display: block;
    margin: 30px auto 30px auto;
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
  font-size: 3.6rem;
  margin: 0px 30px 0 30px;
  font-style: normal;
  font-weight: 200;
  font-size: 2.8em;
  line-height: 78px;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverSubTitleShadow"]?.textShadow ??
    ""};

  @media (max-width: 1400px) {
    font-size: 3.2rem;
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

export const StyledDescription = styled.p`
  width: 36em;
  margin-top: 1em;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2em 0 2em;
  font-style: normal;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.primary};
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

export const StyledButtonContainer = styled.div`
  margin-top: 4em;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const StyledCoverContactLink = styled(Link)`
  color: white;
  background-color: ${(props) =>
    props?.theme?.palette?.background?.interactive};
  margin-top: 2em;
  padding: 0.5em 0.93em 0.5em 0.93em;
  font-size: 24px;
  font-weight: 200;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  z-index: 100;

  :hover {
    color: ${(props) => props?.theme?.palette?.background?.interactive};
    background-color: white;
  }
`;
