"use client";

import {
  HeroTitle,
  SpecialWord,
  Container,
  Li,
  A,
  Ul,
  Nav,
  HeroSection,
  HeroImage,
  LeftBlob,
  RightBlob,
  ProcContainer,
  ProcText,
  ProcSubtitle,
  ProcCard,
  Button,
  ButtonSpan,
  TextWrapper,
  ProcImage,
  Gif,
  Map,
  MapSection,
  MapText,
  AboutCard,
  AboutImage,
  ToggleButton,
  HeroIcon,
  ImageContainer,
  ContactTitle,
  ContactSubtitle,
  ContactSection,
} from "./style.js";
import Depoimentos from "./Depoimentos.js";
import GlobalStyles from "./GlobalStyles.js";
import Image from "next/image.js";
import { useState } from "react";

export default function Estetica() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <GlobalStyles />

      <RightBlob />
      <LeftBlob />
      <Container>
        <ToggleButton onClick={toggleSidebar}>☰</ToggleButton>
        <Nav style={{ left: isSidebarOpen ? "0" : "-250px" }}>
          <Ul>
            <Li>
              <A href="#proc">Procedimentos</A>
            </Li>
            <Li>
              <A href="#about">Sobre mim</A>
            </Li>
            <Li>
              <A href="#dep">Depoimentos</A>
            </Li>
            <Li>
              <A href="#contact">Contato</A>
            </Li>
          </Ul>
        </Nav>
        <HeroSection>
          <div>
            <HeroTitle>
              Abrindo <SpecialWord>janelas</SpecialWord> para uma autoestima
              renovada.
            </HeroTitle>
            <Button>
              <ButtonSpan>Entrar em contato</ButtonSpan>
            </Button>
          </div>
          <ImageContainer>
            <HeroImage
              src="/mulher.jpeg"
              width={390}
              height={390}
              alt="Picture of the author"
            />
            <HeroIcon
              src="/sparkle.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </ImageContainer>
        </HeroSection>
        <ProcContainer id="proc">
          <ProcCard className="top-left">
            <ProcImage
              src="/botox.png"
              width={150}
              height={150}
              alt="Imagem de botox"
            />
            <TextWrapper>
              <ProcText>Toxína Botulínica</ProcText>
              <ProcSubtitle>
                Reduza rugas e linhas de expressão com nosso tratamento de
                toxina botulínica.
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="top-right">
            <TextWrapper>
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Recupere o volume facial perdido e suavize suas rugas com nosso
                tratamento de preenchimento.
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-left">
            <TextWrapper>
              <ProcText>Peeling</ProcText>
              <ProcSubtitle>
                Renove sua pele e obtenha uma aparência mais jovem com nosso
                tratamento de peeling.
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-middle">
            <TextWrapper>
              <ProcText>Sculptra</ProcText>
              <ProcSubtitle>
                Restaure o volume facial naturalmente com Sculptra e redescubra
                sua juventude.
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-right">
            <TextWrapper>
              <ProcText>Bioestimuladores de colágeno</ProcText>

              <ProcSubtitle>
                Estimule a produção de colágeno e revitalize sua pele com nossos
                bioestimuladores.
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
        </ProcContainer>
        <AboutCard>
          <AboutImage
            src="/estetica-mulher-1.png"
            width={100}
            height={100}
            alt="Imagem da estética feminina"
          />
          <h1 id="about">Sobre mim</h1>
          <p>
            Eu sou [Seu Nome], especialista em procedimentos estéticos que
            transformam e rejuvenescem. Com uma abordagem personalizada, estou
            aqui para ajudar você a alcançar seus objetivos estéticos com
            segurança e resultados excepcionais.
          </p>
          <p>
            Explore nossos tratamentos e descubra como podemos revitalizar sua
            aparência, proporcionando uma pele mais radiante e jovem.
          </p>
          <p>
            Marque sua consulta hoje mesmo e dê o primeiro passo rumo a uma
            versão mais confiante de si mesmo(a).
          </p>
        </AboutCard>
        <Depoimentos />{" "}
        <MapSection>
          <MapText>
            <Image
              src="/map-pin.svg"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <h1>Venha fazer uma visita</h1>
            <p>
              Rua das Flores, 123 <br /> Bairro Jardim das Américas <br />{" "}
              Cidade das Estrelas, SP
              <br /> <strong>CEP:</strong> 12345-678
            </p>
          </MapText>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64440159.17531167!2d-99.76709813773608!3d-9.671198649557327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1719332931111!5m2!1spt-BR!2sbr"
            width="600"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Map>
        </MapSection>
        <ContactSection id="contact">
          <ContactTitle>Entre em contato</ContactTitle>
          <ContactSubtitle>Blablabla</ContactSubtitle>
        </ContactSection>
      </Container>
    </>
  );
}
