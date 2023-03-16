import Link from "next/link";
import styled, { css } from "styled-components";

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
            rgba(255, 255, 255, 1) 0%,
            rgba(247, 255, 255, 0.8) 20%,
            rgba(198, 221, 226, 0.7) 100%
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
  display: flex;
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
          @media (max-width: 1000px) {
            display: none;
          }
        `}
`;

export const StyledNavLink = styled(Link)`
  cursor: pointer;
  font-family: "Fahkwang", sans-serif;
  font-weight: 400;
  color: #0c7b93;
  font-size: 24px;
  font-style: normal;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

type StyledNavButtonProps = {
  navBarExpanded?: boolean;
};

export const StyledNavButton = styled.div<StyledNavButtonProps>`
  cursor: pointer;
  color: #0c7b93;
  position: fixed;
  top: 2em;
  right: 2em;
  margin-right: 1em;
  @media (min-width: 1000px) {
    display: none;
  }
  ${(props) => (props?.navBarExpanded ? css`` : css``)}
`;
