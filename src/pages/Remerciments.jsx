// src/pages/Remerciments.js
import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaUniversity,
  FaCode,
  FaHeart,
} from "react-icons/fa";
import "./css/remerciments.css";

const Remerciments = () => {
  return (
    <div className="remerciements-page">
      <div className="remerciements-container">
        <header className="remerciements-header">
          <h1>Remerciements</h1>
          <p className="subtitle">
            Un projet réalisé avec passion et collaboration
          </p>
        </header>

        <div className="remerciements-content">
          <section className="thank-card">
            <div className="icon-wrapper">
              <FaChalkboardTeacher className="icon" />
            </div>
            <h2>À notre professeure encadrante</h2>
            <p>
              Nous exprimons notre profonde gratitude à{" "}
              <strong>Madame Fatima Zahra Haiti</strong> pour son accompagnement
              expert, ses conseils éclairés et son engagement constant tout au
              long de ce projet. Sa vision pédagogique a été déterminante dans
              la réussite de cette initiative culturelle.
            </p>
          </section>

          <section className="thank-card">
            <div className="icon-wrapper">
              <FaUsers className="icon" />
            </div>
            <h2>À mes collègues étudiants</h2>
            <p>
              Merci à tous les participants pour leur créativité, leur esprit
              d'équipe et leurs contributions uniques. Cette richesse collective
              a transformé ce projet en une expérience mémorable et
              enrichissante.
            </p>
          </section>

          <section className="thank-card">
            <div className="icon-wrapper">
              <FaUniversity className="icon" />
            </div>
            <h2>À notre établissement</h2>
            <p>
              Nos sincères remerciements à{" "}
              <strong>l'École Polytechnique d'Agadir</strong> pour son soutien
              institutionnel et les moyens mis à disposition. Cet environnement
              stimulant favorise l'émergence de projets innovants à la croisée
              de la technique et de la culture.
            </p>
          </section>

          <section className="thank-card">
            <div className="icon-wrapper">
              <FaCode className="icon" />
            </div>
            <h2>Crédits techniques</h2>
            <p>
              Développé avec : React, Node.js, MongoDB
              <br />
              Design : Figma, Adobe Suite
              <br />
              Équipe technique : [Votre nom], [Collaborateurs]
              <br />
              Hébergement : [Nom du service]
            </p>
          </section>
        </div>

        <footer className="remerciements-footer">
          <div className="closing-message">
            <FaHeart className="heart-icon" />
            <p>
              "La culture ne s'hérite pas, elle se conquiert."
              <br />- André Malraux
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Remerciments;
