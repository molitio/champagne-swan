import React, { useState } from 'react';
import styled from 'styled-components';

interface HiddenProps {
  visible: boolean;
}

const Button = styled.button<HiddenProps>`
  display: ${props => (props.visible ? 'inline' : 'none')};
  border:solid 1px black;
  position: fixed; 
  left: 90%;
  bottom: 60px;
  padding:5px;
  font-size: 1rem;
  z-index: 1;
  cursor: pointer;
  color: black;
  background:	rgb(160,160,160, 0.5);
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