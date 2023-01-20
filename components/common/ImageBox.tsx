import React from "react";
import { ImageContainer } from "./style";
import { ImageBoxParams } from "./types";

type ImageContainerProps = {
  imageBoxParams: ImageBoxParams;
};

export const ImageBox: React.FC<ImageContainerProps> = (props) => {
  const { imageBoxParams } = props;

  return <ImageContainer imageBoxParams={imageBoxParams} />;
};
