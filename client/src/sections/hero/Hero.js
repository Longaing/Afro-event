import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.from(".hero-title span", {
      y: 100,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%"
      }
    });
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>ENTREPRENDRE</span>
          <span className="gold-text">AFRO</span>
        </h1>
        <p className="hero-subtitle">Le rendez-vous incontournable de la diaspora entrepreneure</p>
        <button className="hero-cta pulse-animation">
          Découvrir le programme
        </button>
      </div>
    </section>
  );
};

export default Hero;