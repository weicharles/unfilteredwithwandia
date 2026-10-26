import React from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconUsers, IconClock, IconEye, IconVideo } from './Icons';

export default function StatsStrip() {
  const getIcon = (name) => {
    switch (name) {
      case 'Users': return <IconUsers size={24} />;
      case 'Clock': return <IconClock size={24} />;
      case 'Eye': return <IconEye size={24} />;
      case 'Video': return <IconVideo size={24} />;
      default: return null;
    }
  };

  return (
    <section style={{ paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        {/* Section Heading Label */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-grey-muted)' }}>
            THE NUMBERS · VERIFIED YOUTUBE TRACTION
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginTop: '6px' }}>
            A Growing, Attentive Audience
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}
        >
          {PODCAST_DATA.stats.map((stat) => (
            <div
              key={stat.label}
              className="card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '28px 24px',
                textAlign: 'left',
                borderTop: '4px solid var(--color-pink)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-grey-muted)' }}>
                  {stat.label}
                </span>
                <span style={{ color: 'var(--color-black)' }}>
                  {getIcon(stat.icon)}
                </span>
              </div>
              <div style={{ fontSize: 'clamp(2.1rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--color-black)', lineHeight: 1.1, marginBottom: '6px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#55555C', fontWeight: 500 }}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Audience Context Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            padding: '24px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#25D366' }} />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-black)' }}>
                Organic Audience Discovery
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#44444A', margin: 0 }}>
              {PODCAST_DATA.audienceBreakdown.note}
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div
              style={{
                padding: '10px 16px',
                backgroundColor: 'var(--color-cream)',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-black)' }}>
                {PODCAST_DATA.audienceBreakdown.mobileShare}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-grey-muted)' }}>
                Mobile Watch Time
              </div>
            </div>

            <div
              style={{
                padding: '10px 16px',
                backgroundColor: 'var(--color-cream)',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-black)' }}>
                {PODCAST_DATA.audienceBreakdown.kenyaShare}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-grey-muted)' }}>
                Kenya-Based Views
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
