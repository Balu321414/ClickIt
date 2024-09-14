import React from 'react';
import './FirstSection.css';

const FirstSection = () => {
  return (
    <section id="first-section" className="first-section" style={{ backgroundImage: 'url("/images/hero.jpg")' }}>
      <div className="content">
        <h1>Boost <span>Your Brand with</span> <br></br>
          <span>Innovative</span> Digital Marketing</h1>
        <p> Drive Engagement and Conversions with Advanced Digital Marketing Strategies</p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default FirstSection;
