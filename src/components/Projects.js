import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      id: 1,
      title: "Procès-verbaux Électroniques",
      category: "Full Stack",
      description: "Application web complète pour la digitalisation des procès-verbaux d'entreprise avec signatures électroniques et archivage sécurisé.",
      technologies: ["React", "Nodejs", "MongoDB", "JWT"],
      images: [
        "images/login.jpg",
        "images/p1.png", 
        "images/p2.gif",
        "images/p3.gif",
        "images/p4.gif",
        "images/p8.gif",
      
      ],
      demo: "#",
      status: "Production",
      year: "2025"
    },
    {
      id: 2,
      title: "EPI CLUB",
      category: "Full Stack",
      description: "Plateforme de gestion de Clubs avec interface drag & drop et collaboration en temps réel.",
      technologies: ["React", "SpringBoot", "JWT", "MySQL"],
      images: [
        "images/log2.png",
        "images/z2.png",
        "images/z3.png",
        "images/z4.png",
         "images/z5.png",
        "images/z8.png",
      ],
      demo: "#",
      status: "Développement",
      year: "2025"
    },
    {
      id: 3,
      title: "COVID-19",
      category: "Data Science",
      description: "Présenter les données sous forme de graphiques dynamiques (courbes, cartes, histogrammes, heatmaps).",
      technologies: ["Python"],
      images: [
        "images/a.png",
        "images/a2.png",
        "images/a3.png",
        "images/a4.png",
        "images/a5.png",
         "images/a6.png",
         "images/a7.png",
        "images/a8.png",
      ],
      demo: "#",
      status: "Production",
      year: "2025"
    },
    {
      id: 4,
      title: " GuardPet – Application Mobile de Services pour Animaux de Compagnie",
      category: "UI/UX",
      description: "Design d'application mobile pour Animaux  avec expérience utilisateur optimisée et interface moderne.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      images: [
        "images/u.png",
        "images/u1.png",
       "images/u2.png",
       
      ],
      demo: "#",
      status: "Production",
      year: "2024"
    },
    {
      id: 5,
      title: "Formation Web",
      category: "Full Stack",
      description: "Ce projet s'inscrit dans le cadre d'une formation en développement web et consiste à concevoir une interface utilisateur moderne et responsive pour un tableau de bord bancaire.",
      technologies: ["HTML", "CSS", "PHP", "MYSQL"],
      images: [
       "images/f.png",
       "images/f1.png",
        "images/f2.png",
        "images/f3.png",
         "images/f4.png",
          "images/f5.png",
           "images/f6.png",
            "images/f7.png",
             "images/f8.png",
              "images/f9.png",
              "images/f18.png",
      ],
      demo: "#",
      status: "Production",
      year: "2023"
    },
    {
      id: 6,
      title: "Agence de voiture",
      category: "Frontend",
      description: "Le projet AutoSwift est une plateforme web moderne conçue pour une agence de location de voitures. Elle permet aux utilisateurs de consulter, réserver et gérer des véhicules en ligne de manière simple, rapide et sécurisée.",
      technologies: ["HTML", "CSS" ],
      images: [
       "images/v.png",
       "images/v1.png",
        "images/v2.png",
        "images/v3.png",
         "images/v4.png",
          
      ],
      demo: "#",
      status: "Production",
      year: "2022"
    }
  ];

  const categories = ['Tous', 'Full Stack', 'Frontend', 'Data Science', 'UI/UX'];
  
  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotation des images
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        projects.forEach(project => {
          if (project.images.length > 1) {
            newIndex[project.id] = ((prev[project.id] || 0) + 1) % project.images.length;
          }
        });
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
    position: 'relative',
    overflow: 'hidden',
    padding: '120px 0'
  };

  const maxWidthStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '80px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '16px',
    letterSpacing: '-0.02em'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#e2e8f0',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontWeight: '300'
  };

  const dividerStyle = {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
    margin: '24px auto',
    borderRadius: '2px'
  };

  const filterContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease 0.2s'
  };

  const filterNavStyle = {
    display: 'flex',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderRadius: '20px',
    padding: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    gap: '4px',
    flexWrap: 'wrap'
  };

  const filterButtonStyle = (isActive) => ({
    padding: '12px 24px',
    borderRadius: '16px',
    border: 'none',
    background: isActive 
      ? 'linear-gradient(135deg, #60a5fa, #a78bfa)' 
      : 'transparent',
    color: isActive ? 'white' : '#e2e8f0',
    fontWeight: isActive ? '600' : '500',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isActive ? 'scale(1.02)' : 'scale(1)',
    boxShadow: isActive ? '0 4px 12px rgba(96, 165, 250, 0.3)' : 'none'
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '32px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s ease 0.4s'
  };

  const projectCardStyle = (isHovered) => ({
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: isHovered 
      ? '0 25px 50px -12px rgba(139, 92, 246, 0.25)' 
      : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  });

  const imageContainerStyle = {
    position: 'relative',
    height: '280px',
    overflow: 'hidden'
  };

  const imageStyle = (isHovered) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.6s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  });

  const statusBadgeStyle = (status) => ({
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    background: status === 'Production' 
      ? 'rgba(34, 197, 94, 0.9)' 
      : 'rgba(59, 130, 246, 0.9)',
    color: 'white',
    backdropFilter: 'blur(8px)'
  });

  const yearBadgeStyle = {
    position: 'absolute',
    top: '16px',
    left: '16px',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    backdropFilter: 'blur(8px)'
  };

  const imageCounterStyle = {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    backdropFilter: 'blur(8px)'
  };

  const contentStyle = {
    padding: '32px',
    color: 'white'
  };

  const categoryStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#a78bfa',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '8px'
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '12px',
    lineHeight: '1.3'
  };

  const descriptionStyle = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '24px',
    fontSize: '0.95rem'
  };

  const techSectionStyle = {
    marginBottom: '32px'
  };

  const techLabelStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const techGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  };

  const techBadgeStyle = {
    padding: '6px 12px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#e2e8f0',
    fontSize: '0.8rem',
    fontWeight: '500',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)'
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px 20px',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '0.9rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const statsContainerStyle = {
    marginTop: '100px',
    padding: '60px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease 0.6s'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    textAlign: 'center'
  };

  const statItemStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    padding: '32px 24px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const statNumberStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '8px'
  };

  const statLabelStyle = {
    color: '#cbd5e1',
    fontWeight: '500',
    fontSize: '1rem'
  };

    // Modal styles
  const modalOverlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(8px)',
    padding: '20px'
  };

  const modalContentStyle = {
    background: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '900px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative'
  };

  const modalHeaderStyle = {
    padding: '24px 32px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const modalTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    margin: 0
  };

  const closeButtonStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const modalBodyStyle = {
    padding: '32px'
  };

  const imageGalleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    marginBottom: '24px'
  };

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getCurrentImage = (project) => {
    const index = currentImageIndex[project.id] || 0;
    return project.images[index];
  };

  return (
    <section id="projects" style={containerStyle}>
      <div style={maxWidthStyle}>
        
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Mes Projets</h2>
          <div style={dividerStyle}></div>
          <p style={subtitleStyle}>
            Découvrez mes réalisations techniques et créatives, de la conception au déploiement
          </p>
        </div>

        {/* Filtres */}
        <div style={filterContainerStyle}>
          <nav style={filterNavStyle}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={filterButtonStyle(activeFilter === category)}
                onMouseEnter={(e) => {
                  if (activeFilter !== category) {
                    e.target.style.background = 'rgba(96, 165, 250, 0.2)';
                    e.target.style.color = '#60a5fa';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#e2e8f0';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Grille des projets */}
        <div style={gridStyle}>
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id}
              style={projectCardStyle(hoveredProject === project.id)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleImageClick(project)}
            >
              
              {/* Image */}
              <div style={imageContainerStyle}>
                <img
                  src={getCurrentImage(project)}
                  alt={project.title}
                  style={imageStyle(hoveredProject === project.id)}
                />
                <div style={statusBadgeStyle(project.status)}>
                  {project.status}
                </div>
                <div style={yearBadgeStyle}>
                  {project.year}
                </div>
                {project.images.length > 1 && (
                  <div style={imageCounterStyle}>
                    {((currentImageIndex[project.id] || 0) + 1)} / {project.images.length}
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div style={contentStyle}>
                
                {/* En-tête */}
                <div style={categoryStyle}>{project.category}</div>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={descriptionStyle}>{project.description}</p>

                {/* Technologies */}
                <div style={techSectionStyle}>
                  <div style={techLabelStyle}>
                    <span>⚡</span>
                    Technologies utilisées
                  </div>
                  <div style={techGridStyle}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={techBadgeStyle}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
              </div>
            </article>
          ))}
        </div>

       

      </div>

      {/* Modal pour galerie d'images */}
      {selectedProject && (
        <div 
          style={modalOverlayStyle}
          onClick={closeModal}
        >
          <div 
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={modalHeaderStyle}>
              <h3 style={modalTitleStyle}>{selectedProject.title}</h3>
              <button 
                style={closeButtonStyle}
                onClick={closeModal}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={modalBodyStyle}>
              <div style={imageGalleryStyle}>
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} - Image ${index + 1}`}
                    style={galleryImageStyle}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.borderColor = 'rgba(96, 165, 250, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                  />
                ))}
              </div>
              
              <div style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                <p>{selectedProject.description}</p>
                <div style={{ marginTop: '16px' }}>
                  <strong style={{ color: '#e2e8f0' }}>Technologies: </strong>
                  {selectedProject.technologies.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Éléments décoratifs de fond */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Particules flottantes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '59, 130, 246'}, 0.1)`,
              borderRadius: '50%',
              filter: 'blur(30px)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Grille de fond */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5
        }}></div>
      </div>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(180deg);
            }
          }

          /* Responsive Design */
          @media (max-width: 1200px) {
            .projects-grid {
              grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;
              gap: 24px !important;
            }
          }

          @media (max-width: 768px) {
            .projects-container {
              padding: 80px 0 !important;
            }
            
            .projects-max-width {
              padding: 0 16px !important;
            }
            
            .projects-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            
            .filter-nav {
              flex-wrap: wrap !important;
              gap: 8px !important;
              justify-content: center !important;
            }
            
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
            }

            .modal-content {
              margin: 10px !important;
              max-height: 95vh !important;
            }

            .image-gallery {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 480px) {
            .project-content {
              padding: 24px !important;
            }
            
            .tech-grid {
              gap: 6px !important;
            }
            
            .tech-badge {
              font-size: 0.75rem !important;
              padding: 4px 8px !important;
            }

            .modal-body {
              padding: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
