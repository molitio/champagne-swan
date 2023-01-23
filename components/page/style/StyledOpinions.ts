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

export const RotateLayer = styled.img`
  position: absolute;
  height: 800px;
  margin-top: 0px;
  padding: 0;
  top: 636px;
  left: 0;
  width: 100%;
  align-items: center;
  transform: rotate(180deg);
`;


export const MainOpinionsTitle = styled.h1`
  position: relative;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-size: 105px;
  margin-top: 0.3em;
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
export const ServiceEvaluatorContainerText = styled.p`
  width: 320px;
  color: #0c7b93;
  text-align: center;
  margin-bottom: 30px;
`;
export  const ServiceEvaluatorContainerName = styled.h1`
  text-align: center;
  color: #0c7b93;
`;

export const StyledOpininsLogoImage = styled.img`
  position: relative;
  padding-top: 100px;
  display: block;
  width: 130px;
  margin: auto;
`;