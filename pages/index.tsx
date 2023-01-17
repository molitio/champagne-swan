import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import HeroSegment from "../packages/champagne-swan-ui/common/HeroSegment";
import PremiumQuality from "@molitio/champagne-swan-ui/common/PremiumQuality";
import ServicesContent from "@molitio/champagne-swan-ui/common/ServicesContent";
import Opinions from "@molitio/champagne-swan-ui/common/Opinions";
import OurPartnersContent from "@molitio/champagne-swan-ui/common/OurPartnersContent";
import ContactContent from "@molitio/champagne-swan-ui/common/ContactContent";

const StyledSection = styled.section``;

const HomePage: NextPage = () => {
  return (
    <StyledSection>
      <HeroSegment />
      <PremiumQuality />
      <ServicesContent />
      <Opinions />
      <OurPartnersContent />
      <ContactContent/>
    </StyledSection>
  );
};

export default HomePage;
