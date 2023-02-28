import React from "react";
import {
  SkillsContainer,
  SkillInfoContainer,
  SkillScore,
  SkillName,
} from "./style";

const SkillsComponent: React.FC = () => {
  return (
    <SkillsContainer >
      <SkillInfoContainer>
        <SkillScore>{`50`}</SkillScore>
        <SkillName>{`TAPASZTALT KOLLÉGÁK`}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{`80`}</SkillScore>
        <SkillName>{`ELÉGEDETT ÜGYFÉL`}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{`150`}</SkillScore>
        <SkillName>{`SIKERES PROJECT`}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{`100`}</SkillScore>
        <SkillName>{`DARABOS GÉPPARK`}</SkillName>
      </SkillInfoContainer>
    </SkillsContainer>
  );
};

export default SkillsComponent;
