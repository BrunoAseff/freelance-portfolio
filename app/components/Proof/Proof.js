"use client";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  border-bottom: 1px solid #f7ece1;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12rem;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    gap: 5rem;
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
  padding: 20px;

  @media (max-width: 1040px) {
    width: 90%;
    display: flex;
    border-radius: 20px;
    border: 1px solid #f7ece1;
    flex-direction: column;
    border-radius: 20px;
  }
`;

const Title = styled.h1`
  font-size: clamp(0.1rem, 3rem, 5rem);
  text-align: center;
  margin: 0;
`;

const Text = styled.p`
  font-size: clamp(0.5rem, 1.1rem, 1.3rem);
  text-align: center;
`;

const SectionImage = styled(Image)`
  display: flex;
  border-radius: 10px;
  max-width: 100%;
  height: auto;
  @media (max-width: 1040px) {
    margin: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 680px) {
    align-items: center;
  }
`;

const Proof = () => {
  return (
    <Container>
      <Section>
        <SectionImage
          src="/responsive.png"
          width={480}
          height={3}
          alt="Picture of the author"
          className="section-image"
        />
        <TextContainer>
          <Title>Para todas as telas</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
        </TextContainer>
      </Section>

      <Section>
        <TextContainer>
          <Title>Design criativo</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
        </TextContainer>
        <SectionImage
          src="/design.png"
          width={480}
          height={480}
          alt="Picture of the author"
          className="section-image"
        />
      </Section>

      <Section>
        <SectionImage
          src="/speed.png"
          width={480}
          height={480}
          alt="Picture of the author"
          className="section-image"
        />
        <TextContainer>
          <Title>Rápido e acessível</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
        </TextContainer>
      </Section>
    </Container>
  );
};

export default Proof;
