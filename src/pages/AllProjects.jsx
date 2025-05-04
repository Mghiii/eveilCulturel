// pages/AllProjects.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/allprjts.css";

const AllProjects = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(8);

  useEffect(() => {
    const results = students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(results);
    setCurrentPage(1);
  }, [searchTerm, students]);

  // Pagination calculations
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const paginatedProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="all-projects-container">
      <div className="header-section">
        <h1 className="all-projects-title">Tous les Projets Étudiants</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Rechercher par nom d'étudiant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="projects-grid">
        {paginatedProjects.map((student) => (
          <article key={student.id} className="project-card">
            <div className="image-container">
              <img
                src={student.image}
                alt={student.projectTitle}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <div className="text-content">
                <h3 className="student-name">{student.name}</h3>
                <p className="project-title">{student.projectTitle}</p>
                <div className="tags-container">
                  {student.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {student.projet && (
                <a
                  href={student.projet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Voir le projet →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length > projectsPerPage && (
        <div className="pagination-wrapper">
          <div className="pagination-container">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button prev-next"
            >
              <i class="bi bi-caret-left-fill"></i>
            </button>

            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`page-button ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-button prev-next"
            >
              <i class="bi bi-caret-right-fill"></i>
            </button>
          </div>
          <div className="page-status">
            Page {currentPage} sur {totalPages}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
