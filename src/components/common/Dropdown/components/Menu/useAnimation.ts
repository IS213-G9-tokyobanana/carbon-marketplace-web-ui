import gsap from 'gsap';
import React, { useEffect } from 'react';

export default (container: React.RefObject<HTMLDivElement>, expand: boolean) => {
  useEffect(() => {
    gsap.to(container.current, {
      duration: 0.25,
      ease: 'power2.out',
      autoAlpha: expand ? 1 : 0,
      rotateX: expand ? 0 : 45,
    });
  }, [expand]);
};
