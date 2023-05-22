import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { resolveThemeBreakPointValues } from "../../utils";

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
  font-size: 3.8em;
  white-space: pre;
  line-height: 2em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 2.4em;
    margin-bottom: 20px;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1.8em;
    margin-bottom: 20px;
  }
`;

export const StyledBrandMessageContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
  margin-top: 6em;
  padding: 0 10em;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    flex-direction: column-reverse;
    margin: auto;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    width: 24em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    width: 12em;
  }
`;

export const StyledBrandMessageContent = styled.div`
  text-align: center;
  flex: 1;
`;

export const StyledBrandMessageOfficeCleanerImageContainer = styled.div`
  position: relative;
  flex: 1;
  min-height: 28em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    padding-top: 4em;
    min-height: 24em;
    width: 36em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    min-height: 20em;
    width: 24em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    min-height: 12em;
    width: 16em;
  }
`;

export const StyledBrandMessageOfficeCleanerImage = styled(Image)`
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageOfficeCleaners"]?.boxShadow ??
    ""};
  border-radius: "1em";
  border-radius: 1em;
  object-fit: cover;
  object-position: center;
`;

export const StyledBrandMessageIconContainer = styled.div`
  padding-top: 12em;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    padding-top: 8em;
  }
`;

export const StyledBrandMessageMainTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageTitleShadow"]?.textShadow ?? ""};
  font-weight: 400;
  font-size: 3.8em;
  opacity: 0.8;
  padding-top: 0.6em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 3.2em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 2.4em;
  }
`;

export const StyledBrandMessageImageContainer = styled.div`
  padding-top: 5em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    flex-direction: column;
  }
`;

export const StyledBrandMessageQuoteContainer = styled.div`
  width: 52em;
  display: block;
  margin: 0 auto 3em auto;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    width: 30em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    width: 25em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
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
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    display: block;
    margin: auto;
    width: 20em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 17px;
    width: 17em;
  }
`;
export const StyledAboutQuoteAuthorText = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  font-size: 1.5em;
  text-align: end;
  font-weight: 300;
  padding: 0em 2em 0em 0;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    padding: 0em 2em 0em 0;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    padding: 0em 3em 0em 0;
    font-size: 1em;
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
  margin: 0;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    display: block;
    margin: auto;
    text-align: center;
    padding: 2em 0 0 0;

    width: 10em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 2em;
  }
`;

export const StyledBrandMessageContentText = styled.p`
  position: relative;
  margin-bottom: 2em;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.4em;
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTextShadow"]
      ?.textShadow ?? ""};
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    display: block;
    margin: 2em auto 2em auto;
    text-align: center;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    width: 290px;
  }
`;
export const StyledBrandMessageText = styled.p`
  position: relative;
  margin: 0 auto;
  padding: 0 6em;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTextShadow"]
      ?.textShadow ?? ""};
`;

export const StyledContactLink = styled(Link)`
  position: relative;
  padding: 0.6em 1.2em;
  font-size: 1.5em;
  font-weight: 300;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  background-color: ${(props) => props?.theme?.palette?.primary?.main};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["buttonDafaultShadow"]?.boxShadow ?? ""};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${(props) => props?.theme?.palette?.primary?.main};
    background-color: ${(props) => props?.theme?.palette?.text?.secondary};
  }
`;
