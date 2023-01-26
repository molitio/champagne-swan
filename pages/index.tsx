import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { HeroSegment } from "../components/page";
import PremiumQuality from "../components/page/PremiumQuality";
import ServicesHomeContent from "../components/page/ServicesHomeContent";
import Opinions from "../components/page/Opinions";
import OurPartnersContent from "../components/page/OurPartnersContent";

import ContactContent from "../components/page/ContactContent";

type HomeProps = {
  title?: string;
  description?: string;
};

const HomePage: NextPage<HomeProps> = (props) => {
  return (
    <section>
      <HeroSegment />
      <PremiumQuality />
      <ServicesHomeContent />
      <Opinions />
      <OurPartnersContent />
      <ContactContent />
    </section>
  );
};

export default HomePage;

export async function getServerSideProps() {
  return {
    props: {
      title: "Champagne Swan",
      description: "Champagne Swan",
    },
  };
}
