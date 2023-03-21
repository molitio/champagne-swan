import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { HeroSegment, SkillsComponent } from "../components/page";
import PremiumQuality from "../components/page/PremiumQuality";
import ServicesHomeContent from "../components/page/ServicesHomeContent";
import Opinions from "../components/page/Opinions";
import OurPartnersContent from "../components/page/OurPartnersContent";

import ContactContent from "../components/contact/ContactContent";

type IndexPageProps = {
  title?: string;
  description?: string;
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  return (
    <main>
      <HeroSegment />
      <SkillsComponent />
      <PremiumQuality />
      {/*    <ServicesHomeContent />
      <Opinions />
      <OurPartnersContent />
      <ContactContent /> */}
    </main>
  );
};

export default IndexPage;
