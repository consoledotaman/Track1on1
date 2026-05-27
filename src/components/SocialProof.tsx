import "./SocialProof.css";

// Replace with real avatar asset
const AVATAR_SRC = "/assets/peter-design.jpg";

const companies = ["Own Corp", "Clonor AI", "Pulse AI"];

export default function SocialProof() {
  // Duplicate for seamless infinite scroll
  const logos = [...companies, ...companies, ...companies];

  return (
    <section className="social-proof">
      {/* Stars */}
      <div className="social-proof__stars" aria-label="5 stars">
        {[1,2,3,4,5].map(i => (
          <span key={i} className="social-proof__star">★</span>
        ))}
      </div>

      {/* Big quote */}
      <blockquote className="social-proof__quote">
        "Finally, a Solution our{" "}
        <br />
        <em>Entire Team</em> Actually Uses."
      </blockquote>

      {/* Author pill */}
      <div className="social-proof__author">
        <img
          src={AVATAR_SRC}
          alt="Peter Design"
          className="social-proof__avatar"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
          }}
        />
        <div className="social-proof__avatar-fallback" aria-hidden="true">PD</div>
        <span className="social-proof__author-name">Peter Design – CEO</span>
      </div>

      {/* Trusted by */}
      <p className="social-proof__trusted-label">Trusted by many companies</p>

      {/* Logo marquee */}
      <div className="social-proof__marquee-wrap">
        <div className="social-proof__marquee">
          {logos.map((name, i) => (
            <span key={i} className="social-proof__logo-item">
              <span className="social-proof__logo-icon">✳</span>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}