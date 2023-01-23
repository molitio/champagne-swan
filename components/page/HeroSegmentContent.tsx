import React from "react";
import { IconGoldGroup } from "../common/IconGroups";
import {
  StyledCoverContainer,
  StyledCallToAction,
  StyledMainTitle,
  StyledDescription,
} from "./style";

type HeroSegmentContentProps = {
  title?: string;
  description?: string;
  callToAction?: React.ReactNode;
};

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction } = props;

  return (
    <StyledCoverContainer>
      <IconGoldGroup
        fill={""}
        dx={""}
        dy={""}
        stdDeviation={""}
        floodOpacity={""}
      />
      <StyledMainTitle className="title">{`${title}`}</StyledMainTitle>
      <StyledDescription className="hiro-conten">
        {/*  {`Cégünk magas színvonalon kínál takarító szolgáltatást szállodák,
                irodaházak és magánszemélyek részére,`}
        <br /> {`valamint vállaljuk nagy belmagasságú ipari üzemek,`}
        <br />{" "}
        {`gyártó csarnokok, raktárak és logisztikai központok
                speciális takarítását!`} */}
        {description}
      </StyledDescription>
      <StyledCallToAction>{callToAction}</StyledCallToAction>
    </StyledCoverContainer>
  );
};
export default HeroSegmentContent;
