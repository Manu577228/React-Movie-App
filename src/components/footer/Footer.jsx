import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

function Footer() {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          © 2024 Bharadwaj Movies. All rights reserved. Elevate your cinematic
          journey with the Bharadwaj Movies website. Immerse yourself in a
          curated selection of films tailored for your discerning taste.
          Experience the art of storytelling like never before, where each frame
          unfolds a new world of entertainment. Indulge in seamless streaming
          and embrace the magic of cinema at your fingertips. Your gateway to
          unparalleled cinematic delight.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
}

export default Footer;
