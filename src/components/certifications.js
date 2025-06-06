import React, { useState, useEffect, useMemo } from 'react';

const Certifications = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Déplacer les certifications dans useMemo pour éviter la recréation
  const certifications = useMemo(() => [
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
      verifyLink: "#",
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
      verifyLink: "#",
      status: "active",
      expiryDate: "2026"
    },
    {
      id: 3,
      title: "Python Programming",
      subtitle: "Intelligence Artificielle et Data Science",
      provider: "Python Institute",
      date: "2023",
      level: "Associate",
      category: "programming",
      skills: ["Python", "Machine Learning", "Data Analysis", "NumPy", "Pandas"],
      description: "Certification Python couvrant la programmation avancée et les applications en IA",
      credentialId: "PCAP-567890",
      verifyLink: "#",
      status: "active",
      expiryDate: "2026"
    }
  ], []); // Dépendances vides car les données sont statiques

  // Calculer les catégories basées sur les certifications
  const categories = useMemo(() => [
    { id: 'all', name: 'Toutes', icon: '🏆', count: certifications.length },
    { id: 'cloud', name: 'Cloud', icon: '☁️', count: certifications.filter(c => c.category === 'cloud').length },
    { id: 'network', name: 'Réseaux', icon: '🌐', count: certifications.filter(c => c.category === 'network').length },
    { id: 'programming', name: 'Programmation', icon: '💻', count: certifications.filter(c => c.category === 'programming').length }
  ], [certifications]);

  // Calculer les certifications filtrées
  const filteredCertifications = useMemo(() => {
    return filter === 'all'
      ? certifications
      : certifications.filter(cert => cert.category === filter);
  }, [filter, certifications]);

  // useEffect avec les bonnes dépendances
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(filteredCertifications.map((_, index) => index));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [filteredCertifications]);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional': return 'linear-gradient(135deg, #8b5cf6, #ec4899)';
      case 'Associate': return 'linear-gradient(135deg, #3b82f6, #06b6d4)';
      case 'Fundamentals': return 'linear-gradient(135deg, #10b981, #34d399)';
      default: return 'linear-gradient(135deg, #6b7280, #9ca3af)';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'cloud': return '☁️';
      case 'network': return '🌐';
      case 'programming': return '💻';
      default: return '🏆';
    }
  };

  return (
    <section id="certifications" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      padding: '120px 0 80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '50px',
            padding: '8px 20px',
            marginBottom: '24px',
            fontSize: '0.875rem',
            color: '#a78bfa',
            fontWeight: '600'
          }}>
            <span style={{ fontSize: '1.125rem' }}>🏆</span>
            Mes Certifications
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            color: '#e2e8f0',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Certifications & <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Qualifications</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            lineHeight: '1.6'
          }}>
            Mes certifications professionnelles validant mes compétences techniques
            et ma maîtrise des technologies modernes du développement web.
          </p>
          
          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '24px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px'
              }}>{certifications.length}</div>
              <div style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>
                Certifications
              </div>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px'
              }}>{new Set(certifications.map(c => c.provider)).size}</div>
              <div style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>
                Organismes
              </div>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px'
              }}>{certifications.filter(c => c.status === 'active').length}</div>
              <div style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>
                Actives
              </div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '60px',
          padding: '0 20px'
        }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: filter === category.id 
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                  : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                padding: '12px 20px',
                color: filter === category.id ? 'white' : '#e2e8f0',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '2px 8px',
                fontSize: '0.75rem',
                fontWeight: '600',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grille des certifications */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(139, 92, 246, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Header de la carte */}
              <div style={{
                position: 'relative',
                height: '180px',
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  position: 'relative',
                  zIndex: 2
                }}>
                                    <div style={{
                    fontSize: '4rem',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {cert.date}
                  </div>
                </div>
                
                {/* Badge de niveau */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: getLevelColor(cert.level),
                  borderRadius: '20px',
                  padding: '8px 16px',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}>
                  {cert.level}
                </div>

                {/* Effet de brillance */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  animation: 'shine 3s infinite',
                  pointerEvents: 'none'
                }}></div>
              </div>

              {/* Contenu */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '800',
                  color: '#e2e8f0',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  {cert.title}
                </h3>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#60a5fa',
                  marginBottom: '8px',
                  lineHeight: '1.4'
                }}>
                  {cert.subtitle}
                </h4>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#a78bfa',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  {cert.provider}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  lineHeight: '1.5',
                  marginBottom: '20px'
                }}>
                  {cert.description}
                </p>

                {/* Compétences */}
                <div style={{
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    fontWeight: '600',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Compétences
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        style={{
                          background: 'rgba(139, 92, 246, 0.1)',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          borderRadius: '16px',
                          padding: '4px 12px',
                          fontSize: '0.75rem',
                          color: '#a78bfa',
                          fontWeight: '500'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '16px',
                        padding: '4px 12px',
                        fontSize: '0.75rem',
                        color: '#60a5fa',
                        fontWeight: '500'
                      }}>
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Informations supplémentaires */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '20px',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      marginBottom: '4px'
                    }}>
                      ID Certification
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#e2e8f0',
                      fontFamily: 'monospace',
                      fontWeight: '500'
                    }}>
                      {cert.credentialId}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      marginBottom: '4px'
                    }}>
                      Expire en
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#e2e8f0',
                      fontWeight: '500'
                    }}>
                      {cert.expiryDate}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #059669, #10b981)',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '10px 20px',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                    }}
                  >
                    <span>🔗</span>
                    Vérifier
                  </a>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: cert.status === 'active' ? '#10b981' : '#ef4444',
                      boxShadow: cert.status === 'active' 
                        ? '0 0 8px rgba(16, 185, 129, 0.5)' 
                        : '0 0 8px rgba(239, 68, 68, 0.5)'
                    }}></div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      fontWeight: '500'
                    }}>
                      {cert.status === 'active' ? 'Active' : 'Expirée'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px',
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#e2e8f0',
            marginBottom: '16px'
          }}>
            Intéressé par mes compétences ?
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#94a3b8',
            marginBottom: '24px',
            maxWidth: '500px',
            margin: '0 auto 24px auto'
          }}>
            Ces certifications reflètent mon engagement dans l'apprentissage continu 
            et ma maîtrise des technologies modernes.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '20px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              💬 Me contacter
            </a>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#e2e8f0',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '20px',
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              🚀 Voir mes projets
            </a>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes shine {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          @media (max-width: 768px) {
            #certifications {
              padding: 80px 0 60px 0 !important;
            }
            
            .certifications-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
            
            .cert-card {
              margin: 0 auto !important;
              max-width: 400px !important;
            }
          }

          @media (max-width: 480px) {
            .cert-header {
              height: 150px !important;
            }
            
            .cert-content {
              padding: 20px !important;
            }
            
            .cert-info-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Certifications;
