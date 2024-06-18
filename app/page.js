import "./page.css";
import HeroTitle from "./components/Hero/HeroTitle";
import Cards from "./components/Cards/Cards";
import Valores from "./components/Valores/Valores";
import Proof from "./components/Proof/Proof";
import Contato from "./components/Contato/Contato";
import BrunoAseff from "./components/BrunoAseff";

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="Background"></div>
        <div className="nav">
          <ul className="ul">
            <li className="li">
              <a href="#projects">Projetos</a>
            </li>
            <li className="li">
              <a href="#valores">Valores</a>
            </li>
            <li className="li">
              <a href="#vantagens">Vantagens</a>
            </li>
            <li className="li">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
        <div className="herosection">
          <HeroTitle />
          <p className="subtitle">
            Construindo a presença online que sua empresa merece, de forma única
            e impactante.
          </p>
        </div>
        <div id="projects" className="projects">
          <Cards />
        </div>
        <div id="vantagens">
          <Proof />
        </div>
        <div id="valores">
          <Valores />
        </div>
        <div id="contato">
          <Contato />
        </div>
        <BrunoAseff />
      </div>
    </>
  );
}
