import React from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconMicrophone } from './Icons';

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ paddingTop: '50px', paddingBottom: '0' }}>
      <div className="container" style={{ marginBottom: '80px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="about-grid">
          
          {/* Left Column: Visual & Format Card */}
          <div>
            <div
              className="card"
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '36px',
                border: '1.5px solid var(--color-border)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <img
                  src={PODCAST_DATA.brand.logoUrl}
                  alt="Unfiltered with Wandia logo"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid var(--color-black)'
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '2px' }}>The Show Format</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-grey-muted)', margin: 0 }}>
                    Authentic Kenyan Conversations
                  </p>
                </div>
              </div>

              {/* 3 Key Pillars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-pink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}
                  >
                    01
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--color-black)' }}>
                      40–70 Minute Long-Form
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#55555C' }}>
                      Unhurried, unscripted dialogues where stories have room to breathe without soundbite rush.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-pink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}
                  >
                    02
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--color-black)' }}>
                      Real, Relatable Guests
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#55555C' }}>
                      Creatives, university students, everyday entrepreneurs, presenters, and honest community voices.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-pink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}
                  >
                    03
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--color-black)' }}>
                      Mobile-First Kenyan Reach
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#55555C' }}>
                      67% of watch time comes from viewers on mobile phones watching via YouTube across Kenya.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Meet Wandia narrative & Topic chips */}
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-grey-muted)' }}>
              ABOUT THE SHOW & HOST
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.5rem)', marginTop: '8px', marginBottom: '20px' }}>
              Meet Wandia.
            </h2>

            <p style={{ fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '18px', color: '#2B2B30' }}>
              <strong>Unfiltered with Wandia</strong> is a conversation space built on honesty. Every episode is a real story, told without a filter, from a guest who has truly lived it.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '28px', color: '#44444A' }}>
              Whether the topic is love, career hustle, faith deconstruction, pain or discovering purpose—nothing is off limits. The show is created for everyday Kenyans navigating real challenges who need to be reminded that they are never alone in their journey.
            </p>

            {/* Topics Covered */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-black)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                Conversations We Hold
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {PODCAST_DATA.topics.map((topic) => (
                  <span
                    key={topic}
                    className="pill"
                    style={{ fontSize: '0.88rem', padding: '8px 16px', fontWeight: 500 }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href={PODCAST_DATA.brand.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: '0.9rem' }}
              >
                Visit YouTube Channel (@unfilteredwithwandia)
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Iconic Black Pull-Quote Band */}
      <div
        style={{
          backgroundColor: 'var(--color-black)',
          color: '#FFFFFF',
          padding: '64px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div
            style={{
              fontSize: '4.5rem',
              lineHeight: 0.8,
              color: 'var(--color-pink)',
              fontFamily: 'serif',
              marginBottom: '16px'
            }}
          >
            “
          </div>
          <blockquote
            style={{
              fontSize: 'clamp(1.35rem, 2.8vw, 1.95rem)',
              fontWeight: 500,
              lineHeight: 1.45,
              fontStyle: 'italic',
              color: '#FFFFFF',
              marginBottom: '20px'
            }}
          >
            For anyone who has been through something and needs to hear they are not alone.
          </blockquote>
          <cite style={{ fontSize: '0.9rem', color: 'var(--color-pink)', fontWeight: 600, fontStyle: 'normal', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            — Wandia · Creator & Host
          </cite>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
