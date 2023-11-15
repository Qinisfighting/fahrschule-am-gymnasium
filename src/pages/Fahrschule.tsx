import { Link } from "react-router-dom";
import cover from '../assets/cover.jpg';
import call from '../assets/call.png';
import Steering from '../assets/steering.png';
import euro from '../assets/euro.png';


export default function Fahrschule() {
    return (
        <div className="home--container">
            
            <div className="home--container--top">
              <div className="home--container--top--left">
                <p><img src={call} alt="telephone"></img>04361/49108</p>
                <h1><span className="willkommen--span">Willkommen bei der</span> <br/><span className="name--span">Fahrschule Am Gymnasium</span></h1>
                <div className="home-link"><Link  to="/über">ÜBER UNS</Link></div>
              </div>              
                <img src={cover} alt="cover" />
            </div>
            
            <div className="home--container--bottom">
                <div className="home--container--bottom--box">
                    <img src={Steering} alt="steering" />
                   <div>
                       <h3>Professionale Leistungen</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod The point of using lorem ipsum.Lorem ipsum dolor sit amet consectetur</p>
                   </div>
                </div>
                <hr/>
                <div className="home--container--bottom--box">
                <img src={euro} alt="euro" />
                   <div>
                      <h3>Konkurrenzfähige Preise</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod The point of using lorem ipsum.Lorem ipsum dolor sit amet consectetur</p>
                   </div>
                </div>
            </div>
        </div>
    )
}   
