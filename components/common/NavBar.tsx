import React from "react";
import { ChampagneSwanContext } from "../context";
import { CloseIcon, MenuIcon } from "../common";
import {
  StyledImageContainer,
  StyledNav,
  StyledNavLink,
  StyledNavLinksContainer,
  StyledNavButton,
} from "./style";

import { SystemContext } from "@molitio/ui-core";
import NextImage from "./NextImage";

const NavBar: React.FC = () => {
  const champagneSwanContext = React.useContext(ChampagneSwanContext);
  const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;
  const setNavBarExpanded = champagneSwanContext.interactive.setNavBarExpanded;

  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledNav
      navBarExpanded={champagneSwanContext?.interactive?.navBarExpanded}
    >
      <StyledImageContainer>
        <NextImage
          containerDimensions={{ width: "14em", height: "12em" }}
          containerPositioning={{ position: "relative" }}
          imageProps={{
            src: commonAssetUrls?.horizontalLogo ?? "",
            alt: "logo",
          }}
        />
      </StyledImageContainer>

      <StyledNavLinksContainer
        navBarExpanded={champagneSwanContext?.interactive?.navBarExpanded}
      >
        {navTree
          ? Object.keys(navTree).map((branch) => (
              <StyledNavLink
                key={branch}
                href={navTree[branch]?.path}
                className="nav-text"
              >
                {`${navTree[branch].label}`}
              </StyledNavLink>
            ))
          : null}
      </StyledNavLinksContainer>
      <StyledNavButton
        navBarExpanded={champagneSwanContext?.interactive?.navBarExpanded}
        onClick={() => {
          setNavBarExpanded?.(
            !champagneSwanContext?.interactive?.navBarExpanded
          );
        }}
      >
        {navBarExpanded ? <CloseIcon /> : <MenuIcon />}
      </StyledNavButton>
    </StyledNav>
  );
};

export default NavBar;
