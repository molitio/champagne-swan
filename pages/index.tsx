import React from "react";
import type { NextPage } from "next";
import {
  AppCover,
  PremiumQuality,
  BrandFeats,
  Services,
  Opinions,
  Partners,
} from "../components/index";
import { Contact } from "../components/contact";

const IndexPage: NextPage = () => {
  return (
    <main>
      <AppCover />
      <BrandFeats />
      <PremiumQuality />
      <Services />
      <Opinions />
      <Partners />
      <Contact />
    </main>
  );
};

export default IndexPage;
