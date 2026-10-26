import React from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconArrowRight, IconPlay, IconMicrophone } from './Icons';

export default function Hero({ onSelectEpisode }) {
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
    <section className="section" style={{ paddingTop: '40px', paddingBottom: '70px', overflow: 'hidden' }}>
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Words & Intent */}
          <div style={{ maxWidth: '640px' }}>
            
            {/* Tagline Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                marginBottom: '24px'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-pink)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-black)', letterSpacing: '0.02em' }}>
                KENYAN YOUTUBE CONVERSATION SPACE
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ marginBottom: '22px', letterSpacing: '-0.03em', lineHeight: 1.12 }}>
              Real stories. <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                Real conversations.
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: 0,
                    width: '100%',
                    height: '10px',
                    backgroundColor: 'var(--color-pink)',
                    zIndex: -1,
                    opacity: 0.85,
                    borderRadius: '4px'
                  }}
                />
              </span> <br />
              Real growth.
            </h1>

            {/* Supporting Copy */}
            <p style={{ fontSize: '1.15rem', lineHeight: 1.65, color: '#2B2B30', marginBottom: '36px' }}>
              {PODCAST_DATA.brand.description}
            </p>

            {/* Dual CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '32px' }}>
              <button
                onClick={() => scrollTo('#partner')}
                className="btn-primary"
                style={{ fontSize: '1.02rem', padding: '16px 32px' }}
              >
                Partner With Us
                <IconArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo('#guest')}
                className="btn-secondary"
                style={{ fontSize: '1.02rem', padding: '16px 32px' }}
              >
                Be a Guest
              </button>
            </div>

            {/* Interactive Audio Waveform & Latest Episode Teaser */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid var(--color-border)',
                width: 'fit-content'
              }}
            >
              {/* Animated audio bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '22px' }}>
                <span className="audio-bar" style={{ animationDelay: '0.1s' }} />
                <span className="audio-bar" style={{ animationDelay: '0.3s' }} />
                <span className="audio-bar" style={{ animationDelay: '0.2s' }} />
                <span className="audio-bar" style={{ animationDelay: '0.4s' }} />
                <span className="audio-bar" style={{ animationDelay: '0.15s' }} />
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--color-black)' }}>
                <span style={{ fontWeight: 600 }}>Latest Episode: </span>
                <a
                  href="#episodes"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#episodes');
                  }}
                  style={{ textDecoration: 'underline', color: '#0C0C0D', fontWeight: 500 }}
                >
                  Living with Scars — Tina's Story
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Wandia's Real Portrait in Media Kit Offset Frame */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div className="offset-frame-wrapper" style={{ maxWidth: '440px', width: '100%' }}>
              
              {/* Offset solid black frame backing */}
              <div className="offset-frame-backing" />

              {/* Foreground Image Card */}
              <div className="offset-frame-content">
                <img
                  src={PODCAST_DATA.brand.portraitUrl}
                  alt="Wandia - Host of Unfiltered with Wandia"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '580 / 870',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Overlaid Host Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '18px',
                    right: '18px',
                    backgroundColor: 'rgba(12, 12, 13, 0.90)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>Wandia</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-pink)', fontWeight: 500 }}>
                      Creator & Host · Nairobi, Kenya
                    </div>
                  </div>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-pink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0C0C0D'
                    }}
                  >
                    <IconMicrophone size={18} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        .audio-bar {
          display: inline-block;
          width: 3px;
          height: 100%;
          background-color: var(--color-black);
          border-radius: 2px;
          animation: danceBars 1s ease-in-out infinite alternate;
        }
        @keyframes danceBars {
          0% { height: 4px; }
          100% { height: 22px; }
        }
      `}</style>
    </section>
  );
}
