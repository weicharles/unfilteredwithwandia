import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconPlay, IconYoutube, IconEye, IconClock } from './Icons';

export default function EpisodesSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const categories = [
    'All',
    'Confidence & Healing',
    'Faith & Family',
    'Campus Life',
    'Money & Hustle',
    'Mental Health',
    'Love & Relationships'
  ];

  const featuredEpisode = PODCAST_DATA.episodes.find((ep) => ep.featured) || PODCAST_DATA.episodes[0];

  const filteredEpisodes = PODCAST_DATA.episodes.filter((ep) => {
    if (activeFilter === 'All') return true;
    return ep.topic === activeFilter;
  });

  return (
    <section id="episodes" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-grey-muted)' }}>
            EPISODES & INTERVIEWS
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.5rem)', marginTop: '8px', marginBottom: '14px' }}>
            Watch the Conversations
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#44444A' }}>
            Unedited, raw, and transformative stories that give our audience a reason to listen and reflect.
          </p>
        </div>

        {/* Featured Video Player (Click-to-Load YouTube Facade) */}
        <div
          className="card"
          style={{
            padding: '24px',
            marginBottom: '48px',
            border: '2px solid var(--color-black)',
            boxShadow: 'var(--shadow-offset)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', alignItems: 'center' }} className="featured-video-grid">
            
            {/* Video Viewport / Facade */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                backgroundColor: '#0C0C0D',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              {playingVideoId === featuredEpisode.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed?listType=search&list=Unfiltered+With+Wandia+${encodeURIComponent(featuredEpisode.title)}&autoplay=1`}
                  title={featuredEpisode.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setPlayingVideoId(featuredEpisode.id)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `linear-gradient(rgba(12,12,13,0.35), rgba(12,12,13,0.75)), url('${PODCAST_DATA.brand.portraitUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  title="Click to play episode"
                >
                  {/* Big Play Button Badge */}
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-pink)',
                      color: 'var(--color-black)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 30px rgba(242, 159, 196, 0.65)',
                      transition: 'transform 0.25s ease',
                      paddingLeft: '4px'
                    }}
                    className="play-btn-pulse"
                  >
                    <IconPlay size={32} />
                  </div>

                  {/* Overlaid duration & status badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(0,0,0,0.85)',
                      color: '#FFFFFF',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#25D366' }} />
                    FEATURED EPISODE · {featuredEpisode.duration}
                  </div>
                </div>
              )}
            </div>

            {/* Video Details Column */}
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <span className="pill pill-pink" style={{ fontSize: '0.82rem', padding: '4px 12px' }}>
                  {featuredEpisode.topic}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-grey-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <IconEye size={15} /> {featuredEpisode.views} views
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)', marginBottom: '12px', lineHeight: 1.3 }}>
                {featuredEpisode.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#44444A', lineHeight: 1.6, marginBottom: '22px' }}>
                {featuredEpisode.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={() => setPlayingVideoId(featuredEpisode.id)}
                  className="btn-primary"
                  style={{ fontSize: '0.92rem', padding: '12px 24px' }}
                >
                  <IconPlay size={18} /> Play Episode Now
                </button>
                <a
                  href={PODCAST_DATA.brand.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.92rem', padding: '12px 22px' }}
                >
                  <IconYoutube size={18} /> Open on YouTube
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="pill"
              style={{
                backgroundColor: activeFilter === cat ? 'var(--color-black)' : 'var(--color-white)',
                color: activeFilter === cat ? '#FFFFFF' : 'var(--color-black)',
                borderColor: activeFilter === cat ? 'var(--color-black)' : 'var(--color-border)',
                fontWeight: activeFilter === cat ? 600 : 500,
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Episodes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {filteredEpisodes.map((ep) => (
            <div
              key={ep.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                border: '1px solid var(--color-border-card)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="pill pill-pink" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                    {ep.topic}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-grey-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <IconClock size={14} /> {ep.duration}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.12rem', marginBottom: '8px', lineHeight: 1.35, color: 'var(--color-black)' }}>
                  {ep.title}
                </h4>

                <p style={{ fontSize: '0.88rem', color: '#55555C', lineHeight: 1.55, marginBottom: '18px' }}>
                  {ep.summary}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--color-border)'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-grey-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <IconEye size={15} /> {ep.views} views
                </span>

                <a
                  href={`https://www.youtube.com/@unfilteredwithwandia`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-black)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <IconPlay size={14} /> Watch Clip
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-black)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '6px' }}>
              Never miss a conversation.
            </h3>
            <p style={{ color: '#A0A0A8', fontSize: '0.95rem', margin: 0 }}>
              Join 430+ growing subscribers tuning into honest Kenyan stories every week.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={PODCAST_DATA.brand.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.95rem', padding: '14px 26px' }}
            >
              <IconYoutube size={20} /> Subscribe on YouTube
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .featured-video-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
          }
        }
        .play-btn-pulse:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
