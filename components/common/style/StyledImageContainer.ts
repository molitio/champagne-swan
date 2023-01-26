import styled from "styled-components";
import { ImageBoxParams } from "../types";

type ImageContainerProps = {
  imageBoxParams: ImageBoxParams;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  background-image: url("default-image.jpg");
  ${(props) =>
    props.imageBoxParams.imageUrl &&
    `background-image: 
  url(${props.imageBoxParams.imageUrl});`}
  position: relative;
  height: ${(props) => props.imageBoxParams.dimensions.height || "353px"};
  width: ${(props) => props.imageBoxParams.dimensions.width || "529px"};
  min-height: ${(props) =>
    props.imageBoxParams.dimensions.minHeight || "353px"};
  min-width: ${(props) => props.imageBoxParams.dimensions.minWidth || "529px"};
  margin: ${(props) =>
    props.imageBoxParams.positioning.margin || "0px 0px 0px 0px"};
  object-fit: fill;
  background-size: cover;
  background-position: center;
  z-index: 1;
  box-shadow: 0px 3px 3px 0px #888888;

  @media (max-width: ${(props) => props.imageBoxParams.breakpoints.breakpoint1 || "1440px"}) {
    height: ${(props) =>
      props.imageBoxParams.dimensions.tablet?.height || "353px"};
    width: ${(props) =>
      props.imageBoxParams.dimensions.tablet?.width || "529px"};
    min-height: ${(props) =>
      props.imageBoxParams.dimensions.tablet?.minHeight || "353px"};
    min-width: ${(props) =>
      props.imageBoxParams.dimensions.tablet?.minWidth || "529px"};
    margin: ${(props) =>
      props.imageBoxParams.positioning.tablet?.margin || "30px 0px 0px 0px"};
    top: ${(props) => props.imageBoxParams.positioning.tablet?.top || "0px"};
  }
`;