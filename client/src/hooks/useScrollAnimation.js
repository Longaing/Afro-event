import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (target, animationConfig) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      ...animationConfig
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [target, animationConfig]);

  return elementRef;
};

export default useScrollAnimation;