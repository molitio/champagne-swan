import Link from "next/link";
import styled from "styled-components";

export const StyledImageContainer = styled.div`
  margin-left: 2em;
`;

export const RelativeNav = styled.div`
  position: absolute;
  margin-top: -100px;
  top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  width: 100%;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const StyledNavLink = styled(Link)`
  cursor: pointer;
  font-family: "Fahkwang", sans-serif;
  font-weight: 400;
  color: #0c7b93;
  margin: 0em 1.7em 0 0;
  font-size: 24px;
  font-style: normal;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ExtendedStyledNavLink = styled.a`
  position: relative;
  cursor: pointer;
  color: #0c7b93;
  text-decoration: none;
  margin: 2em 0 0 0;
  font-size: 24px;
  font-style: normal;
  font-family: "Fahkwang", sans-serif;
  font-weight: 400;
  z-index: 1000;
  :hover {
    text-decoration: underline;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 20%;
  align-items: center;
  margin-right: 2em;
  justify-content: end;
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;

  justify-content: space-around;

  @media (max-width: 1000px) {
    flex: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 2em;
    justify-content: flex-end;
  }
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
  margin-right: 30px;
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const NavBarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OpenLinksButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  color: #0c7b93;
`;

export const OpenLinksButton = styled.div`
  color: #0c7b93;
  position: relative;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const StyledLogoPng = styled.img`
  width: 150px;
`;
