import React from "react";
import { ImageProps } from "next/image";
import { Dimensions } from "@molitio/ui-core";
import { StyledNextImage, StyledNextImageContainer } from "./style";
import { Positioning, Visual } from "./types";

type NextImageProps = {
  imageProps: ImageProps;
  imageVisual?: Visual;
  containerDimensions?: Dimensions;
  containerPositioning?: Positioning;
  containerVisual?: Visual;
};

const NextImage: React.FC<NextImageProps> = (props) => {
  const {
    containerDimensions,
    imageProps,
    containerPositioning,
    containerVisual,
    imageVisual,
  } = props;
  const nextImageProps = {
    ...imageProps,
  };

  if (!imageProps.width || !imageProps.height) {
    nextImageProps.fill = true;
  }

  return (
    <StyledNextImageContainer
      dimensions={containerDimensions}
      positioning={containerPositioning}
      visual={containerVisual}
    >
      <StyledNextImage {...nextImageProps} visual={{ ...imageVisual }} />
    </StyledNextImageContainer>
  );
};

export default NextImage;
