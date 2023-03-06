import { createTheme } from "@mui/material";
import React from "react";
import ChampagneSwanContext from "./ChampagneSwanContext";
import { signIn, signOut } from "../utils";
import { getAuth } from "firebase/auth";

const ChampagneSwanContextProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const { children } = props;

  const [extendNavBar, setExtendNavBar] = React.useState(false);
  const defaultTheme = createTheme({});

  return (
    <ChampagneSwanContext.Provider
      value={{
        interactive: {
          navBarExpanded: extendNavBar,
          setNavBarExpanded: setExtendNavBar,
        },
        authContext: {
          authEnabled: false,
          signIn: signIn,
          signOut: signOut,
        },
      }}
    >
      {children}
    </ChampagneSwanContext.Provider>
  );
};

export default ChampagneSwanContextProvider;
