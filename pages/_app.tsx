import { AppShell, Footer, MolitioNavBar } from "@molitio/ui-core";

import type { AppProps } from "next/app";
import { createTheme } from "@mui/material";
import "../styles/globals.scss";
import {
  ChampagneSwanContextRoot,
  ChampagneSwanTheme,
  MuiThemeProvider,
} from "@molitio/common-ui";

function MolitioWeb({ Component, pageProps }: AppProps) {
  const muiDefault = createTheme();
  const appTheme = createTheme(muiDefault, {
    ...ChampagneSwanTheme,
  });

  return (
    <AppShell
      applyGlobalStyleRules={true}
      externalTheme={appTheme}
      externalAppContextRoot={ChampagneSwanContextRoot}
    >
      <MuiThemeProvider externalTheme={appTheme}>
        <MolitioNavBar
          contactProps={{ contactInfoTextShadow: "0 2px 4px #8C7B6C" }}
        />
        <Component {...pageProps} />
        <Footer fixed={true} />
      </MuiThemeProvider>
    </AppShell>
  );
}

export default MolitioWeb;
