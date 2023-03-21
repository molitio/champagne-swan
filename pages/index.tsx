import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import PremiumQuality from "../components/common/PremiumQuality";
import Opinions from "../components/common/Opinions";
import OurPartnersContent from "../components/common/OurPartnersContent";
import { SkillsComponent, AppCover, ContactContent } from "../components";
import ServicesHomeContent from "../components/services/ServicesHomeContent";

type IndexPageProps = {
  title?: string;
  description?: string;
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  return (
    <main>
      <AppCover />
      <SkillsComponent />
      <PremiumQuality />
      <ServicesHomeContent />
      <Opinions />
      <OurPartnersContent />
      <ContactContent />
    </main>
  );
};

export default IndexPage;
