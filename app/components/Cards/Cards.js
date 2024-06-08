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
} from "./CardsStyle.js";
import { cardsData } from "./Items.js";

export default function Cards() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const titles = card.querySelectorAll(".card-title");

      titles.forEach((title) => {
        card.addEventListener("mouseenter", () => {
          anime({
            targets: title,
            translateY: -10,
            duration: 200,
            easing: "cubicBezier(.5, .05, .1, .3)",
          });
        });

        card.addEventListener("mouseleave", () => {
          anime({
            targets: title,
            translateY: 0,
            duration: 200,
            easing: "cubicBezier(.5, .05, .1, .3)",
          });
        });
      });
    });
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const images = card.querySelectorAll(".card-image");

      images.forEach((image) => {
        card.addEventListener("mouseenter", () => {
          anime({
            targets: image,
            translateX: -10,
            duration: 200,
            easing: "cubicBezier(.5, .05, .1, .3)",
          });
        });

        card.addEventListener("mouseleave", () => {
          anime({
            targets: image,
            translateX: 0,
            duration: 200,
            easing: "cubicBezier(.5, .05, .1, .3)",
          });
        });
      });
    });
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const pallete = card.querySelectorAll(".card-pallete");

      pallete.forEach((pallete) => {
        card.addEventListener("mouseenter", () => {
          anime({
            targets: pallete,
            translateX: [0, 80],
            duration: 200,
            easing: "cubicBezier(.5, .05, .1, .3)",
          });
        });

        card.addEventListener("mouseleave", () => {
          anime({
            targets: pallete,
            translateX: 0,
            duration: 200,
            easing: "cubicBezier(.5, .05, .1, .3)",
          });
        });
      });
    });
  }, []);

  return (
    <CardsContainer>
      {cardsData.map((cardData, index) => (
        <Card key={index} className="card">
          <CardTitle className="card-title">{cardData.title}</CardTitle>
          <CardSubtitle className="card-title">
            {cardData.subtitle}
          </CardSubtitle>
          <StyledImage
            src={cardData.imgSrc}
            width={300}
            height={200}
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
        </Card>
      ))}
    </CardsContainer>
  );
}
