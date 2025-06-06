import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        {/* Logo avec animation */}
        <div className="logo-container">
          <h1 className="logo">
            <span className="logo-first">Nejii</span>
            <span className="logo-accent">.</span>
            <span className="logo-last">Ilef</span>
          </h1>
          <p className="logo-subtitle">Développeuse Full-Stack</p>
        </div>

        {/* Navigation Desktop */}
        <div className="nav-links desktop-nav">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="active"
            spy={true}
            offset={-80}
          >
            <span className="nav-text">Accueil</span>
            <span className="nav-underline"></span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="active"
            spy={true}
            offset={-80}
          >
            <span className="nav-text">Projets</span>
            <span className="nav-underline"></span>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="active"
            spy={true}
            offset={-80}
          >
            <span className="nav-text">Compétences</span>
            <span className="nav-underline"></span>
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="active"
            spy={true}
            offset={-80}
          >
            <span className="nav-text">Certifications</span>
            <span className="nav-underline"></span>
          </Link>
  <a  
  href="/ilef.pdf-2.pdf.pdf"  
  download="CV-Ilef-Neji.pdf"  
  className="nav-item cv-link"  
  style={{    
    display: 'flex',    
    alignItems: 'center',    
    gap: '8px',    
    textDecoration: 'none',    
    color: 'inherit',    
    cursor: 'pointer'  
  }}
>  
  <span className="nav-text">Mon CV</span>  
  <svg className="cv-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">    
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>    
    <polyline points="7,10 12,15 17,10"/>    
    <line x1="12" y1="15" x2="12" y2="3"/>  
  </svg>
