import { createTheme } from "@mui/material";
import React from "react";
import { AppContext } from "../../types";
import { AuthContext } from "./types/AuthContext";

const ChampagneSwanContext = React.createContext<AppContext & AuthContext>({
  appName: "",
  interactive: { navBarExpanded: false, setNavBarExpanded: undefined },
  authContext: {},
  theme: createTheme(),
  navTree: {},
});
export default ChampagneSwanContext;
