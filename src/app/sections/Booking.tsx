'use client';

import React, { useState } from 'react';
import './booking.css';
import SectionTitle from '../components/SectionTitle';

export default function Booking() {
  const intialState = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: '',
    validate: '',
  };

  const [text, setText] = useState(intialState);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: '' });
  };

  const handleSubmitBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // simple form validation
    if (
      text.name === '' ||
      text.email === '' ||
      text.date === '' ||
      text.time === ''
    ) {
      setText({ ...text, validate: 'incomplete' });
      return;
    }

    // simulate request
    setText({ ...text, validate: 'loading' });

    setTimeout(() => {
      setText({ ...text, validate: 'success' });
    }, 1000);
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Profil bestimmen" subtitle="Risk Profile" />

        <form
          onSubmit={handleSubmitBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={text.name}
                className="form-control"
                placeholder="Your Name"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md0">
              <input
                type="email"
                name="email"
                value={text.email}
                className="form-control"
                placeholder="Your Email"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md0">
              <input
                type="tel"
                name="phone"
                value={text.phone}
                className="form-control"
                placeholder="Your Phone"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
                name="date"
                value={text.date}
                className="form-control"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="time"
                name="time"
                value={text.time}
                className="form-control"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                name="people"
                value={text.people}
                className="form-control"
                placeholder="Number of People"
                onChange={handleTextChange}
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              value={text.message}
              rows={5}
              placeholder="Message"
              onChange={handleTextChange}
            ></textarea>
          </div>

          <div className="mb-3">
            {text.validate === 'loading' && (
              <div className="loading">Send Booking...</div>
            )}
            {text.validate === 'incomplete' && (
              <div className="error-message">
                Please fill in all required fields for the booking.
              </div>
            )}
            {text.validate === 'success' && (
              <div className="sent-message">
                Your booking request was sent. We will contact you shortly.
              </div>
            )}
          </div>

          <div className="text-center">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}
