import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import HeroSegment from "../packages/champagne-swan-ui/common/HeroSegment";
import PremiumQuality from "@molitio/champagne-swan-ui/common/PremiumQuality";
import ServicesHomeContent from "@molitio/champagne-swan-ui/common/ServicesHomeContent";
import Opinions from "@molitio/champagne-swan-ui/common/Opinions";
import OurPartnersContent from "@molitio/champagne-swan-ui/common/OurPartnersContent";
import ContactContent from "@molitio/champagne-swan-ui/common/ContactContent";

const StyledSection = styled.section``;

const HomePage: NextPage = () => {
  return (
    <StyledSection>
      <HeroSegment />
      <PremiumQuality />
      <ServicesHomeContent />
      <Opinions />
      <OurPartnersContent />
      <ContactContent/>
    </StyledSection>
  );
};

export default HomePage;
