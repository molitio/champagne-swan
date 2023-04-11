import styled from "styled-components";

// TODO: need to ivestigate this with context font as direction
import "typeface-lato";

export const StyledOpinions = styled.section`
  padding-top: 5em;
  position: relative;
`;

export const StyledOpinionsIconContainer = styled.div`
  position: relative;
`;

type RotateLayer = {
  top?: string;
  tabletTop?: string;
  position?: string;
};

export const RotateLayer = styled.img<RotateLayer>`
  position: ${(props) => props.position || "absolute"};
  height: 800px;
  margin-top: 0px;
  padding: 0;
  top: ${(props) => props.top || "636px"};
  left: 0;
  width: 100%;
  align-items: center;
  transform: rotate(180deg);

  @media (max-width: 1440px) {
    top: ${(props) => props.tabletTop || "936px"};
  }
`;

export const StyledOpinionsMainTitle = styled.h1`
  position: relative;
  text-align: center;
  font-size: "6.5em";
  padding: "0.3em 0 0.3em 0";
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["opinionsTitleShadow"]?.textShadow ?? ""};
  font-weight: 400;
  margin-bottom: 0em;

  @media (max-width: 1440px) {
    font-size: 65px;
  }
  @media (max-width: 975px) {
    margin: auto;
    width: 10em;
  }
  @media (max-width: 665px) {
    padding-top: 150px;
    font-size: 36px;
    width: 8em;
  }
`;

export const InternalOpinionsContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column;
  }
`;
export const StyledOpinionsContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3em;

  @media (max-width: 665px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const StyledOpinionText = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: 300;
  text-align: center;
  font-size: 1.2em;
  width: 300px;
  margin: 0.5em auto 0.5em auto;

  @media (max-width: 665px) {
    font-size: 18px;
  }
`;

export const StyledOpinionTitle = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-align: center;
  font-family: "Lato" sans-serif;
  font-weight: 100;
  font-size: 1.8em;
  width: 300px;
  margin: auto;
`;

export const StyledOpininsLogo = styled.div`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 130px;
  margin: auto;
`;
