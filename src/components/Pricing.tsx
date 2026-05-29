import { useState } from "react";
import "./Pricing.css";

const PLANS = [
  {
    id: "pro",
    name: "Pro",
    tagline: "Best for solo creators just getting started.",
    monthly: { price: 149, original: 298, saving: "50% off", annual: 470 },
    yearly:  { price: 119, original: 238, saving: "60% off", annual: 376 },
    guarantee: "Make $3,278+ or you don't pay (11× your investment)",
    featured: false,
    features: [
      "1 YouTube channel",
      "1 Instagram account",
      "1 Twitter (X) account",
      "Up to 5,000 clicks / month",
      "150 Smart Tracking Links",
      "Up to 3 team members",
      "Auto-deployed Smart Links — no setup needed",
      "15,000 Twitter (X) Auto DMs / month",
      "15,000 Instagram Auto DMs / month",
      "Full revenue attribution per post",
      "YouTube click timestamp tracking",
      "Visitor behavior tracking (scroll, watch time, hover)",
      "Multi-video buyer journey tracking",
      "Per-video financial reports",
      "Basic reporting dashboard",
      "Exportable reports",
      "Exit-intent intelligence",
      "Lead source tagging",
    ],
  },
  {
    id: "max",
    name: "Max",
    tagline: "Best for creators scaling to multiple platforms.",
    monthly: { price: 298, original: 498, saving: "40% off", annual: 1239 },
    yearly:  { price: 238, original: 398, saving: "52% off", annual: 991 },
    guarantee: "Make $4,980+ or you don't pay (10× your investment)",
    featured: true,
    features: [
      "Everything in Pro, plus:",
      "Up to 3 YouTube channels",
      "Up to 2 Instagram accounts (30,000 DMs / month)",
      "Up to 2 Twitter (X) accounts (30,000 DMs / month)",
      "Up to 25,000 clicks / month",
      "350 Smart Tracking Links",
      "Up to 10 team members",
      "Advanced reporting dashboard",
      "Revenue trends & performance over time",
      "Top-performing content insights across all platforms",
      "Lead journey depth analysis",
      "Competitor content intelligence",
      "Content Outliner — ready-made post outlines",
      "Priority tracking processing",
      "Audience segmentation (buyers vs hesitant vs wrong fit)",
      "VSL drop-off map",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    tagline: "Best for agencies managing multiple creators.",
    monthly: { price: 908, original: 1298, saving: "30% off", annual: 1779 },
    yearly:  { price: 726, original: 1038, saving: "44% off", annual: 1423 },
    guarantee: "Make $10,384+ or you don't pay (8× your investment)",
    featured: false,
    features: [
      "Everything in Max, plus:",
      "10+ YouTube channels",
      "Unlimited Instagram & Twitter accounts",
      "100,000+ clicks / month",
      "500–2,000+ Smart Tracking Links",
      "5–20 team members",
      "Multi-client dashboard",
      "45,000 Twitter (X) Auto DMs / month",
      "45,000 Instagram Auto DMs / month",
      "Agency view across all accounts",
      "Advanced filtering & attribution",
      "Historical performance tracking",
      "White-label reporting for clients",
      "Custom Smart Link domains",
      "Dedicated onboarding call",
      "Priority support — response within 2 hours",
      "Quarterly strategy review call",
    ],
  },
];

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <svg className="pricing__check-icon" width="15" height="12" viewBox="0 0 15 12" fill="none">
      <path
        d="M1 6L5.5 10.5L14 1"
        stroke={featured ? "#6d28d9" : "#8B5CF6"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="pricing glass-bg">

      {/* Section heading */}
      <div className="pricing__head">
        <span className="pricing__section-label">Pricing</span>
        <h2 className="pricing__section-title">
          Simple, transparent pricing
        </h2>
        <p className="pricing__section-sub">
          Choose the plan that fits your growth stage. Cancel anytime.
        </p>
      </div>

      {/* Toggle */}
      <div className="pricing__toggle">
        <span className={`pricing__toggle-label ${!yearly ? "pricing__toggle-label--active" : ""}`}>Monthly</span>

        <button
          className="pricing__switch"
          onClick={() => setYearly(v => !v)}
          aria-label="Toggle billing"
        >
          <span className={`pricing__knob ${yearly ? "pricing__knob--on" : ""}`} />
        </button>

        <span className={`pricing__toggle-label pricing__yearly-badge ${yearly ? "pricing__yearly-badge--active" : ""}`}>
          Yearly (-20%)
        </span>
      </div>

      {/* Cards */}
      <div className="pricing__grid">
        {PLANS.map((plan) => {
          const b = yearly ? plan.yearly : plan.monthly;
          return (
            <div key={plan.id} className={`pricing__card ${plan.featured ? "pricing__card--featured" : ""}`}>
              <div className="pricing__card-body">

                <h3 className="pricing__name">{plan.name}</h3>
                <p className="pricing__tagline">{plan.tagline}</p>
                <div className={`pricing__divider ${plan.featured ? "pricing__divider--light" : ""}`} />

                <div className="pricing__price-row">
                  <span className="pricing__price">${b.price}</span>
                </div>
                <p className="pricing__price-sub">
                  per month —{" "}
                  <span className="pricing__original">${b.original}</span>{" "}
                  {b.saving}
                </p>
                <p className={`pricing__annual ${plan.featured ? "pricing__annual--light" : ""}`}>
                  ${b.annual.toLocaleString()} Annually · Save 20%
                </p>

                <a href="#" className="pricing__cta">See it live ↗</a>

                <p className={`pricing__guarantee ${plan.featured ? "pricing__guarantee--light" : ""}`}>
                  💰 Our guarantee: {plan.guarantee}
                </p>

                <div className={`pricing__divider ${plan.featured ? "pricing__divider--light" : ""}`} />

                <p className={`pricing__includes ${plan.featured ? "pricing__includes--light" : ""}`}>Includes:</p>
                <ul className="pricing__features">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="pricing__feature-row">
                      <CheckIcon featured={plan.featured} />
                      <span className={`pricing__feature-text ${plan.featured ? "pricing__feature-text--light" : ""}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}