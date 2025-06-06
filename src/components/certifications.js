import React, { useState, useEffect, useMemo } from 'react';

const Certifications = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // CORRECTION : Utiliser useMemo pour éviter la recréation du tableau
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
  ], []); // Tableau vide = ne changera jamais

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

  // CORRECTION : useEffect avec les bonnes dépendances
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(filteredCertifications.map((_, index) => index));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [filteredCertifications]); // Maintenant filteredCertifications est stable

  return (
    <section id="certifications" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      padding: '120px 0 80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            color: '#e2e8f0',
            marginBottom: '24px'
          }}>
            Mes <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Certifications</span>
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Mes certifications professionnelles validant mes compétences techniques
          </p>
        </div>

        {/* Filtres */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '60px'
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
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                padding: '12px 20px',
                color: filter === category.id ? 'white' : '#e2e8f0',
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
                fontSize: '0.75rem'
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
          gap: '32px'
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
                transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {/* Header de la carte */}
              <div style={{
                position: 'relative',
                height: '180px',
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{ fontSize: '4rem' }}>
                    {cert.category === 'cloud' ? '☁️' : 
                     cert.category === 'network' ? '🌐' : 
                     cert.category === 'programming' ? '💻' : '🏆'}
                  </div>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '700'
                  }}>
                    {cert.date}
                  </div>
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: cert.level === 'Professional' ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' :
                             cert.level === 'Associate' ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                             'linear-gradient(135deg, #10b981, #34d399)',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {cert.level}
                </div>
              </div>

              {/* Contenu */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '800',
                  color: '#e2e8f0',
                  marginBottom: '8px'
                }}>
                  {cert.title}
                </h3>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#60a5fa',
                  marginBottom: '8px'
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
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
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
                      gap: '6px',
                      background: 'linear-gradient(135deg, #059669, #10b981)',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    🔗 Vérifier
                  </a>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: cert.status === 'active' ? '#10b981' : '#ef4444'
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
      </div>
    </section>
  );
};

export default Certifications;
