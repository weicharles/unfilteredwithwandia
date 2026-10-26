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
        paddingBottom: '48px'
      }}
    >
      <div className="container">
        
        {/* Top Call to Action without Eyebrow */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            paddingBottom: '56px'
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <h2 style={{ color: '#FFFFFF', fontSize: 'var(--type-heading)', marginBottom: '14px', lineHeight: 1.15 }}>
              Let's build something real together.
            </h2>
            <p style={{ color: '#A0A0A8', fontSize: 'var(--type-body)', margin: 0 }}>
              Whether you are an ambitious brand looking to reach an engaged Kenyan audience, or someone ready to tell their story, we'd love to hear from you.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('#partner')}
              className="btn-primary"
            >
              Partner With Us
              <IconArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo('#guest')}
              className="btn-secondary"
              style={{
                backgroundColor: '#202024',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              Be a Guest
            </button>
          </div>
        </div>

        {/* Middle Direct Contact Blocks */}
        {/* Direct Contact Channels (Clean typography, unboxed) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'baseline',
            paddingTop: '36px',
            paddingBottom: '48px'
          }}
        >
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pink)', marginBottom: '4px' }}>
              Email
            </div>
            <a
              href={`mailto:${PODCAST_DATA.brand.email}`}
              style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}
            >
              {PODCAST_DATA.brand.email}
            </a>
          </div>

          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pink)', marginBottom: '4px' }}>
              WhatsApp
            </div>
            <a
              href={`https://wa.me/${PODCAST_DATA.brand.whatsAppRaw}?text=Hi%20Wandia%2C%20I%20would%20like%20to%20connect...`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}
            >
              {PODCAST_DATA.brand.phone}
            </a>
          </div>

          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-pink)', marginBottom: '4px' }}>
              YouTube
            </div>
            <a
              href={PODCAST_DATA.brand.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}
            >
              {PODCAST_DATA.brand.youtubeHandle}
            </a>
          </div>
        </div>

        {/* Bottom Bar: Logo, Tagline & Copyright */}
        <div
          style={{
            paddingTop: '32px',
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
                width: '40px',
                height: '40px',
                borderRadius: '50%'
              }}
            />
            <div>
              <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '15px' }}>
                Unfiltered with Wandia
              </div>
              <div style={{ fontSize: '14px', color: '#888890' }}>
                Stories that inspire growth · Watch on YouTube
              </div>
            </div>
          </div>

          <div style={{ fontSize: '14px', color: '#777780' }}>
            © {new Date().getFullYear()} Unfiltered with Wandia.
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
        <IconWhatsapp size={28} />
      </a>
    </footer>
  );
}
