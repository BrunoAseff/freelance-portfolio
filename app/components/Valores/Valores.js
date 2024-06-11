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
`;

const Title = styled.h1`
  font-size: 35px;
  color: #f7ece1;
  margin: 2rem;
`;

const Card = styled.div`
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
  justify-content: space-between;
  flex-shrink: 0;

  &:hover {
    border: solid 1px ${({ cor }) => cor || "#f7ece1"};
  }

  @media (max-width: 950px) {
    flex: 1 1 70vw;
    height: 600px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
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
  color: rgba(247, 236, 225, 0.5);
  margin: 1rem 0 0 1.5rem;
`;

const Li = styled.li`
  width: 100%;
  margin-top: 1rem;
`;

const PriceDescription = styled.p`
  width: 100%;
  font-size: clamp(1rem, 2vw, 1rem);
  color: rgba(247, 236, 225, 0.5);
  margin: 1rem 0 2rem 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
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

  &:hover {
    cursor: pointer;
    background: ${({ cor }) => cor || "#f7ece1"};
    color: #0e100f;
  }
`;

export default function Valores() {
  return (
    <Container>
      <Title>Valores</Title>
      <CardContainer>
        <Card cor="#0AE448">
          <P>Básico</P>
          <Price cor="#0AE448">R$200</Price>
          <PriceDescription>Lorem ipsum fodkamdfasdfasd</PriceDescription>
          <List>
            <Li>Item 1</Li>
            <Li>Item 2</Li>
            <Li>Item 3</Li>
            <Li>Item 4</Li>
          </List>
          <ButtonContainer>
            <Button cor="#0AE448">Escolher pacote</Button>
          </ButtonContainer>
        </Card>
        <Card cor="#FF4564">
          <P>Pro</P>
          <Price cor="#FF4564">R$300</Price>
          <PriceDescription>Lorem ipsum fodkamdfasdfasd</PriceDescription>
          <List>
            <Li>Item 1</Li>
            <Li>Item 2</Li>
            <Li>Item 3</Li>
            <Li>Item 4</Li>
          </List>
          <ButtonContainer>
            <Button cor="#FF4564">Escolher pacote</Button>
          </ButtonContainer>
        </Card>
        <Card cor="#00ACFF">
          <P cor="#00ACFF">Premium</P>
          <Price cor="#00ACFF">R$400</Price>
          <PriceDescription>Lorem ipsum fodkamdfasdfasd</PriceDescription>
          <List>
            <Li>Item 1</Li>
            <Li>Item 2</Li>
            <Li>Item 3</Li>
            <Li>Item 4</Li>
          </List>
          <ButtonContainer>
            <Button cor="#00ACFF">Escolher pacote</Button>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  );
}
