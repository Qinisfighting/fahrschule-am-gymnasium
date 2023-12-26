import { Link } from "react-router-dom";
import cover from '../assets/cover.jpg';
import call from '../assets/call.png';
import steering from '../assets/steering.png';
import euro from '../assets/euro.png';


export default function Fahrschule() {
    return (
      <div className="home--container">
        <div className="home--container--top">
          <div className="home--container--top--left">
            <div className="p">
              <img src={call} alt="telephone" />
              <p>04361/494108</p>
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
              Mit Freude und Spaß bringen wir Dich zu Deinem lang ersehnten Ziel - Deinem Führerschein!
              </p>
            </div>
          </div>
          <hr />
          <div className="home--container--bottom--box">
            <img src={euro} alt="euro" />
            <div className="home--container--bottom--box--text">
              <h3>Konkurrenzfähige Preise</h3>
              <p>
              Wir versuchen nicht, der Billigste zu sein, aber wir versuchen, Ihre Zahlung lohnenswert zu gestalten!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  