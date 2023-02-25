import { createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ChampagneSwanTheme } from "../theme";
import { Layout } from "../components/common";
import GlobalStyle from "../global-style/globalStyle";

export default function ChampagneSwanApp({ Component, pageProps }: AppProps) {
  const muiDefault = createTheme();
  const appTheme = createTheme(muiDefault, {
    ...ChampagneSwanTheme,
  });

  return (
    <Layout appTheme={appTheme}>
      <GlobalStyle />
      <Script
        strategy="lazyOnload"
        /* nonce={nonce} */
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}`}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
