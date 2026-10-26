import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconCheck, IconWhatsapp, IconArrowRight, IconHeartHandshake, IconSparkles } from './Icons';

export default function GuestSection({ onShowToast }) {
  const [guestForm, setGuestForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    storySummary: '',
    whyShare: '',
    boundaries: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGuestForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestForm.consent) {
      alert("Please check the consent box to confirm you understand episodes are published on YouTube.");
      return;
    }

    setSubmitted(true);
    if (onShowToast) {
      onShowToast("Application received! Wandia's team will reach out via WhatsApp/email.");
    }
  };

  const handleWhatsAppGuest = () => {
    const text = `Hi Wandia! I would love to be a guest on Unfiltered with Wandia.%0A%0A*Name:* ${encodeURIComponent(guestForm.fullName || 'Potential Guest')}%0A*Location:* ${encodeURIComponent(guestForm.location || 'Kenya')}%0A*Story Idea:* ${encodeURIComponent(guestForm.storySummary || 'I have a story to share on the show.')}`;
    window.open(`https://wa.me/${PODCAST_DATA.brand.whatsAppRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="guest" className="section" style={{ backgroundColor: '#FDFBF9', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-grey-muted)' }}>
            GUEST APPLICATIONS · SHARE YOUR JOURNEY
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', marginTop: '8px', marginBottom: '14px', lineHeight: 1.2 }}>
            Your story could be the one someone needs to hear.
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#44444A', lineHeight: 1.6 }}>
            You do not need to be famous, an influencer, or a public figure. You just need a real story, lived truth, and the courage to share it honestly.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '56px'
          }}
        >
          <div className="card" style={{ padding: '30px 24px', position: 'relative' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-black)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '16px'
              }}
            >
              1
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Apply With Your Story</h3>
            <p style={{ fontSize: '0.92rem', color: '#55555C', margin: 0, lineHeight: 1.55 }}>
              Share a brief overview of what you have lived through—whether about heartbreak, campus hustle, mental health battles, or faith.
            </p>
          </div>

          <div className="card" style={{ padding: '30px 24px', position: 'relative' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-pink)',
                color: 'var(--color-black)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '16px'
              }}
            >
              2
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Private Pre-Chat</h3>
            <p style={{ fontSize: '0.92rem', color: '#55555C', margin: 0, lineHeight: 1.55 }}>
              A friendly 15-minute phone call with Wandia to align on what you feel comfortable sharing and what remains strictly off-limits.
            </p>
          </div>

          <div className="card" style={{ padding: '30px 24px', position: 'relative' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-black)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '16px'
              }}
            >
              3
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Record in Nairobi</h3>
            <p style={{ fontSize: '0.92rem', color: '#55555C', margin: 0, lineHeight: 1.55 }}>
              Join us in our cozy studio for an unhurried, heartfelt conversation. Guests never pay to share their stories.
            </p>
          </div>
        </div>

        {/* Guest Reassurance Callout */}
        <div
          style={{
            backgroundColor: 'var(--color-pink-soft)',
            border: '1.5px solid rgba(242, 159, 196, 0.5)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            maxWidth: '820px',
            margin: '0 auto 40px'
          }}
        >
          <div style={{ color: '#8C2250', flexShrink: 0 }}>
            <IconHeartHandshake size={28} />
          </div>
          <div style={{ fontSize: '0.95rem', color: '#4A1528', lineHeight: 1.5 }}>
            <strong>Our Guest Promise:</strong> You are in complete control of your story. We never sensationalize trauma or push you into uncomfortable territory. We are here to listen with empathy.
          </div>
        </div>

        {/* Guest Application Form Card */}
        <div className="card" style={{ maxWidth: '820px', margin: '0 auto', padding: '40px 36px', border: '1.5px solid var(--color-border)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px'
                }}
              >
                <IconCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>
                Thank You, {guestForm.fullName}!
              </h3>
              <p style={{ fontSize: '1.02rem', color: '#55555C', maxWidth: '520px', margin: '0 auto 24px' }}>
                We have received your story application. Wandia and the Unfiltered production team will review it and contact you via WhatsApp or phone.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline"
                style={{ fontSize: '0.9rem' }}
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={guestForm.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tina Mwangi"
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
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={guestForm.phone}
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
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                    Town / County in Kenya *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={guestForm.location}
                    onChange={handleChange}
                    placeholder="e.g. Nairobi, Nakuru, Eldoret"
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
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={guestForm.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
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
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                  What is your story about? *
                </label>
                <textarea
                  name="storySummary"
                  required
                  rows="3"
                  value={guestForm.storySummary}
                  onChange={handleChange}
                  placeholder="Tell us what you went through or learned (e.g. recovering from heartbreak, navigating church pressure, building a business with no money)..."
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

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                  Why do you feel ready to share it now?
                </label>
                <textarea
                  name="whyShare"
                  rows="2"
                  value={guestForm.whyShare}
                  onChange={handleChange}
                  placeholder="How do you hope this helps someone else who might be in the same position?..."
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

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                  Topics or details you are NOT comfortable discussing
                </label>
                <input
                  type="text"
                  name="boundaries"
                  value={guestForm.boundaries}
                  onChange={handleChange}
                  placeholder="e.g. Specific family names, private medical details, etc."
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

              {/* Consent Checkbox */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '6px' }}>
                <input
                  type="checkbox"
                  id="guest-consent"
                  name="consent"
                  checked={guestForm.consent}
                  onChange={handleChange}
                  style={{ width: '18px', height: '18px', marginTop: '3px', cursor: 'pointer' }}
                />
                <label htmlFor="guest-consent" style={{ fontSize: '0.88rem', color: '#44444A', cursor: 'pointer', lineHeight: 1.45 }}>
                  I understand that <em>Unfiltered with Wandia</em> is recorded in Nairobi and published publicly on YouTube. I confirm that I am sharing willingly. *
                </label>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '12px' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: '1 1 200px' }}
                >
                  Submit Guest Application
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppGuest}
                  className="btn-whatsapp"
                  style={{ flex: '1 1 180px' }}
                >
                  <IconWhatsapp size={20} /> Or Inquire on WhatsApp
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
