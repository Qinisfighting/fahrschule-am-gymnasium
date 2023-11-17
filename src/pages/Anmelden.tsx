import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";



interface FormData {
    anrede: string;
    vorname: string;
    nachname: string;
    address: string;
    plz: string;
    ort: string;
    geburtsdatum: string;
    geburtsort: string;
    klasse: string;
    email: string;
    filiale: string;
    nummer: string;
    nachricht: string;
    isDatenschutz: boolean;
  }



export default function Kontakt() {
    const [formData, setFormData] = useState<FormData>({
      anrede: "",
      vorname: "",
      nachname: "",
      address: "",
      plz: "",
      ort: "",
      geburtsdatum: "",
      geburtsort: "",
      klasse: "",
      email: "",
      filiale: "",
      nummer: "",
      nachricht: "",
      isDatenschutz: false
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
        }));
        console.log(formData)
      }

      async function handleSubmit(e: FormEvent) {
        e.preventDefault();
    
        setFormData({
          anrede: "",
          vorname: "",
          nachname: "",
          address: "",
          plz: "",
          ort: "",
          geburtsdatum: "",
          geburtsort: "",
          klasse: "",
          email: "",
          filiale: "",
          nummer: "",
          nachricht: "",
          isDatenschutz: true
        });
    
        const serviceId = "service_nvk45hx";
        const templateId = "template_xdkkhvl";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
            anrede: formData.anrede,
            vorname: formData.vorname,
            nachname: formData.nachname,
            address: formData.address,
            plz: formData.plz,
            ort: formData.ort,
            geburtsdatum: formData.geburtsdatum,
            geburtsort: formData.geburtsort,
            klasse: formData.klasse,
            email: formData.email,
            filiale: formData.filiale,
            nummer: formData.nummer,
            nachricht: formData.nachricht,
            isDatenschutz: formData.isDatenschutz
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
        <div className="anmelden-container">
          <div className="top">
            <h1>JETZT ONLINE ANMELDEN!</h1>     
          </div>
    
          <div className="anmelden-form">
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="anrede">Anrede*</label>
              <select
                value={formData.anrede}
                onChange={handleChange}
                name="anrede"
                required
              >
                <option value="herr">
                  Herr
                </option>
                <option value="frau">
                  Frau
                </option>
             
              </select>



              <label htmlFor="vorname">Vorname*</label> 
              <input
                type="text"
                placeholder="Vorname*"
                className="form--input"
                name="vorname"
                value={formData.vorname}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <label htmlFor="nachname">Nachname*</label>
               <input
                type="text"
                placeholder="Nachname*"
                className="form--input"
                name="nachname"
                value={formData.nachname}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <label htmlFor="address">Straße / Hausnummer*</label>
              <input
                type="text"
                placeholder="Straße / Hausnummer*"
                className="form--input"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <label htmlFor="plz">PLZ*</label>
              <input
                type="text"
                placeholder="PLZ*"
                className="form--input"
                name="plz"
                value={formData.plz}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <label htmlFor="ort">Ort*</label>
              <input
                type="text"
                placeholder="Ort*"
                className="form--input"
                name="ort"
                value={formData.ort}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <label htmlFor="geburtsdatum">Geburtsdatum*</label>
               <input
                type="date"
                placeholder="Geburtsdatum*"
                className="form--input"
                name="geburtsdatum"
                value={formData.geburtsdatum}
                onChange={handleChange}
                required
              />
              <label htmlFor="geburtsort">Geburtsort*</label>
               <input
                type="text"
                placeholder="Geburtsort*"
                className="form--input"
                name="geburtsort"
                value={formData.geburtsort}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              

              

              
              <label htmlFor="klasse">Führerschein Klasse*</label>
               <input
                type="text"
                placeholder="Führerschein Klasse*"
                className="form--input"
                name="klasse"
                value={formData.klasse}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />



               <label htmlFor="email">Email*</label>
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

               <label htmlFor="filiale">Filiale*</label>
                    <select
                      value={formData.filiale}
                      onChange={handleChange}
                      name="filiale"
                      required
                    >
                      <option value="oldenburg">
                        Oldenburg
                      </option>
                      <option value="lensahn">
                        Lensahn
                      </option>
                    </select>
            
               <label htmlFor="nummer">Telefonnummer*</label>
               <input
                type="text"
                placeholder="Telefonnummer"
                className="form--input"
                name="nummer"
                value={formData.nummer}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />

              <label htmlFor="nachricht">Nachricht</label>
              <textarea
                placeholder="Nachricht"
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
              
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
