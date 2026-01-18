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
          href="https://www.google.com/search?sca_esv=a64ff662bc0fc51f&sxsrf=ANbL-n79bYemkkloRPjoUVkMitqq-Qq07Q:1768728495975&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x72fCMVr4V5CEw3QvyX4P0FJdz-IyDEvTU3YuV2uF8Uw0628I8YRh5J4CH1QhnglMWYIlPKFIrOspi1BWd5o2wv8uXl6Spfb2cTaGMfjV7YHYCqAJA%3D%3D&q=Fahrschule+am+Gymnasium+Rezensionen&sa=X&ved=2ahUKEwiOp9ON45SSAxUfRPEDHfh0KmoQ0bkNegQIIRAH&biw=2328&bih=1145&dpr=1.1&aic=0"
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
