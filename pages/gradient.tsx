import React from "react";
import styled, { css } from "styled-components";
import { StyledLinearGradient } from "../components";

const StyledContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const GradientBottom: React.FC = () => {
  return (
    <StyledContainer>
      <StyledLinearGradient
        direction="top"
        variation="reversePartial"
        opacity={1}
      />
    </StyledContainer>
  );
};

export default GradientBottom;
