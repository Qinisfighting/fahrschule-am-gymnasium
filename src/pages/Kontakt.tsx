import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import location2 from "../assets/location2.png";
import person from "../assets/person.png";
import time from "../assets/time.png";



interface FormData {
    name: string;
    email: string;
    content: string;
    nummer: string;
    isDatenschutz: boolean;
  }



export default function Kontakt() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        content: "",
        nummer: "",
        isDatenschutz: false,
      });
      const [loading, setLoading] = useState(false);
      useEffect(() => emailjs.init("lBynZS3CdHPm1Mbhm"), []);
      
      function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value
        })); console.log(formData)
      }
     
      async function handleSubmit(e: FormEvent) {
        e.preventDefault();
    
        setFormData({
          name: "",
          email: "",
          content: "",
          nummer: "",
          isDatenschutz: true,
        });
    
        const serviceId = "service_nvk45hx";
        const templateId = "template_xdkkhvl";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
            name: formData.name,
            email: formData.email,
            content: formData.content,
            nummer: formData.nummer,
            isDatenschutz: formData.isDatenschutz,
          });
          alert(
            "Danke für Ihre Nachricht. Ich melde mich umgehend."  
               );
        } catch (error) {
          console.log(error, `loading states: ${loading}`);
        } finally {
          setLoading(false);
        }
      }

      return (
        <div className="kontakt-container">
          <div className="kontakt-text">
           <div className="kontakt-text-content">
              <h1>FAHRSCHULE AM GYMNASIUM</h1>
              <div className="kontakt-text-content--box"> 
                    <div className="k--filialen">
                              <div className="filiale">
                                  <a href="https://www.google.com/maps/dir/54.2734754,10.8633786/54.2900595,10.8933194/@54.2773484,10.8555987,14z/data=!4m5!4m4!1m1!4e1!1m0!3e0?entry=ttu" target="_blank"><img src={location2} alt="navi" className="navi"/></a>  
                                  
                                  <div>
                                      <h2>Filiale Oldenburg</h2>
                                      <hr />     
                                      <h3>Göhler Straße 32</h3>
                                      <h3>23758 Oldenburg /H.</h3>
                                      
                                  </div>
                              </div>
                              <div className="filiale">
                                  <a href="https://www.google.com/maps/dir/54.2734754,10.8633786/Eutiner+Str.+11,+23738+Lensahn/@54.246549,10.8162176,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47b27f24f7c78c67:0xc481290815469c3e!2m2!1d10.8847198!2d54.2198644?entry=ttu" target="_blank"><img src={location2} alt="navi" className="navi"/></a> 
                                  <div>
                                      <h2>Filiale Lensahn</h2>
                                      <hr />      
                                      <h3>Eutiner Straße 11</h3>
                                      <h3>23738 Lensahn</h3>   
                                  </div>
                              </div> 
                    </div>
                    <hr/>
                    <div className="k--filialen">
                              <div className="filiale">
                                  <img src={person} alt="person" className="navi"/>
                                  
                                  <div>
                                      <h2>Andreas Walk</h2> 
                                      <hr />    
                                      <h3>Mobil: 0171/1261672</h3>
                                      <h3>Tel.: 04361/494108</h3>
                                      <h3>Fax: 04361/494821</h3>
                                      <h3>Email: <a href="mailto:info@a-walk.de" target="_blank" style={{textDecoration: "underline"}}>info@a-walk.de</a></h3>
                                  </div>
                              </div>
                              <div className="filiale">
                                  <img src={time} alt="time" className="navi"/>
                                  <div>
                                      <h2>Auskunft und Anmeldung</h2> 
                                      <hr />      
                                      <h3>Di. + Do. 18:30 Uhr</h3>
                                      <h3>Präsenz-Theorieunterricht:</h3> 
                                      <h3>ab 19:00 Uhr</h3>    
                                  </div>
                              </div> 
                    </div>
                </div>                
             </div>    
          </div>
    
          <div className="kontakt-form">
            <form className="form" onSubmit={handleSubmit}>
                
              <input
                type="text"
                placeholder="Name*"
                className="form--input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="form--input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <input
                type="text"
                placeholder="Rückrufnummer"
                className="form--input"
                name="nummer"
                value={formData.nummer}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
              
              />
              <textarea
                placeholder="Nachricht*"
                className="textarea"
                name="content"
                value={formData.content}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <div className="form-bottom">
                  <div className="checkbox-container">
                        <input
                        type="checkbox"
                        className="checkbox"
                        checked={formData.isDatenschutz}
                        onChange={handleChange}
                        name="isDatenschutz"
                        required
                        />
                        <label htmlFor="isDatenschutz">Ich habe die <Link to="/datenschutz">Datenschutzhinweise</Link> zur Kenntnis genommen und bin mit ihnen einverstanden. Erteilte Einwilligungen kann ich jederzeit widerrufen.</label>
                  </div>
                  <button className="form--submit">
                    SENDEN
                  </button>
               </div>   
            </form>
          </div>
        </div>
      );
    }
