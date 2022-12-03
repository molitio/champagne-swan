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
          <title>Jeliza Clean</title>
          <meta property="og:title" content="Jeliza Clean" key="title" />
        </AppHeader>
        <MolitioNavBar
          contactProps={{ contactInfoTextShadow: "0 2px 4px #8C7B6C" }}
        />
        {children}
        <Footer />
      </MuiThemeProvider>
    </AppShell>
  );
};

export default Layout;
