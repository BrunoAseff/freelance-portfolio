import "./page.css";
import HeroTitle from "./components/Hero/HeroTitle";
import Cards from "./components/Cards/Cards";
import Valores from "./components/Valores/Valores";

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="Background"></div>
        <div className="nav">
          <ul className="ul">
            <li className="li">
              <a>Projetos</a>
            </li>
            <li className="li">
              <a>Valores</a>
            </li>
            <li className="li">
              <a>Contato</a>
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
        <div className="projects">
          <Cards />
        </div>

        <Valores />
      </div>
    </>
  );
}
