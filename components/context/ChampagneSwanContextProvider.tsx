import React from "react";
import ChampagneSwanContext from "./ChampagneSwanContext";
import { signIn, signOut } from "../utils";

const ChampagneSwanContextProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const { children } = props;

  const [extendNavBar, setExtendNavBar] = React.useState(false);

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
