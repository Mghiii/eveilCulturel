// pages/Apropos.js
import React from "react";
import {
  FaLightbulb,
  FaPalette,
  FaUsers,
  FaHandsHelping,
  FaReact,
} from "react-icons/fa";
import { DiFigma } from "react-icons/di";
import "./css/apropos.css";

const Apropos = () => {
  return (
    <div className="apropos-page">
      <div className="apropos-container">
        <header className="apropos-header">
          <h1>À propos du Module Éveil Culturel</h1>
          <p className="sous-titre">Bridging Technology and Culture</p>
        </header>

        <section className="apropos-card">
          <div className="icone-wrapper">
            <FaLightbulb className="icone" />
          </div>
          <h2>Notre Mission</h2>
          <p>
            Ce module innovant vise à cultiver la créativité et l'expression
            personnelle à travers l'art, complétant la formation technique des
            étudiants par une ouverture culturelle essentielle au développement
            professionnel global.
          </p>
        </section>

        <section className="apropos-card">
          <div className="icone-wrapper">
            <FaPalette className="icone" />
          </div>
          <h2>Notre Vision</h2>
          <p>
            Cette plateforme numérique a été conçue pour valoriser et pérenniser
            les réalisations étudiantes, offrant un espace d'exposition unifié
            où peinture, théâtre, vidéo et artisanat numérique coexistent
            harmonieusement.
          </p>
        </section>

        <section className="apropos-card">
          <div className="icone-wrapper">
            <FaUsers className="icone" />
          </div>
          <h2>Notre Approche</h2>
          <ul className="pedagogie-list">
            <li>L'expérimentation artistique libre</li>
            <li>L'interdisciplinarité créative</li>
            <li>La synthèse entre tradition et innovation</li>
            <li>Le développement de compétences transversales</li>
          </ul>
        </section>

        <section className="tech-stack">
          <h3>Notre Boîte à Outils</h3>
          <div className="outils-grid">
            <div className="outil-item">
              <FaReact className="tech-icone react" />
              <span>React</span>
            </div>
          </div>
        </section>

        <footer className="apropos-footer">
          <blockquote>
            "Ce projet incarne la richesse de la diversité culturelle marocaine
            et le potentiel créatif d'une génération d'ingénieurs visionnaires."
          </blockquote>
        </footer>
      </div>
    </div>
  );
};

export default Apropos;
