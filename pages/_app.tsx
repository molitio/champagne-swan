import { createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { ChampagneSwanTheme, Layout } from "@molitio/champagne-swan-ui";
//import "../styles/globals.scss";

export default function ChampagneSwanApp({ Component, pageProps }: AppProps) {
  const muiDefault = createTheme();
  const appTheme = createTheme(muiDefault, {
    ...ChampagneSwanTheme,
  });

  return (
    <Layout appTheme={appTheme}>
      <Component {...pageProps} />
    </Layout>
  );
}
