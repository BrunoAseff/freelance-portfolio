"use client";

import {
  HeroTitle,
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
  AboutSection,
  AboutImage,
  ToggleButton,
} from "./style.js";
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
              <A href="#">Procedimentos</A>
            </Li>
            <Li>
              <A href="#">Sobre mim</A>
            </Li>
            <Li>
              <A href="#">Depoimentos</A>
            </Li>
            <Li>
              <A href="#">Contato</A>
            </Li>
          </Ul>
        </Nav>
        <HeroSection>
          <div>
            <HeroTitle>Abrindo janelas para uma autoestima renovada.</HeroTitle>
            <Button>
              <ButtonSpan>Entrar em contato</ButtonSpan>
            </Button>
          </div>
          <HeroImage
            src="/mulher.jpeg"
            width={390}
            height={390}
            alt="Picture of the author"
          />
        </HeroSection>
        <ProcContainer>
          <ProcCard className="top-left">
            <ProcImage
              src="/botox.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <TextWrapper>
              <ProcText>Toxína Botulínica</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="top-right">
            <TextWrapper>
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-left">
            <TextWrapper>
              <ProcText>Toxína Botulínica</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-middle">
            <TextWrapper>
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-right">
            <TextWrapper>
              <ProcText>Preenchimento</ProcText>
              <Gif
                src="/sparkles.gif"
                width={70}
                height={70}
                alt="Picture of the author"
              />
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
        </ProcContainer>
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
        <AboutSection>
          <AboutCard>
            <AboutImage
              src="/estetica-mulher.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <h1>Sobre mim</h1>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </AboutCard>
        </AboutSection>
      </Container>
    </>
  );
}
