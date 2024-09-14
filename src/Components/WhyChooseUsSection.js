import React from 'react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us-section" className="why-choose-us-section">
      <h2>Why Choose Us?</h2>
      <div className="reasons">
        <div className="reason">
          <h3>Tailored Solutions</h3>
          <p>We provide customized solutions for your business needs.</p>
        </div>
        <div className="reason">
          <h3>Creative Excellence</h3>
          <p>Creative excellence drives our work from concept to execution.</p>
        </div>
        <div className="reason">
          <h3>Client Satisfaction</h3>
          <p>Our main goal is your satisfaction.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
