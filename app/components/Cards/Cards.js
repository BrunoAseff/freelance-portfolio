"use client";

import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 1000px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.9);
  width: 30vw;
  height: 300px;
  border-radius: 10px;
`;

export default function Cards() {
  return (
    <CardsContainer>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardsContainer>
  );
}
