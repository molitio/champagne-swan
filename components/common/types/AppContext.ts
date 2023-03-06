export type AppContext = {
  interactive: {
    navBarExpanded?: boolean;
    setNavBarExpanded:
      | React.Dispatch<React.SetStateAction<boolean>>
      | undefined;
  };
};
