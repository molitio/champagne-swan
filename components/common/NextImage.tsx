import React from "react";
import { ImageProps } from "next/image";
import { Dimensions } from "@molitio/ui-core";
import { StyledNextImage, StyledNextImageContainer } from "./style";

type NextImageProps = {
  imageProps: ImageProps;
  containerDimensions?: Dimensions;
};

const NextImage: React.FC<NextImageProps> = (props) => {
  const { containerDimensions, imageProps } = props;

  return (
    <StyledNextImageContainer dimensions={containerDimensions}>
      <StyledNextImage {...imageProps} />
    </StyledNextImageContainer>
  );
};

export default NextImage;
