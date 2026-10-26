import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconClose } from './Icons';

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "The Conversation Chair",
      caption: "Intimate, relaxed studio setup designed for guests to feel safe and open.",
      tag: "Studio setup",
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
      tag: "The host",
      aspect: "square",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 4,
      title: "Pre-Interview Boundary Alignment",
      caption: "Every guest establishes what is comfortable before any recording camera starts.",
      tag: "Guest care",
      aspect: "wide",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 5,
      title: "Real Reactions, Zero Filters",
      caption: "Unrehearsed laughter and tears that make Unfiltered deeply human.",
      tag: "Authentic moments",
      aspect: "tall",
      img: PODCAST_DATA.brand.portraitUrl
    },
    {
      id: 6,
      title: "Community & Story Impact",
      caption: "Stories that spark vital conversations in campus dorms and living rooms across Kenya.",
      tag: "Viewer impact",
      aspect: "square",
      img: PODCAST_DATA.brand.portraitUrl
    }
  ];

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <div className="container">
        
        {/* Section Heading without Eyebrow */}
        <div style={{ textAlign: 'left', maxWidth: '640px', marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'var(--type-heading)', marginBottom: '10px' }}>
            Behind the scenes.
          </h2>
          <p style={{ fontSize: 'var(--type-body)', color: 'var(--color-grey-muted)' }}>
            Real conversations, recorded with care and professional studio production.
          </p>
        </div>

        {/* Gallery Grid (Flat Image Tiles, No Box-Shadows) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {galleryItems.map((item, idx) => (
            <figure
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-black)',
                cursor: 'pointer',
                margin: 0,
                aspectRatio: item.aspect === 'tall' ? '4 / 5' : item.aspect === 'wide' ? '16 / 11' : '1 / 1'
              }}
              className={`gallery-card motion-reveal motion-delay-${(idx % 4) + 1}`}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.92)'
                }}
              />

              {/* Caption Overlay */}
              <figcaption
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(12, 12, 13, 0.92) 0%, rgba(12, 12, 13, 0.25) 55%, transparent 100%)',
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#FFFFFF'
                }}
              >
                <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '6px', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#E0E0E8', fontSize: '14px', margin: 0, lineHeight: 1.45 }}>
                  {item.caption}
                </p>
                <div style={{ marginTop: '8px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      backgroundColor: 'var(--color-pink)',
                      color: '#0C0C0D',
                      padding: '2px 10px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'inline-block'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </figcaption>
            </figure>
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
              overflow: 'hidden'
            }}
          >
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
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: 'var(--color-surface)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}
              >
                {selectedPhoto.tag}
              </span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ color: '#44444A', fontSize: 'var(--type-body)', margin: 0 }}>
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
