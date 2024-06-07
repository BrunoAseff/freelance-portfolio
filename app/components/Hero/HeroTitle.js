"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Splt from "react-spltjs";
import anime from "animejs/lib/anime.es.js";
import Image from "next/image";

const TitleWrapper = styled.div`
  font-family: var(--font-sofia);
  font-size: 5rem;
  position: relative;
  white-space: nowrap;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 3rem;
    padding: 20px 20px 0px 20px;
  }

  @media (max-width: 360px) {
    font-size: 2.3rem;
    padding: 20px 20px 0px 20px;
  }
`;

const StyledSplt = styled(Splt)`
  display: inline-block;
  font-size: inherit;
  margin: 0;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-1150%, 3%);

  @media (max-width: 768px) {
    position: relative;
    transform: none;
    padding: 20px 20px 0px 20px;
    text-align: center;
  }
`;

export default function HeroTitle() {
  const imageRef = useRef(null);

  useEffect(() => {
    anime({
      targets: ".char",
      translateY: -25,
      opacity: [0, 1],
      direction: "normal",
      loop: 1,
      delay: anime.stagger(25),
      easing: "spring(1, 80, 10, 0)",
    });

    anime({
      targets: imageRef.current,
      translateY: -25,
      opacity: [0, 1],
      direction: "normal",
      loop: 1,
      easing: "cubicBezier(.71,-0.77,.43,1.67)",
    });
  }, []);

  return (
    <TitleWrapper>
      <StyledSplt
        className="char"
        text="O site que o seu"
        wrapper="span"
        classNameWrapper="char"
      />
      <br />
      <StyledSplt
        className="char"
        text="negócio precisa"
        wrapper="span"
        classNameWrapper="char"
      />
      <ImageWrapper>
        <Image
          ref={imageRef}
          src="/varinha.svg"
          width={50}
          height={50}
          alt="Varinha"
        />
      </ImageWrapper>
    </TitleWrapper>
  );
}
