import "./Navbar.css";

// Replace with your downloaded logo asset
const LOGO_SRC = "/assets/logo.svg";

const navLinks = [
  { label: "Features",     href: "#features"     },
  { label: "Benefits",     href: "#benefits"     },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs",         href: "#faqs"         },
  { label: "Pricing",      href: "#pricing"      },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img
          src={LOGO_SRC}
          alt="Purply"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) {
              fallback.style.display = "block";
            }
          }}
        />
        {/* Fallback text logo — hidden once real asset loads */}
        <span className="navbar__logo-fallback">Purply</span>
      </a>

      <ul className="navbar__links">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="navbar__link">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#pricing" className="navbar__cta">
        Get Template
      </a>
    </nav>
  );
}