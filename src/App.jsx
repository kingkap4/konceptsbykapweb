import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header theme-header">
        <div className="header-content">
          <h1>KonceptsbyKap</h1>
          <p className="subtitle">UCSC Graduation Photography</p>
          <nav className="nav-links">
            <a href="#portfolio">Portfolio</a>
            <a href="#rates">Rates</a>
            <a href="#booking">Book a Shoot</a>
          </nav>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        <div className="portfolio-wrapper">
          
          {/* Top Landscape Photo */}
          <div className="landscape-container">
            <img src="(2).jpg" alt="Featured landscape grad portrait" className="gallery-img landscape-img" />
          </div>

          {/* 3x4 Portrait Grid */}
          <div className="portrait-grid">
            <img src="(1).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(3).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(4).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(5).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(6).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(7).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(8).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(9).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(10).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(11).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(12).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
            <img src="(13).jpg" alt="Grad portrait" className="gallery-img portrait-img" />
          </div>

        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="section bg-dark-green">
        <h2>Photography Rates</h2>
        <div className="rates-container">
          
          {/* Digital */}
          <div className="rate-card">
            <h3>Digital</h3>
            <ul>
              <li><strong>$50/hr</strong> of shooting</li>
              <li>Unlimited poses and locations (travel time counts towards hourly rate).</li>
              <li><strong>$15</strong> per 5 edited shots</li>
              <li>Includes brightness, skin touch-ups, color grading, etc.</li>
            </ul>
          </div>

          {/* Film */}
          <div className="rate-card">
            <h3>Film</h3>
            <ul>
              <li><strong>$50/hr</strong> of shooting</li>
              <li>Unlimited poses and locations (travel time counts towards hourly rate).</li>
              <li><strong>~$50</strong> for the cost of film roll & development.</li>
              <li>Includes digital scans + physical film strips.</li>
              <li>Black & white and color options available.</li>
            </ul>
          </div>

          {/* Couples */}
          <div className="rate-card">
            <h3>Couples</h3>
            <ul>
              <li><strong>$65/hr</strong> of shooting</li>
              <li>Includes both solo and duo shots in the same session.</li>
              <li>Unlimited poses and locations (travel time counts towards hourly rate).</li>
              <li><strong>$15</strong> per 5 edited shots</li>
              <li>Includes brightness, skin touch-ups, color grading, etc.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section">
        <h2>Book Your Session</h2>
        <p className="booking-subtext">Select a time that works for you using the calendar below.</p>
        <div className="calendar-wrapper">
          <iframe 
            src="https://calendar.app.google/cvXaoUUqs6N3TnUf7" 
            title="Google Calendar Appointment Scheduling"
            style={{ border: 0, width: '100%', height: '600px' }} 
            scrolling="no"
          ></iframe>
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
    </div>
  );
}

export default App;
