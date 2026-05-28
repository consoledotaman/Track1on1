import "./Integrations.css";

const LOGOS = [
  { name: "Whop",         src: "/assets/logos/whop.png"          },
  { name: "Stripe",       src: "/assets/logos/stripe.png"        },
  { name: "YouTube",      src: "/assets/logos/youtube.png"       },
  { name: "Twitter / X",  src: "/assets/logos/twitter.webp"      },
  { name: "Instagram",    src: "/assets/logos/instagram.png"     },
  { name: "Skool",        src: "/assets/logos/skool.png"         },
  { name: "Telegram",     src: "/assets/logos/telegram.png"      },
  { name: "Cloudflare",   src: "/assets/logos/cloudflare.svg"    },
  { name: "Calendly",     src: "/assets/logos/calendly.png"      },
  { name: "Close CRM",    src: "/assets/logos/close.png"         },
  { name: "iClosed",      src: "/assets/logos/iclosed.svg"       },
  { name: "HubSpot",      src: "/assets/logos/hubspot.svg"       },
  { name: "WebinarJam",   src: "/assets/logos/webinarjam.png"    },
  { name: "AEvent",       src: "/assets/logos/aevent.png"        },
  { name: "GoHighLevel",  src: "/assets/logos/gohighlevel.png"   },
  { name: "Teachable",    src: "/assets/logos/teachable.png"     },
  { name: "Fanbasis",     src: "/assets/logos/fanbasis.png"      },
  { name: "ClickFunnels", src: "/assets/logos/clickfunnels.png"  },
  { name: "Framer",       src: "/assets/logos/framer.png"        },
  { name: "Kit",          src: "/assets/logos/kit.png"           },
  { name: "Cal",          src: "/assets/logos/cal.svg"           },
  { name: "Tally",        src: "/assets/logos/tally.png"         },
  { name: "Typeform",     src: "/assets/logos/typeform.png"      },
];

// Duplicate for seamless infinite scroll matching your SocialProof file logic
const logosTrack = [...LOGOS, ...LOGOS];

export default function Integrations() {
  return (
    <section className="integ glass-bg" id="integrations">
      <div className="integ__container">

        {/* Heading */}
        <div className="integ__head">
          <span className="integ__label">Integrations</span>
          <h2 className="integ__title">
            It plugs into every tool<br />you already use
          </h2>
          <p className="integ__sub">
            So every click, lead, and sale is tracked automatically
            from the moment it happens.
          </p>
        </div>

        {/* Logo marquee layout exactly from your SocialProof code */}
        <div className="social-proof__marquee-wrap">
          <div className="social-proof__marquee">
            {logosTrack.map((company, i) => (
              <span key={i} className="social-proof__logo-item">
                <img
                  src={company.src}
                  alt={company.name}
                  className="social-proof__logo-img"
                  style={{ opacity: 0, transition: 'opacity 0.2s' }}
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '0.65';
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {company.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="integ__cta">
          <p className="integ__cta-question">Don't see your tool?</p>
          <a href="mailto:hello@purply.com" className="integ__cta-link">
            Request an integration →
          </a>
          <p className="integ__cta-note">
            Tell us which tool you use and we'll prioritize it in our next release.
          </p>
        </div>

      </div>
    </section>
  );
}