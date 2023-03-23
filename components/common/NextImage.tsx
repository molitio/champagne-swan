import React from "react";
import { ImageProps } from "next/image";
import { Dimensions } from "@molitio/ui-core";
import { StyledNextImage, StyledNextImageContainer } from "./style";
import { Positioning, Visual } from "./types";

type NextImageProps = {
  imageProps: ImageProps;
  containerDimensions?: Dimensions;
  containerPositioning?: Positioning;
  visual?: Visual;
};

const NextImage: React.FC<NextImageProps> = (props) => {
  const { containerDimensions, imageProps, containerPositioning, visual } =
    props;
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
      visual={visual}
    >
      <StyledNextImage {...nextImageProps} />
    </StyledNextImageContainer>
  );
};

export default NextImage;
