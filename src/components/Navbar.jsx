import React, { useState, useEffect } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconWhatsapp } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Episodes', href: '#episodes' },
    { label: 'Studio Gallery', href: '#gallery' },
    { label: 'Partner With Us', href: '#partner' },
    { label: 'Be a Guest', href: '#guest' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backgroundColor: scrolled ? 'rgba(246, 242, 238, 0.96)' : 'var(--color-cream)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(12, 12, 13, 0.08)' : '1px solid transparent',
        transition: 'all 0.25s ease',
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
        >
          <img
            src={PODCAST_DATA.brand.logoUrl}
            alt="Unfiltered with Wandia"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 2px 8px rgba(12, 12, 13, 0.12)',
              border: '1.5px solid #0C0C0D'
            }}
          />
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-black)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              UNFILTERED
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-grey-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              With Wandia
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '30px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--color-black)',
                position: 'relative',
                padding: '6px 0'
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="#partner"
            onClick={(e) => handleLinkClick(e, '#partner')}
            className="btn-primary desktop-cta"
            style={{
              padding: '10px 22px',
              minHeight: '44px',
              fontSize: '0.9rem',
              display: 'none'
            }}
          >
            Partner With Us
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-white)',
              gap: '5px',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            <span
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'var(--color-black)',
                transition: 'transform 0.2s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}
            />
            <span
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'var(--color-black)',
                transition: 'opacity 0.2s ease',
                opacity: mobileMenuOpen ? 0 : 1
              }}
            />
            <span
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'var(--color-black)',
                transition: 'transform 0.2s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-cream)',
            borderBottom: '2px solid var(--color-black)',
            boxShadow: '0 12px 30px rgba(12, 12, 13, 0.1)',
            padding: '24px 20px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-black)',
                padding: '10px 0',
                borderBottom: '1px solid rgba(12, 12, 13, 0.05)'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <a
              href="#partner"
              onClick={(e) => handleLinkClick(e, '#partner')}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Partner With Us
            </a>
            <a
              href="#guest"
              onClick={(e) => handleLinkClick(e, '#guest')}
              className="btn-secondary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Be a Guest
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: #8C2250 !important;
        }
      `}</style>
    </header>
  );
}
