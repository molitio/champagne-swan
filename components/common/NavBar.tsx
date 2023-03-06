import React from "react";
import { ChampagneSwanContext } from "../context";
import { CloseIcon, MenuIcon } from "../svg";
import Link from "next/link";
import {
  StyledImageContainer,
  RelativeNav,
  NavBarContainer,
  StyledNavLink,
  ExtendedStyledNavLink,
  LeftContainer,
  RightContainer,
  NavBarInnerContainer,
  NavBarExtendedContainer,
  OpenLinksButtonContainer,
  OpenLinksButton,
  StyledLogoPng,
} from "./style";
import { useAuthState } from "react-firebase-hooks/auth";
import { signIn, signOut, auth } from "../utils";
import Button from "./Button";
import { SystemContext } from "@molitio/ui-core";

const NavBar: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;
  const setNavBarExpanded = champagneSwanContext.interactive.setNavBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  const [user, loading] = useAuthState(auth);

  const [isLoginWindowOpen, setIsLoginWindowOpen] = React.useState(false);

  const handleLoginWindow = (): void => {
    setIsLoginWindowOpen(!isLoginWindowOpen);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 834 && navBarExpanded === true) {
        setNavBarExpanded?.(!champagneSwanContext?.interactive?.navBarExpanded);
      }
    });
  }

  const handleSignIn = (): void => {
    if (user) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <RelativeNav>
      <NavBarContainer>
        <NavBarInnerContainer>
          <StyledImageContainer>
            <StyledLogoPng
              src={commonAssetUrls?.horizontalLogo ?? ""}
              alt="logo"
            />
          </StyledImageContainer>
          <LeftContainer></LeftContainer>
          <RightContainer>
            {navTree
              ? Object.keys(navTree).map((branch) => (
                  <StyledNavLink
                    key={branch}
                    href={navTree[branch]?.path}
                    className="nav-text"
                  >
                    {`${navTree[branch].label}`}{" "}
                  </StyledNavLink>
                ))
              : null}
            <OpenLinksButtonContainer
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                setNavBarExpanded?.(
                  !champagneSwanContext?.interactive?.navBarExpanded
                );
              }}
            >
              {champagneSwanContext?.authContext?.authEnabled ? (
                <Button onClick={handleLoginWindow}>
                  {user ? "logout" : "login"}
                </Button>
              ) : (
                <></>
              )}
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
                <Link key={branch} href={navTree[branch]?.path ?? ""}>
                  <ExtendedStyledNavLink
                    onClick={(e: React.MouseEvent) => {
                      setNavBarExpanded?.(
                        !champagneSwanContext?.interactive?.navBarExpanded
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
    </RelativeNav>
  );
};

export default NavBar;
