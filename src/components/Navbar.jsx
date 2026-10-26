import React, { useState, useEffect } from 'react';
import { PODCAST_DATA } from '../data/podcastData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        transition: 'padding 0.3s ease'
      }}
    >
      <div
        className={`nav-pill-wrapper ${scrolled ? 'nav-scrolled' : 'nav-top'}`}
        style={{
          pointerEvents: 'auto',
          width: scrolled ? 'min(calc(100% - 32px), 1200px)' : '100%',
          height: scrolled ? '62px' : '80px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : '#FFFFFF',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderRadius: scrolled ? '9999px' : '0px',
          border: scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid var(--color-border)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: scrolled ? '0 20px' : '0 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.3s ease'
          }}
          className="nav-inner-container"
        >
          {/* Brand identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <img
              src={PODCAST_DATA.brand.logoUrl}
              alt="Unfiltered with Wandia logo"
              style={{
                width: scrolled ? '38px' : '46px',
                height: scrolled ? '38px' : '46px',
                borderRadius: '50%',
                objectFit: 'cover',
                transition: 'width 0.3s ease, height 0.3s ease'
              }}
            />
            <div>
              <div
                style={{
                  fontSize: scrolled ? '1.02rem' : '1.1rem',
                  fontWeight: 800,
                  color: 'var(--color-black)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  transition: 'font-size 0.3s ease'
                }}
              >
                Unfiltered
              </div>
              <div
                style={{
                  fontSize: scrolled ? '12px' : '13px',
                  fontWeight: 500,
                  color: 'var(--color-grey-muted)',
                  lineHeight: 1,
                  transition: 'font-size 0.3s ease'
                }}
              >
                with Wandia
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: scrolled ? '24px' : '30px',
              transition: 'gap 0.3s ease'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: 'var(--color-black)'
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="#partner"
              onClick={(e) => handleLinkClick(e, '#partner')}
              className="btn-primary desktop-cta"
              style={{
                padding: scrolled ? '7px 18px' : '8px 20px',
                minHeight: scrolled ? '36px' : '38px',
                fontSize: '14px',
                display: 'none',
                borderRadius: '9999px',
                transition: 'all 0.2s ease'
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
                width: scrolled ? '38px' : '42px',
                height: scrolled ? '38px' : '42px',
                borderRadius: scrolled ? '50%' : 'var(--radius-sm)',
                backgroundColor: 'var(--color-surface)',
                gap: '5px',
                transition: 'all 0.2s ease'
              }}
              className="mobile-toggle"
            >
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  backgroundColor: 'var(--color-black)',
                  transition: 'transform 0.2s ease',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                }}
              />
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  backgroundColor: 'var(--color-black)',
                  transition: 'opacity 0.2s ease',
                  opacity: mobileMenuOpen ? 0 : 1
                }}
              />
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  backgroundColor: 'var(--color-black)',
                  transition: 'transform 0.2s ease',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Attached as a card dropdown) */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: scrolled ? '72px' : '80px',
              left: scrolled ? '0' : '0',
              right: scrolled ? '0' : '0',
              backgroundColor: '#FFFFFF',
              borderRadius: scrolled ? '20px' : '0 0 16px 16px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
              padding: '24px 20px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              zIndex: 101
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-black)',
                  padding: '8px 0'
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              <a
                href="#partner"
                onClick={(e) => handleLinkClick(e, '#partner')}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center', minHeight: '40px' }}
              >
                Partner With Us
              </a>
              <a
                href="#guest"
                onClick={(e) => handleLinkClick(e, '#guest')}
                className="btn-secondary"
                style={{ width: '100%', textAlign: 'center', minHeight: '40px' }}
              >
                Be a Guest
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-scrolled {
            width: calc(100% - 20px) !important;
          }
          .nav-inner-container {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }
        }
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
      `}</style>
    </header>
  );
}
