import { type } from "os";
import styled from "styled-components";

export const OpinionsMainContainer = styled.div`
  position: relative;
  height: 1200px;

  @media (max-width: 1440px) {
    height: 1400px;
  }
`;

export const StyledOpinionsIconContainer = styled.div`
  position: relative;
  padding-top: 6em;
  padding-bottom: 3em;
`;

export const StyledLayer = styled.img`
  position: absolute;
  height: 400px;
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
    height: 834x;
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
  position?: string;
};

export const RotateLayer = styled.img<RotateLayer>`
 position: ${(props) => props.position || "absolute"};;
  height: 800px;
  margin-top: 0px;
  padding: 0;
  top: ${(props) => props.top || "636px"};
  left: 0;
  width: 100%;
  align-items: center;
  transform: rotate(180deg);
`;

type MainOpinionsTitleProps = {
  color?: string;
  fontSize?: string;
  padding?: string;
};

export const MainOpinionsTitle = styled.h1<MainOpinionsTitleProps>`
  position: relative;
  text-align: center;
  color: ${(props) => props.color || "#ffffff"};
  font-size: ${(props) => props.fontSize || "105px"};
  padding: ${(props) => props.padding || "0.3em 0 0.3em 0"};
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  margin-bottom: 0em;

  @media (max-width: 1440px) {
    font-size: 65px;
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
export const ServiceEvaluatorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
  margin-left: 100px;
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
export const ServiceEvaluatorContainerText = styled.p<ServiceEvaluatorProps>`
  color: ${(props) => props.color || "#0c7b93"};
  width: 320px;
  
  text-align: center;
  margin-bottom: 30px;
`;
type ServiceEvaluatorName = {
  color?:string;
}

export const ServiceEvaluatorContainerName = styled.h1<ServiceEvaluatorName>`
  text-align: center;
  color: ${(props) => props.color || "#0c7b93"};
`;

export const StyledOpininsLogoImage = styled.img`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 130px;
  margin: auto;
`;
