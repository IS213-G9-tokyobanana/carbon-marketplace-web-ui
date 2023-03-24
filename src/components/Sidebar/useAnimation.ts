import React, { useEffect } from 'react';
import gsap from 'gsap';

export default (
  expand: boolean,
  containers: React.RefObject<HTMLDivElement[]>,
  titles: React.RefObject<HTMLParagraphElement[]>
) => {
  useEffect(() => {
    gsap.to(titles.current, {
      duration: 0.25,
      ease: 'power2.out',
      autoAlpha: expand ? 1 : 0
    });

    gsap.to(containers.current, {
      duration: 0.25,
      ease: 'power2.out',
      width: expand ? '150px' : '0px'
    });
  }, [expand]);
};
