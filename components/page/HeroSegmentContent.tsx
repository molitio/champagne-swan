import React from "react";
import {
  StyledCoverContainer,
  StyledCallToAction,
  StyledMainTitle,
  StyledDescription,
  StyledSecondaryTitle,
} from "./style";

interface HeroSegmentContentProps {
  title?: string;
  anotherTitle?: string;
  description?: string | React.ReactElement;
  callToAction?: React.ReactNode;
}

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction, anotherTitle } = props;

  return (
    <StyledCoverContainer>
      <StyledMainTitle>{title ?? ""}</StyledMainTitle>
      <StyledSecondaryTitle>{anotherTitle ?? ""}</StyledSecondaryTitle>
      <StyledDescription>{description ?? ""}</StyledDescription>
      <StyledCallToAction>{callToAction ?? ""}</StyledCallToAction>
    </StyledCoverContainer>
  );
};
export default HeroSegmentContent;
