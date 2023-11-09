import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { personalData } from "../data";
import eingang from "../assets/eingang.png";
import empfang from "../assets/empfang.jpg";
import schild from "../assets/schild.png";
import klassenzimmer from "../assets/klassenzimmer.png";
import people from "../assets/people.png";
import year from "../assets/year.png";
import smile from "../assets/smile.png";

export default function Über() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          counter1 < 20 && setCounter1((counter) => counter + 1);  
        }, 10);
          
        const interval2 = setInterval(() => {
            counter2 < 100 && setCounter2((counter) => counter + 1);  
            }, 10);

            const interval3 = setInterval(() => {
                counter3 < 90 && setCounter3((counter) => counter + 1);  
                }, 10);
               
        return () => {
          
          clearInterval(interval2)
          clearInterval(interval3)
          clearInterval(interval);
        };
      });
    
       

    return (
        <div className="container--über">
            <div className="über--top">
               
               
               <div className="über--top--right">
                 <div className="über--top--row">
                    <img src={year} alt="year"/>
                    <h2><span className="über--top--right--span">{counter1}+</span> JAHRE BERUFSERFAHRUNG</h2>
                 </div>
                 <div className="über--top--row">
                    <img src={smile} alt="smile"/>
                    <h2><span className="über--top--right--span">{counter2}+</span> ABSOLVIERTE PRO JAHR</h2>
                 </div> 
                 <div className="über--top--row">
                    <img src={people} alt="people"/>
                    <h2><span className="über--top--right--span">{counter3}%</span> BESTANDENSQUOTE</h2>
                </div>  
                   <div className="über-link"><Link  to="/leistungen">UNSERE LEISTUNGEN</Link></div>
               </div>
               <img src={schild} className="über--top--img" alt="schild"/>
            </div>

            <div className="über--mittle">
                <div className="über--mittle--left">
                    <div className="filiale"></div>
                    <div className="filiale"></div>   
                </div>
                <div className="über--mittle--right">
                    <img src="" alt=""  className="schuleIMGs"/>
                    <img src="" alt=""  className="schuleIMGs"/>
                    <img src="" alt=""  className="schuleIMGs"/>     
                </div>    
            </div>

            <div className="über--bottom">
                <h1>UNSER TEAM</h1>
                <div className="über--bottom--lehrer">
                    {personalData.map((lehrer) => (
                        <div className="über--bottom--lehrer--box">
                            <img src={lehrer.profil} alt="lehrer" />
                            <h3>{lehrer.name}</h3>
                            <p>{lehrer.title}</p>
                            <p>{lehrer.email}</p>
                            <p>{lehrer.phone}</p>
                        </div>
                    ))}
                </div>
                
            </div>
           
        </div>
    )
}
