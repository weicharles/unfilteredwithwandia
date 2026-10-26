import React from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconWhatsapp, IconMail, IconYoutube, IconArrowRight } from './Icons';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-black)',
        color: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid #222228'
      }}
    >
      <div className="container">
        
        {/* Top Call to Action */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
            paddingBottom: '50px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-pink)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              GET IN TOUCH
            </span>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '6px', marginBottom: '12px' }}>
              Let's build something real together.
            </h2>
            <p style={{ color: '#A0A0A8', fontSize: '1.02rem', margin: 0 }}>
              Whether you are an ambitious brand looking to reach an engaged Kenyan audience, or someone ready to tell their story, we'd love to hear from you.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('#partner')}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.98rem' }}
            >
              Partner With Us
              <IconArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#guest')}
              className="btn-outline"
              style={{
                color: '#FFFFFF',
                borderColor: '#FFFFFF',
                padding: '14px 28px',
                fontSize: '0.98rem'
              }}
            >
              Be a Guest
            </button>
          </div>
        </div>

        {/* Middle Direct Contact Blocks */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            paddingTop: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {/* Email Block */}
          <a
            href={`mailto:${PODCAST_DATA.brand.email}`}
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#161619',
              border: '1px solid #28282E',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none'
            }}
            className="footer-contact-card"
          >
            <div style={{ color: 'var(--color-pink)' }}>
              <IconMail size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-pink)', letterSpacing: '0.04em' }}>
                DIRECT EMAIL
              </div>
              <div style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 600 }}>
                {PODCAST_DATA.brand.email}
              </div>
            </div>
          </a>

          {/* WhatsApp Block */}
          <a
            href={`https://wa.me/${PODCAST_DATA.brand.whatsAppRaw}?text=Hi%20Wandia%2C%20I%20would%20like%20to%20connect...`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#161619',
              border: '1px solid #28282E',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none'
            }}
            className="footer-contact-card"
          >
            <div style={{ color: '#25D366' }}>
              <IconWhatsapp size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#25D366', letterSpacing: '0.04em' }}>
                WHATSAPP CHAT
              </div>
              <div style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 600 }}>
                {PODCAST_DATA.brand.phone}
              </div>
            </div>
          </a>

          {/* YouTube Block */}
          <a
            href={PODCAST_DATA.brand.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#161619',
              border: '1px solid #28282E',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none'
            }}
            className="footer-contact-card"
          >
            <div style={{ color: '#FF0000' }}>
              <IconYoutube size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FF5555', letterSpacing: '0.04em' }}>
                YOUTUBE CHANNEL
              </div>
              <div style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 600 }}>
                {PODCAST_DATA.brand.youtubeHandle}
              </div>
            </div>
          </a>
        </div>

        {/* Bottom Bar: Logo, Tagline & Copyright */}
        <div
          style={{
            paddingTop: '36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src={PODCAST_DATA.brand.logoUrl}
              alt="Unfiltered with Wandia logo"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1.5px solid var(--color-pink)'
              }}
            />
            <div>
              <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.98rem' }}>
                UNFILTERED WITH WANDIA
              </div>
              <div style={{ fontSize: '0.8rem', color: '#888890' }}>
                Stories that inspire growth · Nairobi, Kenya
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#777780' }}>
            © {new Date().getFullYear()} Unfiltered with Wandia. All rights reserved.
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${PODCAST_DATA.brand.whatsAppRaw}?text=Hi%20Wandia%2C%20I%20came%20across%20Unfiltered%20with%20Wandia%20and%20would%20like%20to%20connect%21`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat with Wandia on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <IconWhatsapp size={30} />
      </a>

      <style>{`
        .footer-contact-card:hover {
          background-color: #202026 !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
