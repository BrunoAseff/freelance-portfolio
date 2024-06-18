"use client";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: transparent;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: clamp(0.1rem, 3rem, 5rem);
  color: #f7ece1;
  margin: 5rem;
  z-index: 1;
`;

const Card = styled.div`
  background: #0e100f;
  flex: 1 1 20%;
  min-width: 350px;
  max-width: 23vw;
  text-align: start;
  border-radius: 20px;
  color: ${({ cor }) => cor || "#f7ece1"};
  border: solid 1px #f7ece1;
  transition: border 0.3s ease;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  z-index: 1;
  margin-bottom: 20vh;
  min-height: auto; /* Adjusted property */

  &:hover {
    border: solid 1px ${({ cor }) => cor || "#f7ece1"};
  }

  @media (max-width: 950px) {
    height: auto; /* Ensure card height adjusts on smaller screens */
    margin-bottom: 5vh;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  z-index: 1; /* Ensure it appears above the background */
`;

const P = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: ${({ cor }) => cor || "#f7ece1"};
  margin: 1.5rem 0 0 1.5rem;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${({ cor }) => cor || "#f7ece1"};
  margin: 1rem 0 0 1.5rem;
`;

const List = styled.ul`
  font-size: clamp(1rem, 2vw, 1rem);
  color: rgba(247, 236, 225, 0.7);
  margin: 0 0 0 1.5rem;
`;

const LiGreen = styled.li`
  text-indent: 0.5rem;
  list-style: url("/listgreen.svg");
  line-height: 1.04545;
  width: 100%;
  margin-top: 1rem;
`;

const LiBlue = styled.li`
  text-indent: 0.5rem;
  list-style: url("/listblue.svg");
  line-height: 1.04545;
  width: 100%;
  margin-top: 1rem;
`;

const LiRed = styled.li`
  text-indent: 0.5rem;
  list-style: url("/listred.svg");
  line-height: 1.04545;
  width: 100%;
  margin-top: 1rem;
`;

const PriceDescription = styled.p`
  max-width: 80%;
  width: 100%;
  font-size: clamp(1rem, 2vw, 1rem);
  color: rgba(247, 236, 225, 0.5);
  margin: 1rem 0 2rem 1.5rem;
`;

const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 60px 0;

  @media (max-width: 950px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const Button = styled.button`
  width: 80%;
  align-items: center;
  background: 0 0;
  cursor: pointer;
  display: inline-flex;
  font-size: max(1rem, min(0.38835vw + 0.908981rem, 1.375rem));
  font-weight: 600;
  gap: 0.363636em;
  justify-content: center;
  letter-spacing: -0.01em;
  line-height: 1.04545;
  overflow: hidden;
  padding: 0.9375rem 1.5rem;
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  background: #0e100f;
  color: rgba(247, 236, 225);
  text-align: center;
  border-radius: 6.25rem;
  border: solid 1px rgba(247, 236, 225, 0.5);
  font-weight: 600;
  margin-top: auto;

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    background: ${({ cor }) => cor || "#f7ece1"};
    color: #0e100f;
    border: solid 1px #0e100f;
  }

  @media (max-width: 950px) {
    width: 90%;
    padding: 0.75rem 1rem;
  }
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: #0e100f;
  opacity: 1;
  background-image: linear-gradient(
      rgba(247, 236, 225, 0.1) 0.1rem,
      transparent 0.1rem
    ),
    linear-gradient(
      to right,
      rgba(247, 236, 225, 0.1) 0.1rem,
      transparent 0.1rem
    );
  background-size: 50px 50px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export default function Valores() {
  return (
    <Container>
      <Background />

      <Title>Valores</Title>
      <CardContainer>
        <Card cor="#0AE448">
          <P>Básico</P>
          <Price cor="#0AE448">R$200</Price>
          <PriceDescription>
            Para quem está começando no digital.
          </PriceDescription>
          <List>
            <LiGreen>1 página de vendas</LiGreen>
            <LiGreen>layout personalizado</LiGreen>
            <LiGreen>Responsivo</LiGreen>
            <LiGreen>Otimização de SEO</LiGreen>
            <LiGreen>Botão de WhatsApp</LiGreen>
            <LiGreen>Otimização de SEO</LiGreen>
            <LiGreen>Google Analytics</LiGreen>
            <LiGreen>Facebook Pixel</LiGreen>
          </List>
          <ButtonContainer>
            <Button cor="#0AE448">Escolher pacote</Button>
          </ButtonContainer>
        </Card>
        <Card cor="#FF4564">
          <P>Pro</P>
          <Price cor="#FF4564">R$300</Price>
          <PriceDescription>
            Para empresas que querem crescer online.
          </PriceDescription>
          <List>
            <LiRed>Até 10 páginas</LiRed>
            <LiRed>layout personalizado</LiRed>
            <LiRed>Responsivo</LiRed>
            <LiRed>Otimização de SEO</LiRed>
            <LiRed>Botão de WhatsApp</LiRed>
            <LiRed>Otimização de SEO</LiRed>
            <LiRed>Google Analytics</LiRed>
            <LiRed>Facebook Pixel</LiRed>
            <LiRed>Formulário de cadastro</LiRed>
          </List>
          <ButtonContainer>
            <Button cor="#FF4564">Escolher pacote</Button>
          </ButtonContainer>
        </Card>
        <Card cor="#00ACFF">
          <P cor="#00ACFF">Premium</P>
          <Price cor="#00ACFF">R$400</Price>
          <PriceDescription>
            Solução robusta para uma presença digital completa.
          </PriceDescription>
          <List>
            <LiBlue>Mais de 10 páginas</LiBlue>
            <LiBlue>layout personalizado</LiBlue>
            <LiBlue>Responsivo</LiBlue>
            <LiBlue>Otimização de SEO</LiBlue>
            <LiBlue>Botão de WhatsApp</LiBlue>
            <LiBlue>Otimização de SEO</LiBlue>
            <LiBlue>Google Analytics</LiBlue>
            <LiBlue>Facebook Pixel</LiBlue>
            <LiBlue>Formulário de cadastro</LiBlue>
            <LiBlue>Integração com email (mailchimp)</LiBlue>
            <LiBlue>Mapas de calor (Clarify)</LiBlue>
          </List>
          <ButtonContainer>
            <Button cor="#00ACFF">Escolher pacote</Button>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  );
}
