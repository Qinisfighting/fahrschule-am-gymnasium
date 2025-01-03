import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import upArrow from "../assets/upArrow.png";

export default function Footer() {
  const [isTop, setIsTop] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setIsTop(true) : setIsTop(false);
    });
  }, []);

  function goTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <footer>
      {isTop && (
        <img src={upArrow} className="go-top" onClick={goTop} alt="toTop" />
      )}
      <div className="footer--container--top">
        <a
          target="_blank"
          href="https://www.google.com/localservices/prolist?g2lbs=ANTchaMBKOP70wdW_NYel6XIVMjxVUm80Ixqvuy_REJkq3JeUactpu90jK9ple4wfDoMVTYaU_82XQQd_Ki-ttzFkGGsoniQLuu-IjXylRkHma4-utMLK38-1TVSAitTqI78tDVEjJwr&hl=de-DE&gl=de&ssta=1&q=fahrschule%20am%20gymnasium&oq=fahrschule%20am%20gymnasium&src=2&serdesk=1&lrlstt=1699460244805&ved=2ahUKEwi0murh5rSCAxXCBzoCHZ_UBFkQwyx6BAgAEA0&spp=CgsvZy8xdGRjX3JiNDqIAVdoOFFBQkFCRUFJaUYyWmhhSEp6WTJoMWJHVWdZVzBnWjNsdGJtRnphWFZ0cWdGQUVBRXlIeEFCSWh1R1dHT0dkNVkzOWpfbXc2QWNzNUhnbi1ubWVzZTlPRGZqTW1ZeUd4QUNJaGRtWVdoeWMyTm9kV3hsSUdGdElHZDViVzVoYzJsMWJRPT0%3D&slp=MgBAAVIECAIgAGAAaAE%3D&scp=ChNnY2lkOmRyaXZpbmdfc2Nob29sEiUiDUthcnRlbmJlcmVpY2gqFA2tHEQgFcwVVQYdhm52ICV356gGGhdmYWhyc2NodWxlIGFtIGd5bW5hc2l1bSoKRmFocnNjaHVsZQ%3D%3D#ts=3"
        >
          <p>Bewertungen</p>
        </a>
        <Link to="/impressum">
          <p>Impressum</p>
        </Link>
        <Link to="/datenschutz">
          <p>Datenschutz</p>
        </Link>
      </div>

      <a href="https://www.yanqin.de" target="_blank">
        <h5>© {new Date().getFullYear()} by QIN's code</h5>
      </a>
    </footer>
  );
}
