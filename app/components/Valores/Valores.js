"use client";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h1`
  font-size: 35px;
  color: #f7ece1;
  margin: 2rem;
`;

const Card = styled.div`
  min-width: 250px;
  text-align: start;
  height: 600px;
  width: 20%;
  border-radius: 20px;
  color: #f7ece1;
  border: solid 1px #f7ece1;
  transition: border 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure proper spacing */

  &:hover {
    border: solid 1px #0ae448;
  }

  @media (max-width: 950px) {
    height: 600px;
    min-width: 70vw;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  @media (max-width: 950px) {
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const P = styled.p`
  font-size: 1rem;
  color: #0ae448;
  margin: 30px 0 0 30px;
`;

const P2 = styled.p`
  font-size: 1rem;
  color: #f7ece1;
  margin: 30px 0 0 30px;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 3rem;
  color: #0ae448;
  margin: 10px 0 0 30px;
`;

const List = styled.ul`
  font-size: 1rem;
  color: rgba(247, 236, 225, 0.5);
  margin: 10px 0 0 30px;
`;

const Li = styled.li`
  width: 100%;
  margin-top: 1rem;
`;

const PriceDescription = styled.p`
  width: 100%;
  font-size: 1rem;
  color: rgba(247, 236, 225, 0.5);
  margin: 10px 0 50px 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px; /* Adjust margin as needed */
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
    background: #0ae448;
    color: #0e100f;
  }
`;

export default function Valores() {
  return (
    <Container>
      <Title>Valores</Title>
      <CardContainer>
        <Card>
          <P2>Básico</P2>
          <Price>R$200</Price>
          <PriceDescription>Lorem ipsum fodkamdfasdfasd</PriceDescription>
          <List>
            <Li>Item 1</Li>
            <Li>Item 2</Li>
            <Li>Item 3</Li>
            <Li>Item 4</Li>
          </List>
          <ButtonContainer>
            <Button>Escolher pacote</Button>
          </ButtonContainer>
        </Card>
        <Card>
          <P2>Pro</P2>
          <Price>R$300</Price>
          <PriceDescription>Lorem ipsum fodkamdfasdfasd</PriceDescription>
          <List>
            <Li>Item 1</Li>
            <Li>Item 2</Li>
            <Li>Item 3</Li>
            <Li>Item 4</Li>
          </List>
          <ButtonContainer>
            <Button>Escolher pacote</Button>
          </ButtonContainer>
        </Card>
        <Card>
          <P>Premium</P>
          <Price>R$400</Price>
          <PriceDescription>Lorem ipsum fodkamdfasdfasd</PriceDescription>
          <List>
            <Li>Item 1</Li>
            <Li>Item 2</Li>
            <Li>Item 3</Li>
            <Li>Item 4</Li>
          </List>
          <ButtonContainer>
            <Button>Escolher pacote</Button>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  );
}
