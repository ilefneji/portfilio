import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_2z49wha',
      'template_o7v5fvh',
      e.target,
      'dMtHLmbyaWSWEA67r'
    )
    .then((result) => {
      console.log('✅ Succès:', result);
      setStatus({
        type: 'success',
        message: '🎉 Message envoyé avec succès !'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('❌ Erreur:', error);
      setStatus({
        type: 'error',
        message: `❌ Erreur: ${error.text || 'Problème d\'envoi'}`
      });
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section style={{
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #0c1426 0%, #4c1d95 50%, #0c1426 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          💬 Contactez-moi
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* 📞 INFORMATIONS DE CONTACT */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              📍 Mes Coordonnées
            </h3>

            {/* Email */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📧
              </div>
              <div>
                <h4 style={{ color: '#d1d5db', fontSize: '14px', margin: '0 0 5px 0' }}>Email</h4>
                <a 
                  href="mailto:votre.email@gmail.com" 
                  style={{ 
                    color: '#60a5fa', 
                    textDecoration: 'none', 
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  nejiilef92@gmail.com
                </a>
              </div>
            </div>

            {/* Téléphone */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📱
              </div>
              <div>
                <h4 style={{ color: '#d1d5db', fontSize: '14px', margin: '0 0 5px 0' }}>Téléphone</h4>
                <a 
                  href="tel:+33123456789+" 
                  style={{ 
                    color: '#10b981', 
                    textDecoration: 'none', 
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  +216 50 203 339
                </a>
              </div>
            </div>

            {/* Localisation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📍
              </div>
              <div>
                <h4 style={{ color: '#d1d5db', fontSize: '14px', margin: '0 0 5px 0' }}>Localisation</h4>
                <p style={{ 
                  color: '#f59e0b', 
                  margin: 0, 
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                 Sousse,Tunsie
                </p>
              </div>
            </div>

            {/* Disponibilité */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '15px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                ⏰
              </div>
              <div>
                <h4 style={{ color: '#d1d5db', fontSize: '14px', margin: '0 0 5px 0' }}>Disponibilité</h4>
                <p style={{ 
                  color: '#8b5cf6', 
                  margin: 0, 
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  Lun - Ven : 9h - 18h
                </p>
              </div>
            </div>

            {/* Message d'encouragement */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '16px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#d1d5db',
                margin: 0,
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                💡 <strong>Prêt à collaborer ?</strong><br/>
                N'hésitez pas à me contacter pour discuter de vos projets !
              </p>
            </div>
          </div>

          {/* 📝 FORMULAIRE DE CONTACT */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            
            {/* Message de statut */}
            {status.message && (
              <div style={{
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '24px',
                background: status.type === 'success'
                  ? 'rgba(34, 197, 94, 0.2)'
                  : 'rgba(239, 68, 68, 0.2)',
                border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`,
                color: status.type === 'success' ? '#22c55e' : '#ef4444',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Nom */}
              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  👤 Nom complet *
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                  placeholder="Votre nom complet"
                />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  📧 Adresse email *
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                  placeholder="votre@email.com"
                />
              </div>

              {/* Sujet */}
              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  💡 Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                  placeholder="Sujet de votre message"
                />
              </div>

              {/* Message */}
              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  💬 Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    minHeight: '120px',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              {/* Champs cachés */}
              <input type="hidden" name="date" value={new Date().toLocaleDateString('fr-FR')} />
              <input type="hidden" name="time" value={new Date().toLocaleTimeString('fr-FR')} />

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  background: isLoading
                    ? 'rgba(107, 114, 128, 0.5)'
                    : 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    🚀 Envoyer le message
                  </>
                )}
              </button>
            </form>

            <p style={{
              marginTop: '24px',
              fontSize: '14px',
              color: '#9ca3af',
              textAlign: 'center'
            }}>
              🔒 Vos informations sont sécurisées et ne seront jamais partagées.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          h2 {
            font-size: 2rem !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          div[style*="padding: '40px'"] {
            padding: 24px !important;
          }
          
          h3 {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="gap: '15px'"] {
            flex-direction: column !important;
            text-align: center !important;
          }
          
          div[style*="width: '50px'"] {
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

             