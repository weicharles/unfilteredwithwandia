import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconChevronDown } from './Icons';

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState('partners');
  const [openIndexes, setOpenIndexes] = useState([0]); // First item open by default

  const currentFaqs = PODCAST_DATA.faqs[activeTab];

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-grey-muted)' }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.5rem)', marginTop: '8px', marginBottom: '14px' }}>
            Questions, Answered.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#44444A' }}>
            Everything you need to know about partnering with our show or joining us on the microphone.
          </p>
        </div>

        {/* Dual Tab Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '36px'
          }}
        >
          <button
            onClick={() => {
              setActiveTab('partners');
              setOpenIndexes([0]);
            }}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-pill)',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'partners' ? 'var(--color-black)' : 'var(--color-white)',
              color: activeTab === 'partners' ? '#FFFFFF' : 'var(--color-black)',
              border: '1.5px solid var(--color-black)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            For Brands & Sponsors
          </button>

          <button
            onClick={() => {
              setActiveTab('guests');
              setOpenIndexes([0]);
            }}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-pill)',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'guests' ? 'var(--color-black)' : 'var(--color-white)',
              color: activeTab === 'guests' ? '#FFFFFF' : 'var(--color-black)',
              border: '1.5px solid var(--color-black)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            For Prospective Guests
          </button>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={faq.q}
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)'
                }}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    backgroundColor: isOpen ? 'rgba(242, 159, 196, 0.08)' : 'var(--color-white)',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-black)' }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: 'var(--color-black)'
                    }}
                  >
                    <IconChevronDown size={20} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '18px 26px 24px',
                      backgroundColor: 'var(--color-white)',
                      borderTop: '1px solid var(--color-border)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      color: '#44444A'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
