import React from "react";
import { IconGoldGroup } from "../common/IconGroups";
import {
  StyledCoverContainer,
  StyledCallToAction,
  StyledMainTitle,
  StyledDescription,
  StyledSecondaryTitle
} from "./style";

interface HeroSegmentContentProps {
  title?: string | React.ReactNode;
  anotherTitle?: string | React.ReactNode;
  description?: string;
  callToAction?: React.ReactNode;
 
};

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction, anotherTitle} = props;

  return (
    <StyledCoverContainer>
 
      <StyledMainTitle  className="title">{`${title}`}</StyledMainTitle>
      <StyledSecondaryTitle  className="title">{`${anotherTitle}`}</StyledSecondaryTitle>
      <StyledDescription className="hiro-conten">
        {description}
      </StyledDescription>
      <StyledCallToAction>{callToAction}</StyledCallToAction>
    </StyledCoverContainer>
  );
};
export default HeroSegmentContent;
