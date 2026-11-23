"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Contact.module.css";

const PROPERTY_TYPES = [
  "Residential — Flat/Apartment",
  "Residential — House",
  "Commercial — Office",
  "Commercial — Retail",
  "Heritage / Period Property",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="contact" aria-label="Contact Kami Decorators">
      <div className={styles.grid}>
        {/* Left */}
        <div className={styles.info}>
          <ScrollReveal>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-headline">
              Let&apos;s Talk About<br />Your <em>Project</em>
            </h2>
            <p className={styles.body}>
              Whether you&apos;re planning a full refurbishment or a single room
              refresh, we&apos;re ready to discuss your requirements and provide a
              no-obligation quotation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <ul className={styles.contactLinks}>
              <li>
                <a href="tel:+447921519596" className={styles.contactLink} aria-label="Phone number">
                  <span className={styles.arrow} aria-hidden="true">→</span>
                  <span>
                    <strong className={styles.linkLabel}>Telephone</strong>
                    <span className={styles.linkValue}>+44 7921 519596</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:kamidecorators@gmail.com" className={styles.contactLink} aria-label="Email address">
                  <span className={styles.arrow} aria-hidden="true">→</span>
                  <span>
                    <strong className={styles.linkLabel}>Email</strong>
                    <span className={styles.linkValue}>kamidecorators@gmail.com</span>
                  </span>
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Right — Form */}
        <ScrollReveal className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success} role="alert">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="19" stroke="var(--gilt2)" strokeWidth="1.5" />
                <path d="M12 20l6 6 10-12" stroke="var(--gilt2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className={styles.successTitle}>Thank you</h3>
              <p className={styles.successBody}>
                We&apos;ve received your message and will be in touch within one
                business day.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={styles.input}
                    placeholder="Jane Smith"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={styles.input}
                    placeholder="07700 900000"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={styles.input}
                  placeholder="jane@example.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="property" className={styles.label}>Property Type</label>
                <select id="property" name="property" className={styles.select}>
                  <option value="">Select a type…</option>
                  {PROPERTY_TYPES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Tell us about your project *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Describe the work you need — rooms, surfaces, any particular finishes or timeline…"
                />
              </div>

              <button type="submit" className={`btn-primary ${styles.submit}`} disabled={loading}>
                {loading ? "Sending…" : "Send Enquiry"}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                )}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
