import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to our website! We are a passionate team committed to bringing you the best products and services.
      </p>

      <div className="section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver top-notch quality at affordable prices, ensuring that each customer is fully satisfied with their experience.
        </p>
      </div>

      <div className="section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, we started with a simple goal — to make shopping easier and more enjoyable. Over the years, we've grown into a trusted platform that you can rely on for all your needs.
        </p>
      </div>

      <div className="section">
        <h2>Meet The Team</h2>
        <p>
          Our team is made up of dedicated professionals who are always ready to help you. We work hard to provide innovative solutions, and we are always looking for ways to improve our services.
        </p>
      </div>

      <div className="footer">
        <p>Contact us: info@ourwebsite.com</p>
      </div>
    </div>
  );
};

export default AboutUs;