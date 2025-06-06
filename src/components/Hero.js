import React, { useState, useEffect} from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const texts = [
    "Développeur Full Stack",
    "Créateur d'expériences web",
    "Passionné de technologie",
    "Architecte de solutions"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]); // Added missing dependency

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '80px 0'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10
  };

  const textSectionStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'all 1s ease'
  };

  const photoSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    transition: 'all 1s ease 0.3s'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginTop: '-40px', // Fixed: combined margin properties
    marginBottom: '30px',
    lineHeight: '1.1'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    color: '#e2e8f0',
    marginBottom: '24px',
    fontWeight: '300'
  };

  const animatedTextStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    color: '#a78bfa',
    marginBottom: '32px',
    fontWeight: '600',
    minHeight: '1.5em'
  };

  const photoContainerStyle = {
    position: 'relative',
    width: '400px',
    height: '400px',
    margin: '0 auto'
  };

  const photoStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)',
    position: 'relative',
    zIndex: 2,
    marginTop: '-90px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  const secondaryButtonStyle = {
    background: 'transparent',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px'
  };

  const socialLinkStyle = {
    width: '48px',
    height: '48px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '1.25rem',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  return (
    <section id="hero" style={containerStyle}>
      <div style={contentStyle}>
        {/* Section Texte */}
        <div style={textSectionStyle}>
          {/* Badge professionnel */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '50px',
            padding: '8px 16px',
            marginTop: '-50px',
            marginBottom: '40px',
            fontSize: '0.875rem',
            color: '#a78bfa',
            fontWeight: '500'
          }}>
            <span>🚀</span>
            Disponible pour de nouveaux projets
          </div>
          
          <h1 style={titleStyle}>
            Salut, je suis <br />
            <span style={{ color: '#f472b6' }}>Neji Ilef</span>
          </h1>
          
          <p style={subtitleStyle}>
            Développeuse Full Stack passionnée
          </p>
          
          <div style={animatedTextStyle}>
            <span style={{ opacity: 0.7 }}>Spécialisée en </span>
            <span style={{
              background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              {texts[currentText]}
            </span>
          </div>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#cbd5e1',
            lineHeight: '1.7',
            marginBottom: '32px'
          }}>
            Je transforme vos idées en applications web modernes et performantes.
            Avec plus de 3 ans d'expérience, je crée des solutions digitales qui font la différence.
          </p>
          
          <div style={buttonContainerStyle}>
            <a
              href="#projects"
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px -5px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span>💼</span> Voir mes projets
            </a>
            <a
  href="/ilef.pdf-2.pdf.pdf"
  download="CV-Ilef-Neji.pdf"
  style={secondaryButtonStyle}
  onMouseEnter={(e) => {
    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
    e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
    e.target.style.transform = 'translateY(-2px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.background = 'transparent';
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    e.target.style.transform = 'translateY(0)';
  }}
>
  <span>📄</span> Télécharger CV
</a>

          </div>
          
          <div style={socialLinksStyle}>
            {[
              { icon: '🐙', link: 'https://github.com/ilefneji', name: 'GitHub' },
              { icon: '💼', link: 'https://www.linkedin.com/in/ilef-neji-723281262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', name: 'LinkedIn' },
              { icon: '🐦', link: 'https://x.com/NejiIlef13250', name: 'Twitter' },
              { icon: '📸', link: 'https://www.instagram.com/neji.ilef?igsh=MTF1Zjdyc3duMG8wZg%3D%3D&utm_source=qr', name: 'Instagram' },
              { icon: '📘', link: 'https://www.facebook.com/ilef.neji.2025', name: 'Facebook' },
              { icon: '📧', link: 'mailto:nejiilef92@gmail.com', name: 'Email' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target={social.link.startsWith('#') || social.link.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={socialLinkStyle}
                title={social.name}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.background = 'rgba(139, 92, 246, 0.2)';
                  e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Section Photo */}
        <div style={photoSectionStyle}>
          <div style={photoContainerStyle}>
            <img
              src="moi.jpg"
              alt="Neji Ilef - Développeur Full Stack"
              style={photoStyle}
            />
          </div>
        </div>
      </div>
      
      {/* Indicateur de scroll */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: '#a78bfa',
        fontSize: '0.875rem',
        opacity: isVisible ? 1 : 0,
        transition: 'all 1s ease 1s'
      }}>
        <span>Découvrir mon travail</span>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'linear-gradient(to bottom, #a78bfa, transparent)',
          animation: 'bounce 2s infinite'
        }}></div>
      </div>
      
      {/* Éléments décoratifs de fond */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
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
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
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
              transform: translateY(-15px) rotate(180deg);
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
            .hero-content {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              text-align: center;
            }
                       
            .photo-container {
              width: 300px !important;
              height: 300px !important;
            }
          }
          @media (max-width: 768px) {
            .hero-content {
              padding: 0 20px !important;
            }
                       
            .photo-container {
              width: 250px !important;
              height: 250px !important;
            }
                       
            .button-container {
              flex-direction: column !important;
              align-items: center !important;
            }
                       
            .achievements-grid {
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 12px !important;
            }
                       
            .social-links {
              justify-content: center !important;
            }
          }
          @media (max-width: 480px) {
            .achievements-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;

