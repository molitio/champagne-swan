import React from "react";
import ScrollButton from "./ScrollButton";
import Footer from "./Footer";
import { AppContextProvider } from "../context";
import NavBar from "./NavBar";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <AppContextProvider>
      <NavBar />
      {children}
      <ScrollButton />
      <Footer />
    </AppContextProvider>
  );
};

export default Layout;
