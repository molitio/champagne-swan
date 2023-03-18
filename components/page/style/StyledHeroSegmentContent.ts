import styled from "styled-components";

export const StyledCoverContainer = styled.div``;

export const StyledCallToAction = styled.div`
  text-align: center;
`;
export const IconContainer = styled.div``;

type StyledProps = {
  color?: string;
  textShadow?: string;
};

export const StyledMainTitle = styled.h1<StyledProps>`
  position: relative;
  text-align: center;
  margin: 30px 30px 0 30px;
  font-style: normal;
  font-weight: 200;
  font-size: 60px;
  line-height: 78px;
  color: ${(props) => props.color || " #ffffff"};
  text-shadow: 1px 3px 5px #000000;

  @media (max-width: 1400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 975px) {
    display: block;
    margin: 30px auto 30px auto;
    width: 12em;
  }

  @media (max-width: 665px) {
    display: block;
    margin: 30px auto 30px auto;
    font-size: 2.25rem;
    width: 8em;
    line-height: 50px;
  }
`;

export const StyledSubTitle = styled.h1<StyledProps>`
  position: relative;
  text-align: center;
  font-size: 3.6rem;
  margin: 0px 30px 0 30px;
  font-style: normal;
  font-weight: 200;
  font-size: 60px;
  line-height: 78px;
  color: ${(props) => props.color || " #ffffff"};
  text-shadow: 2px 4px 8px #000000;

  @media (max-width: 1400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 975px) {
    margin: auto;
    width: 10em;
  }

  @media (max-width: 665px) {
    display: block;
    margin: 30px auto 30px auto;
    font-size: 2.1rem;
    width: 8em;
    line-height: 50px;
  }

  @media (max-width: 280px) {
    font-size: 1.6rem;
    width: 8em;
  }
`;

export const StyledDescription = styled.pre<StyledProps>`
  width: 36em;
  font-style: normal;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: ${(props) => props.color || " #ffffff"};
  margin-top: 1em;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  padding: 0 2em 0 2em;
  text-shadow: ${(props) => props.textShadow || "2px 4px 4px #000000"};
  white-space: pre-wrap;

  @media (max-width: 975px) {
    font-size: 28px;
    width: 16em;
  }

  @media (max-width: 660px) {
    font-size: 21px;
    width: 13em;
    padding: 0;
  }
`;
