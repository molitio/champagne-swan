import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import HeroSegment from "../packages/champagne-swan-ui/common/HeroSegment";
import SecondaryHomePageContent from "@molitio/champagne-swan-ui/common/SecondaryHomePageContent";
import ServicesContainer from "@molitio/champagne-swan-ui/common/ServicesContainer";
const StyledSection = styled.section``;

const HomePage: NextPage = () => {
  return (
    <StyledSection>
      <HeroSegment />
      <SecondaryHomePageContent />
      <ServicesContainer />
    </StyledSection>
  );
};

export default HomePage;
