'use client';

import React, { useState } from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setMessageSent(false);
    setShowToast(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageSent(true);
        setShowToast(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="kontact">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Kontakt" subtitle="Get in touch" />
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address mb-3">
                <i className="bi bi-geo-alt"></i>
                <h4>Ort:</h4>
                <p>Weltpoststrasse 19 Bern</p>
              </div>
              <div className="email mb-3">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>cyril.scheurmann@students.bfh.ch</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Telefon:</h4>
                <p>+41 079 895 78 69</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit} role="form" className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Dein Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Deine Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Betreff"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows={8}
                  placeholder="Nachricht"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="my-3">
                {loading && <div className="loading">Wird gesendet...</div>}
                {error && <div className="error-message">Fehler beim Senden. Bitte erneut versuchen.</div>}
                {messageSent && <div className="sent-message">Nachricht wurde versendet!</div>}
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Senden...' : 'Nachricht senden'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showToast && (
  <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">Bestätigung</strong>
        <button
          type="button"
          className="custom-close-button"
          onClick={() => setShowToast(false)}
        >
          ×
        </button>
      </div>
      <div className="toast-body">
        Ihre Nachricht wurde erfolgreich versendet!
      </div>
    </div>
  </div>
)}
    </section>
  );
}
