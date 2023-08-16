import React from "react";
import { Provider } from "react-redux";
import { appContextStore } from "../../context/store";

const AppContextStoreProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return <Provider store={appContextStore}>{children}</Provider>;
};

export default AppContextStoreProvider;
