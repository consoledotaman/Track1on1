import "./Features.css";

// ── ASSET PLACEHOLDERS ──────────────────────────────────────────────
// Replace each src with your downloaded illustration assets
const ASSETS = {
  arch:          "/assets/features-arch.svg",       // purple arch decoration at top
  energy:        "/assets/feat-energy.png",          // phone + lightning bolt illustration
  analytics:     "/assets/feat-analytics.png",       // chart / dashboard illustration
  messaging:     "/assets/feat-messaging.png",       // envelopes illustration
  globe:         "/assets/feat-globe.png",           // 3D globe illustration
  communication: "/assets/feat-communication.png",   // chat bubbles / phone UI illustration
};

// ── DATA ────────────────────────────────────────────────────────────
const topCards = [
  {
    id: "energy",
    img: ASSETS.energy,
    title: "Energy Optimization",
    desc: "Boost performance while reducing energy usage with smart systems.",
  },
  {
    id: "analytics",
    img: ASSETS.analytics,
    title: "Instant Analytics Dashboard",
    desc: "View critical data in real time and optimize every decision effortlessly.",
  },
  {
    id: "messaging",
    img: ASSETS.messaging,
    title: "Integrated Messaging Hub",
    desc: "Keep conversations seamless and users engaged with built-in messaging.",
  },
];

const bottomCards = [
  {
    id: "globe",
    img: ASSETS.globe,
    title: "Global Network Reliability",
    desc: "Enjoy trusted infrastructure designed for global reach and local stability.",
    wide: true,
  },
  {
    id: "communication",
    img: ASSETS.communication,
    title: "Simplified Communication Flow",
    desc: "Manage conversations and notifications in one intuitive simple interface.",
    wide: false,
  },
];

// ── COMPONENT ────────────────────────────────────────────────────────
export default function Features() {
  return (
    <section className="features" id="features">

      {/* Arch decoration */}
      <div className="features__arch-wrap" aria-hidden="true">
        <img src={ASSETS.arch} alt="" className="features__arch-img" />
        <div className="features__arch-label">Features</div>
      </div>

      {/* Heading */}
      <div className="features__head">
        <h2 className="features__title">
          Unlock the Full Power<br />of Your Platform
        </h2>
        <p className="features__sub">
          Discover tools that elevate your performance and<br />
          maximize growth effortlessly
        </p>
      </div>

      {/* Cards */}
      <div className="features__container">

        {/* Top row — 3 equal columns */}
        <div className="features__row features__row--3">
          {topCards.map((card) => (
            <div key={card.id} className="feat-card">
              <div className="feat-card__img-wrap">
                <img src={card.img} alt={card.title} className="feat-card__img" />
              </div>
              <div className="feat-card__body">
                <h3 className="feat-card__title">{card.title}</h3>
                <p className="feat-card__desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row — wide + narrow */}
        <div className="features__row features__row--2">
          {bottomCards.map((card) => (
            <div
              key={card.id}
              className={`feat-card ${card.wide ? "feat-card--wide" : ""}`}
            >
              <div className="feat-card__img-wrap">
                <img src={card.img} alt={card.title} className="feat-card__img" />
              </div>
              <div className="feat-card__body">
                <h3 className="feat-card__title">{card.title}</h3>
                <p className="feat-card__desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}