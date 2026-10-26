import React from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconArrowRight, IconPlay } from './Icons';

export default function Hero() {
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
          
          {/* Left Column: Focused Copy & Action */}
          <div style={{ maxWidth: '640px' }}>
            
            {/* Headline: strictly 2 lines at all widths, confident display scale */}
            <h1 style={{ marginBottom: '24px', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              Real stories. <br />
              <span style={{ color: '#0C0C0D' }}>Real growth.</span>
            </h1>

            {/* Supporting Sentence */}
            <p className="text-lead motion-reveal motion-delay-1" style={{ marginBottom: '36px', maxWidth: '54ch' }}>
              {PODCAST_DATA.brand.description}
            </p>

            {/* Dual CTAs */}
            <div className="motion-reveal motion-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '32px' }}>
              <button
                onClick={() => scrollTo('#partner')}
                className="btn-primary"
                style={{ fontSize: '1.02rem', padding: '16px 34px' }}
              >
                Partner With Us
                <IconArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo('#guest')}
                className="btn-secondary"
                style={{ fontSize: '1.02rem', padding: '16px 34px' }}
              >
                Be a Guest
              </button>
            </div>

            {/* Natural context note with active live broadcast waveform */}
            <div className="motion-reveal motion-delay-3" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '14px' }} title="Live studio broadcast audio">
                <span className="audio-bar" style={{ animationDelay: '0.1s' }} />
                <span className="audio-bar" style={{ animationDelay: '0.4s' }} />
                <span className="audio-bar" style={{ animationDelay: '0.2s' }} />
                <span className="audio-bar" style={{ animationDelay: '0.5s' }} />
              </div>
              <span style={{ fontSize: 'var(--type-small)', color: 'var(--color-grey-muted)', fontWeight: 500 }}>
                Hosted by Wandia · Recorded in Nairobi · Uncut 40–70 min conversations
              </span>
            </div>

          </div>

          {/* Right Column: Wandia's Real Portrait (Dominant focal point) */}
          <div className="motion-reveal motion-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                maxWidth: '460px',
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-black)'
              }}
            >
              <img
                src={PODCAST_DATA.brand.portraitUrl}
                alt="Wandia, host of Unfiltered with Wandia"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '580 / 870',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
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
      `}</style>
    </section>
  );
}
