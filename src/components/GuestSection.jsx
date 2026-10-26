import React, { useState } from 'react';
import { PODCAST_DATA } from '../data/podcastData';
import { IconCheck, IconWhatsapp } from './Icons';

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
    <section id="guest" className="section" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <div className="container">
        
        {/* Section Heading without Eyebrow, strictly max 2 lines */}
        <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'var(--type-heading)', marginBottom: '14px', lineHeight: 1.15 }}>
            Share your story.
          </h2>
          <p className="text-lead" style={{ color: 'var(--color-grey-muted)' }}>
            You do not need to be famous or an influencer. You just need a lived truth and the courage to speak openly.
          </p>
        </div>

        {/* 3 Step Editorial Progression (Unboxed, pure typography) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}
        >
          <div style={{ borderLeft: '3px solid var(--color-black)', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Apply with your story</h3>
            <p style={{ fontSize: 'var(--type-body)', color: '#3A3A42', margin: 0 }}>
              Share an overview of what you have lived through—breakups, mental health battles, faith pivots, or entrepreneurship.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid var(--color-black)', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Private pre-chat</h3>
            <p style={{ fontSize: 'var(--type-body)', color: '#3A3A42', margin: 0 }}>
              A friendly 15-minute phone call with Wandia to align on what you feel comfortable discussing and what stays private.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid var(--color-black)', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Schedule the recording</h3>
            <p style={{ fontSize: 'var(--type-body)', color: '#3A3A42', margin: 0 }}>
              Join us in our studio for an unhurried, heartfelt conversation. Guests never pay to share their stories.
            </p>
          </div>
        </div>

        {/* Guest Reassurance Callout (Flat tone surface) */}
        <div
          style={{
            backgroundColor: 'var(--color-pink-soft)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 28px',
            maxWidth: '820px',
            marginBottom: '36px'
          }}
        >
          <div style={{ fontSize: 'var(--type-body)', color: '#3A1020', lineHeight: 1.55 }}>
            <strong>Our Guest Promise:</strong> You are in complete control of your story. We never sensationalize trauma or push you into uncomfortable territory. We are here to listen with empathy.
          </div>
        </div>

        {/* Guest Application Form Card */}
        <div className="surface-white" style={{ maxWidth: '820px', padding: '40px 36px' }}>
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
                Thank you, {guestForm.fullName}!
              </h3>
              <p style={{ fontSize: 'var(--type-body)', color: '#4E4E56', maxWidth: '520px', margin: '0 auto 24px' }}>
                We have received your story application. Wandia and the Unfiltered production team will review it and contact you via WhatsApp or phone.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
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
                      padding: '13px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-black)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
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
                      padding: '13px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-black)'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
                    Town / County in Kenya *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={guestForm.location}
                    onChange={handleChange}
                    placeholder="Your town or county"
                    style={{
                      width: '100%',
                      padding: '13px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-black)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
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
                      padding: '13px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-black)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
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
                    padding: '13px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-black)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
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
                    padding: '13px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-black)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
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
                    padding: '13px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-black)'
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
                <label htmlFor="guest-consent" style={{ fontSize: '14px', color: '#44444A', cursor: 'pointer', lineHeight: 1.45 }}>
                  I understand that Unfiltered with Wandia is recorded in studio and published publicly on YouTube. I confirm that I am sharing willingly. *
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
