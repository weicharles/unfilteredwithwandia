import React from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconYoutube } from './Icons';

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ paddingTop: '50px', paddingBottom: '0' }}>
      <div className="container" style={{ marginBottom: '80px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="about-grid">
          
          {/* Left Column: Format Pillars as an unnumbered editorial split */}
          <div>
            <div
              className="surface-white"
              style={{
                padding: '38px',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
                <img
                  src={PODCAST_DATA.brand.logoUrl}
                  alt="Unfiltered with Wandia logo"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%'
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '2px' }}>The Show Format</h3>
                  <div style={{ fontSize: '14px', color: 'var(--color-grey-muted)' }}>
                    Long-form Kenyan Conversations
                  </div>
                </div>
              </div>

              {/* 3 Pillars without decorative 01/02/03 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-black)', marginBottom: '4px' }}>
                    40–70 Minute Long-Form
                  </strong>
                  <p style={{ fontSize: 'var(--type-body)', color: '#4E4E56', margin: 0 }}>
                    Unhurried, unscripted dialogues where stories have room to breathe without soundbite rush.
                  </p>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-black)', marginBottom: '4px' }}>
                    Real, Relatable Guests
                  </strong>
                  <p style={{ fontSize: 'var(--type-body)', color: '#4E4E56', margin: 0 }}>
                    Creatives, students, everyday entrepreneurs, presenters, and honest community voices.
                  </p>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-black)', marginBottom: '4px' }}>
                    Mobile-First Kenyan Reach
                  </strong>
                  <p style={{ fontSize: 'var(--type-body)', color: '#4E4E56', margin: 0 }}>
                    Most watch time comes directly from viewers watching on their phones across Kenya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Meet Wandia narrative & Topic chips */}
          <div>
            <h2 style={{ fontSize: 'var(--type-heading)', marginBottom: '20px' }}>
              Meet Wandia.
            </h2>

            <p className="text-lead" style={{ marginBottom: '16px' }}>
              Unfiltered with Wandia is a conversation space built on honesty. Every episode is a real story, told without a filter, from a guest who has lived it.
            </p>

            <p style={{ fontSize: 'var(--type-body)', marginBottom: '28px', color: '#4A4A52' }}>
              Whether the topic is love, career hustle, faith, pain or purpose, nothing is off limits. The channel is for anyone who has been through something and needs to hear that they are not alone.
            </p>

            {/* Topics Covered as plain filled pills */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-black)', marginBottom: '12px' }}>
                Conversations we hold
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {PODCAST_DATA.topics.map((topic) => (
                  <span
                    key={topic}
                    className="topic-pill"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                href={PODCAST_DATA.brand.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <IconYoutube size={16} />
                Visit YouTube Channel
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Full-width Black Pull-Quote Band */}
      <div
        style={{
          backgroundColor: 'var(--color-black)',
          color: '#FFFFFF',
          padding: '72px 24px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <blockquote
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 500,
              lineHeight: 1.4,
              fontStyle: 'italic',
              color: '#FFFFFF',
              marginBottom: '20px'
            }}
          >
            “For anyone who has been through something and needs to hear they are not alone.”
          </blockquote>
          <div style={{ fontSize: '15px', color: 'var(--color-pink)', fontWeight: 600 }}>
            Wandia · Creator & Host
          </div>
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
