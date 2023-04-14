import Link from "next/link";
import styled from "styled-components";

export const StyledBrandMessage = styled.div`
  position: relative;
  padding: 5em 0 5em 0;
  align-items: center;
  background: ${(props) => props?.theme?.palette?.background?.default ?? ""};
`;

export const StyledBrandMessageTitle = styled.h1`
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual?.["aboutContentTitleShadow"]?.textShadow ??
    ""};
  font-weight: 400;
  font-size: 5.6em;
  white-space: pre;
  line-height: 2em;

  @media (max-width: 1440px) {
    font-size: 60px;
    margin-bottom: 20px;
  }
  @media (max-width: 665px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

/* export const PremiumLayerContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 540px;
  z-index: -1;
  margin-top: -1px;
`; */

export const StyledBrandMessageContentContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-top: 6em;
  align-items: center;
  text-align: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const StyledBrandMessageContent = styled.div`
  padding: 1em;
  width: 35em;
  text-align: center;
`;

export const StyledBrandMessageIconContainer = styled.div`
  padding-top: 12em;
  @media (max-width: 975px) {
    padding-top: 8em;
  }
`;

export const StyledContentTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["appCoverTitleShadow"]?.textShadow ?? ""};
  font-weight: 400;
  font-size: 6.5em;
  opacity: 0.8;
  padding-top: 0.6em;

  @media (max-width: 1440px) {
    font-size: 4.2em;
  }

  @media (max-width: 975px) {
    font-size: 3.1em;
  }

  @media (max-width: 665px) {
    font-size: 2em;
  }
`;

export const StyledBrandMessageImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const StyledBrandMessageQuoteContainer = styled.div`
  width: 50em;
  display: block;
  margin: 0 auto 3em auto;

  @media (max-width: 1440px) {
    width: 30em;
  }
  @media (max-width: 665px) {
    width: 25em;
  }

  @media (max-width: 436px) {
    width: 18em;
  }
`;
export const StyledAboutQuoteText = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  font-style: italic;
  font-size: 24px;
  text-align: center;
  font-weight: 300;
  padding: 3em 0 1em 0;
  @media (max-width: 975px) {
    display: block;
    margin: auto;
    width: 20em;
  }
  @media (max-width: 665px) {
    font-size: 17px;
    width: 17em;
  }
`;
export const StyledAboutQuoteAuthorText = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  font-size: 24px;
  text-align: end;
  font-weight: 300;
  padding: 0em 2em 0em 0;
  @media (max-width: 975px) {
    padding: 0em 2em 0em 0;
  }
  @media (max-width: 665px) {
    padding: 0em 3em 0em 0;
    font-size: 17px;
  }
`;

export const StyledBrandMessageContentTitle = styled.h1`
  font-family: "Lato", sans-serif;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTitleShadow"]
      ?.textShadow ?? ""};
  font-weight: 400;
  font-size: 2.4em;
  padding-top: 2em;

  @media (max-width: 975px) {
    display: block;
    margin: auto;
    text-align: center;
    width: 10em;
  }
  @media (max-width: 665px) {
    font-size: 2em;
  }
`;

export const StyledBrandMessageContentText = styled.p`
  font-family: "Lato", sans-serif;
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};

  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTextShadow"]
      ?.textShadow ?? ""};
  font-weight: 300;
  font-size: 1.4em;
  margin-bottom: 2em;

  @media (max-width: 975px) {
    display: block;
    margin: 2em auto 2em auto;
    text-align: center;
  }

  @media (max-width: 665px) {
    width: 290px;
  }
`;
export const StyledBrandMessageText = styled.p`
  width: 50em;
  margin: auto;
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: "25px";
  margin-bottom: 7em;
`;

export const AboutPremiumQualityWaterSplash = styled.img`
  display: block;
  margin: auto;
  position: relative;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-15deg);
  top: -140px;
  @media (max-width: 1440px) {
    top: 0px;
  }
  @media (max-width: 655px) {
    height: 270px;
    width: 270px;
    transform: rotate(0deg);
    top: 0px;
  }
`;

export const StyledContactLink = styled(Link)`
  color: white;
  background-color: #c1a87d;
  padding: 0.5em 0.93em 0.5em 0.93em;
  font-size: 24px;
  font-weight: 200;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  z-index: 100;

  :hover {
    color: #c1a87d;
    background-color: white;
  }
`;
