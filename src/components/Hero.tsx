import { useState } from "react";
import "./Hero.css";

// Replace with your downloaded asset
const ICON_SRC = "/assets/diamond-icon.png";

export default function Hero() {
  const [iconError, setIconError] = useState(false);

  return (
    <section className="hero">
      {/* Purple ambient blob — top right */}
      <div className="hero__blob" aria-hidden="true" />

      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-new">New</span>
          <span className="hero__badge-label">Business Intelligence</span>
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          Transform your
          <br />
          <em>Data</em> into
          <span className="hero__inline-icon">
            {!iconError ? (
              <img
                src={ICON_SRC}
                alt=""
                onError={() => setIconError(true)}
              />
            ) : (
              <span className="hero__inline-icon-fallback">◆</span>
            )}
          </span>
          Scalable
          <br />
          Actionable <em>Solutions</em>
        </h1>

        {/* Subtext */}
        <p className="hero__sub">
          Unlock insights, drive decisions, and accelerate
          <br />
          your business with intelligent data solutions.
        </p>

        {/* Buttons */}
        <div className="hero__btns">
          <a href="#pricing" className="btn-black">
            Get Template <span className="arrow">↗</span>
          </a>
          <a href="#pricing" className="btn-outline">
            See Our Pricing
          </a>
        </div>

        {/* Trust row */}
        <div className="hero__trust">
          <span className="hero__trust-label">Trusted by thousands</span>
          <div className="hero__trust-stars">
            <div className="hero__stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="hero__star">★</span>
              ))}
            </div>
            <span className="hero__trust-score">4,9</span>
          </div>
        </div>
      </div>
    </section>
  );
}