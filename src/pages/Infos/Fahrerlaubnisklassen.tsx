import { klassenData } from "../../data";
import { Link } from "react-router-dom";


function KlasseCard({
    name,
    klasse,
    icon
  }: {
    name: string;
    klasse: string;
    icon: string;
  }) {
    return (
      <div className="klasse--card">
        <figure>
          <img src={icon} alt={name} />
        </figure>
        <div>
          <h3>{name}</h3>
          <details>
            <summary>{klasse}</summary>
            <p>
              
            </p>
          </details>
            
        </div>
      </div>
    );
  }

export default function Fahrerlaubnisklassen() {
    return (
        <>
        <img className="info-img" src="https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/klassen.png" alt="klassen" />
        <div className="klasse--title">
          <h2>FAHRERLAUBNISKLASSEN</h2>
          <p>
            <a
              href="https://www.adac.de/verkehr/rund-um-den-fuehrerschein/klassen/ueberblick/"
              target="_blank"
            >
              MEHR
            </a>{" "}
          </p>
        </div>
           <div className="klasse--grid" id="klasse--grid">
          {klassenData.map((klasse) => (
            <KlasseCard
              name={klasse.name}
              klasse={klasse.klasse}
              icon={klasse.icon}
            />
          ))}
          <div className="link-btn">
            <Link to="/anmelden">JETZT ANMELDEN ➢</Link>
          </div>
        </div>
        </>
    )
}