import React from "react";
import { AppShell, Footer, MolitioNavBar } from "@molitio/ui-core";
import MuiThemeProvider from "./MuiThemeProvider";
import { ChampagneSwanContextRoot } from "../context";
import AppHeader from "./Header";

type LayoutProps = {
  appTheme: any;
};

const Layout: React.FC<LayoutProps & React.PropsWithChildren> = (props) => {
  const { children, appTheme } = props;

  console.log(
    "context root hero background",
    ChampagneSwanContextRoot?.contentRoot?.home?.leafs?.hero?.assetUrls
      ?.heroBackground
  );

  return (
    <AppShell
      externalTheme={appTheme}
      externalAppContextRoot={ChampagneSwanContextRoot}
      applyGlobalStyleRules={true}
      fontFamily="'Tenor Sans', sans-serif"
      fontFamilyHref="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap"
    >
      <MuiThemeProvider externalTheme={appTheme}>
        <AppHeader key={"champagen-swan-header"}>
          <title>Champagne Swan</title>
          <meta property="og:title" content="Champagne Swan" key="title" />
        </AppHeader>
        <MolitioNavBar
          contactProps={{ contactInfoTextShadow: "0 2px 4px #8C7B6C" }}
        />
        {children}
        <Footer fixed={false} />
      </MuiThemeProvider>
    </AppShell>
  );
};

export default Layout;
