import "./Footer.css";

const LOGO_SRC = "/assets/logo.svg";

const NAV_LINKS = [
  { label: "Features",     href: "#features"     },
  { label: "Benefits",     href: "#benefits"     },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs",         href: "#faqs"         },
  { label: "Pricing",      href: "#pricing"      },
];

const SOCIAL_LINKS = [
  { label: "Twitter/X", href: "https://x.com"         },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook",  href: "https://facebook.com"  },
];

export default function Footer() {
  return (
    <footer className="footer glass-bg">

      {/* Top — white section */}
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo-row">
            <div className="footer__logo-wrap">
              <img src={LOGO_SRC} alt="" className="footer__logo"
                onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
            <span className="footer__brand-name">Track 1on1</span>
          </div>
          <p className="footer__tagline">
            Stop posting blind. Track 1on1 connects every sale back to the
            content that caused it — across YouTube, Instagram, and Twitter.
          </p>
          <a href="#pricing" className="footer__cta">Join Waitlist</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Navigation</h4>
          <ul className="footer__col-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}><a href={href} className="footer__link">{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Socials</h4>
          <ul className="footer__col-links">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="footer__link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wordmark area — gradient + giant text */}
      <div className="footer__wordmark-wrap">
        <div className="footer__gradient-overlay" />
        <div className="footer__wordmark-text">TRACK 1ON1</div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">All rights reserved. © 2026</p>
       
        <p className="footer__copy">© Track 1on1</p>
      </div>

    </footer>
  );
}