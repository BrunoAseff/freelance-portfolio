"use client";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  position: absolute;
  background: #f7ece1;
  padding: 1.5rem 3rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 1000px) {
    position: static;
    width: 50%;
    margin: 1rem 0rem;
  }
`;

const Pallete = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  box-shadow: 0 0 0 5px #9d8189;
`;

const PalleteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  background: #d6ccc2;
  padding: 0 10px;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`;

const H1 = styled.h1`
  margin-top: 0;
  color: #9a8c98;
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export default function Design() {
  const src = [
    "/arrowDark.svg",
    "/listblue.svg",
    "/listred.svg",
    "/listgreen.svg",
    "/varinha.svg",
  ];
  return (
    <Container>
      <Card style={{ top: "10%" }}>
        <H1>Cores</H1>
        <PalleteContainer>
          <p>Escuros:</p>
          <Color>
            <Pallete style={{ background: "#0E100F" }} />
            <p>#0E100F</p>
          </Color>
        </PalleteContainer>

        <PalleteContainer>
          <p>Claros:</p>
          <Color>
            <Pallete style={{ background: "#F7ECE1" }} />
            <p>#F7ECE1</p>
          </Color>
        </PalleteContainer>

        <PalleteContainer>
          <p>Cor principal:</p>
          <Color>
            <Pallete style={{ background: "#0AE448" }} />
            <p>#0AE448</p>
          </Color>
        </PalleteContainer>

        <PalleteContainer>
          <p>Cor secudária:</p>
          <Color>
            <Pallete style={{ background: "#00ACFF" }} />
            <p>#00ACFF</p>
          </Color>
        </PalleteContainer>

        <PalleteContainer>
          <p>Cor de apoio:</p>
          <Color>
            <Pallete style={{ background: "#FF4564" }} />
            <p>#FF4564</p>
          </Color>
        </PalleteContainer>
      </Card>
      <Card style={{ left: "30%", bottom: "10%" }}>
        <H1>Tipografia</H1>
        <p>Nunito</p>
        <p>Sofia</p>
      </Card>

      <Card style={{ right: "10%", top: "10%" }}>
        <H1>Ícones</H1>
        <ImageContainer>
          {src.map((item, index) => (
            <Image key={index} src={item} width={40} height={40} alt="Icon" />
          ))}
        </ImageContainer>
      </Card>

      <Card style={{ right: "10%", bottom: "10%" }}>
        <H1>Botões</H1>
      </Card>
    </Container>
  );
}
