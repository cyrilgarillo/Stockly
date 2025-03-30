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

  const handleTextChange = (e: Event | any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: '' });
  };
  
  const handleSubmitBooking = async (e: Event | any) => {
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
  
  // POST request sent
try {
    const response = await fetch('http://localhost:3000/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(text),
    });
  
    setText({ ...text, validate: 'loading' });
  
    const result = await response.json();
    if (result) {
      setText({ ...text, validate: 'success' });
      // console.log('Success:', result);
    }
  } catch (error) {
    setText({ ...text, validate: 'error' });
    // console.error('Error:', error);
  }};


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
    <div className="loading">Send Booking</div>
  )}
  {text.validate === 'incomplete' && (
    <div className="error-message">
      Please fill in all above details for booking a table
    </div>
  )}
  {text.validate === 'success' && (
    <div className="sent-message">
      Your booking request was sent. We will call back or send an
      Email to confirm your reservation. Thank you!
    </div>
  )}
  {text.validate === 'error' && (
    <div className="error-message">Server Error</div>
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