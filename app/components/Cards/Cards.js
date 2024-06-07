"use client";

import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import anime from "animejs/lib/anime.es.js";
import Image from "next/image";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardsContainer = styled.div`
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 1000px;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2.5s;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.9);
  width: 30vw;
  height: 300px;
  border-radius: 10px;
  text-align: left;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const CardTitle = styled.h1`
  font-size: 2rem;
  margin: 30px;
  position: absolute;
`;

const CardSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 30px;
  position: absolute;
  top: 14%;
  opacity: 0.6;
`;

const StyledImage = styled(Image)`
  position: relative;
  left: 30%;
  top: 40%;
  border-radius: 10px;
`;

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
      const images = card.querySelectorAll(".card-image"); // Change to .card-image

      images.forEach((image) => {
        // Change 'title' to 'image'
        card.addEventListener("mouseenter", () => {
          anime({
            targets: image, // Change 'title' to 'image'
            translateX: -10,
            duration: 200,
            easing: "cubicBezier(.5, .05, .1, .3)",
          });
        });

        card.addEventListener("mouseleave", () => {
          anime({
            targets: image, // Change 'title' to 'image'
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
      <Card className="card">
        <CardTitle className="card-title">Estética</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        {" "}
        <CardTitle className="card-title">Comex</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        <CardTitle className="card-title">Pizzaria</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        {" "}
        <CardTitle className="card-title">Barbearia</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        {" "}
        <CardTitle className="card-title">Agência</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        {" "}
        <CardTitle className="card-title">Petshop</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        {" "}
        <CardTitle className="card-title">Estúdio de tatuagem</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        {" "}
        <CardTitle className="card-title">Salão de beleza</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>

      <Card className="card">
        {" "}
        <CardTitle className="card-title">Outro</CardTitle>
        <CardSubtitle className="card-title">
          Lorem ipsum fodkamdfasdfasd
        </CardSubtitle>
        <StyledImage
          src="/template.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="card-image"
        />
      </Card>
    </CardsContainer>
  );
}
