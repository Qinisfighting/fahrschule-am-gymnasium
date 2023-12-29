import { klassenData } from "../../data";
import { KlasseData} from  "../../data"
import { Link } from "react-router-dom";


function KlasseCard({
    name,
    klasse,
    icon,
    details
  }: {
    name: string;
    klasse: string;
    icon: string;
    details: KlasseData[];
  }) {
    return (
      <div className="klasse--card">
        <figure>
          <img src={icon} alt={name} />
        </figure>
        <div className="klasse--card--cover">
          <h3>{name}</h3>
          <details>
            <summary>{klasse}</summary>
            <div className="klasse--card--dropdown">
                {details.map((detail) => (
                  <>
                    <h4 key={detail.name}>{detail.name}</h4>
                    <p key={detail.name}>
                      {detail.description.map((item) => (
                        <>
                          <strong>{item.typ}</strong> <p>{item.description}</p>
                        </>
                      ))}
                    </p>
                    <p key={detail.name}>
                      <strong>Mindestalter:</strong> {detail.mindestalter}
                    </p>
                    {detail.voraussetzungen ? (
                      <p key={detail.name}>
                        <strong>Voraussetzungen:</strong> {detail.voraussetzungen}
                      </p>
                    ) : null}
                    {detail.vorbesitz ? (
                      <p key={detail.name}>
                        <strong>Vorbesitz:</strong> {detail.vorbesitz}
                      </p>
                    ) : null}
                    {detail.befristung ? (
                      <p key={detail.name}>
                        <strong>Befristung:</strong> {detail.befristung}
                      </p>
                    ) : null}
                    {detail.erwerb ? (
                      <p key={detail.name}>
                        <strong>Erwerb:</strong> {detail.erwerb}
                      </p>
                    ) : null}
                    <p key={detail.name}>
                      <strong>Einschluss:</strong> {detail.einschluss}
                    </p>
                  </>
                ))}
              </div>;
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
              MEHR...
            </a>{" "}
          </p>
        </div>
           <div className="klasse--grid" id="klasse--grid">
          {klassenData.map((klasse) => (
            <KlasseCard
              name={klasse.name}
              klasse={klasse.klasse}
              icon={klasse.icon}
              key={klasse.name}
              details={klasse.details}
            />
          ))}
          <div className="link-btn">
            <Link to="/anmelden">JETZT ANMELDEN ➢</Link>
          </div>
        </div>
        </>
    )
}