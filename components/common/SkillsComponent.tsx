import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  SkillsContainer,
  SkillInfoContainer,
  SkillScore,
  SkillName,
} from "./style";

const SkillsComponent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);

  const opinionsLeafs = systemContext?.contentRoot?.opinions?.leafs;
  const textContent = opinionsLeafs?.opinionCards?.textContent;

  return (
    <SkillsContainer>
      <SkillInfoContainer>
        <SkillScore>{textContent?.colleaguesScore ?? ""}</SkillScore>
        <SkillName>{textContent?.colleagues ?? ""}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{textContent?.clientsScore ?? ""}</SkillScore>
        <SkillName>{textContent?.clients}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{textContent?.projectsScore ?? ""}</SkillScore>
        <SkillName>{textContent?.projects}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{textContent?.equipmentScore ?? ""}</SkillScore>
        <SkillName>{textContent?.equipment ?? ""}</SkillName>
      </SkillInfoContainer>
    </SkillsContainer>
  );
};

export default SkillsComponent;
