// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Colonne 1 - Logo et description */}
        <div className="footer-col">
          <div className="footer-logo">
            <h3>Éveil Culturel</h3>
            <p>
              Développer la créativité culturelle chez les ingénieurs de demain
            </p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Colonne 2 - Liens rapides */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/Apropos">À propos</Link>
            </li>
            <li>
              <Link to="/Allprojects">Explorer les projets</Link>
            </li>
            <li>
              <Link to="/Remerciments">Remerciements</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 - Contact */}
        <div className="footer-col">
          <h4>Contactez-nous</h4>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt />
              <span>Polytechnique, Agadir, Maroc</span>
            </li>
            <li>
              <FaPhone />
              <span>+212 6 12 34 56 78</span>
            </li>
            <li>
              <FaEnvelope />
              <span>contact@eveil-culturel.ma</span>
            </li>
          </ul>
        </div>

        {/* Colonne 4 - Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Abonnez-vous pour recevoir nos actualités culturelles</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" required />
            <button type="submit">S'abonner</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Éveil Culturel - Tous droits
          réservés
        </div>
        <div className="legal-links">
          <Link to="#">Politique de confidentialité</Link>
          <Link to="#">Conditions d'utilisation</Link>
          <Link to="#">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
