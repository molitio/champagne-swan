import React from "react";
import styled from "styled-components";
import LogoIcon from "../svg/components/LogoIcon";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type IconGroupProps = {
  fill: string;
  dx: string;
  dy: string;
  stdDeviation: string;
  floodOpacity: string;
};

export const IconGoldGroup: React.FC<IconGroupProps> = () => {
  return (
    <IconContainer>
      {Array.from({ length: 5 }).map((_, i) => (
        <LogoIcon
          fill="#D2C5AA"
          dx="0"
          dy="25"
          stdDeviation="60"
          floodOpacity="0.5"
          key={i}
        />
      ))}
    </IconContainer>
  );
};

export default IconGoldGroup;

export const IconBlueGroup: React.FC<IconGroupProps> = () => {
  return (
    <IconContainer>
      {Array.from({ length: 5 }).map((_, i) => (
        <LogoIcon
          fill="#0C7B93"
          dx="0"
          dy="0"
          stdDeviation="0"
          floodOpacity="0"
          key={i}
        />
      ))}
    </IconContainer>
  );
};
