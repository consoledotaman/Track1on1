import "./Integrations.css";

// ── ASSET PLACEHOLDERS ───────────────────────────────────────────────
// Add your logo files to /assets/logos/ and update the src fields.
// Each logo should ideally be an SVG or PNG with transparent background.
// Recommended size: height 28–32px, any width.

const LOGOS = [
  { name: "Whop",          src: "/assets/logos/whop.webp"          },
  { name: "Stripe",        src: "/assets/logos/stripe.webp"        },
  { name: "YouTube",       src: "/assets/logos/youtube.webp"       },
  { name: "Twitter / X",   src: "/assets/logos/twitter.webp"       },
  { name: "Instagram",     src: "/assets/logos/instagram.png"     },
  { name: "Skool",         src: "/assets/logos/skool.svg"         },
  { name: "Telegram",      src: "/assets/logos/telegram.svg"      },
  { name: "Cloudflare",    src: "/assets/logos/cloudflare.svg"    },
  { name: "Calendly",      src: "/assets/logos/calendly.svg"      },
  { name: "Close CRM",     src: "/assets/logos/close.svg"         },
  { name: "iClosed",       src: "/assets/logos/iclosed.svg"       },
  { name: "HubSpot",       src: "/assets/logos/hubspot.svg"       },
  { name: "WebinarJam",    src: "/assets/logos/webinarjam.svg"    },
  { name: "AEvent",        src: "/assets/logos/aevent.svg"        },
  { name: "GoHighLevel",   src: "/assets/logos/gohighlevel.svg"   },
  { name: "Teachable",     src: "/assets/logos/teachable.svg"     },
  { name: "Fanbasis",      src: "/assets/logos/fanbasis.svg"      },
  { name: "ClickFunnels",  src: "/assets/logos/clickfunnels.svg"  },
  { name: "Framer",        src: "/assets/logos/framer.svg"        },
  { name: "Kit",           src: "/assets/logos/kit.svg"           },
  { name: "Cal",           src: "/assets/logos/cal.svg"           },
  { name: "Tally",         src: "/assets/logos/tally.svg"         },
  { name: "Typeform",      src: "/assets/logos/typeform.svg"      },
];

// Duplicate so the marquee loops seamlessly
const ROW1 = [...LOGOS, ...LOGOS];
const ROW2 = [...LOGOS].reverse();
const ROW2_DUP = [...ROW2, ...ROW2];

interface LogoItemProps {
  name: string;
  src: string;
}

function LogoItem({ name, src }: LogoItemProps) {
  return (
    <div className="integ__logo-item">
      <img
        src={src}
        alt={name}
        className="integ__logo-img"
        onError={(e) => {
          // fallback: hide broken img, show text name
          e.currentTarget.style.display = "none";
          (e.currentTarget.nextElementSibling as HTMLElement).style.display = "block";
        }}
      />
      <span className="integ__logo-name-fallback">{name}</span>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="integ" id="integrations">
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

        {/* Marquee rows */}
        <div className="integ__marquee-wrap">
          {/* Fade edges */}
          <div className="integ__fade integ__fade--left"  aria-hidden="true" />
          <div className="integ__fade integ__fade--right" aria-hidden="true" />

          {/* Row 1 — left to right */}
          <div className="integ__track integ__track--fwd">
            {ROW1.map((logo, i) => (
              <LogoItem key={i} {...logo} />
            ))}
          </div>

          {/* Row 2 — right to left */}
          <div className="integ__track integ__track--rev">
            {ROW2_DUP.map((logo, i) => (
              <LogoItem key={i} {...logo} />
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