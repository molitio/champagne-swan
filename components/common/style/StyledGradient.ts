import styled, { css } from "styled-components";

type StyledLinearGradientProps = {
  direction: "top" | "bottom" | "left" | "right";
  variation?: string;
  opacity: number;
};

export const StyledLinearGradient = styled.div<StyledLinearGradientProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  height: ${(props) => props?.theme?.dimensions?.page?.height ?? "100vh"};
  width: 100%;
  opacity: ${(props) => props?.opacity};
  background: ${(props) => css`
    linear-gradient(to ${props?.direction ?? "top"}, ${
    props?.theme?.palette?.gradient?.[props?.variation ?? ""]
  })
  `};

  @media (max-width: 665px) {
    height: 910px;
  }
`;
