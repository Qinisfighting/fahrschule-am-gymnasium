import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";



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
           </div>    
          </div>
    
          <div className="kontakt-form">
            <form className="form" onSubmit={handleSubmit}>
                
              <input
                type="text"
                placeholder="Name(erforderlich)"
                className="form--input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <input
                type="email"
                placeholder="Email(erforderlich)"
                className="form--input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <input
                type="text"
                placeholder="Rückrufnummer(erforderlich)"
                className="form--input"
                name="nummer"
                value={formData.nummer}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <textarea
                placeholder="Nachricht"
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
                        <label htmlFor="isDatenschutz">Ich habe die <Link to="/datenschutz">Datenschutzerklärung</Link> zur Kenntnis genommen und bin mit ihnen einverstanden. Erteilte Einwilligungen kann ich jederzeit widerrufen.</label>
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
