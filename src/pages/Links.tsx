import tüv from '../assets/tüv.png';
import oh from '../assets/oh.png';
import bf17 from '../assets/bf17.svg';
import adac from '../assets/ADAC.png';
import dlrg from '../assets/dlrg.png';
import ivers from '../assets/ivers.png';
import asb from '../assets/asb.png';
import polizei from '../assets/polizei.jpg';


export default function Links() {
    return (
      <div className="info-container">
        <h1>LINKS</h1>
        <div className="info--imgs">
          <a
            href="https://www.tuev-nord.de/de/privatkunden/verkehr/fuehrerschein/fahrschueler-app/"
            target="_blank"
          >
            <fieldset>
              <legend>Führerschein App</legend>
              <img src={tüv} alt="tüv" style={{width: 280}}/>
            </fieldset>
          </a>
          <a
            href="https://www.kreis-oh.de/B%C3%BCrger-Kreis-Verwaltung/Auto-Verkehr/F%C3%BChrerscheinstelle/"
            target="_blank"
          >
            <fieldset>
              <legend>Führerscheinstelle Ostholstein</legend>
              <img src={oh} alt="oh" style={{width: 280}}/>
            </fieldset>
          </a>
          <a href="https://www.bf17.de/" target="_blank">
            <fieldset>
              <legend>Begleitetes Fahren ab 17</legend>
              <img src={bf17} alt="bf17" style={{width: 220}}/>
            </fieldset>
          </a>
          <a href="https://www.adac.de/" target="_blank">
            <fieldset>
              <legend>Allgemeiner Deutscher Automobil-Club</legend>
              <img src={adac} alt="ADAC" style={{width: 280}}/>
            </fieldset>
          </a>
          <a href="https://heiligenhafen.dlrg.de/kurse-und-sicherheit/erste-hilfe-kurse/" target="_blank">
            <fieldset>
              <legend>DLRG Heiligenhafen - Erste Hilfe Kurse</legend>
              <img src={dlrg} alt="DLRG" style={{width: 280}}/>
            </fieldset>
          </a>
          <a href="https://www.erste-hilfe-ostholstein.de/" target="_blank">
            <fieldset>
              <legend>IVERS Ostholstein - Erste Hilfe Kurse</legend>
              <img src={ivers} alt="IVERS" style={{width: 280}}/>
            </fieldset>
          </a>
          <a href="https://www.asb-sh.de/standort/asb-regionalverband-ostholstein" target="_blank">
            <fieldset>
              <legend>ASB Regionalverband Ostholstein</legend>
              <img src={asb} alt="ASB" style={{width: 280}}/>
            </fieldset>
          </a>
          <a href="https://www.facebook.com/p/Polizei-L%C3%BCbeck-und-Ostholstein-100064319844650/?locale=de_DE" target="_blank">
            <fieldset>
              <legend>Polizei Lübeck und Ostholstein</legend>
              <img src={polizei} alt="polizei" style={{width: 180}}/>
            </fieldset>
          </a>
        </div>
      </div>
    );
  }
  