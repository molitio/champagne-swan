import { createTheme } from "@mui/material";
import React from "react";
import ChampagneSwanContext from "./ChampagneSwanContext";
import { signIn } from "../utils";

const ChampagneSwanContextProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const { children } = props;

  const [extendNavBar, setExtendNavBar] = React.useState(false);
  const defaultTheme = createTheme({});

  return (
    <ChampagneSwanContext.Provider
      value={{
        appName: "Molitio",
        interactive: {
          navBarExpanded: extendNavBar,
          setNavBarExpanded: setExtendNavBar,
        },
        auth: {
          signIn: signIn,
        },
        theme: defaultTheme,
        navTree: {
          home: { label: "FŐOLDAL", path: "/" },
          services: { label: "SZOLGÁLTATÁSOK", path: "/services" },
          about: { label: "RÓLUNK", path: "/about" },
          contact: { label: "KAPCSOLAT", path: "/contact" },
        },
      }}
    >
      {children}
    </ChampagneSwanContext.Provider>
  );
};

export default ChampagneSwanContextProvider;
