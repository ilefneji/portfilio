import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [filter, setFilter] = useState('all');

  const certifications = [
    {
      id: 1,
      title: "CCNA1/CCNA2",
      subtitle: "Réseaux informatiques et protocoles",
      provider: "Cisco",
      date: "2023",
      level: "Associate",
      category: "network",
      skills: ["Réseaux", "TCP/IP", "Routage", "Switching", "VLAN"],
      description: "Certification Cisco couvrant les fondamentaux des réseaux informatiques et des protocoles de communication",
      credentialId: "CISCO-CCNA-123456",
      verifyLink: "https://cisco.com/certification",
      status: "active",
      expiryDate: "2026"
    },
    {
      id: 2,
      title: "Microsoft Azure Fundamentals",
      subtitle: "Services cloud Microsoft Azure",
      provider: "Microsoft",
      date: "2023",
      level: "Fundamentals",
      category: "cloud",
      skills: ["Azure", "Cloud Computing", "Virtual Machines", "Storage", "Networking"],
      description: "Certification Microsoft Azure validant les connaissances fondamentales des services cloud Azure",
      credentialId: "AZ-900-789012",
      verifyLink: "https://docs.microsoft.com/certifications",
      status: "active",
      expiryDate: "2026"
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      subtitle: "Services cloud Amazon Web Services",
      provider: "Amazon Web Services",
      date: "2024",
      level: "Foundational",
      category: "cloud",
      skills: ["AWS", "EC2", "S3", "Lambda", "Cloud Architecture"],
      description: "Certification AWS validant les compétences fondamentales sur les services cloud Amazon",
      credentialId: "AWS-CP-345678",
      verifyLink: "https://aws.amazon.com/certification",
      status: "active",
      expiryDate: "2027"
    },
    {
      id: 4,
      title: "Scrum Master Certified",
      subtitle: "Méthodologie Agile et gestion de projet",
      provider: "Scrum Alliance",
      date: "2022",
      level: "Professional",
      category: "management",
      skills: ["Scrum", "Agile", "Project Management", "Team Leadership", "Sprint Planning"],
      description: "Certification Scrum Master pour la gestion de projets agiles et le leadership d'équipe",
      credentialId: "CSM-901234",
      verifyLink: "https://scrumalliance.org/certification",
      status: "active",
      expiryDate: "2025"
    },
    {
      id: 5,
      title: "Python Programming",
      subtitle: "Intelligence Artificielle et Data Science",
      provider: "Python Institute",
      date: "2023",
      level: "Associate",
      category: "programming",
      skills: ["Python", "Machine Learning", "Data Analysis", "NumPy", "Pandas"],
      description: "Certification Python couvrant la programmation avancée et les applications en IA",
      credentialId: "PCAP-567890",
      verifyLink: "https://pythoninstitute.org/certification",
      status: "active",
      expiryDate: "2026"
    },
    {
      id: 6,
      title: "Google Analytics",
      subtitle: "Analyse de données web et marketing digital",
      provider: "Google",
      date: "2022",
      level: "Professional",
      category: "analytics",
      skills: ["Google Analytics", "Data Analysis", "Web Analytics", "Reporting", "KPI"],
      description: "Certification Google Analytics pour l'analyse de données web et le marketing digital",
      credentialId: "GA-IQ-123789",
      verifyLink: "https://skillshop.exceedlms.com/student/catalog",
      status: "active",
      expiryDate: "2025"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes', icon: '🏆', count: certifications.length },
    { id: 'cloud', name: 'Cloud', icon: '☁️', count: certifications.filter(c => c.category === 'cloud').length },
    { id: 'network', name: 'Réseaux', icon: '🌐', count: certifications.filter(c => c.category === 'network').length },
    { id: 'programming', name: 'Programmation', icon: '💻', count: certifications.filter(c => c.category === 'programming').length },
    { id: 'management', name: 'Management', icon: '👥', count: certifications.filter(c => c.category === 'management').length },
    { id: 'analytics', name: 'Analytics', icon: '📊', count: certifications.filter(c => c.category === 'analytics').length }
  ];

  const filteredCertifications = filter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(filteredCertifications.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, [filter]);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional': return 'from-purple-500 to-pink-500';
      case 'Associate': return 'from-blue-500 to-cyan-500';
      case 'Fundamentals': return 'from-green-500 to-emerald-500';
      case 'Foundational': return 'from-orange-500 to-yellow-500';
      case 'Expert': return 'from-red-500 to-rose-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case 'Professional': return '👑';
      case 'Associate': return '🎯';
      case 'Fundamentals': return '📚';
      case 'Foundational': return '🏗️';
      case 'Expert': return '🚀';
      default: return '📜';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'cloud': return '☁️';
      case 'network': return '🌐';
      case 'programming': return '💻';
      case 'management': return '👥';
      case 'analytics': return '📊';
      default: return '🏆';
    }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="header-content">
          <div className="section-badge">
            <span className="badge-icon">🏆</span>
            Mes Certifications
          </div>
          
          <h2 className="section-title">
            Certifications & <span className="title-highlight">Qualifications</span>
          </h2>
          
          <p className="section-description">
            Mes certifications professionnelles validant mes compétences techniques
            et ma maîtrise des technologies modernes du développement web.
          </p>

          {/* Stats rapides */}
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{certifications.length}</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{new Set(certifications.map(c => c.provider)).size}</div>
              <div className="stat-label">Organismes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{certifications.filter(c => c.status === 'active').length}</div>
              <div className="stat-label">Actives</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{new Set(certifications.flatMap(c => c.skills)).size}</div>
              <div className="stat-label">Compétences</div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="filters-container">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Grille des certifications */}
        <div className="certifications-grid">
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`certification-card ${visibleItems.includes(index) ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              {/* Header de la carte */}
              <div className="card-header">
                <div className="cert-display">
                  <div className="cert-icon">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div className="cert-year-badge">
                    {cert.date}
                  </div>
                </div>
                
                <div className={`level-badge bg-gradient-to-r ${getLevelColor(cert.level)}`}>
                  <span className="level-icon">{getLevelIcon(cert.level)}</span>
                  <span className="level-text">{cert.level}</span>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="card-content">
                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-subtitle">{cert.subtitle}</h4>
                <p className="cert-provider">{cert.provider}</p>
                <p className="cert-description">{cert.description}</p>

                {/* Compétences */}
                <div className="skills-container">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="skill-tag more">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Informations de certification */}
                <div className="cert-info">
                  <div className="info-item">
                    <span className="info-label">ID:</span>
                    <span className="info-value">{cert.credentialId}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Expire:</span>
                    <span className="info-value">{cert.expiryDate}</span>
                  </div>
                </div>
              </div>

              {/* Footer de la carte */}
              <div className="card-footer">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-btn"
                >
                  <span className="verify-icon">🔗</span>
                  Vérifier
                </a>
                
                <div className="cert-status">
                  <span className={`status-indicator ${cert.status}`}></span>
                  <span className="status-text">
                    {cert.status === 'active' ? 'Active' : 'Expirée'}
                  </span>
                </div>
              </div>

              {/* Effet de brillance */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Intéressé par mes compétences ?</h3>
            <p className="cta-description">
              Découvrez comment ces certifications peuvent bénéficier à vos projets
            </p>
            <div className="cta-buttons">
              <a href="Contact.js" className="cta-btn primary">
                <span>💬</span> Discutons ensemble
              </a>
              <a href="/cv.pdf" download className="cta-btn secondary">
                <span>📄</span> Télécharger CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .certifications-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          padding: 120px 0 80px 0;
          position: relative;
          overflow: hidden;
        }

        .certifications-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        .header-content {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 50px;
          padding: 8px 20px;
          margin-bottom: 24px;
          font-size: 0.875rem;
          color: #a78bfa;
          font-weight: 600;
        }

        .badge-icon {
          font-size: 1.125rem;
          animation: bounce 2s infinite;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #e2e8f0;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .title-highlight {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto 40px auto;
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 24px;
          max-width: 600px;
          margin: 0 auto;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-2px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .filters-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 60px;
          padding: 0 20px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 12px 20px;
          color: #e2e8f0;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .filter-btn:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-1px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: rgba(139, 92, 246, 0.5);
          color: white;
          box-shadow: 0 8px 25px -5px rgba(139, 92, 246, 0.4);
        }

        .filter-icon {
          font-size: 1rem;
        }

        .filter-count {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 2px 8px;
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }

        .filter-btn.active .filter-count {
          background: rgba(255, 255, 255, 0.3);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .certification-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
          position: relative;
        }

        .certification-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .certification-card:hover {
          transform: translateY(-8px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.25);
        }

        .card-header {
          position: relative;
          height: 180px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cert-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        .cert-icon {
          font-size: 4rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          animation: float 3s ease-in-out infinite;
        }

        .cert-year-badge {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 8px 16px;
          color: white;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .level-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          border-radius: 20px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.3);
          z-index: 3;
        }

        .level-icon {
          font-size: 0.875rem;
        }

        .card-content {
          padding: 24px;
        }

        .cert-title {
          font-size: 1.375rem;
          font-weight: 800;
          color: #e2e8f0;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .cert-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .cert-provider {
          font-size: 0.875rem;
          color: #a78bfa;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .cert-description {
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .skill-tag {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 16px;
          padding: 4px 12px;
          font-size: 0.75rem;
          color: #a78bfa;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(139, 92, 246, 0.2);
          transform: scale(1.05);
        }

        .skill-tag.more {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: #60a5fa;
        }

        .cert-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 0.875rem;
          color: #e2e8f0;
          font-weight: 600;
          font-family: 'Courier New', monospace;
        }

        .card-footer {
          padding: 0 24px 24px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .verify-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .verify-btn:hover {
          background: linear-gradient(135deg, #047857, #059669);
          transform: translateY(-1px);
          box-shadow: 0 8px 25px -5px rgba(16, 185, 129, 0.4);
        }

        .verify-icon {
          font-size: 0.875rem;
        }

        .cert-status {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-indicator.active {
          background: #10b981;
        }

        .status-indicator.expired {
          background: #ef4444;
        }

        .status-text {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s ease;
          pointer-events: none;
        }

        .certification-card:hover .card-shine {
          left: 100%;
        }

        .cta-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05));
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 10;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 16px;
        }

        .cta-description {
          font-size: 1.125rem;
          color: #94a3b8;
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .cta-btn.primary:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.4);
        }

        .cta-btn.secondary {
          background: transparent;
          color: #e2e8f0;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .cta-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

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

               /* Responsive Design */
        @media (max-width: 1024px) {
          .certifications-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
          }
          .section-title {
            font-size: clamp(2rem, 6vw, 3rem);
          }
        }

        @media (max-width: 768px) {
          .certifications-section {
            padding: 100px 0 60px 0;
          }
          .container {
            padding: 0 16px;
          }
          .header-content {
            margin-bottom: 40px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .filters-container {
            gap: 8px;
            margin-bottom: 40px;
          }
          .filter-btn {
            padding: 10px 16px;
            font-size: 0.8125rem;
          }
          .filter-text {
            display: none;
          }
          .filter-icon {
            font-size: 1.125rem;
          }
          .certifications-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 60px;
          }
          .certification-card {
            margin: 0 auto;
            max-width: 400px;
          }
          .card-header {
            height: 160px;
          }
          .cert-icon {
            font-size: 3rem;
          }
          .card-content {
            padding: 20px;
          }
          .cert-title {
            font-size: 1.125rem;
          }
          .cert-subtitle {
            font-size: 0.9375rem;
          }
          .cert-info {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .card-footer {
            padding: 0 20px 20px 20px;
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          .verify-btn {
            justify-content: center;
          }
          .cert-status {
            justify-content: center;
          }
          .cta-section {
            padding: 32px 24px;
          }
          .cta-title {
            font-size: 1.5rem;
          }
          .cta-description {
            font-size: 1rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .cta-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .certifications-section {
            padding: 80px 0 40px 0;
          }
          .container {
            padding: 0 12px;
          }
          .section-title {
            font-size: clamp(1.75rem, 8vw, 2.5rem);
          }
          .section-description {
            font-size: 1rem;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .stat-item {
            padding: 16px 12px;
          }
          .stat-number {
            font-size: 1.5rem;
          }
          .stat-label {
            font-size: 0.75rem;
          }
          .filters-container {
            gap: 6px;
            padding: 0 8px;
          }
          .filter-btn {
            padding: 8px 12px;
            min-width: 44px;
          }
          .filter-count {
            font-size: 0.6875rem;
            padding: 1px 6px;
          }
          .certifications-grid {
            gap: 16px;
          }
          .certification-card {
            max-width: 100%;
          }
          .card-header {
            height: 140px;
          }
          .cert-icon {
            font-size: 2.5rem;
          }
          .level-badge {
            top: 12px;
            right: 12px;
            padding: 6px 12px;
            font-size: 0.6875rem;
          }
          .cert-year-badge {
            padding: 6px 12px;
            font-size: 0.75rem;
          }
          .card-content {
            padding: 16px;
          }
          .cert-title {
            font-size: 1rem;
          }
          .cert-subtitle {
            font-size: 0.875rem;
          }
          .cert-provider {
            font-size: 0.8125rem;
          }
          .cert-description {
            font-size: 0.8125rem;
          }
          .skills-container {
            gap: 6px;
          }
          .skill-tag {
            padding: 3px 8px;
            font-size: 0.6875rem;
          }
          .info-label {
            font-size: 0.6875rem;
          }
          .info-value {
            font-size: 0.8125rem;
          }
          .card-footer {
            padding: 0 16px 16px 16px;
          }
          .verify-btn {
            padding: 6px 12px;
            font-size: 0.8125rem;
          }
          .status-text {
            font-size: 0.6875rem;
          }
          .cta-section {
            padding: 24px 16px;
          }
          .cta-title {
            font-size: 1.25rem;
          }
          .cta-description {
            font-size: 0.875rem;
          }
          .cta-btn {
            padding: 12px 24px;
            font-size: 0.875rem;
          }
        }

        @media (max-width: 320px) {
          .container {
            padding: 0 8px;
          }
          .section-title {
            font-size: 1.5rem;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .stat-item {
            padding: 12px 8px;
          }
          .stat-number {
            font-size: 1.25rem;
          }
          .filters-container {
            gap: 4px;
          }
          .filter-btn {
            padding: 6px 8px;
            min-width: 40px;
          }
          .card-header {
            height: 120px;
          }
          .cert-icon {
            font-size: 2rem;
          }
          .level-badge {
            padding: 4px 8px;
            font-size: 0.625rem;
          }
          .card-content {
            padding: 12px;
          }
          .cert-title {
            font-size: 0.9375rem;
          }
          .cert-subtitle {
            font-size: 0.8125rem;
          }
          .cta-section {
            padding: 20px 12px;
          }
          .cta-title {
            font-size: 1.125rem;
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

        /* Focus states pour l'accessibilité */
        .filter-btn:focus,
        .verify-btn:focus,
        .cta-btn:focus {
          outline: 2px solid #a78bfa;
          outline-offset: 2px;
        }

        /* Amélioration des contrastes */
        @media (prefers-contrast: high) {
          .certification-card {
            border-color: rgba(255, 255, 255, 0.3);
          }
          .cert-title {
            color: #ffffff;
          }
          .cert-description {
            color: #cbd5e1;
          }
        }

        /* Mode sombre amélioré */
        @media (prefers-color-scheme: dark) {
          .certifications-section {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          }
        }

        /* Optimisations de performance */
        .certification-card {
          will-change: transform;
        }

        .card-shine {
          will-change: left;
        }

        /* États de chargement */
        .certification-card.loading {
          opacity: 0.6;
          pointer-events: none;
        }

        .certification-card.loading::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Effets de hover améliorés pour desktop */
        @media (hover: hover) {
          .certification-card:hover .cert-icon {
            transform: scale(1.1) rotate(10deg);
            transition: transform 0.3s ease;
          }
          .certification-card:hover .level-badge {
            transform: scale(1.05);
          }
          .certification-card:hover .cert-year-badge {
            transform: scale(1.05);
          }
        }

        /* Support pour les écrans haute résolution */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .cert-icon {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }

        /* Amélioration de la lisibilité */
        .cert-title,
        .cert-subtitle,
        .cert-provider {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Effet de gradient pour les bordures */
        .certification-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3));
          border-radius: 24px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .certification-card:hover::before {
          opacity: 1;
        }

        /* Amélioration des transitions */
        .skill-tag,
        .verify-btn,
        .filter-btn,
        .cta-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Effet de parallaxe subtil */
        .card-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05));
          transform: translateZ(0);
          transition: transform 0.3s ease;
        }

        .certification-card:hover .card-header::before {
          transform: translateZ(0) scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Certifications;


        
