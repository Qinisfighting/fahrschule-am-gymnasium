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
import location from "../assets/location.png";
import email from "../assets/email.png";


export default function Über() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(4966);
    const [counter3, setCounter3] = useState(56);

    useEffect(() => {

        const interval1 = setInterval(() => {
          counter1 < 34 && setCounter1((counter) => counter + 1);  
        }, 77);
          
        const interval2 = setInterval(() => {
            counter2 < 5000 && setCounter2((counter) => counter + 1);  
            }, 77);

            const interval3 = setInterval(() => {
                counter3 < 90 && setCounter3((counter) => counter + 1);  
                }, 77);
               
        return () => {
          clearInterval(interval1);
          clearInterval(interval2)
          clearInterval(interval3)
          
        };
      });
    
       const lehrerKarte = personalData.map((lehrer) => (
        <div className="über--bottom--lehrer--box">
            <figure><img src={lehrer.profil} alt="lehrer" className="lehrer-profil"/></figure>
            <div className="profil-top-left">
                <h3 >{lehrer.name}</h3>
                <p>{lehrer.title}</p>
            </div>
            <div className="profil-bottom-left">
            
            <a href={`mailto:${lehrer.email}`} target="_blank">
              <img src={email} alt="email" className="email" />
            </a>
              
             {/**<p className="cell">{lehrer.phone}</p>   */}  
            </div>
              
        </div>
    ))

    return (
        <div className="container--über">
            <div className="über--top">
               
               
               <div className="über--top--right">
                 <div className="über--top--rows">
                 <div className="über--top--row">
                    <img src={year} alt="year"/>
                    <h2><span className="über--top--right--span">{counter1}+</span> JAHRE BERUFSERFAHRUNG</h2>
                 </div>
                 <div className="über--top--row">
                    <img src={smile} alt="smile"/>
                    <h2><span className="über--top--right--span">{counter3}%</span> BESTEHENSQUOTE</h2>
                </div>
                 <div className="über--top--row">
                    <img src={people} alt="people"/>
                    <h2><span className="über--top--right--span">{counter2}+</span> ABSOLVIERTE </h2>
                 </div> 
                 
                </div>  
                   <div className="über-link"><Link  to="/leistungen">UNSERE LEISTUNGEN </Link></div>
               </div>
               <div className="über--top--left"><img src={schild} className="über--top--img" alt="schild"/></div>
            </div>

            <div className="über--mittle">
                
                <div className="über--mittle--left">
                    <img src={eingang} alt=""  className="schuleIMGs" id="schuleIMG1"/>
                    <img src={empfang} alt=""  className="schuleIMGs" id="schuleIMG2"/>
                    <img src={klassenzimmer} alt=""  className="schuleIMGs" id="schuleIMG3"/>   
                </div>
                <div className="über--mittle--right">
                    <h1>UNSERE FILIALEN</h1>
                    <div className="filialen">
                    <div className="filiale">
                        <a href="https://www.google.com/maps/dir/54.2734754,10.8633786/54.2900595,10.8933194/@54.2773484,10.8555987,14z/data=!4m5!4m4!1m1!4e1!1m0!3e0?entry=ttu" target="_blank"><img src={location} alt="navi" className="navi" style={{width:77}}/></a>  
                        
                        <div>
                            <h2>Filiale Oldenburg</h2>    
                            <h3>Göhler Straße 32</h3>
                            <h3>23758 Oldenburg i.H.</h3>
                        </div>
                    </div>
                    <div className="filiale">
                        <a href="https://www.google.com/maps/dir/54.2734754,10.8633786/Eutiner+Str.+11,+23738+Lensahn/@54.246549,10.8162176,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47b27f24f7c78c67:0xc481290815469c3e!2m2!1d10.8847198!2d54.2198644?entry=ttu" target="_blank"><img src={location} alt="navi" className="navi" style={{width:77}}/></a> 
                        <div>
                            <h2>Filiale Lensahn</h2>      
                            <h3>Eutiner Straße 11</h3>
                            <h3>23738 Lensahn</h3>   
                        </div>
                        </div> 
                    </div>        
                </div>    
            </div>

            <div className="über--bottom">
                <h1>UNSER TEAM</h1>
                <div className="über--bottom--lehrer">
                    {lehrerKarte}
                </div>
                
            </div>
           
        </div>
    )
}
