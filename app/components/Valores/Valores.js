"use client";

import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  height: 1000px;
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
  text-align: start;
  height: 800px;
  width: 25%;
  border-radius: 20px;
  color: #f7ece1;
  border: solid 4px #f7ece1;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

const P = styled.p`
  color: #0ae448;
  margin: 10px 0 0 10px;
`;

export default function Valores() {
  return (
    <Container>
      <Title>Valores</Title>
      <CardContainer>
        <Card>
          <P>Básico</P>
        </Card>
        <Card>
          {" "}
          <P>Pro</P>
        </Card>
        <Card>
          {" "}
          <P>Premium</P>
        </Card>
      </CardContainer>
    </Container>
  );
}
