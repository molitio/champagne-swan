import React from "react";
import { AppContext } from "../common";
import { AuthContext } from "./types";

const ChampagneSwanContext = React.createContext<AppContext & AuthContext>({
  interactive: { navBarExpanded: false, setNavBarExpanded: undefined },
  authContext: {},
});
export default ChampagneSwanContext;
