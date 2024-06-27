import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Depoimentos() {
  const initialState = [
    { zIndex: 1, right: "35%", marginBottom: "0px", rotate: "0deg" },
    { zIndex: -1, right: "30%", marginBottom: "30px", rotate: "3deg" },
    { zIndex: -2, right: "25%", marginBottom: "35px", rotate: "5deg" },
    { zIndex: -3, right: "20%", marginBottom: "40px", rotate: "7deg" },
    { zIndex: -4, right: "15%", marginBottom: "45px", rotate: "9deg" },
  ];

  const [order, setOrder] = useState(initialState);

  const handleClick = () => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const last = newOrder.pop();
      newOrder.unshift(last);
      return newOrder;
    });
  };

  const testimonials = [
    {
      text: "Desde que comecei a frequentar este centro estético, minha pele melhorou significativamente. Os tratamentos são eficazes e os profissionais extremamente dedicados.",
      author: "Carla Silva",
      image: "/estetica-mulher-1.png",
    },
    {
      text: "Estou muito feliz com os resultados do procedimento estético. A equipe aqui é muito profissional e atenciosa, recomendo!",
      author: "Maitê Aseff",
      image: "/estetica-mulher-2.png",
    },
    {
      text: "O ambiente é acolhedor e os tratamentos são feitos com muito cuidado. Os resultados são visíveis e duradouros. Recomendo a todos!",
      author: "Ana Luíza",
      image: "/estetica-mulher-3.png",
    },
    {
      text: "Não poderia estar mais satisfeito com o atendimento que recebi. Os profissionais são realmente especializados e os resultados foram além das minhas expectativas.",
      author: "Joana ",
      image: "/estetica-mulher-4.png",
    },
    {
      text: "Cada sessão de tratamento aqui me deixou mais confiante. Os resultados são naturais e exatamente o que eu esperava. Vale cada centavo!",
      author: "José Carlos",
      image: "/estetica-mulher-5.png",
    },
  ];

  return (
    <Container>
      <Title>Depoimentos</Title>
      <Subtitle>
        Dê uma olhada no depoimento das pessoas que confiam no nosso trabalho:
      </Subtitle>
      <DepContainer>
        {order.map((style, index) => (
          <DepCard
            onClick={handleClick}
            key={index}
            style={{
              zIndex: style.zIndex,
              right: style.right,
              marginBottom: style.marginBottom,
              transform: `rotate(${style.rotate})`,
              "--rotate": style.rotate,
            }}
          >
            <DepSubtitle>{testimonials[index].text}</DepSubtitle>
            <DepName>
              <DepImage
                src={testimonials[index].image}
                width={30}
                height={30}
                alt={`Foto do autor ${testimonials[index].author}`}
              />
              <DepTitle>{testimonials[index].author}</DepTitle>
            </DepName>
          </DepCard>
        ))}
      </DepContainer>
      <CycleButton onClick={handleClick}>Trocar</CycleButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-bottom: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 0;
  font-size: 3rem;
  color: var(--second);
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  padding: 0 40px;
`;

const DepContainer = styled.div`
  z-index: 99;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px 50px 0 0;
  width: 100%;
  @media (max-width: 650px) {
    margin-left: 100px;
  }
`;

const DepCard = styled.div`
  position: absolute;
  background-color: aliceblue;
  border: 1px #595758 solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;

  z-index: 1;
  transition: all 0.5s ease-in-out;
  max-width: 500px;
  min-width: 400px;
  min-height: 250px;
  &:hover {
    transition: 0.3s;
    margin-top: 35px !important;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    max-width: 350px;
    min-width: 100px;
    padding: 30px 5px;
    margin-left: 20px;
    min-height: 170px;
  }

  @media (max-width: 650px) {
    padding: 15px 3px;
  }

  @media (max-width: 450px) {
    padding: 40px 3px;
  }
`;

const DepName = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0 0 15px 15px;
  @media (max-width: 650px) {
    margin: 0 0 5px 5px;
  }
`;

const DepTitle = styled.h1`
  font-size: 1.1rem;
`;

const DepSubtitle = styled.p`
  font-size: clamp(14px, 1.5vw, 20px);
  max-width: 82%;
  margin: 30px 0 0 30px;
  @media (max-width: 650px) {
    margin: 10px 0 0 10px;
  }
`;

const DepImage = styled(Image)`
  border-radius: 100%;
  border: 1px solid #595758;
  margin-right: 15px;
  scale: 1.3;
  @media (max-width: 650px) {
    scale: 0.8;
  }
`;

const CycleButton = styled.button`
  position: absolute;
  bottom: -140%;
  background-color: black;
  margin-bottom: 300px;
  color: white;
  padding: 10px 20px;
  border: black solid 1px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1c000d;
    cursor: pointer;
  }
`;
