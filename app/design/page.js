"use client";

import styled from "styled-components";
import Image from "next/image";
import { Button, ButtonColor } from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Card = styled.div`
  background: #edf2fb;
  padding: 1.5rem 3rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
  flex: 1;
`;

const Pallete = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  box-shadow: 0 0 0 5px #b6ccfe;
`;

const InsideContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  background: #e2eafc;
  padding: 0 10px;
  border-radius: 10px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`;

const H1 = styled.h1`
  margin-top: 0;
  color: #9381ff;
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const P = styled.p`
  font-size: 1.3rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 250px;
  max-width: 35vw;
  flex-shrink: 0;
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
      <Card>
        <H1>Cores</H1>
        <InsideContainer>
          <p>Escuros:</p>
          <Color>
            <Pallete style={{ background: "#0E100F" }} />
            <p>#0E100F</p>
          </Color>
        </InsideContainer>

        <InsideContainer>
          <p>Claros:</p>
          <Color>
            <Pallete style={{ background: "#F7ECE1" }} />
            <p>#F7ECE1</p>
          </Color>
        </InsideContainer>

        <InsideContainer>
          <p>Cor principal:</p>
          <Color>
            <Pallete style={{ background: "#0AE448" }} />
            <p>#0AE448</p>
          </Color>
        </InsideContainer>

        <InsideContainer>
          <p>Cor secundária:</p>
          <Color>
            <Pallete style={{ background: "#00ACFF" }} />
            <p>#00ACFF</p>
          </Color>
        </InsideContainer>

        <InsideContainer>
          <p>Cor de apoio:</p>
          <Color>
            <Pallete style={{ background: "#FF4564" }} />
            <p>#FF4564</p>
          </Color>
        </InsideContainer>
      </Card>

      <Card>
        <H1>Tipografia</H1>
        <InsideContainer>
          <p>Principal:</p>
          <P>Nunito</P>
        </InsideContainer>
        <InsideContainer>
          <p>Estilizada:</p>
          <P style={{ fontFamily: "var(--font-sofia)" }}>Sofia</P>
        </InsideContainer>
      </Card>

      <Card>
        <H1>Ícones</H1>
        <ImageContainer>
          {src.map((item, index) => (
            <Image key={index} src={item} width={40} height={40} alt="Icon" />
          ))}
        </ImageContainer>
      </Card>

      <Card>
        <H1>Botões</H1>
        <Buttons>
          <Button>Botão principal</Button>
          <ButtonColor cor="#0AE448">Segundo botão</ButtonColor>
          <ButtonColor cor="#00ACFF">Terceiro botão</ButtonColor>
          <ButtonColor cor="#FF4564">Quarto botão</ButtonColor>
        </Buttons>
        <p style={{ fontStyle: "italic", color: "#9381ff" }}>
          *Passe o mouse por cima ou clique
        </p>
      </Card>
    </Container>
  );
}
