import React from 'react';

const skills = [
  // Frontend
  { name: 'HTML', emoji: '🌐', category: 'Frontend', level: 95 },
  { name: 'CSS', emoji: '🎨', category: 'Frontend', level: 90 },
  { name: 'JavaScript', emoji: '⚡', category: 'Frontend', level: 85 },
  { name: 'React', emoji: '⚛️', category: 'Frontend', level: 80 },
  { name: 'Tailwind CSS', emoji: '💨', category: 'Frontend', level: 75 },
  
  // Backend
  { name: 'Java', emoji: '☕', category: 'Backend', level: 88 },
  { name: 'Spring Boot', emoji: '🍃', category: 'Backend', level: 82 },
  { name: 'Node.js', emoji: '🟢', category: 'Backend', level: 78 },
  { name: 'Python', emoji: '🐍', category: 'Backend', level: 85 },
  
  // Base de données
  { name: 'MySQL', emoji: '🐬', category: 'Database', level: 80 },
  { name: 'PostgreSQL', emoji: '🐘', category: 'Database', level: 75 },
  { name: 'MongoDB', emoji: '🍃', category: 'Database', level: 70 },
  
  // Outils & DevOps
  { name: 'Git', emoji: '📚', category: 'Tools', level: 90 },
  { name: 'Docker', emoji: '🐳', category: 'Tools', level: 72 },
  { name: 'VS Code', emoji: '💻', category: 'Tools', level: 95 }
];

const Skills = () => {
  // Grouper les compétences par catégorie
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryColors = {
    'Frontend': { primary: '#60a5fa', secondary: '#3b82f6' },
    'Backend': { primary: '#10b981', secondary: '#059669' },
    'Database': { primary: '#f59e0b', secondary: '#d97706' },
    'Tools': { primary: '#8b5cf6', secondary: '#7c3aed' }
  };

  const categoryIcons = {
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Database': '🗄️',
    'Tools': '🛠️'
  };

  // Fonction pour obtenir la couleur selon le niveau
  const getLevelColor = (level) => {
    if (level >= 90) return '#22c55e'; // Vert
    if (level >= 80) return '#3b82f6'; // Bleu
    if (level >= 70) return '#f59e0b'; // Orange
    return '#ef4444'; // Rouge
  };

  // Fonction pour obtenir le texte du niveau
  const getLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Avancé';
    if (level >= 70) return 'Intermédiaire';
    return 'Débutant';
  };

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div className="container mx-auto px-4">
        {/* Hero-style title */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '24px'
          }}>
            🧠 Mes Compétences
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#d1d5db',
            maxWidth: '32rem',
            margin: '0 auto'
          }}>
            Technologies et outils que je maîtrise avec leurs niveaux d'expertise
          </p>
        </div>

        {/* Skills par catégorie */}
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} style={{ marginBottom: '48px' }}>
            {/* Titre de catégorie */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '32px'
            }}>
              <div style={{
                background: `linear-gradient(135deg, ${categoryColors[category].primary}, ${categoryColors[category].secondary})`,
                borderRadius: '12px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '1.2rem' }}>{categoryIcons[category]}</span>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {category}
                </h3>
              </div>
            </div>

            {/* Grille des compétences */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {categorySkills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                    e.currentTarget.style.boxShadow = `0 20px 40px -12px ${categoryColors[category].primary}40`;
                    e.currentTarget.style.borderColor = `${categoryColors[category].primary}80`;
                    
                    const progressBar = e.currentTarget.querySelector('.progress-bar');
                    if (progressBar) {
                      progressBar.style.width = `${skill.level}%`;
                    }

                    const emoji = e.currentTarget.querySelector('.skill-emoji');
                    if (emoji) {
                      emoji.style.transform = 'scale(1.2) rotate(10deg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    
                    const progressBar = e.currentTarget.querySelector('.progress-bar');
                    if (progressBar) {
                      progressBar.style.width = '0%';
                    }

                    const emoji = e.currentTarget.querySelector('.skill-emoji');
                    if (emoji) {
                      emoji.style.transform = 'scale(1) rotate(0deg)';
                    }
                  }}
                >
                  {/* Emoji */}
                  <div style={{
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <span 
                      className="skill-emoji"
                      style={{
                        fontSize: '3rem',
                        display: 'block',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                      }}
                    >
                      {skill.emoji}
                    </span>
                  </div>

                  {/* Nom de la compétence */}
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'white',
                    margin: '0 0 8px 0',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {skill.name}
                  </h4>

                  {/* Niveau et pourcentage */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: getLevelColor(skill.level),
                      fontWeight: '600',
                      background: `${getLevelColor(skill.level)}20`,
                      padding: '4px 8px',
                      borderRadius: '8px',
                      border: `1px solid ${getLevelColor(skill.level)}40`
                    }}>
                      {getLevelText(skill.level)}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: getLevelColor(skill.level)
                    }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Barre de progression */}
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div 
                      className="progress-bar"
                      style={{
                        height: '100%',
                        background: `linear-gradient(to right, ${getLevelColor(skill.level)}, ${getLevelColor(skill.level)}cc)`,
                        borderRadius: '3px',
                        width: '0%',
                        transition: 'width 1s ease',
                        position: 'relative'
                      }}
                    >
                      {/* Effet de brillance */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
                        borderRadius: '3px 3px 0 0'
                      }}></div>
                    </div>
                  </div>

                  {/* Indicateur de niveau visuel */}
                  <div style={{
                    marginTop: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2px'
                  }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span 
                        key={star}
                        style={{
                          color: star <= Math.ceil(skill.level / 20) ? getLevelColor(skill.level) : 'rgba(255,255,255,0.2)',
                          fontSize: '0.8rem'
                        }}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Section statistiques améliorée */}
        
               {/* Call to action */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            borderRadius: '50px',
            padding: '16px 32px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <span style={{ 
              color: '#d1d5db', 
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              💡 Intéressé par mes compétences ?
            </span>
            <a
              href="#projects"
              style={{
                color: '#a78bfa',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#c4b5fd';
                e.target.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#a78bfa';
                e.target.style.transform = 'translateX(0)';
              }}
            >
              Voir mes projets 
              <span style={{ 
                fontSize: '1.2rem',
                transition: 'transform 0.3s ease'
              }}>
                🚀
              </span>
            </a>
          </div>

          {/* Boutons d'action supplémentaires */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '32px',
            flexWrap: 'wrap'
          }}>
            <a
              href="#contact"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              📧 Me contacter
            </a>
            
            <a
              href="#about"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              👨‍💻 En savoir plus
            </a>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs en arrière-plan */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(139, 92, 246, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'rgba(244, 114, 182, 0.05)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 10s ease-in-out infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 2.5rem !important;
          }
          
          h3 {
            font-size: 1rem !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
          }
          
          div[style*="gap: '16px'"] {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          a[style*="padding: '12px 24px'"] {
            width: 200px !important;
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 2rem !important;
          }
          
          div[style*="minmax(220px, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="padding: '24px 20px'"] {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

