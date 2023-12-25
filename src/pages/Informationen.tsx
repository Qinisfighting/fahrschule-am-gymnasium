
import { klassenData } from "../data";
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
          <p>{klasse}</p>
        </div>
      </div>
    );
  }
  
  export default function Informationen() {
    return (
      <div className="info--container">
        <h1 className="info--header">INFORMATIONEN</h1>
  
        <Slide
          indicators={true}
          slidesToScroll={1}
          slidesToShow={1}
          responsive={responsiveSettings}
        >
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/fahren.jpg)`
              }}
            >
              <span>
                <Link
                  to="allgemeines"
                >
                  Allgemeines
                </Link>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/theorie.jpg)`
              }}
            >
              <span>
              <Link
                  to="theorie"
                >
                  Theorietische Unterricht
              </Link> 
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
              <Link
                  to="ab17"
                >
                  Begleitetes Fahren ab 17
              </Link> 
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/schwein.png)`
              }}
            >
              <span>
              <Link
                  to="preise"
                >
                  Preise & Abrechnung
              </Link> 
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/fragen.jpg)`
              }}
            >
              <span>
              <Link
                  to="fragen"
                >
                  Fragen über
              </Link> 
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
      </div>
    );
  }
  