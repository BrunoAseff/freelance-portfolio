import "./page.css";
import HeroTitle from "./components/Hero/HeroTitle";
import Cards from "./components/Cards/Cards";

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <ul>
            <li>
              <a>Serviços</a>
            </li>
            <li>
              <a>Valores</a>
            </li>
            <li>
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
      </div>
    </>
  );
}
