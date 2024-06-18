import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  border-top: 1px solid #f7ece1;
  border-bottom: 1px solid #f7ece1;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    gap: 5rem;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (max-width: 1040px) {
    width: 90%;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 6vw, 3rem); /* Adjust the values as needed */
  background-image: linear-gradient(
    120deg,
    ${(props) => props.color || "#F7ECE1"},
    #f7ece1
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;
`;

export const Text = styled.p`
  font-size: clamp(0.8rem, 4vw, 1.2rem); /* Adjust the values as needed */
  text-align: left;
  background-image: linear-gradient(
    120deg,
    ${(props) => props.color || "#F7ECE1"},
    #f7ece1
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

export const SectionImage = styled(Image)`
  display: flex;
  border-radius: 10px;
  max-width: 100%;
  height: auto;
  z-index: 1;
  box-shadow: 0px 0px 150px 1px rgba(247, 236, 225, 0.1);

  &:hover {
    scale: 1.05;
    transition: 0.5s;
    box-shadow: 0px 0px 150px 1px
      ${(props) => props.color || "rgba(247, 236, 225, 0.2)"};
  }
  @media (max-width: 1040px) {
    margin: 20px;
  }
`;

export const TextContainer = styled.div`
  padding: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 1040px) {
    align-items: center;
  }
`;
