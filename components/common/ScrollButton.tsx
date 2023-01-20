import React, { useState } from 'react';
import { Button, ArrowUp } from './style/StyledScrollButton';

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