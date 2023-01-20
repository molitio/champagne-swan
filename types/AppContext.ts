import { Theme } from "@mui/material";
import { NavSegmentBranch } from "./NavSegmentBranch";

export type AppContext = {
  appName: string;
  theme?: Theme;
  interactive: { navBarExpanded?: boolean; setNavBarExpanded: React.Dispatch<React.SetStateAction<boolean>> | undefined },
  navTree?: Record<string, NavSegmentBranch>;
};