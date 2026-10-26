import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconPlay, IconYoutube } from './Icons';

export default function EpisodesSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [featuredId, setFeaturedId] = useState(PODCAST_DATA.episodes[0].youtubeId);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);

  const categories = [
    'All',
    'Money & Hustle',
    'Campus Life',
    'Faith & Family',
    'Confidence & Healing',
    'Love & Relationships',
    'Mental Health'
  ];

  const currentFeatured = PODCAST_DATA.episodes.find((ep) => ep.youtubeId === featuredId) || PODCAST_DATA.episodes[0];

  const filteredEpisodes = PODCAST_DATA.episodes.filter((ep) => {
    if (activeFilter === 'All') return true;
    return ep.topic === activeFilter;
  });

  const visibleEpisodes = showAllEpisodes ? filteredEpisodes : filteredEpisodes.slice(0, 6);

  const handlePlayEpisode = (ep) => {
    setFeaturedId(ep.youtubeId);
    setPlayingVideoId(ep.youtubeId);
    const playerEl = document.getElementById('featured-player');
    if (playerEl) {
      const navOffset = 90;
      const elementPosition = playerEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="episodes" className="section" style={{ backgroundColor: 'var(--color-page)' }}>
      <div className="container">
        
        {/* Section Header without Eyebrow */}
        <div style={{ textAlign: 'left', maxWidth: '680px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'var(--type-heading)', marginBottom: '10px' }}>
            Watch the conversations.
          </h2>
          <p style={{ fontSize: 'var(--type-body)', color: 'var(--color-grey-muted)' }}>
            Unedited, raw, and transformative stories arranged from newest release to classic episodes.
          </p>
        </div>

        {/* Featured Video Player (Instant YouTube Embed or High-Res Facade) */}
        <div
          id="featured-player"
          className="surface-white"
          style={{
            padding: '24px',
            marginBottom: '48px'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '28px', alignItems: 'center' }} className="featured-video-grid">
            
            {/* Video Viewport */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                backgroundColor: 'var(--color-black)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden'
              }}
            >
              {playingVideoId === currentFeatured.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentFeatured.youtubeId}?autoplay=1&rel=0`}
                  title={currentFeatured.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setPlayingVideoId(currentFeatured.youtubeId)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `linear-gradient(rgba(12,12,13,0.35), rgba(12,12,13,0.7)), url('https://i.ytimg.com/vi/${currentFeatured.youtubeId}/hqdefault.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  title="Click to play episode"
                >
                  {/* Big Flat Play Button */}
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-pink)',
                      color: '#0C0C0D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: '4px'
                    }}
                  >
                    <IconPlay size={30} />
                  </div>

                  {/* Overlaid duration badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(12,12,13,0.85)',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  >
                    {currentFeatured.youtubeId === PODCAST_DATA.episodes[0].youtubeId ? 'Latest Release' : 'Selected Episode'} · {currentFeatured.duration}
                  </div>
                </div>
              )}
            </div>

            {/* Video Details Column */}
            <div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.55rem)', marginBottom: '10px', lineHeight: 1.25, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {currentFeatured.title}
              </h3>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    color: 'var(--color-black)'
                  }}
                >
                  {currentFeatured.topic}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--color-grey-muted)' }}>
                  {currentFeatured.views} views
                </span>
                <span style={{ color: 'var(--color-grey-muted)' }}>·</span>
                <span style={{ fontSize: '14px', color: 'var(--color-grey-muted)' }}>
                  Guest: {currentFeatured.guest}
                </span>
              </div>

              <p style={{ fontSize: 'var(--type-body)', color: '#4E4E56', marginBottom: '24px', lineHeight: 1.6 }}>
                {currentFeatured.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={() => setPlayingVideoId(currentFeatured.youtubeId)}
                  className="btn-primary"
                  style={{ fontSize: '15px', padding: '12px 24px' }}
                >
                  <IconPlay size={16} /> Play Episode Now
                </button>
                <a
                  href={`https://www.youtube.com/watch?v=${currentFeatured.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '15px', padding: '12px 24px' }}
                >
                  <IconYoutube size={16} /> Open on YouTube
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setShowAllEpisodes(false);
              }}
              style={{
                backgroundColor: activeFilter === cat ? 'var(--color-black)' : 'var(--color-surface)',
                color: activeFilter === cat ? '#FFFFFF' : 'var(--color-black)',
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '14px',
                fontWeight: activeFilter === cat ? 600 : 500,
                cursor: 'pointer',
                border: 'none',
                transition: 'background-color 0.2s ease, color 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Real Episodes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {visibleEpisodes.map((ep, idx) => (
            <div
              key={ep.youtubeId}
              className={`surface-white motion-reveal motion-delay-${(idx % 4) + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px'
              }}
            >
              <div>
                {/* Real Video Thumbnail */}
                <div
                  onClick={() => handlePlayEpisode(ep)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    marginBottom: '16px',
                    backgroundColor: 'var(--color-black)',
                    cursor: 'pointer'
                  }}
                  title="Click to play in featured player"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                    alt={ep.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0,0,0,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease'
                    }}
                    className="thumbnail-hover"
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-pink)',
                        color: '#0C0C0D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconPlay size={20} />
                    </div>
                  </div>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      backgroundColor: 'rgba(12, 12, 13, 0.85)',
                      color: '#FFFFFF',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 600
                    }}
                  >
                    {ep.duration}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                    color: 'var(--color-black)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                  title={ep.title}
                >
                  {ep.title}
                </h3>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                      color: 'var(--color-black)'
                    }}
                  >
                    {ep.topic}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--color-grey-muted)' }}>
                    {ep.duration}
                  </span>
                  <span style={{ color: 'var(--color-grey-muted)' }}>·</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-grey-muted)' }}>
                    {ep.views} views
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#3A3A42',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {ep.summary}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px'
                }}
              >
                <button
                  onClick={() => handlePlayEpisode(ep)}
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-black)',
                    textDecoration: 'underline',
                    padding: 0
                  }}
                >
                  Play episode
                </button>

                <a
                  href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-grey-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <IconYoutube size={14} /> YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Collapse Episodes Toggle */}
        {filteredEpisodes.length > 6 && (
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <button
              onClick={() => setShowAllEpisodes(!showAllEpisodes)}
              className="btn-secondary"
              style={{ padding: '13px 32px' }}
            >
              {showAllEpisodes ? `Show Fewer Episodes` : `View All ${filteredEpisodes.length} Real Episodes`}
            </button>
          </div>
        )}

        {/* Subscribe Banner */}
        <div
          className="surface-dark"
          style={{
            padding: '36px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '6px' }}>
              Never miss a conversation.
            </h3>
            <p style={{ color: '#A0A0A8', fontSize: 'var(--type-body)', margin: 0 }}>
              Join 450+ growing subscribers tuning into honest Kenyan stories every week.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={PODCAST_DATA.brand.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
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
        .thumbnail-hover:hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
