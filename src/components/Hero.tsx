import { useState } from "react";
import { LiquidButton } from "./ui/liquid-glass-button";
import "./Hero.css";

const ICON_SRC = "/assets/diamond-icon.png";

export default function Hero() {
  const [iconError, setIconError] = useState(false);

  return (
    <section className="hero glass-bg">
      {/* Purple ambient blobs */}
      <div className="hero__blob"  aria-hidden="true" />
      <div className="hero__blob-2" aria-hidden="true" />

      <div className="hero__layout">

        

        {/* ── Right: content ── */}
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-new">New</span>
            <span className="hero__badge-label">Business Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="hero__title">
            See Exactly Which
            <br />
            <em>Posts</em> are
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
            Making
            <br />
            you <em>Money</em>
          </h1>

          {/* Subtext */}
          <p className="hero__sub">
            Stop posting blind. Track 1on1 connects every sale back to the content that caused it
            <br />
            across YouTube, Instagram, and Twitter. 
          </p>

          {/* Buttons */}
          <div className="hero__btns">
            <LiquidButton
              size="xl"
              variant="purple"
              className="min-w-[200px] px-12" 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist<span style={{ display:'inline-block', transform:'rotate(-45deg)', fontSize:'16px' }}>↗</span>
            </LiquidButton>
            <a href="#pricing" className="btn-outline">
              See Our Pricing
            </a>
          </div>

          {/* Trust row */}
          <div className="hero__trust">
            <span className="hero__trust-label">Trusted by thousands</span>
            <div className="hero__trust-stars">
              <div className="hero__stars">
                {[1,2,3,4,5].map((i) => (
                  <span key={i} className="hero__star">★</span>
                ))}
              </div>
              <span className="hero__trust-score">4.9</span>
            </div>
          </div>
        </div>
        {/* ── Left: hero image ── */}
        {/* <div className="hidden md:block hero__image-col" aria-hidden="true">
          <img src="/assets/hero.png" alt="" className="hero__img" />
        </div> */}

      </div>
    </section>
  );
}
