import React from "react";
import styled from "styled-components";


type ImageContainerProps = {
  imageUrl?: string;
  
  margin?: number | string;
  height?: number | string;
  width?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;

  tabletHeight?: number | string;
  tabletWidth?: number | string;
  tabletMinHeight?: number | string;
  tabletMinWidth?: number | string;

  mobileHeight?: number | string;
  mobileWidth?: number | string;
  mobileMinHeight?: number | string;
  mobileMinWidth?: number | string;
  marginTablet?: number | string;

  breakpoint1?: number | string;
  breakpoint2?: number | string;
};

const ImageContainer = styled.div<ImageContainerProps>`

  background-image: url("default-image.jpg");
  ${(props) => props.imageUrl && `background-image: 
  url(${props.imageUrl});`}
  position: relative;
  height: ${(props) => props.height || "353px"};
  width: ${(props) => props.width || "529px"};
  min-height: ${(props) => props.minHeight || "353px"};
  min-width: ${(props) => props.minWidth || "529px"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  object-fit: fill;
  background-size: cover;
  background-position: center;
  z-index: 1;
  box-shadow: 0px 3px 3px 0px #888888;

  @media (max-width: ${(props) => props.breakpoint1 || "768px"}) {
    height: ${(props) => props.tabletHeight || "353px"};
    width: ${(props) => props.tabletWidth || "529px"};
    min-height: ${(props) => props.tabletMinHeight || "353px"};
    min-width: ${(props) => props.tabletMinWidth || "529px"};
    margin: ${(props) => props.marginTablet || "30px 0px 0px 0px"};
  }
/* 
  @media (max-width: ${(props) => props.breakpoint2 || "529px"}) {
    height: ${(props) => props.mobileHeight || "176px"};
    width: ${(props) => props.mobileWidth || "264px"};
    min-height: ${(props) => props.mobileMinHeight || "176p"};
    min-width: ${(props) => props.mobileMinWidth || "264px"};
  }*/
`; 


const ImageBox = ({ 
  imageUrl,
  margin, 
  height, 
  width, 
  minHeight, 
  minWidth, 
  tabletHeight, 
  tabletWidth, 
  tabletMinHeight, 
  tabletMinWidth, 
  mobileHeight, 
  mobileWidth, 
  mobileMinHeight, 
  mobileMinWidth, 
  breakpoint1, 
  breakpoint2
}: ImageContainerProps) => {
  return <ImageContainer 
     imageUrl={imageUrl}
     margin={margin} 
     height={height} 
     width={width} 
     minHeight={minHeight} 
     minWidth={minWidth} 
     tabletHeight={tabletHeight} 
     tabletWidth={tabletWidth} 
     tabletMinHeight={tabletMinHeight} 
     tabletMinWidth={tabletMinWidth} 
     mobileHeight={mobileHeight} 
     mobileWidth={mobileWidth} 
     mobileMinHeight={mobileMinHeight} 
     mobileMinWidth={mobileMinWidth} 
     breakpoint1={breakpoint1} 
     breakpoint2={breakpoint2}
   />;
};

export default ImageBox;




