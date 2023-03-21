import React from "react";
import StarSvgIcon from "./StarSvgIcon";
import { IconContainer } from "./style";
import { SystemContext } from "@molitio/ui-core";

type IconGroupProps = {
  fill?: string;
  dx?: string;
  dy?: string;
  stdDeviation?: string;
  floodOpacity?: string;
  starCount: number;
};

export const IconGroup: React.FC<IconGroupProps> = (props) => {
  const context = React.useContext(SystemContext);
  const { fill, dx, dy, stdDeviation, floodOpacity, starCount } = props;

  return (
    <IconContainer>
      {Array.from({ length: starCount }).map((_, i) => (
        <StarSvgIcon
          fill={fill ?? context?.theme?.palette?.secondary?.main ?? "#ffffff"}
          dx={dx ?? "0"}
          dy={dy ?? "25"}
          stdDeviation={stdDeviation ?? "0"}
          floodOpacity={floodOpacity ?? "0"}
          key={i}
        />
      ))}
    </IconContainer>
  );
};

export default IconGroup;
