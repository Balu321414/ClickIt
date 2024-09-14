import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <>
      <section id="services-section" className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <img src="/images/service1.jpg" alt="SEO Marketing" />
            <h3>SEO Marketing</h3>
            <p>
              Enhance your websites visibility and rank higher on search
              engines.
            </p>
          </div>
          <div className="service">
            <img src="/images/service2.jpg" alt="PPC" />
            <h3>PPC</h3>
            <p>Maximize your ROI with targeted PPC campaigns.</p>
          </div>
          <div className="service">
            <img src="/images/service3.jpg" alt="Content Marketing" />
            <h3>Content Marketing</h3>
            <p>Engage your audience with high-quality, valuable content.</p>
          </div>
          <div className="service">
            <img src="/images/service4.jpg" alt="Email Marketing" />
            <h3>Email Marketing</h3>
            <p>
              Reach your customers directly with personalized email campaigns.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
