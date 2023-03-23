import styled, { css } from "styled-components";
import Image from "next/image";
import { Dimensions } from "@molitio/ui-core";
import { Positioning, Visual } from "../types";

export const StyledNextImage = styled(Image)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
`;

type StyledNextImageContainerProps = {
  positioning?: Positioning;
  dimensions?: Dimensions;
  visual?: Visual;
};

export const StyledNextImageContainer = styled.div<StyledNextImageContainerProps>`
  box-shadow: ${(props) => props?.visual?.boxShadow ?? "none"};
  position: ${(props) => props?.positioning?.position ?? "absolute"};
  transform: ${(props) => props?.positioning?.transform ?? "none"};
  top: ${(props) => props?.positioning?.top ?? ""};
  right: ${(props) => props?.positioning?.right ?? ""};
  bottom: ${(props) => props?.positioning?.bottom ?? ""};
  left: ${(props) => props?.positioning?.left ?? ""};
  padding: ${(props) => props?.positioning?.padding ?? ""};
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

export const SyledImageAndEffect = styled.div`
  outline: 3px dashed purple;
  padding: 1em;
  position: relative;
`;
