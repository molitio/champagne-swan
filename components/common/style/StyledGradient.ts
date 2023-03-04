import styled, { css } from "styled-components";

type StyledLinearGradientProps = {
  direction: "top" | "bottom" | "left" | "right";
  opacity: number;
  variation: "cover" | "partial";
};

//TODO: page height should come from the theme.dimesions

export const StyledLinearGradient = styled.div<StyledLinearGradientProps>`
  ${(props) => {
    const { direction } = props;
    switch (direction) {
      case "top":
        return css`
          top: 0;
          left: 0;
        `;
      case "bottom":
        return css`
          bottom: 0;
          left: 0;
        `;
      case "left":
        return css`
          top: 0;
          left: 0;
        `;
      case "bottom":
        return css`
          bottom: 0;
          left: 0;
        `;
      default:
        return;
    }
  }}
  position: absolute;
  margin: 0;
  height: 100vh;
  width: 100%;
  opacity: ${(props) => props?.opacity};

  background: ${(props) => {
    const resolveToVariation = () => {
      const { variation } = props;
      switch (variation) {
        case "cover":
          return "rgba(229, 236, 238, 0) 0%, rgba(153, 198, 208, 0.5) 33%, rgba(13, 124, 149, 0.6) 100%";
        case "partial":
          return "rgba(255,255,255, 0) 0%, rgba(247, 255, 255, 0.2) 20%, rgba(198, 221, 226, 0.8) 100%";
        default:
          return;
      }
    };
    return css`
    linear-gradient(to ${props?.direction ?? "top"}, ${resolveToVariation()})
  `;
  }};

  @media (max-width: 665px) {
    height: 910px;
  }
`;
