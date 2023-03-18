import React from "react";
import {
  StyledCoverContainer,
  StyledCallToAction,
  StyledMainTitle,
  StyledDescription,
  StyledSubTitle,
} from "./style";

interface HeroSegmentContentProps {
  title?: string;
  subTitle?: string;
  description?: string | React.ReactElement;
  callToAction?: React.ReactNode;
}

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction, subTitle } = props;

  return (
    <StyledCoverContainer>
      <StyledMainTitle>{title ?? ""}</StyledMainTitle>
      <StyledSubTitle>{subTitle ?? ""}</StyledSubTitle>
      <StyledDescription>{description ?? ""}</StyledDescription>
      <StyledCallToAction>{callToAction ?? ""}</StyledCallToAction>
    </StyledCoverContainer>
  );
};
export default HeroSegmentContent;
