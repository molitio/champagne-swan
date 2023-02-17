import React from "react";
import { ChampagneSwanContext } from "../context";
import { CloseIcon, MenuIcon } from "../svg";
import Link from "next/link";
import {
  StyledImageContainer,
  RelativNav,
  NavBarContainer,
  StyledNavLink,
  ExtendedStyledNavLink,
  LeftContainer,
  RightContainer,
  NavBarLinkContainer,
  NavBarInnerContainer,
  NavBarExtendedContainer,
  OpenLinksButtonContainer,
  OpenLinksButton,
  StyledLogoPng,
} from "./style";
import { useAuthState } from "react-firebase-hooks/auth";
import { signIn, signOut, auth } from "../utils";

const NavBar: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const setNavBarExpanded = champagneSwanContext.interactive.setNavBarExpanded;
  const navBarExpanded = champagneSwanContext.interactive.navBarExpanded;
  const navTree = champagneSwanContext.navTree ?? {};

  const [user, loading] = useAuthState(auth);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 834 && navBarExpanded === true) {
        setNavBarExpanded?.(!champagneSwanContext.interactive.navBarExpanded);
      }
    });
  }

  const handleSignIn = () => {
    if (user) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <RelativNav>
      <NavBarContainer>
        <NavBarInnerContainer>
          <StyledImageContainer>
            <StyledLogoPng
              src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_horizontal.svg"
              alt="logo"
            />
          </StyledImageContainer>
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
              <button onClick={handleSignIn}>
                {user ? "logout" : "login"}
              </button>
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
                  >
                    {`${navTree[branch].label}`}
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
