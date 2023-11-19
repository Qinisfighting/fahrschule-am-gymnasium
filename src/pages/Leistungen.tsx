
import { leistungenData } from "../data";
import { Slide } from 'react-slideshow-image';
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'

const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ];
  
  function LeistungenCard({
    name,
    klasse,
    icon
  }: {
    name: string;
    klasse: string;
    icon: string;
  }) {
    return (
      <div className="leistungen--card">
        <figure>
          <img src={icon} alt={name} />
        </figure>
        <div>
          <h3>{name}</h3>
          <p>{klasse}</p>
        </div>
      </div>
    );
  }
  
  export default function Leistungen() {
    return (
      <div className="leistungen--container">
        <h1 className="leistungen--header">UNSERE LEISTUNGEN</h1>
  
        <Slide
          indicators={true}
          slidesToScroll={1}
          slidesToShow={1}
          responsive={responsiveSettings}
        >
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/theorie.jpg)`
              }}
            >
              <span>
                <a
                  target="_blank"
                  href="https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/ausbildung/#:~:text=Der%20Fahrsch%C3%BCler%20oder%20die%20Fahrsch%C3%BClerin,%C3%A0%2090%20Minuten%20f%C3%BCr%20Zusatzstoff."
                >
                  Theorietische Unterricht
                </a>
              </span>
            </div>
          </div>
  
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/fahren.jpg)`
              }}
            >
              <span>
                <a
                  target="_blank"
                  href="https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/ausbildung/#:~:text=Der%20Fahrsch%C3%BCler%20oder%20die%20Fahrsch%C3%BClerin,%C3%A0%2090%20Minuten%20f%C3%BCr%20Zusatzstoff."
                >
                  Praktische Unterricht
                </a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/17.jpg)`
              }}
            >
              <span>
                <a target="_blank" href="https://www.bf17.de/">
                  Begleitetes Fahren ab 17
                </a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/umschreibung.png)`
              }}
            >
              <span>
                <a
                  target="_blank"
                  href="https://bmdv.bund.de/SharedDocs/DE/Artikel/StV/Strassenverkehr/gueltigkeit-auslaendischer-fahrerlaubnisse-in-deutschland.html"
                >
                  Umschreibung Fahrerlaubnis
                </a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/Auffrischungsfahrten.jpg)`
              }}
            >
              <span>
                <a
                  target="_blank"
                  href="https://www.bussgeldkatalog.org/auffrischungskurs-fahrschule/"
                >
                  Auffrischungsfahrten
                </a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/ASF.png)`
              }}
            >
              <span>
                <a
                  target="_blank"
                  href="https://www.adac.de/verkehr/rund-um-den-fuehrerschein/erwerb/aufbauseminar-fahranfaenger/"
                >
                  ASF-Seminare
                </a>
              </span>
            </div>
          </div>
        </Slide>
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
        <div className="klasse--grid">
          {leistungenData.map((leistung) => (
            <LeistungenCard
              name={leistung.name}
              klasse={leistung.klasse}
              icon={leistung.icon}
            />
          ))}
          <div className="link-btn">
            <Link to="/anmelden">JETZT ANMELDEN ➢</Link>
          </div>
        </div>
      </div>
    );
  }
  