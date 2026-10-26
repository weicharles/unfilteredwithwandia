import React from 'react';
import { PODCAST_DATA } from '../data/podcastData';

export default function StatsStrip() {
  return (
    <section style={{ paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        
        {/* Clean Heading without Eyebrow */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: 'var(--type-heading)', marginBottom: '8px' }}>
            A growing, attentive audience.
          </h2>
          <p style={{ color: 'var(--color-grey-muted)', fontSize: 'var(--type-body)' }}>
            Built organically in Nairobi on genuine long-form watch time.
          </p>
        </div>

        {/* 4 Stats Blocks (Flat White Surfaces, Zero Box-Shadow, Zero Icon-Tops) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '28px'
          }}
        >
          {PODCAST_DATA.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`surface-white motion-reveal motion-delay-${(idx % 4) + 1}`}
              style={{
                padding: '28px 24px',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.2rem)', fontWeight: 800, color: 'var(--color-black)', lineHeight: 1.05, marginBottom: '8px' }}>
                {stat.value}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-black)', marginBottom: '4px' }}>
                {stat.label}
              </h3>
              <div style={{ fontSize: '14px', color: '#3A3A42', fontWeight: 500 }}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Organic Discovery Narrative Banner */}
        <div
          className="surface-white"
          style={{
            padding: '28px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '6px', color: 'var(--color-black)' }}>
              Organic Audience Discovery
            </h3>
            <p style={{ fontSize: 'var(--type-body)', color: '#3A3A40', margin: 0 }}>
              {PODCAST_DATA.audienceBreakdown.note}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div
              style={{
                padding: '14px 22px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-black)' }}>
                {PODCAST_DATA.audienceBreakdown.mobileShare}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-grey-muted)' }}>
                Mobile phone watch time
              </div>
            </div>

            <div
              style={{
                padding: '14px 22px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-black)' }}>
                {PODCAST_DATA.audienceBreakdown.kenyaShare}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-grey-muted)' }}>
                Views from Kenya
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
