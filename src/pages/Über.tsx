import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { personalData } from "../data";
import eingang from "../assets/eingang.png";
import turnArrow from "../assets/turnArrow.png";
import empfang from "../assets/empfang.jpg";
import schild from "../assets/schild.png";
import klassenzimmer from "../assets/klassenzimmer.png";
import people from "../assets/people.png";
import year from "../assets/year.png";
import smile from "../assets/smile.png";
import location from "../assets/location.png";
import email from "../assets/email.png";


export default function Über() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(4966);
    const [counter3, setCounter3] = useState(56);
  
    useEffect(() => {
      const interval1 = setInterval(() => {
        counter1 < 34 && setCounter1((counter) => counter + 1);
      }, 50);
  
      const interval2 = setInterval(() => {
        counter2 < 5000 && setCounter2((counter) => counter + 1);
      }, 50);
  
      const interval3 = setInterval(() => {
        counter3 < 90 && setCounter3((counter) => counter + 1);
      }, 50);
  
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    });
  
    const lehrerKarte = personalData.map((lehrer) => (
      <div className="über--bottom--lehrer--box" key={lehrer.name}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={lehrer.profil} alt="lehrer" className="lehrer-profil" />
            </div>
            <div className="flip-card-back">
              <h2>{lehrer.name}</h2>
              <h3>{lehrer.title}</h3>
              <p>{lehrer.description}</p>
              <p><a className="cell" href={`tel:${lehrer.phone}`}>📞 {lehrer.phone}</a></p>
              <a href={`mailto:${lehrer.email}`} target="_blank">
                <img src={email} alt="email" className="email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
    

{/**

        <figure>
          <img src={lehrer.profil} alt="lehrer" className="lehrer-profil" />
        </figure>
        <div className="profil-top-left">
          <h3>{lehrer.name}</h3>
          <p>{lehrer.title}</p>
          <p>{lehrer.description}</p>
        </div>
        <div className="profil-bottom-left">
          <a href={`mailto:${lehrer.email}`} target="_blank">
            <img src={email} alt="email" className="email" />
          </a>
  
          <p className="cell">{lehrer.phone}</p>   
        </div>
        */}
  
  
    return (
      <div className="container--über">
        <div className="über--top">
          <div className="über--top--right">
            <div className="über--top--rows">
              <div className="über--top--row">
                <img src={year} alt="year" />
                <h2>
                  <span className="über--top--right--span">{counter1}+</span>{" "}
                  JAHRE BERUFSERFAHRUNG
                </h2>
              </div>
              <div className="über--top--row">
                <img src={smile} alt="smile" />
                <h2>
                  <span className="über--top--right--span">{counter3}%</span>{" "}
                  BESTEHENSQUOTE
                </h2>
              </div>
              <div className="über--top--row">
                <img src={people} alt="people" />
                <h2>
                  <span className="über--top--right--span">{counter2}+</span>{" "}
                  ABSOLVIERTE{" "}
                </h2>
              </div>
            </div>
            <div className="über-link">
              <Link to="/informationen">INFORMATIONEN</Link>
            </div>
          </div>
          <div className="über--top--left">
            <img src={schild} className="über--top--img" alt="schild" />
          </div>
        </div>
  
        <div className="über--mittle">
          <div className="über--mittle--left">
            <img src={eingang} alt="" className="schuleIMGs" id="schuleIMG1" />
            <img src={empfang} alt="" className="schuleIMGs" id="schuleIMG2" />
            <img
              src={klassenzimmer}
              alt=""
              className="schuleIMGs"
              id="schuleIMG3"
            />
          </div>
          <div className="über--mittle--right">
            <h1>UNSERE FILIALEN</h1>
            <div className="filialen">
              <div className="filiale">
                <a
                  href="https://www.google.com/maps/dir//54.2900595,10.8933194/@54.2899994,10.8109576,12z?entry=ttu"
                  target="_blank"
                >
                  <img
                    src={location}
                    alt="navi"
                    className="navi"
                   
                  />
                </a>
  
                <div>
                  <h2>Filiale Oldenburg</h2>
                  <p>Göhler Straße 32</p>
                  <p>23758 Oldenburg i.H.</p>
                </div>
              </div>
              <div className="filiale">
                <a
                  href="https://www.google.com/maps/dir//Eutiner+Str.+11,+23738+Lensahn/@54.2198363,10.8023197,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b27f24f7c78c67:0xc481290815469c3e!2m2!1d10.8847198!2d54.2198644?entry=ttu"
                  target="_blank"
                >
                  <img
                    src={location}
                    alt="navi"
                    className="navi"
                  />
                </a>
                <div>
                  <h2>Filiale Lensahn</h2>
                  <p>Eutiner Straße 11</p>
                  <p>23738 Lensahn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="über--bottom">
          <div className="über--bottom--header">
            <div><h1>UNSER TEAM</h1></div> 
            <div><img className="turnArrow" src={turnArrow}/></div> 
          </div>  
          <div className="über--bottom--lehrer">{lehrerKarte}</div>
       </div> 
      </div>
    );
  }
  