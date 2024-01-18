import { Link } from "react-router-dom";
import cover from '../assets/cover.jpg';
import call from '../assets/call.png';
import steering from '../assets/steering.png';
import euro from '../assets/euro.png';
import click from '../assets/click.png';


export default function Fahrschule() {
    return (
      <div className="home--container">
        <div className="home--container--top">
          <div className="home--container--top--left">
            <Link to="/informationen/theorie"><p className="t-zeiten">Theorieunterricht- Zeiten?<br/> hier klicken! <img src={click} width="20px" /></p></Link>     
            <div className="p">
              <img src={call} alt="telephone" />
              <a href="tel:04361494108">
                <p>04361/494108</p>
              </a>
            </div>
            <h1>
              <span className="willkommen--span">Willkommen bei der</span> <br />
              <span className="name--span">Fahrschule Am Gymnasium</span>
            </h1>
            <div className="home-link">
              <Link to="/über">ÜBER UNS</Link>
            </div>
          </div>
          <img src={cover} alt="cover" />
        </div>
  
        <div className="home--container--bottom">
          <div className="home--container--bottom--box">
            <img src={steering} alt="steering" />
            <div className="home--container--bottom--box--text">
              <h3>Professionale Leistungen</h3>
              <p>
              Keep cool and get lässig! Mit Freude und Spaß bringen wir Dich zu Deinem lang ersehnten Ziel - Deinem Führerschein!
              </p>
            </div>
          </div>
          <hr />
          <div className="home--container--bottom--box">
            <img src={euro} alt="euro" />
            <div className="home--container--bottom--box--text">
              <h3>Konkurrenzfähige Preise</h3>
              <p>
              Billig muss nicht immer gut sein – Qualität hat ihren Preis. Wir bieten Dir eine professionale Ausbildung zu einem fairen Preis.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  