import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Fermer le menu quand la route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Gestion du clic externe
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="logo-img"
            loading="lazy"
          />
        </Link>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {[
            { path: "/", name: "Accueil" },
            { path: "/Remerciments", name: "Remerciements" },
            { path: "/Apropos", name: "À propos" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              currentPath={location.pathname}
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </nav>
    </header>
  );
}

// Composant NavLink séparé pour la réutilisation
function NavLink({ to, currentPath, onClick, children }) {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <span className="active-indicator" aria-hidden="true"></span>
      )}
    </Link>
  );
}
