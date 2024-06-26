import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Depoimentos() {
  const initialState = [
    { zIndex: 1, right: "30%", marginBottom: "0px", rotate: "0deg" },
    { zIndex: -1, right: "25%", marginBottom: "30px", rotate: "3deg" },
    { zIndex: -2, right: "20%", marginBottom: "35px", rotate: "5deg" },
    { zIndex: -3, right: "15%", marginBottom: "40px", rotate: "7deg" },
    { zIndex: -4, right: "10%", marginBottom: "45px", rotate: "9deg" },
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

  return (
    <>
      <DepContainer>
        {order.map((style, index) => (
          <DepCard
            key={index}
            style={{
              zIndex: style.zIndex,
              right: style.right,
              marginBottom: style.marginBottom,
              transform: `rotate(${style.rotate})`,
              "--rotate": style.rotate, // Setting the CSS variable
            }}
          >
            <DepSubtitle>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </DepSubtitle>
            <DepName>
              <DepImage
                src="/estetica-mulher.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <DepTitle>Nome {index + 1}</DepTitle>
            </DepName>
          </DepCard>
        ))}
      </DepContainer>
      <CycleButton onClick={handleClick}>Trocar</CycleButton>
    </>
  );
}

export const DepContainer = styled.div`
  z-index: 99;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px 0;
  width: 100%;
`;

export const DepCard = styled.div`
  position: absolute;
  background-color: aliceblue;
  border: 1px #595758 solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  max-width: 40%;
  min-width: 30%;
  padding: 70px 25px;
  z-index: 1;
  transition: all 0.5s ease-in-out; /* Added transition */
  &:hover {
    transition: 0.3s;
    margin-top: 20px !important;
    cursor: pointer;
  }
`;

export const DepName = styled.div`
  display: flex;
  max-width: 50%;
`;

export const DepTitle = styled.h1`
  font-size: 1.1rem;
`;

export const DepSubtitle = styled.p`
  font-size: 0.9rem;
  max-width: 80%;
`;

export const DepImage = styled(Image)`
  border-radius: 100%;
  border: 1px solid #595758;
  margin-right: 15px;
`;

const CycleButton = styled.button`
  background-color: black;
  margin-bottom: 300px;
  color: white;
  padding: 10px 20px;
  border: black solid 1px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(89, 87, 88);
    cursor: pointer;
  }
`;
