import "./Comparison.css";

// Replace with your logo asset
const LOGO_SRC = "/assets/logo.svg";

const US = [
  "Smart Links auto-deployed for every post — instantly.",
  "Tie every sale back to the exact post that caused it.",
  "YouTube click timestamps + scroll, watch, and exit tracking.",
  "Smart exit popups fire based on visitor behavior — not guesses.",
  "Spy on any competitor's top posts — outlines generated for you.",
];

const OTHERS = [
  "Manual UTMs — build every link by hand.",
  "Platform-only attribution — never tells you which post sold.",
  "No video watch time, scroll depth, or click timestamps.",
  "Generic popups — same message for every visitor.",
  "No competitor intel. No content outlines. You're on your own.",
];

export default function Comparison() {
  return (
    <section className="comparison" id="comparison">
      <div className="comparison__container">

        {/* ── Left card — Track 1on1 ── */}
        <div className="comparison__card comparison__card--us">
          {/* Gradient border wrapper */}
          <div className="comparison__gradient-border" aria-hidden="true" />

          <div className="comparison__card-inner">
            {/* Header */}
            <div className="comparison__header">
              <div className="comparison__logo-wrap">
                <img
                  src={LOGO_SRC}
                  alt=""
                  className="comparison__logo"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                  }}
                />
                <div className="comparison__logo-fallback" aria-hidden="true">◆</div>
              </div>
              <h3 className="comparison__brand">Track 1on1</h3>
            </div>

            {/* Rows */}
            <ul className="comparison__list">
              {US.map((text, i) => (
                <li key={i} className="comparison__row">
                  <span className="comparison__check" aria-hidden="true">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 5.5L5 9.5L13 1" stroke="#8554FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="comparison__text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right card — Others ── */}
        <div className="comparison__card comparison__card--others">
          <div className="comparison__card-inner">
            <div className="comparison__header">
              <h3 className="comparison__brand comparison__brand--others">Others</h3>
            </div>

            <ul className="comparison__list">
              {OTHERS.map((text, i) => (
                <li key={i} className="comparison__row comparison__row--others">
                  <span className="comparison__cross" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 1L11 11M11 1L1 11" stroke="#B5B5B5" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="comparison__text comparison__text--others">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}