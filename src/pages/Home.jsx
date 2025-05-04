import React, { useState, useEffect } from "react";
import "./css/home.css";
import { Link } from "react-router-dom";

export default function Home({ images, students, themes }) {
  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transitionStage, setTransitionStage] = useState("enter");
  const studentsPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setFade(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Pagination des étudiants
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(students.length / studentsPerPage);

  // Animation de transition
  useEffect(() => {
    setTransitionStage("enter");
    const timer = setTimeout(() => {
      setTransitionStage("entered");
    }, 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setTransitionStage("exit");
    setTimeout(() => {
      setCurrentPage(pageNumber);
    }, 300);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentBg].image})` }}
      >
        <div className={`hero-overlay ${fade ? "fade-out" : "fade-in"}`}>
          <div className="hero-content">
            <h1>Éveil Culturel</h1>
            <p>
              Découvrez les créations artistiques de nos étudiants ingénieurs
            </p>
            <Link
              to="/AllProjects"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="cta-button">Explorer les projets</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section Le Module Culturel */}
      <section className="module-culturel-section">
        <div className="module-culturel-content">
          <h2>Le Module Culturel</h2>
          <div className="module-culturel-text">
            <p>
              La culture, c'est un peu l'âme d'un peuple. Elle englobe tout ce
              qui définit une société : ses croyances, ses valeurs, ses
              coutumes, son histoire, son art, sa langue, sa cuisine, et bien
              plus encore.
            </p>
            <p>
              L'art, c'est une expression de la culture. C'est un moyen de
              communiquer, de raconter des histoires, de transmettre des
              émotions et des idées. Il prend des formes infinies : la peinture,
              la sculpture, la musique, la danse, la littérature, le cinéma, et
              bien d'autres moyens artistiques.
            </p>
            <div className="module-culturel-highlight">
              <p>
                Notre programme unique intègre l'art et la culture dans la
                formation d'ingénieur, développant ainsi une vision holistique
                chez nos étudiants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets Étudiants */}
      <section className="students-section">
        <h2>Réalisations des Étudiants</h2>
        <div className={`students-grid ${transitionStage}`}>
          {currentStudents.map((student) => (
            <div className="student-card" key={student.id}>
              <img
                src={student.image}
                alt={student.name}
                className="student-image"
              />
              <div className="student-info">
                <h3>{student.name}</h3>
                <p className="project-title">{student.projectTitle}</p>
                {student.tags && student.tags.length > 0 && (
                  <div className="project-tags">
                    {student.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={student.projet}
                  target="_blank"
                  className="project-link"
                >
                  Voir le projet <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`pagination-button ${
                currentPage === number ? "active" : ""
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </section>

      {/* Section Thèmes */}
      <section className="themes-section">
        <h2>Thèmes Explorés</h2>
        <div className="themes-grid">
          {themes.map((theme, index) => (
            <div className="theme-card" key={index}>
              <div className="theme-icon">{theme.icon}</div>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Citation */}
      <section className="inspiration-quote">
        <blockquote>
          "La culture est l'âme de la technologie, tout comme la technologie est
          le vecteur de la culture moderne. L'ingénieur qui ignore la culture
          est comme un oiseau qui ignorerait l'air dans lequel il vole."
          <footer>— Group C - Geni Informatique</footer>
        </blockquote>
      </section>
    </div>
  );
}
