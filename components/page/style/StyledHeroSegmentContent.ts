import { type } from "os";
import styled from "styled-components";

export const StyledCoverContainer = styled.div``;

export const StyledCallToAction = styled.div`
  text-align: center;
`;
export const IconContainer = styled.div`

`; 

type StyledProps = {
  color?: string;
  textShadow?: string;
};

export const StyledMainTitle = styled.h1<StyledProps>`
  position: relative;
  text-align: center;
  font-size: 3.6rem;
  margin: 30px 30px 0 30px;
  font-style: normal;
  font-weight: 200;
  font-size: 60px;
  line-height: 78px;
  color: ${(props) => props.color || " #ffffff"};

  @media (max-width: 1400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 645px) {
    font-size: 2.25rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 0em;
  }
  text-shadow: 2px 4px 8px #000000;

  @media (max-width: 280px) {
    font-size: 1.6rem;
    width: 8em;
  }
`;
export const StyledSecondaryTitle = styled.h1<StyledProps>`
  position: relative;
  text-align: center;
  font-size: 3.6rem;
  margin: 0px 30px 0 30px;
  font-style: normal;
  font-weight: 200;
  font-size: 60px;
  line-height: 78px;
  color: ${(props) => props.color || " #ffffff"};

  @media (max-width: 1400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 645px) {
    font-size: 2.25rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 0em;
  }
  text-shadow: 2px 4px 8px #000000;

  @media (max-width: 280px) {
    font-size: 1.6rem;
    width: 8em;
  }
`;

export const StyledDescription = styled.h3<StyledProps>`
  width: 40em;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => props.color || " #ffffff"};
  margin-top: 1em;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-size: 1.25rem;
  padding: 0 2em 0 2em;
  text-shadow: ${(props) => props.textShadow || "2px 4px 8px #000000"};
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
