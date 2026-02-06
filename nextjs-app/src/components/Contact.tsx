"use client";

import { FormEvent } from "react";
import SocialLinks from "./SocialLinks";
import SectionAnimator from "./SectionAnimator";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Form submitted:", data);
    alert("Thank you for your message! We will get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <SectionAnimator>
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <p>Email: contact@mybeworld.com</p>
            <SocialLinks />
          </div>
        </div>
      </section>
    </SectionAnimator>
  );
}
