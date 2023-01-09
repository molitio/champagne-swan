import { createTheme } from "@mui/material";
import React from "react";
import { AppContext } from "../types";

const ChampagneSwanContext = React.createContext<AppContext>({
  appName: "",
  interactive: { navBarExpanded: false, setNavBarExpanded: undefined },
  theme: createTheme(),
  navTree: {},
});
export default ChampagneSwanContext;