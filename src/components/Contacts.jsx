import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvzbqdp"); // Your Formspree form ID

  // Success state - show beautiful success message
  if (state.succeeded) {
    return (
      <section id="contact" className="animate-on-scroll visible">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Message Sent! 🎉</div>
            <h2 className="section-title">Thank You!</h2>
            <p className="section-subtitle">
              Your message has been sent successfully. I'll get back to you soon!
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="glass-card">
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✨</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Message Delivered!</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Thanks for reaching out. I typically respond within 24 hours.
                </p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            </div>

            {/* Your existing contact info */}
            <div className="glass-card contact-info">
              <h3>Let's Connect</h3>
              {/* ... existing contact items ... */}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to collaborate on your next project? Let's build something amazing together
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form with Formspree */}
          <div className="glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                  placeholder="Enter your name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                  placeholder="your.email@example.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  required
                  placeholder="Tell me about your project or just say hello!"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting} 
                className={`btn btn-primary ${state.submitting ? 'submitting' : ''}`}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                  <path d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.74a.5.5 0 0 1-.708.233L8.397 6.982l-1.991 3.983a.5.5 0 0 1-.708.233L1.777 9.207a.5.5 0 0 1-.11-.54L4.605.686A.5.5 0 0 1 5.337.5L15.854.146zM5.1 1.481l-2.35 6.706 3.543 1.418 2.35-6.706L5.1 1.481z" />
                </svg>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Show error state */}
              {state.errors && state.errors.length > 0 && (
                <div className="status-message error">
                  Oops! There was a problem sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="glass-card contact-info">
            <h3>Let's Connect</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.36c-.58.146-1.195-.149-1.372-.731a4.518 4.518 0 0 1-.153-2.056c.145-.58.731-.727 1.31-.58l1.794.368a.678.678 0 0 0 .731-.122l1.034-1.034a.678.678 0 0 0-.063-1.015L10.954 3.846a.678.678 0 0 0-.58-.122L8.57 4.08c-.58.146-1.195-.149-1.372-.731a4.518 4.518 0 0 1-.153-2.056c.145-.58.731-.727 1.31-.58l1.794.368" />
                </svg>
              </div>
              <div className="contact-details">
                <strong>Phone</strong>
                <span>9043521716</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </div>
              <div className="contact-details">
                <strong>Email</strong>
                <span>akilanb247@example.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <div className="contact-details">
                <strong>Location</strong>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
