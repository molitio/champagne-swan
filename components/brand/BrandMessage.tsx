import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup } from "../common";
import {
  StyledBrandMessage,
  StyledBrandMessageContentTitle,
  StyledBrandMessageContentText,
  StyledContactLink,
  StyledBrandMessageIconContainer,
  StyledBrandMessageContent,
  StyledBrandMessageContentContainer,
  StyledBrandMessageMainTitle,
  StyledBrandMessageOfficeCleanerImageContainer,
  StyledBrandMessageOfficeCleanerImage,
} from "./style";
import { StyledWaterSplash } from "../common/style/StyledWaterSplash";
import { resolveThemeBreakPointValues } from "../utils";

const BrandMessage: React.FC = () => {
  const systemContext = React.useContext(SystemContext);

  const navTree = systemContext.navRoot ?? {};

  const brandMessageLeafs = systemContext?.contentRoot?.brandMessage?.leafs;
  const textContent = brandMessageLeafs?.cover?.textContent;
  const assetUrls = brandMessageLeafs?.cover?.assetUrls;

  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledBrandMessage>
      <StyledBrandMessageIconContainer>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
      </StyledBrandMessageIconContainer>
      <StyledBrandMessageMainTitle>
        {textContent?.title ?? ""}
      </StyledBrandMessageMainTitle>
      <StyledBrandMessageContentContainer>
        <StyledBrandMessageContent>
          <StyledBrandMessageContentTitle>
            {textContent?.contentTitle ?? ""}
          </StyledBrandMessageContentTitle>

          <StyledBrandMessageContentText>
            {textContent?.contentText ?? ""}
          </StyledBrandMessageContentText>

          <StyledContactLink
            key={navTree?.about?.path ?? ""}
            href={navTree?.about?.path ?? ""}
          >
            {textContent?.moreInfoButton ?? ""}
          </StyledContactLink>
        </StyledBrandMessageContent>
        <StyledBrandMessageOfficeCleanerImageContainer>
          <StyledWaterSplash
            src={commonAssetUrls?.waterSplash ?? ""}
            alt={"water-splash"}
            width={240}
            height={240}
          />
          <StyledBrandMessageOfficeCleanerImage
            id={"office-cleaners"}
            sizes={`(max-width: ${resolveThemeBreakPointValues(
              systemContext?.theme,
              "xl"
            )}) 50vw,
                33vw`}
            src={assetUrls?.officeCleaners ?? ""}
            alt={"office-cleaners"}
            fill={true}
          />
        </StyledBrandMessageOfficeCleanerImageContainer>
      </StyledBrandMessageContentContainer>
    </StyledBrandMessage>
  );
};

export default BrandMessage;
