/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, ThemeProvider } from "@mui/material";
import { Visual } from "./types";

declare module "@mui/material" {
  export interface Palette {
    stars?: {
      gold?: string;
      blue?: string;
      white?: string;
    };
    gradient?: {
      cover?: string;
      partial?: string;
      reversePartial?: string;
    };
    visual?: Record<string, Visual>;
  }
  export interface TypeBackground {
    background: {
      inverse?: string;
      interactive?: string;
    };
  }
  export interface TypeText {
    tertiary?: string;
    inverse?: string;
    interactive?: string;
  }
  export interface Theme {
    dimensions: {
      page: {
        height: string;
      };
      header: {
        height: string;
      };
      footer: {
        height: string;
      };
    };
  }
}

const MuiThemeProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children, externalTheme } = props;

  return (
    <ThemeProvider theme={externalTheme ?? createTheme()}>
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
