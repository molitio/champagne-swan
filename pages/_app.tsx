import { createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ApplicationContextRoot, ApplicationTheme } from "../context";
import { Layout } from "../components";
import GlobalStyle from "../global-style/globalStyle";
import { AppShell } from "@molitio/ui-core";
import { MuiThemeProvider } from "../components";

export default function ChampagneSwanApp({ Component, pageProps }: AppProps) {
  const muiDefault = createTheme();
  const appTheme = createTheme(muiDefault, {
    ...ApplicationTheme,
  });

  return (
    <AppShell
      externalTheme={appTheme}
      externalAppContextRoot={ApplicationContextRoot}
    >
      <Layout>
        <GlobalStyle />
        <Script
          strategy="lazyOnload"
          /* nonce={nonce} */
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}`}
        />

        <MuiThemeProvider externalTheme={appTheme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </Layout>
    </AppShell>
  );
}

export async function getSserverSideProps() {
  return {
    props: {
      title: "Champagne Swan",
      description: "Champagne Swan",
    },
  };
}
