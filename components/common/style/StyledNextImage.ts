import Image from "next/image";
import styled, { css } from "styled-components";
import { Dimensions } from "@molitio/ui-core";
import { Positioning, Visual } from "../types";

type StyledNextImageProps = {
  visual?: Visual;
};

export const StyledNextImage = styled(Image)<StyledNextImageProps>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
  border-radius: ${(props) => props?.visual?.borderRadius ?? ""};
`;

type StyledNextImageContainerProps = {
  positioning?: Positioning;
  dimensions?: Dimensions;
  visual?: Visual;
};

export const StyledNextImageContainer = styled.div<StyledNextImageContainerProps>`
  box-shadow: ${(props) => props?.visual?.boxShadow ?? ""};
  position: ${(props) => props?.positioning?.position ?? ""};
  transform: ${(props) => props?.positioning?.transform ?? ""};
  top: ${(props) => props?.positioning?.top ?? ""};
  right: ${(props) => props?.positioning?.right ?? ""};
  bottom: ${(props) => props?.positioning?.bottom ?? ""};
  left: ${(props) => props?.positioning?.left ?? ""};
  padding: ${(props) => props?.positioning?.padding ?? ""};
  border-radius: ${(props) => props?.visual?.borderRadius ?? ""};
  ${(props) =>
    props?.dimensions
      ? css`
          height: ${props?.dimensions?.height ?? ""};
          width: ${props?.dimensions?.width ?? ""};
          min-height: ${props?.dimensions?.minHeight ?? ""};
          min-height: ${props?.dimensions?.minHeight ?? ""};
          max-height: ${props?.dimensions?.maxHeight ?? ""};
          max-width: ${props?.dimensions?.maxWidth ?? ""};
        `
      : css`
          height: 100%;
          width: 100%;
        `}
`;

type SyledImageAndEffectProps = {
  dimensions?: Dimensions;
  margin?: string;
};

export const SyledImageAndEffect = styled.div<SyledImageAndEffectProps>`
  height: ${(props) => props?.dimensions?.height ?? ""};
  width: ${(props) => props?.dimensions?.width ?? ""};
  min-height: ${(props) => props?.dimensions?.minHeight ?? ""};
  min-height: ${(props) => props?.dimensions?.minHeight ?? ""};
  max-height: ${(props) => props?.dimensions?.maxHeight ?? ""};
  max-width: ${(props) => props?.dimensions?.maxWidth ?? ""};
  background-color: teal;
  position: relative;
  margin: ${(props) => props?.margin ?? ""};
`;
