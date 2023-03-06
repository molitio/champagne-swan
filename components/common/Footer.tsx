import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { StyledFooter } from "./style/StyledFooter";

const Footer: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonTextContent = commonLeafs?.footer?.textContent;

  return (
    <StyledFooter className="footer">
      {commonTextContent?.maintainer ?? ""}
    </StyledFooter>
  );
};

export default Footer;
