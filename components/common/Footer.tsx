import React from "react";
import { StyledFooter } from "./style/StyledFooter";

const Footer: React.FC = () => {
  return (
    <StyledFooter className="footer">{`© 2022 All Rights Reserved | molitio llc`}</StyledFooter>
  );
};

export default Footer;
