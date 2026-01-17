import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];

const buttonStyle = {
  margin: "0 20px",
  width: "37px",
  background: "none",
  border: "1px solid rgba(0,0,0,0.3)",
  borderRadius: "50%",
  padding: "6px 8px",
  boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

export default function Informationen() {
  return (
    <div className="info--container">
      <h1 className="info--header">INFORMATIONEN</h1>

      <Slide
        {...properties}
        indicators={true}
        slidesToScroll={1}
        slidesToShow={1}
        responsive={responsiveSettings}
      >
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/fahren.jpg)`,
            }}
          >
            <span>
              <Link to="allgemeines">Allgemeines</Link>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/klassen.png)`,
            }}
          >
            <span>
              <Link to="fahrerlaubnisklassen">Fahrerlaubnisklassen</Link>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/theorie.jpg)`,
            }}
          >
            <span>
              <Link to="theorie">Theorieunterricht</Link>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/17.jpg)`,
            }}
          >
            <span>
              <Link to="ab17">Begleitetes Fahren ab 17</Link>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/schwein.jpg)`,
            }}
          >
            <span>
              <Link to="preise">Preise & Abrechnung</Link>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/fragen.jpg)`,
            }}
          >
            <span>
              <Link to="fragen">Fragen üben</Link>
            </span>
          </div>
        </div>
      </Slide>
    </div>
  );
}
