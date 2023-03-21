import React from "react";
import styled from "styled-components";

type StyledContentContainerProps = {
  height?: string;
  heightTablet?: string;
};

export const StyledContentContainer = styled.div<StyledContentContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "1600px"};
  @media (max-width: 1440px) {
    height: ${(props) => props.heightTablet || "2200px"};
  }

  @media (max-width: 665px) {
    height: ${(props) => props.heightTablet || "2000px"};
  }
`;

export const StyledContentBackgroundLayer = styled.div<StyledContentContainerProps>`
  position: absolute;
  background-color: #c1dadf;
  height: ${(props) => props.height || "1600px"};
  width: 100%;

  @media (max-width: 1440px) {
    height: ${(props) => props.heightTablet || "2200px"};
  }
  @media (max-width: 665px) {
    height: ${(props) => props.heightTablet || "2000px"};
  }
`;

export const StyledContentFormText = styled.p`
  display: block;
  font-family: "Lato" sans-serif;
  font-size: 20px;
  color: white;
  text-align: center;
  width: 31em;
  margin: 2em auto 0 auto;
  @media (max-width: 660px) {
    width: 15em;
    font-size: 20px;
  }
`;

export const SyledContentFormBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1440px) {
    flex-direction: column-reverse;
  }
`;

/* 

TODO: this layer will be replaced when next/image is implemented


export const SimpledLayer = styled.img<React.CSSProperties>`
  position: relative;
  margin: 0;
  margin-top: 0px;
  top: ${(props) => props.top || "0"};
  left: 0;
  height: 200px;
  width: 100%;
`;
 */
export const StyledContentRelIcon = styled.div`
  position: relative;
  bottom: 130px;
`;

export const StyledContentMainTitle = styled.h1`
  position: relative;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-size: 105px;
  margin-top: 1em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
  @media (max-width: 665px) {
    font-size: 45px;
  }
`;

export const StyledContentFormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5em 0 0 10em;
  @media (max-width: 1440px) {
    padding: 5em 0 0 0;
  }
`;

export const StyledContentContactInfoContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 5em;
  color: white;
  line-height: 1.6;

  @media (max-width: 665px) {
    padding: 5em 0 0 0;
  }
`;

export const StyledContentContactInfo = styled.p`
  font-size: 2.4rem;
  font-family: "Tenor Sans", sans-serif;
  font-weight: 200;
  text-shadow: 0px 2px 4px #8c7b6c;

  @media (max-width: 665px) {
    font-size: 2em;
  }
`;

export const StyledContentLogoImage = styled.img`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 200px;
  margin: auto;
`;
