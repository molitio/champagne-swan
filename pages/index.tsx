import type { NextPage } from "next";
import React from "react";
import styled from 'styled-components';
import HeroSegment from "../packages/champagne-swan-ui/common/HeroSegment";

  const StyledSection = styled.section`
`;

const HomePage: NextPage = () => {

  return (
    <StyledSection>
        <HeroSegment/>
    </StyledSection>
  );
};

export default HomePage;
