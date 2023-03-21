import React from "react";
import { ImageProps } from "next/image";
import { Dimensions } from "@molitio/ui-core";
import { StyledNextImage, StyledNextImageContainer } from "./style";

type NextImageProps = {
  imageProps: ImageProps;
  containerDimensions?: Dimensions;
  containerPosition?: string;
};

const NextImage: React.FC<NextImageProps> = (props) => {
  const { containerDimensions, imageProps, containerPosition } = props;
  const nextImageProps = {
    ...imageProps,
  };

  if (!imageProps.width || !imageProps.height) {
    nextImageProps.fill = true;
  }

  return (
    <StyledNextImageContainer
      dimensions={containerDimensions}
      position={containerPosition}
    >
      <StyledNextImage {...nextImageProps} />
    </StyledNextImageContainer>
  );
};

export default NextImage;
