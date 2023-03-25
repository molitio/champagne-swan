import styled from "styled-components";

// TODO: need to ivestigate this with context font as direction
import "typeface-lato";

export const StyledOpinions = styled.div`
  padding-top: 5em;
  position: relative;
`;

export const StyledOpinionsIconContainer = styled.div`
  position: relative;
`;

export const StyledLayer = styled.img`
  position: absolute;
  top: -400px;
  height: 800px;
  margin: 0;
  padding: 0;
  left: 0;
  width: 100%;
  align-items: center;
`;

export const StyledMiddleLayer = styled.div`
  position: absolute;
  height: 236px;
  top: 400px;
  width: 100%;
  background: #c1dadf;

  @media (max-width: 1440px) {
    top: 400px;
    height: 536px;
  }
`;
export const AboutStyledMiddleLayer = styled.div`
  position: absolute;
  height: 236px;
  width: 100%;
  background: #c1dadf;

  @media (max-width: 1440px) {
    height: 834x;
  }
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
  outline: 3px dashed purple;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
  margin-left: 100px;

  @media (max-width: 665px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ServiceEvaluatorContainerImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 130px;
  height: 120px;
  border-radius: 50px;
  padding: 0px;
  margin-bottom: 30px;
`;

type ServiceEvaluatorProps = {
  color?: string;
  fontSize?: string;
  padding?: string;
};
export const StyledOpinionText = styled.p<ServiceEvaluatorProps>`
  color: ${(props) => props.color || "#0c7b93"};
  width: 400px;
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: 300;
  text-align: center;
  font-size: 25px;
  margin-bottom: 30px;

  @media (max-width: 665px) {
    font-size: 18px;
    width: 300px;
  }
`;
type ServiceEvaluatorName = {
  color?: string;
};

export const StyledOpinionTitle = styled.p<ServiceEvaluatorName>`
  text-align: center;
  color: ${(props) => props.color || "#0c7b93"};
  font-family: "Lato" sans-serif;
  font-weight: 100;
  font-size: 30px;
`;

export const StyledOpininsLogo = styled.div`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 130px;
  margin: auto;
`;
