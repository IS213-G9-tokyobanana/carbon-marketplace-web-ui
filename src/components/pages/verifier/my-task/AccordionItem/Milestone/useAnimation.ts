import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default (expand: boolean, items: React.RefObject<HTMLDivElement>) => {
  const firstTime = useRef(true);

  useEffect(() => {
    gsap.to(items.current, {
      duration: firstTime.current ? 0 : 0.25,
      ease: 'power2.out',
      autoAlpha: expand ? 1 : 0,
      paddingTop: expand ? 20 : 0,
      paddingBottom: expand ? 20 : 0,
      height: expand ? '100%' : 0,
    });

    firstTime.current = false;
  }, [expand]);
};
