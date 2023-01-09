import React from "react";
import ScrollButton from './ScrollButton';
import Footer from "./Footer";
import { ChampagneSwanContextProvider } from "../context";
import NavBar from "./NavBar";

type LayoutProps = {
  appTheme: any;
};



const Layout: React.FC<LayoutProps & React.PropsWithChildren> = (props) => {
  const { children, appTheme } = props;

  return (
    <ChampagneSwanContextProvider>
      <NavBar />
      {children}
      <ScrollButton/>
      <Footer/>
    </ChampagneSwanContextProvider>
  );
};

export default Layout;