</a>


          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="nav-item contact-btn"
            activeClass="active"
            spy={true}
            offset={-80}
          >
            <span className="nav-text">Contact</span>
            <span className="contact-glow"></span>
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Menu Mobile */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-content">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              <span className="mobile-nav-icon">🏠</span>
              Accueil
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              <span className="mobile-nav-icon">💼</span>
              Projets
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              <span className="mobile-nav-icon">🧠</span>
              Compétences
            </Link>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              <span className="mobile-nav-icon">🏆</span>
              Certifications
            </Link>
            <Link
              to="cv"
              smooth={true}
              duration={500}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              <span className="mobile-nav-icon">📄</span>
              Mon CV
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="mobile-nav-item contact-mobile"
              onClick={closeMobileMenu}
            >
              <span className="mobile-nav-icon">📧</span>
              Contact
            </Link>
          </div>
        </div>

        {/* Overlay pour mobile */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}
      </nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          padding: 0;
        }

        .header.scrolled {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(25px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          position: relative;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .logo {
          font-size: 1.75rem;
          font-weight: 800;
          margin: 0;
          display: flex;
          align-items: center;
          letter-spacing: -0.02em;
        }

        .logo-first {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-accent {
          color: #f472b6;
          font-size: 2rem;
          margin: 0 2px;
          animation: pulse 2s infinite;
        }

        .logo-last {
          color: #e2e8f0;
        }

        .logo-subtitle {
          font-size: 0.625rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          position: relative;
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 8px 0;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-item:hover {
          color: #a78bfa;
        }

        .nav-item.active {
          color: #a78bfa;
        }

        .nav-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          transition: width 0.3s ease;
          border-radius: 1px;
        }

        .nav-item:hover .nav-underline,
        .nav-item.active .nav-underline {
          width: 100%;
        }

        .cv-link {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 20px;
          padding: 8px 16px;
          transition: all 0.3s ease;
        }

        .cv-link:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-1px);
        }

        .cv-icon {
          transition: transform 0.3s ease;
        }

        .cv-link:hover .cv-icon {
          transform: scale(1.1);
        }

        .contact-btn {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 25px;
          padding: 10px 20px;
          color: white !important;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.4);
        }

        .contact-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 25px;
        }

        .contact-btn:hover .contact-glow {
          opacity: 0.2;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          gap: 4px;
        }

        .mobile-menu-btn:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.5);
        }

        .hamburger-line {
          width: 20px;
          height: 2px;
          background: #e2e8f0;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .mobile-menu-btn.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-btn.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-nav {
          position: fixed;
          top: 80px;
          right: -100%;
          width: 280px;
          height: calc(100vh - 80px);
          background: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(25px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          transition: right 0.3s ease;
          z-index: 999;
        }

        .mobile-nav.active {
          right: 0;
        }

        .mobile-nav-content {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-nav-item {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          padding: 16px 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .mobile-nav-item:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.3);
          color: #a78bfa;
          transform: translateX(4px);
        }

        .mobile-nav-icon {
          font-size: 1.125rem;
          width: 24px;
          text-align: center;
        }

        .contact-mobile {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white !important;
          margin-top: 16px;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

               .contact-mobile:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateX(4px) scale(1.02);
          box-shadow: 0 8px 25px -5px rgba(139, 92, 246, 0.4);
        }

        .mobile-overlay {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 998;
          animation: fadeIn 0.3s ease;
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .desktop-nav {
            gap: 24px;
          }

          .nav-item {
            font-size: 0.8125rem;
          }

          .logo {
            font-size: 1.5rem;
          }

          .logo-accent {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 16px;
            height: 70px;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .logo {
            font-size: 1.375rem;
          }

          .logo-accent {
            font-size: 1.625rem;
          }

          .logo-subtitle {
            font-size: 0.5rem;
          }

          .mobile-nav {
            top: 70px;
            height: calc(100vh - 70px);
            width: 100%;
            right: -100%;
          }

          .mobile-nav-content {
            padding: 24px 20px;
          }

          .mobile-nav-item {
            font-size: 0.9375rem;
            padding: 14px 16px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 12px;
            height: 65px;
          }

          .logo {
            font-size: 1.25rem;
          }

          .logo-accent {
            font-size: 1.5rem;
          }

          .logo-subtitle {
            font-size: 0.4375rem;
          }

          .mobile-menu-btn {
            width: 36px;
            height: 36px;
          }

          .hamburger-line {
            width: 18px;
          }

          .mobile-nav {
            top: 65px;
            height: calc(100vh - 65px);
          }

          .mobile-nav-content {
            padding: 20px 16px;
            gap: 6px;
          }

          .mobile-nav-item {
            font-size: 0.875rem;
            padding: 12px 14px;
            gap: 10px;
          }

          .mobile-nav-icon {
            font-size: 1rem;
            width: 20px;
          }
        }

        @media (max-width: 320px) {
          .nav-container {
            padding: 0 8px;
            height: 60px;
          }

          .logo {
            font-size: 1.125rem;
          }

          .logo-accent {
            font-size: 1.375rem;
          }

          .logo-subtitle {
            display: none;
          }

          .mobile-menu-btn {
            width: 32px;
            height: 32px;
          }

          .hamburger-line {
            width: 16px;
            height: 1.5px;
          }

          .mobile-nav {
            top: 60px;
            height: calc(100vh - 60px);
          }

          .mobile-nav-content {
            padding: 16px 12px;
          }

          .mobile-nav-item {
            font-size: 0.8125rem;
            padding: 10px 12px;
          }
        }

        /* Améliorations pour l'accessibilité */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Mode sombre amélioré */
        @media (prefers-color-scheme: dark) {
          .header {
            background: rgba(15, 23, 42, 0.9);
          }

          .header.scrolled {
            background: rgba(15, 23, 42, 0.98);
          }
        }

        /* Effets de focus pour l'accessibilité */
        .nav-item:focus,
        .mobile-nav-item:focus,
        .mobile-menu-btn:focus {
          outline: 2px solid #a78bfa;
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Amélioration des performances */
        .header {
          will-change: background, backdrop-filter;
        }

        .mobile-nav {
          will-change: right;
        }

        .nav-underline {
          will-change: width;
        }

        /* États de chargement */
        .nav-item.loading {
          opacity: 0.6;
          pointer-events: none;
        }

        /* Indicateur de section active amélioré */
        .nav-item.active::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          background: #a78bfa;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        /* Effet de survol amélioré pour mobile */
        @media (hover: hover) {
          .mobile-nav-item:hover {
            background: rgba(139, 92, 246, 0.15);
          }
        }

        /* Optimisation pour les écrans haute résolution */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .hamburger-line {
            height: 1px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
