import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { LiquidButton } from "./ui/liquid-glass-button";

const LOGO_SRC = "/assets/logo.svg";

const navLinks = [
  { label: "Features",     href: "#features"     },
  { label: "How it works", href: "#how-it-works"        },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs",         href: "#faqs"          },
  { label: "Pricing",      href: "#pricing"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Native hardware click listener outside the wrapper container box
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    let target = null;
    try {
      target = document.querySelector(href);
    } catch (err) {
      // Dynamic querySelector catch token
    }

    if (!target) {
      const cleanId = href.replace(/^#/, "");
      target = document.getElementById(cleanId);
    }

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Invisible global tap-capture layer for quick mobile dim closes */}
      <div 
        className={`navbar__overlay-backdrop ${mobileMenuOpen ? "navbar__overlay-backdrop--active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        ref={navRef}
        className={`navbar-wrapper ${scrolled ? "navbar-wrapper--scrolled" : ""}`}
      >
        <nav className={`navbar ${mobileMenuOpen ? "navbar--open" : ""}`}>
          {/* Brand Identity */}
          <a href="/" className="navbar__logo">
            <img
              src={LOGO_SRC}
              alt="Purply"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <span className="navbar__logo-fallback">Purply</span>
          </a>

          {/* Desktop Links Track */}
          <ul className="navbar__links">
            {navLinks.map(({ label, href }) => (
              <li key={href} className="navbar__link-item">
                <a 
                  href={href} 
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Blocks */}
          <div className="navbar__actions">
            <div className="navbar__desktop-cta">
              <LiquidButton
                size="md"
                variant="purple"
                className="w-fit min-w-[140px] h-10 px-6 flex items-center justify-center text-sm font-medium tracking-tight"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist
              </LiquidButton>
            </div>

            {/* Hamburger Toggle */}
            <button 
              className={`navbar__toggle ${mobileMenuOpen ? "navbar__toggle--active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="navbar__toggle-line"></span>
              <span className="navbar__toggle-line"></span>
            </button>
          </div>

          {/* Compact Dropdown Menu */}
          <div className={`navbar__dropdown ${mobileMenuOpen ? "navbar__dropdown--active" : ""}`}>
            <ul className="navbar__dropdown-links">
              {navLinks.map(({ label, href }) => (
                <li key={href} className="navbar__dropdown-item">
                  <a 
                    href={href} 
                    className="navbar__dropdown-link"
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="navbar__dropdown-item navbar__dropdown-cta-wrap">
                <LiquidButton
                  size="md"
                  variant="purple"
                  className="w-full h-11 justify-center text-sm font-semibold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Join Waitlist
                </LiquidButton>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}