import React, { useState } from 'react';
import styled from 'styled-components';

interface HiddenProps {
  visible: boolean;
}

const Button = styled.button<HiddenProps>`
  display: ${props => (props.visible ? 'inline' : 'none')};
  /* border:solid 1px #0c7a939a; */
  border: none;
  position: fixed; 
  left: 95%;
  bottom: 60px;
  padding:15px;
  font-size: 1rem;
  z-index: 1;
  cursor: pointer;
  color: #0c7a939a;
  background:	#c1dadf;
  font-weight: 600;
  box-shadow: 0px 1px 1px 1px #0c7a939a;
  border-radius:5px;
`
const ArrowUp = styled.a`

`;

const ScrollButton: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisible);
      return () => {
        window.removeEventListener('scroll', toggleVisible);
      }
    }
  }, []);

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <ArrowUp >/\</ArrowUp>
    </Button>
  );
};

export default ScrollButton;