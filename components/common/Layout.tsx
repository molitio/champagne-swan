import React from "react";
import ScrollButton from "./ScrollButton";
import Footer from "./Footer";
import { ChampagneSwanContextProvider } from "../context";
import NavBar from "./NavBar";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <ChampagneSwanContextProvider>
      <NavBar />
      {children}
      <ScrollButton />
      <Footer />
    </ChampagneSwanContextProvider>
  );
};

export default Layout;
