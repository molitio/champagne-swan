import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { HeroSegment, SkillsComponent } from "../components/page";
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
    <main>
      {/*  <HeroSegment /> */}
      <SkillsComponent />
      {/*       <PremiumQuality /> */}
      {/*    <ServicesHomeContent />
      <Opinions />
      <OurPartnersContent />
      <ContactContent /> */}
    </main>
  );
};

export default HomePage;
