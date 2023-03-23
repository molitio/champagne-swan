import type { AppProps } from "next/app";
import Script from "next/script";
import { createTheme } from "@mui/material";
import { AppShell } from "@molitio/ui-core";
import { ApplicationContextRoot, ApplicationTheme } from "../context";
import { GlobalStyle } from "../globalStyle";
import { MuiThemeProvider, Layout } from "../components/common";

export default function App({ Component, pageProps }: AppProps) {
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
