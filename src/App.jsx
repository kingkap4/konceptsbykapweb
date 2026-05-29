import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

// --- RATE PACKAGES DATA ---
const ratePackages = [
  {
    id: 'digital',
    title: 'Digital',
    shortPrice: '$50/hr',
    shortDesc: '$15 per 5 edited photos',
    details: [
      'Unlimited poses & locations (travel time counts towards hourly rate).',
      '$50/hr of shooting.',
      '$15 per 5 edited shots.',
      'Includes brightness, skin touch-ups, color grading, etc.',
      'Optional digicam lens available for +$5/hr.',
      'Raw photos are not available.'
    ]
  },
  {
    id: 'film',
    title: 'Film',
    shortPrice: '$50/hr',
    shortDesc: 'Scans & physical strips included.',
    details: [
      '$50/hr of shooting (travel time counts towards hourly rate).',
      '~$50 for the cost of film roll & development.',
      'Includes digital scans + physical film strips.',
      'Black & white and color options available.',
      'Unlimited poses and locations.'
    ]
  },
  {
    id: 'combo',
    title: 'Digital + Film Combo',
    shortPrice: '$55/hr',
    shortDesc: 'The best of both worlds.',
    details: [
      '$55/hr of shooting (travel time counts towards hourly rate).',
      '$5 per edited digital photo.',
      '+ Cost of film roll & development.',
      'Includes all standard editing (brightness, skin touch-ups, color grading).'
    ]
  },
  {
    id: 'couples',
    title: 'Couples',
    shortPrice: '$65/hr',
    shortDesc: 'Solo and duo shots included.',
    details: [
      '$65/hr of shooting (travel time counts towards hourly rate).',
      'Includes both solo and duo shots in the same session.',
      '$15 per 5 edited shots.',
      'Unlimited poses and locations.',
      'Includes brightness, skin touch-ups, color grading, etc.'
    ]
  },
  {
    id: 'team',
    title: 'Team Photos',
    shortPrice: '$65/hr',
    shortDesc: 'Perfect for clubs and organizations.',
    details: [
      '$65/hr of shooting.',
      '$25 per 5 edited photos.',
      'Includes individual portraits of all team members + group team photos.',
      'Includes brightness, skin touch-ups, color grading.'
    ]
  },
  {
    id: 'headshot',
    title: 'LinkedIn / Professional',
    shortPrice: '$20 flat rate',
    shortDesc: 'Simple and quick headshots.',
    details: [
      '$20 flat rate.',
      '20-minute session at 1 location.',
      '3 to 5 fully edited photos included.',
      'Includes brightness, skin touch-ups, color grading, etc.',
      'Optional: +$5 for lighting equipment usage (chosen location must accommodate this).'
    ]
  }
];

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="app-container">

      {/* Header */}
      <header className="header theme-header">
        <div className="header-content">
          <h1>KonceptsbyKap</h1>
          <p className="subtitle">UCSC Graduation Photography</p>
          <nav className="nav-links">
            <a href="#portfolio">Portfolio</a>
            <a href="#rates">Rates</a>
            <a href="#about">About</a>
            <a href="#booking">Book a Shoot</a>
          </nav>
        </div>
      </header>

      {/* Portfolio */}
      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        <div className="portfolio-wrapper">

          <div className="landscape-container">
            <img
              src="/-- (13).jpg"
              alt="Featured landscape grad portrait"
              className="gallery-img landscape-img lightbox-trigger"
              onClick={() => setSelectedImg("/-- (13).jpg")}
            />
          </div>

          <div className="portrait-grid">
            {[10,12,7,1,8,9,11,2,4,5,6,3].map((n) => (
              <img
                key={n}
                src={`/-- (${n}).jpg`}
                alt="Grad portrait"
                className="gallery-img portrait-img lightbox-trigger"
                onClick={() => setSelectedImg(`/-- (${n}).jpg`)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="section bg-dark-green">
        <h2>Photography Rates</h2>
        <p className="rates-disclaimer">
          Please message if you would like to negotiate rates. Click any package to view details and book.
        </p>

        <div className="rates-grid">
          {ratePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="rate-card clickable-card"
              onClick={() => setSelectedPackage(pkg)}
            >
              <h3>{pkg.title}</h3>
              <p className="rate-price">{pkg.shortPrice}</p>
              <p className="rate-desc">{pkg.shortDesc}</p>
              <span className="card-hint">Click for details &amp; booking &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
              Hi, I'm Kapeeshwar! I am currently a 3rd-year undergraduate studying Astrophysics at the{' '}
              <strong>University of California, Santa Cruz</strong>.
            </p>
            <p>
              While I spend a lot of my time studying Astronomy, I have also spent the last{' '}
              <strong>10 years</strong> honing my skills in photography and portrait shooting. Blending
              the technical precision of science with the creative eye of photography is my passion.
            </p>
            <p>
              My astrophysics research is concentrated in optics. I have previously had the incredible
              opportunity to work with the <strong>Keck Primary Telescope</strong> at{' '}
              <strong>W. M. Keck Observatory</strong> in Hawaii, and I am currently working with{' '}
              <strong>DESI</strong> (the Dark Energy Spectroscopic Instrument).
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="section bg-dark-green">
        <h2>Book Your Session</h2>
        <p className="booking-subtext">
          Select a time that works for you below. If the calendar doesn't load or you cannot book on
          the website, please click the link below to view the calendar directly.
        </p>

        <div className="calendar-actions">
          <a
            href="https://calendar.app.google/cvXaoUUqs6N3TnUf7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Click here to see calendar
          </a>
        </div>

        <div className="calendar-wrapper">
          <iframe
            src="https://calendar.app.google/cvXaoUUqs6N3TnUf7"
            title="Google Calendar Appointment Scheduling"
            style={{ border: 0, width: '100%', height: '600px' }}
            scrolling="yes"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>Connect With Me</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/konceptsbykap/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:ksharm33@ucsc.edu">Email</a>
        </div>
        <p>&copy; {new Date().getFullYear()} KonceptsbyKap. All rights reserved.</p>
      </footer>

      {/* Image Lightbox */}
      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <span className="close-lightbox">&times;</span>
          <img src={selectedImg} alt="Enlarged view" className="lightbox-active-img" />
        </div>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <div className="lightbox-overlay" onClick={() => setSelectedPackage(null)}>
          <div className="package-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedPackage(null)}>&times;</span>
            <h3 className="modal-title">{selectedPackage.title}</h3>
            <h4 className="modal-price">{selectedPackage.shortPrice}</h4>
            <ul className="modal-details">
              {selectedPackage.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="modal-actions">
              <a
                href="https://calendar.app.google/cvXaoUUqs6N3TnUf7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary modal-btn"
              >
                Book This Package
              </a>
            </div>
          </div>
        </div>
      )}

      <Analytics />
    </div>
  );
}

export default App;
