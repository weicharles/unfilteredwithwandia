import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconChevronDown } from './Icons';

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState('partners');
  const [openIndexes, setOpenIndexes] = useState([0]);

  const currentFaqs = PODCAST_DATA.faqs[activeTab];

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--color-page)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        
        {/* Section Heading without Eyebrow */}
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: 'var(--type-heading)', marginBottom: '10px' }}>
            Questions, answered.
          </h2>
          <p style={{ fontSize: 'var(--type-body)', color: 'var(--color-grey-muted)' }}>
            Everything you need to know about partnering with our show or joining us on the microphone.
          </p>
        </div>

        {/* Dual Tab Switcher */}
        <div
          className="faq-tabs-row"
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => {
              setActiveTab('partners');
              setOpenIndexes([0]);
            }}
            className="faq-tab-btn"
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '14.5px',
              backgroundColor: activeTab === 'partners' ? 'var(--color-black)' : 'var(--color-surface)',
              color: activeTab === 'partners' ? '#FFFFFF' : 'var(--color-black)',
              cursor: 'pointer',
              border: 'none',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease, color 0.2s ease'
            }}
          >
            For Brands & Sponsors
          </button>

          <button
            onClick={() => {
              setActiveTab('guests');
              setOpenIndexes([0]);
            }}
            className="faq-tab-btn"
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '14.5px',
              backgroundColor: activeTab === 'guests' ? 'var(--color-black)' : 'var(--color-surface)',
              color: activeTab === 'guests' ? '#FFFFFF' : 'var(--color-black)',
              cursor: 'pointer',
              border: 'none',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease, color 0.2s ease'
            }}
          >
            For Prospective Guests
          </button>
        </div>

        {/* Accordion List (Separated by space and tone, zero hairlines) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={faq.q}
                style={{
                  backgroundColor: isOpen ? 'var(--color-surface-hover)' : 'var(--color-surface)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-black)', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: '1.4rem',
                      lineHeight: 1,
                      fontWeight: 400,
                      color: 'var(--color-black)',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 22px',
                      fontSize: 'var(--type-body)',
                      lineHeight: 1.65,
                      color: '#2E2E34'
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

      <style>{`
        @media (max-width: 540px) {
          .faq-tabs-row {
            flex-direction: column !important;
            gap: 8px !important;
          }
          .faq-tab-btn {
            width: 100% !important;
            text-align: center !important;
            padding: 10px 16px !important;
            min-height: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
