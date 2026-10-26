import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconCheck, IconWhatsapp, IconDownload, IconArrowRight, IconUsers, IconEye, IconSparkles } from './Icons';

export default function PartnerSection({ onShowToast }) {
  const [selectedPackage, setSelectedPackage] = useState('Episode Partner (KSh 10,000)');
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    packageInterest: 'Episode Partner (KSh 10,000)',
    message: ''
  });

  const handlePackageClick = (pkgName) => {
    setSelectedPackage(pkgName);
    setFormData((prev) => ({ ...prev, packageInterest: pkgName }));
    const formEl = document.getElementById('partner-form-card');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Wandia! I'm interested in partnering with Unfiltered with Wandia.%0A%0A*Business Name:* ${encodeURIComponent(formData.businessName || 'Not specified')}%0A*Contact Person:* ${encodeURIComponent(formData.contactName || 'Not specified')}%0A*Package:* ${encodeURIComponent(formData.packageInterest)}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not specified')}%0A*Message:* ${encodeURIComponent(formData.message || 'Let us discuss an upcoming episode integration.')}`;
    
    window.open(`https://wa.me/${PODCAST_DATA.brand.whatsAppRaw}?text=${text}`, '_blank');
    if (onShowToast) {
      onShowToast("Opening WhatsApp with your partnership inquiry!");
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Partnership Inquiry: ${formData.businessName || 'Brand'} x Unfiltered with Wandia`);
    const body = encodeURIComponent(`Hi Wandia,\n\nI would like to explore sponsorship on Unfiltered with Wandia.\n\nBusiness Name: ${formData.businessName}\nContact: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPackage of Interest: ${formData.packageInterest}\n\nNotes:\n${formData.message}\n\nLooking forward to hearing from you!`);
    window.location.href = `mailto:${PODCAST_DATA.brand.email}?subject=${subject}&body=${body}`;
    if (onShowToast) {
      onShowToast("Opening email client with your sponsorship details!");
    }
  };

  return (
    <section id="partner" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 54px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-grey-muted)' }}>
            BRAND COLLABORATIONS & SPONSORSHIPS
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', marginTop: '8px', marginBottom: '16px', lineHeight: 1.2 }}>
            Put your brand inside conversations people choose to sit through.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#44444A', lineHeight: 1.6 }}>
            Unlike 5-second skippable ads, our audience spends 40 to 70 minutes engaged in genuine Kenyan stories. Your product becomes a natural recommendation, not an interruption.
          </p>
        </div>

        {/* 3 Core Value Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-pink-soft)', color: '#8C2250', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <IconUsers size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Attentive Long-Form Audience</h3>
            <p style={{ fontSize: '0.92rem', color: '#55555C', margin: 0 }}>
              Our viewers actively listen to uncut conversations. Sponsoring an episode guarantees high recall and genuine emotional affinity with your brand.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-pink-soft)', color: '#8C2250', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <IconEye size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Kenya-Led & Mobile-First</h3>
            <p style={{ fontSize: '0.92rem', color: '#55555C', margin: 0 }}>
              With 53% of views directly from Kenya and 67% watching on mobile phones, your placement reaches tech-savvy Kenyan consumers wherever they go.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-pink-soft)', color: '#8C2250', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <IconSparkles size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Authentic Host Integration</h3>
            <p style={{ fontSize: '0.92rem', color: '#55555C', margin: 0 }}>
              Wandia weaves your business, product or story into the episode naturally, delivering credible peer-to-peer endorsements that convert.
            </p>
          </div>
        </div>

        {/* 4 Pricing Package Cards */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Sponsorship Packages</h3>
            <p style={{ color: 'var(--color-grey-muted)', fontSize: '0.95rem' }}>
              Transparent pricing tailored to growing Kenyan businesses, startups, and established enterprises.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              alignItems: 'stretch'
            }}
          >
            {PODCAST_DATA.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={pkg.featured ? 'card-dark' : 'card'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px 26px',
                  border: pkg.featured ? '2px solid var(--color-pink)' : '1px solid var(--color-border)',
                  boxShadow: pkg.featured ? '0 16px 40px rgba(12, 12, 13, 0.25)' : 'var(--shadow-subtle)',
                  transform: pkg.featured ? 'scale(1.02)' : 'none'
                }}
              >
                <div>
                  {/* Tier Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        backgroundColor: pkg.featured ? 'var(--color-pink)' : 'var(--color-cream)',
                        color: 'var(--color-black)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      {pkg.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: pkg.featured ? '#A0A0A8' : 'var(--color-grey-muted)', fontWeight: 600 }}>
                      {pkg.tierTag}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.4rem', color: pkg.featured ? '#FFFFFF' : 'var(--color-black)', marginBottom: '8px' }}>
                    {pkg.name}
                  </h4>

                  <div style={{ fontSize: '2.1rem', fontWeight: 800, color: pkg.featured ? 'var(--color-pink)' : 'var(--color-black)', marginBottom: '14px' }}>
                    {pkg.price}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: pkg.featured ? '#D0D0D5' : '#55555C', marginBottom: '24px', lineHeight: 1.5 }}>
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--color-pink)', flexShrink: 0, marginTop: '2px' }}>
                          <IconCheck size={16} />
                        </span>
                        <span style={{ fontSize: '0.88rem', color: pkg.featured ? '#E8E8EE' : '#333338', lineHeight: 1.45 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handlePackageClick(`${pkg.name} (${pkg.price})`)}
                  className={pkg.featured ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    fontSize: '0.92rem',
                    borderRadius: 'var(--radius-pill)'
                  }}
                >
                  Select {pkg.name}
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ fontSize: '0.92rem', color: 'var(--color-grey-muted)', fontStyle: 'italic' }}>
              Need something custom? We tailor multi-episode partnerships, product placements, and brand series to your budget.
            </span>
          </div>
        </div>

        {/* Case Study Testimonial: BusinessPlus */}
        <div
          className="card"
          style={{
            padding: '36px',
            backgroundColor: 'var(--color-white)',
            border: '2px solid var(--color-black)',
            boxShadow: 'var(--shadow-offset)',
            marginBottom: '64px'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '28px', alignItems: 'center' }} className="testimonial-grid">
            
            {/* Logo & Verification */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <img
                src={PODCAST_DATA.brand.businessPlusLogoUrl}
                alt="BusinessPlus Logo"
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '14px',
                  objectFit: 'contain',
                  border: '1px solid rgba(12,12,13,0.1)'
                }}
              />
              <div>
                <span className="pill pill-pink" style={{ fontSize: '0.75rem', padding: '3px 10px', marginBottom: '4px' }}>
                  PROVEN RESULTS
                </span>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '2px' }}>BusinessPlus Kenya</h4>
                <a
                  href={`https://${PODCAST_DATA.testimonial.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.85rem', color: 'var(--color-grey-muted)', textDecoration: 'underline' }}
                >
                  {PODCAST_DATA.testimonial.website}
                </a>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div>
              <blockquote style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#1A1A1E', lineHeight: 1.6, marginBottom: '12px' }}>
                "{PODCAST_DATA.testimonial.quote}"
              </blockquote>
              <cite style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-black)', fontStyle: 'normal' }}>
                — {PODCAST_DATA.testimonial.author}, BusinessPlus · Software Advertisement Collaboration
              </cite>
            </div>

          </div>
        </div>

        {/* Interactive Inquiry Form & Media Kit Download Box */}
        <div id="partner-form-card" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '36px' }} className="partner-form-layout">
          
          {/* Left Column: Download Media Kit Pitch */}
          <div
            style={{
              backgroundColor: 'var(--color-black)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-pink)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                OFFICIAL DOCUMENTATION
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', marginTop: '8px', marginBottom: '14px' }}>
                Download Our 2026 Media Kit
              </h3>
              <p style={{ color: '#C0C0C8', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Get our complete official breakdown of audience demographics, watch-time graphs, case studies, and full sponsorship terms in a crisp, shareable PDF.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E0E0E8', fontSize: '0.9rem' }}>
                  <IconCheck size={16} className="text-pink" /> 100% Verified YouTube Studio metrics
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E0E0E8', fontSize: '0.9rem' }}>
                  <IconCheck size={16} className="text-pink" /> Clear pricing tiers & delivery milestones
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E0E0E8', fontSize: '0.9rem' }}>
                  <IconCheck size={16} className="text-pink" /> Direct WhatsApp coordination with host
                </div>
              </div>
            </div>

            <a
              href={PODCAST_DATA.brand.mediaKitUrl}
              download="Unfiltered_with_Wandia_Media_Kit.pdf"
              className="btn-primary"
              style={{ padding: '16px 28px', fontSize: '1rem', width: 'fit-content' }}
            >
              <IconDownload size={20} /> Download Media Kit (PDF)
            </a>
          </div>

          {/* Right Column: Interactive Sponsor Inquiry Form */}
          <div className="card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '6px' }}>
              Send a Partnership Inquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-grey-muted)', marginBottom: '24px' }}>
              Fill out this quick form to immediately generate a tailored WhatsApp message or email inquiry.
            </p>

            <form onSubmit={handleWhatsAppSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. BusinessPlus or Nairobi Cafe"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--color-cream)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--color-cream)'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 7..."
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--color-cream)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@business.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--color-cream)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  Package of Interest
                </label>
                <select
                  name="packageInterest"
                  value={formData.packageInterest}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid var(--color-border)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    backgroundColor: 'var(--color-cream)'
                  }}
                >
                  <option value="Basic (KSh 1,500)">Basic — KSh 1,500 (Mention & Description)</option>
                  <option value="Starter (KSh 5,000)">Starter — KSh 5,000 (Product Placement & Ad)</option>
                  <option value="Episode Partner (KSh 10,000)">Episode Partner — KSh 10,000 (30-60s YouTube Ad & Socials)</option>
                  <option value="Main Sponsor (KSh 20,000+)">Main Sponsor — KSh 20,000+ (Full Episode Presenter)</option>
                  <option value="Custom Long-Term Campaign">Custom Long-Term Series Campaign</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  Brief Notes / Product Details
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little bit about what product or service you'd like to feature..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid var(--color-border)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    backgroundColor: 'var(--color-cream)',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="btn-whatsapp"
                  style={{ flex: '1 1 200px' }}
                >
                  <IconWhatsapp size={20} /> Chat on WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="btn-secondary"
                  style={{ flex: '1 1 180px' }}
                >
                  Send via Email
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .testimonial-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .partner-form-layout {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
