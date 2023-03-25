import React from "react";
import type { NextPage } from "next";
import {
  AppCover,
  BrandMessage,
  BrandFeats,
  Services,
  Opinions,
  Partners,
} from "../components/index";
import { ContactInfo } from "../components/contact";

const IndexPage: NextPage = () => {
  return (
    <main>
      <AppCover />
      <BrandFeats />
      <BrandMessage />
      <Services />
      <Opinions />
      <Partners />
      <ContactInfo />
    </main>
  );
};

export default IndexPage;
