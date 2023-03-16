import styled, { css } from "styled-components";
import Image from "next/image";
import { Dimensions } from "@molitio/ui-core";

export const StyledNextImage = styled(Image)`
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
`;

type StyledNextImageContainerProps = {
  position?: string;
  dimensions?: Dimensions;
};

export const StyledNextImageContainer = styled.div<StyledNextImageContainerProps>`
  position: ${(props) => props?.position ?? "absoulte"};
  ${(props) =>
    props?.dimensions
      ? css`
          ${{ ...props.dimensions }}
        `
      : css`
          height: 100vh;
          width: 100%;
        `}
`;
