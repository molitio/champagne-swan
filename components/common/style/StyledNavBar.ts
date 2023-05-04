import Link from "next/link";
import styled, { css } from "styled-components";
import { resolveThemeBreakPointValues } from "../hooks";

type StyledNavProps = {
  navBarExpanded?: boolean;
};

export const StyledNav = styled.nav<StyledNavProps>`
  z-index: 1000;
  ${(props) =>
    props?.navBarExpanded
      ? css`
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(247, 255, 255, 0.9) 20%,
            rgba(198, 221, 226, 1) 100%
          );
          position: fixed;
          height: 100vh;
          width: 100%;
        `
      : css`
          position: absolute;
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        `}
`;

export const StyledImageContainer = styled.div`
  flex: 40%;
  margin-left: 2em;
`;

type StyledNavLinksContainerProps = {
  navBarExpanded?: boolean;
};

export const StyledNavLinksContainer = styled.div<StyledNavLinksContainerProps>`
  display: flex;
  align-items: center;
  z-index: 1000;
  justify-content: space-around;
  ${(props) =>
    props?.navBarExpanded
      ? css`
          flex-direction: column;
          gap: 1em;
        `
      : css`
          flex-direction: row;
          flex: 60%;
          @media (max-width: ${(props) =>
              resolveThemeBreakPointValues(props?.theme, "md")}) {
            display: none;
          }
        `}
`;

export const StyledNavLink = styled(Link)`
  font-family: "Fahkwang", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  font-style: normal;
  text-decoration: none;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["navBarMenuTextShadow"]?.textShadow ?? ""};
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

type StyledNavButtonProps = {
  navBarExpanded?: boolean;
};

export const StyledNavButton = styled.div<StyledNavButtonProps>`
  cursor: pointer;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  position: fixed;
  top: 2em;
  right: 2em;
  margin-right: 1em;
  @media (min-width: 1000px) {
    display: none;
  }
  ${(props) => (props?.navBarExpanded ? css`` : css``)}
`;
