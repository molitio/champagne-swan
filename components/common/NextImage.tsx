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

  return (
    <StyledNextImageContainer
      dimensions={containerDimensions}
      position={containerPosition}
    >
      <StyledNextImage {...imageProps} />
    </StyledNextImageContainer>
  );
};

export default NextImage;
