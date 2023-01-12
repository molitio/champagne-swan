import React from "react";
import styled from "styled-components";
import StarIcon from "../svg/components/StarIcon";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type IconGroupProps = {
  fill?: string;
  dx?: string;
  dy?: string;
  stdDeviation?: string;
  floodOpacity?: string;
};

export const IconGoldGroup: React.FC<IconGroupProps> = () => {
  return (
    <IconContainer>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          fill="#D2C5AA"
          dx="0"
          dy="25"
          stdDeviation="60"
          floodOpacity="0.7"
          key={i}
        />
      ))}
    </IconContainer>
  );
};



export const IconBlueGroup: React.FC<IconGroupProps> = () => {
  return (
    <IconContainer>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          fill="#0c7a9352"
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

export const IconWhiteGroup: React.FC<IconGroupProps> = () => {
  return (
    <IconContainer>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          fill={"#ffffff"}
      /*     dx={"0"}
          dy={"0"}
          stdDeviation={"0"}
          floodOpacity={"0.1"} */
          key={i}
         
        />
      ))}
    </IconContainer>
  );
};
