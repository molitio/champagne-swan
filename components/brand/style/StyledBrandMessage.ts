import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledBrandMessage = styled.section`
  position: relative;
  align-items: center;
  padding: 0 10vw 0 10vw;
  height: 80vh;
  background: ${(props) => props?.theme?.palette?.background?.default ?? ""};
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    padding: 0 8vw 0 8vw;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    padding: 5vw 0 5vw 0;
    height: auto;
  }
`;

export const StyledBrandMessageTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 3.8rem;
  line-height: 2em;
  white-space: pre;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual?.["aboutContentTitleShadow"]?.textShadow ??
    ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 2.4rem;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1.8rem;
  }
`;

export const StyledBrandMessagePanel = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;
  margin-top: 6em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    flex-wrap: wrap;
    align-content: flex-start;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    padding: 0;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
  }
`;

export const StyledBrandMessagePanelContent = styled.div`
  flex: 1 0 36em;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    text-align: center;
    order: 2;
  }
`;

export const StyledBrandMessagePanelImage = styled.div`
  position: relative;
  flex: 1 0 36em;
  order: 1;
`;

export const StyledBrandMessageImageAndEffect = styled.div`
  position: relative;
  height: 28em;
  width: 36em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    height: 20em;
    width: 28em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    height: 20em;
    width: 28em;
    margin: auto;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    height: 20em;
    width: 28em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    height: 12em;
    width: 20em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    height: 8em;
    width: 12em;
  }
`;

export const StyledBrandMessageOfficeCleanerImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: 1em;
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageOfficeCleaners"]?.boxShadow ??
    ""};
`;

export const StyledBrandMessageIcons = styled.div`
  padding-top: 4em;
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

export const StyledBrandMessagePanelTitle = styled.h1`
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

export const StyledBrandMessagePanelText = styled.p`
  position: relative;
  margin: 0 0 2em 0;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.4em;
  width: 28em;
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTextShadow"]
      ?.textShadow ?? ""};
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    width: 20em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    margin: 2em auto;
    text-align: start;
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
  font-weight: 400;
  font-size: 1.2em;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTextShadow"]
      ?.textShadow ?? ""};
`;

export const StyledBrandMessagePanelContactLink = styled(Link)`
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
