// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile">LinkedIn Profile</a></p>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px 20px',
    backgroundColor: '#fff',
    marginBottom: '20px'
  }
};

export default Contact;
