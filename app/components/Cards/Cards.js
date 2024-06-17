"use client";

import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardSubtitle,
  StyledImage,
  Pallete,
  CardContent,
  Container,
} from "./CardsStyle.js";
import { cardsData } from "./Items.js";

export default function Cards() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const titles = card.querySelectorAll(".card-title");
      const images = card.querySelectorAll(".card-image");
      const palletes = card.querySelectorAll(".card-pallete");

      card.addEventListener("mouseenter", () => {
        anime({
          targets: titles,
          translateY: -10,
          duration: 200,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
        anime({
          targets: images,
          translateX: -10,
          duration: 200,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
        anime({
          targets: palletes,
          translateX: [0, 80],
          duration: 200,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
      });

      card.addEventListener("mouseleave", () => {
        anime({
          targets: titles,
          translateY: 0,
          duration: 200,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
        anime({
          targets: images,
          translateX: 0,
          duration: 200,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
        anime({
          targets: palletes,
          translateX: 0,
          duration: 200,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
      });
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const container = document.querySelector("#cards");
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);

      // Cleanup function to remove the event listener
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <CardsContainer id="cards">
      {cardsData.map((cardData, index) => (
        <Card key={index} className="card">
          <CardContent />

          <CardTitle className="card-title">{cardData.title}</CardTitle>
          <CardSubtitle className="card-title">
            {cardData.subtitle}
          </CardSubtitle>
          <Container>
            <StyledImage
              src={cardData.imgSrc}
              width={384}
              height={192}
              alt="Picture of the author"
              className="card-image"
            />
            {cardData.pallete.map((palleteData, i) => (
              <Pallete
                key={i}
                className="card-pallete"
                color={palleteData.color}
                top={palleteData.top}
              />
            ))}
          </Container>
        </Card>
      ))}
    </CardsContainer>
  );
}
