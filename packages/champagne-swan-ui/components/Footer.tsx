import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
 position:relative;
 text-align:center;
 color:#9D8D7B;
 margin-top:-28px;
 bottom:-8px;

`

const Footer: React.FC = () => {
return(
<StyledFooter className="footer">{`© 2022 All Rights Reserved | molitio llc`}</StyledFooter>
  )
}

export default Footer;