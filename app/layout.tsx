
import Link from 'next/link';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: "Ajay Prakash Pathak - Member of Parliament, Uttar Pradesh",
  description: "Serving the Nation, Shaping Tomorrow"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600&family=Noto+Serif+Devanagari:wght@600;700;900&family=Noto+Sans+Devanagari:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: `<div id="lightbox">
  <div class="lightbox-content">
    <button class="lightbox-close" id="lightboxClose"><i class="fas fa-times"></i></button>
    <div class="lightbox-icon" id="lightboxIcon"><i class="fas fa-image"></i></div>` }} />

        {/* Mobile Menu */}
        <nav className="mobile-menu" id="mobileMenu">
          <button className="mobile-close" id="mobileClose"><i className="fas fa-times"></i></button>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/initiatives">Initiatives</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/news">News</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/events">Events</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/get-involved">Get Involved</Link>
        </nav>

        {/* Navbar */}
        <nav id="navbar">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <div className="nav-logo-icon">AP</div>
              <div>
                <div className="nav-logo-text">Ajay Prakash Pathak</div>
                <div className="nav-logo-sub">Member of Parliament · Uttar Pradesh</div>
              </div>
            </Link>
            <div className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/initiatives">Initiatives</Link>
              <Link href="/achievements">Achievements</Link>
              <Link href="/news">News</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/events">Events</Link>
              <Link href="/get-involved">Get Involved</Link>
            </div>
            <div className="nav-cta">
              <Link href="/get-involved" className="btn btn-primary"><i className="fas fa-handshake-angle"></i> Join the Movement</Link>
            </div>
            <button className="hamburger" id="hamburger" aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>

        {children}

        <div dangerouslySetInnerHTML={{ __html: `<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo" style="margin-bottom:16px">
          <div class="nav-logo-icon">AP</div>
          <div>
            <div class="nav-logo-text">Ajay Prakash Pathak</div>
            <div class="nav-logo-sub">Member of Parliament</div>
          </div>
        </div>
        <p>Dedicated to transparent governance, inclusive development, and the upliftment of every citizen. Building an India where development reaches the last mile.</p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
        </div>
        <div style="margin-top:20px">
          <div class="footer-col-title">Newsletter</div>
          <p style="font-size:0.8rem;color:rgba(255,255,255,0.45);margin-bottom:8px">Stay updated with latest news and announcements.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="your@email.com" aria-label="Email for newsletter">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Quick Links</div>
        <div class="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About Ajay Prakash Pathak</a>
          <a href="#initiatives">Key Initiatives</a>
          <a href="#achievements">Achievements</a>
          <a href="#news">News &amp; Media</a>
          <a href="#gallery">Photo &amp; Video</a>
          <a href="#events">Events &amp; Rallies</a>
          <a href="#getinvolved">Get Involved</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Initiatives</div>
        <div class="footer-links">
          <a href="#">Education &amp; Literacy</a>
          <a href="#">Healthcare Access</a>
          <a href="#">Infrastructure</a>
          <a href="#">Women Empowerment</a>
          <a href="#">Youth Development</a>
          <a href="#">Environmental Programs</a>
          <a href="#">Smart City Mission</a>
          <a href="#">Solar Village Program</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Office Address</div>
        <div class="footer-contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>Constituency Office: 14 Hazratganj Road, Lucknow — 226001, Uttar Pradesh</span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-building"></i>
          <span>Delhi Office: Room No. 142, Parliament House Annexe, New Delhi — 110001</span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-phone"></i>
          <span>+91 522 266 1234 (Lucknow)<br>+91 11 2300 5678 (Delhi)</span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-envelope"></i>
          <span>info@rajendrachauhan.in<br>grievance@rajendrachauhan.in</span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-clock"></i>
          <span>Jan Sunwai: Every Monday, 10AM–1PM</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Rajendra Singh Chauhan. All rights reserved. | Paid for by the Official Campaign Committee</span>
      <div style="display:flex;gap:16px">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Disclaimer</a>
      </div>
    </div>
  </div>
  <div class="footer-tricolor"><span></span><span></span><span></span></div>
</footer>` }} />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
