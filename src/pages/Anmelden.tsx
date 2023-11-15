import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import emailjs from "@emailjs/browser";



interface FormData {
    name: string;
    email: string;
    content: string;
    nummer: string
  }



export default function Kontakt() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        content: "",
        nummer: ""
      });
      const [loading, setLoading] = useState(false);
      useEffect(() => emailjs.init("lBynZS3CdHPm1Mbhm"), []);
      
      function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      }

      async function handleSubmit(e: FormEvent) {
        e.preventDefault();
    
        setFormData({
          name: "",
          email: "",
          content: "",
          nummer: ""
        });
    
        const serviceId = "service_nvk45hx";
        const templateId = "template_xdkkhvl";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
            name: formData.name,
            email: formData.email,
            content: formData.content
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
        <div className="contact-container">
          <div className="top">
            <h1>Schick mir eine Nachricht</h1>     
          </div>
    
          <div className="form-container">
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
                name="content"
                value={formData.content}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              <button className="form--submit">
                SENDEN
              </button>
            </form>
          </div>
        </div>
      );
    }
