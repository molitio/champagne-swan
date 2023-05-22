import React from "react";
import { ImageProps } from "next/image";
import { Dimensions } from "@molitio/ui-core";
import { StyledNextImage, StyledNextImageContainer } from "./style";
import { Positioning, Visual } from "./types";

type NextImageProps = {
  imageProps: ImageProps;
  imagePositioning?: Positioning;
  imageVisual?: Visual;
  containerDimensions?: Dimensions;
  containerPositioning?: Positioning;
  containerVisual?: Visual;
  chilrenSequence?: "before" | "after";
};

const NextImage: React.FC<NextImageProps & React.PropsWithChildren> = (
  props
) => {
  const {
    imageProps,
    imagePositioning,
    containerDimensions,
    containerPositioning,
    containerVisual,
    imageVisual,
    children,
    chilrenSequence,
  } = props;

  const nextImageProps = {
    ...imageProps,
  };

  /*   if (!imageProps.width || !imageProps.height) {
    nextImageProps.fill = true;
  } */

  return (
    <StyledNextImageContainer
      dimensions={containerDimensions}
      positioning={containerPositioning}
      visual={containerVisual}
    >
      {chilrenSequence === "before" ? children : ""}
      <StyledNextImage
        positioning={{ ...imagePositioning }}
        visual={{ ...imageVisual }}
        {...nextImageProps}
      />
      {chilrenSequence === "after" ? children : ""}
    </StyledNextImageContainer>
  );
};

export default NextImage;
