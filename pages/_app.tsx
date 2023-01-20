import { createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { ChampagneSwanTheme } from "../theme";
import { Layout } from "../components/common";
import "../styles/globals.scss";

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
