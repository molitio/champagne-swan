import React from "react";
import styled from "styled-components";
import { ChampagneSwanContext } from "../context";
import { CloseIcon, MenuIcon } from "../svg/components";
import Link from "next/link";

const ImageContainer = styled.div`
  margin-left: 2em;
`;

const RelativNav = styled.div`
  position: absolute;
  margin-top: -100px;
  top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  width: 100%;
`;

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const StyledNavLink = styled.a`
  cursor: pointer;
  color: #0c7b93;
  margin: 0em 1.7em 0 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ExtendedStyledNavLink = styled.a`
  cursor: pointer;
  color: #0c7b93;
  text-decoration: none;
  margin: 2em 1em 0 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  :hover {
    text-decoration: underline;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 20%;
  align-items: center;
  margin-right: 2em;
  justify-content: end;
`;

const RightContainer = styled.div`
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

const NavBarLinkContainer = styled.div`
  display: flex;
  margin-right: 30px;
`;

const NavBarInnerContainer = styled.div`
  width: 100%;
  display: flex;
`;

const NavBarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OpenLinksButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  color: #0c7b93;
`;

const OpenLinksButton = styled.div`
  color: #0c7b93;
  position: relative;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const StyledLogoPng = styled.img`
  width: 150px;
`;

const ContactInfo = styled.p`
  font-size: 2.4rem;

  @media (max-width: 770px) {
    font-size: 2rem;
    margin-top: 2em;
  }

  @media (max-width: 645px) {
    font-size: 1.65rem;
    margin-top: 1.7em;
  }

  @media (max-width: 400px) {
    font-size: 1.4rem;
    margin-top: 1.5em;
  }
`;

const NavBar: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const setNavBarExpanded = champagneSwanContext.interactive.setNavBarExpanded;
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;
  const navTree = champagneSwanContext.navTree ?? {};

  if (typeof window !== "undefined") {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 834 && navBarExpanded === true) {
        setNavBarExpanded?.(!champagneSwanContext.interactive.navBarExpanded);
      }
    });
  }

  return (
    <RelativNav>
      <NavBarContainer>
        <NavBarInnerContainer>
          <ImageContainer>
            <StyledLogoPng
              src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_horizontal.svg"
              alt="logo"
            />
          </ImageContainer>
          <LeftContainer></LeftContainer>
          <RightContainer>
            {navTree
              ? Object.keys(navTree).map((branch) => (
                  <Link
                    key={branch}
                    href={navTree[branch].path}
                    className="nav-text"
                  >
                    <StyledNavLink>{`${navTree[branch].label}`} </StyledNavLink>
                  </Link>
                ))
              : null}
            <OpenLinksButtonContainer
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                setNavBarExpanded?.(
                  !champagneSwanContext.interactive.navBarExpanded
                );
              }}
            >
              {navBarExpanded ? (
                <OpenLinksButton>
                  <CloseIcon />
                </OpenLinksButton>
              ) : (
                <OpenLinksButton>
                  <MenuIcon />
                </OpenLinksButton>
              )}
            </OpenLinksButtonContainer>
          </RightContainer>
        </NavBarInnerContainer>
        <NavBarExtendedContainer>
          {navBarExpanded ?? navTree
            ? Object.keys(navTree).map((branch) => (
                <Link key={branch} href={navTree[branch].path}>
                  <ExtendedStyledNavLink
                    onClick={(e: React.MouseEvent) => {
                      setNavBarExpanded?.(
                        !champagneSwanContext.interactive.navBarExpanded
                      );
                    }}
                  >{`${navTree[branch].label}`}
                  </ExtendedStyledNavLink>
                </Link>
              ))
            : null}
        </NavBarExtendedContainer>
      </NavBarContainer>
    </RelativNav>
  );
};

export default NavBar;
