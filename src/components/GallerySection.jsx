import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconEye, IconClose, IconMicrophone } from './Icons';

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "The Conversation Chair",
      caption: "Intimate, relaxed studio setup designed for guests to feel safe and open.",
      tag: "Studio Setup",
      aspect: "tall",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 2,
      title: "Audio Craft & Microphones",
      caption: "Studio-grade broadcasting mics ensuring crisp broadcast quality for every episode.",
      tag: "Production",
      aspect: "wide",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 3,
      title: "Host in Focus: Wandia",
      caption: "Creator and host Wandia leading thoughtful, vulnerable questions.",
      tag: "Host",
      aspect: "square",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 4,
      title: "Pre-Interview Boundary Alignment",
      caption: "Every guest establishes what is comfortable before any recording camera starts.",
      tag: "Guest Care",
      aspect: "wide",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 5,
      title: "Real Reactions, Zero Filters",
      caption: "Unrehearsed laughter and tears that make Unfiltered deeply human.",
      tag: "Moments",
      aspect: "tall",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 6,
      title: "Community & Story Impact",
      caption: "Stories that spark vital conversations in campus dorms and living rooms across Kenya.",
      tag: "Impact",
      aspect: "square",
      img: PODCAST_DATA.brand.portraitUrl
    }
  ];

  return (
    <section id="gallery" className="section" style={{ backgroundColor: '#F0EBE5', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-grey-muted)' }}>
            STUDIO & RECORDINGS
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.5rem)', marginTop: '8px', marginBottom: '12px' }}>
            Behind the Scenes
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#44444A' }}>
            Real conversations, recorded with dignity and professional production in Nairobi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-black)',
                cursor: 'pointer',
                aspectRatio: item.aspect === 'tall' ? '4 / 5' : item.aspect === 'wide' ? '16 / 11' : '1 / 1',
                border: '2px solid rgba(12, 12, 13, 0.1)',
                boxShadow: 'var(--shadow-subtle)',
                transition: 'all 0.25s ease'
              }}
              className="gallery-card"
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.92)',
                  transition: 'transform 0.4s ease, filter 0.3s ease'
                }}
                className="gallery-img"
              />

              {/* Gradient & Overlay Info */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(12, 12, 13, 0.90) 0%, rgba(12, 12, 13, 0.2) 50%, transparent 100%)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#FFFFFF'
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    backgroundColor: 'var(--color-pink)',
                    color: 'var(--color-black)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-pill)',
                    marginBottom: '8px'
                  }}
                >
                  {item.tag}
                </span>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '4px', lineHeight: 1.3 }}>
                  {item.title}
                </h4>
                <p style={{ color: '#CCCCCC', fontSize: '0.82rem', margin: 0, lineHeight: 1.4 }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(12, 12, 13, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '780px',
              width: '100%',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(12, 12, 13, 0.8)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <IconClose size={20} />
            </button>

            <div style={{ maxHeight: '70vh', overflow: 'hidden', backgroundColor: '#000000', display: 'flex', justifyContent: 'center' }}>
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain' }}
              />
            </div>

            <div style={{ padding: '24px 28px' }}>
              <span className="pill pill-pink" style={{ fontSize: '0.8rem', padding: '3px 10px', marginBottom: '8px' }}>
                {selectedPhoto.tag}
              </span>
              <h3 style={{ fontSize: '1.35rem', marginTop: '6px', marginBottom: '8px' }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ color: '#44444A', fontSize: '0.95rem', margin: 0 }}>
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(12, 12, 13, 0.15) !important;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
          filter: brightness(1);
        }
      `}</style>
    </section>
  );
}
