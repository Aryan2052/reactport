// src/components/About.js
import React from 'react';
import profilePic from '../WhatsApp Image 2024-10-17 at 05.56.17_021f040c.jpg';  // Update with your image path
import './About.css';  // Separate CSS file for styling


function About() {
  return (
    <section id="about" className="about-section mars-theme">
      <div className="container">
        <div className="text-container">
          <h2 className="heading">About Me</h2>
          <p className="about-text">
            Hi! I'm [Your Name], a passionate web developer who loves creating modern web applications.
            I specialize in front-end development using technologies like React, JavaScript, and CSS.
            I'm always eager to learn and work on new challenges to sharpen my skills and deliver high-quality projects.
          </p>
        </div>
        <div className="image-container">
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
