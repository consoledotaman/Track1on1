import "./SocialProof.css";

const AVATAR_SRC = "/assets/peter-design.jpg";

const COMPANIES = [
  { src: "/assets/logos/instagram.png", alt: "Instagram", name: "Instagram" },
  { src: "/assets/logos/stripe.webp",   alt: "Stripe",    name: "Stripe" },
  { src: "/assets/logos/twitter.webp",  alt: "Twitter",   name: "Twitter" },
  { src: "/assets/logos/whop.webp",     alt: "Whop",      name: "Whop" },
  { src: "/assets/logos/youtube.webp",  alt: "YouTube",   name: "YouTube" },
];

export default function SocialProof() {
  // Duplicate for seamless infinite scroll
  const logos = [...COMPANIES, ...COMPANIES];

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
          {logos.map((company, i) => (
            <span key={i} className="social-proof__logo-item">
              <img
                src={company.src}
                alt={company.alt}
                className="social-proof__logo-img"
              />
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}