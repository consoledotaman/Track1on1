import { useEffect, useRef, useState } from "react";
import "./Features.css";

const ASSETS = {
  arch:          "/assets/features-arch.png",       
  energy:        "/assets/feat-energy.png",          
  analytics:     "/assets/feat-analytics.png",       
  messaging:     "/assets/feat-messaging.png",       
  globe:         "/assets/feat-globe.png",           
  communication: "/assets/feat-communication.png",   
};

const topCards = [
  {
    id: "attribution",
    img: ASSETS.energy, 
    title: "See Which Post Made You Money",
    desc: "Every time someone buys your course, Track 1on1 shows you exactly which Instagram reel, YouTube video, or tweet sent them to you. No more guessing which content is actually working.",
  },
  {
    id: "spy",
    img: ASSETS.analytics, 
    title: "Spy on What's Working in Your Niche",
    desc: "Type in any competitor's account. Track 1on1 will show you which of their posts get the most views and engagement, then give you a content outline so you can create your own version of their best content.",
  },
  {
    id: "timestamps",
    img: ASSETS.messaging, 
    title: "YouTube Click Timestamps",
    desc: "See the exact minute in your YouTube video where people paused and clicked the link to your page. Now you know which part of your video is doing the selling—and you can make more of it.",
  },
];

const bottomCards = [
  {
    id: "dashboard",
    img: ASSETS.globe, 
    title: "One Dashboard for Everything",
    desc: "See all your numbers in one place—which content made the most money, how long it takes someone to go from watching your video to buying, and which platform is sending you the best buyers.",
    wide: true,
  },
  {
    id: "popups",
    img: ASSETS.communication, 
    title: "Smart Exit Popups",
    desc: "When someone is about to leave your page, Track 1on1 shows them the right message based on what they actually did. Watched 80% but didn't buy? They get a payment plan. Bounced early? They get a free lead magnet.",
    wide: false,
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;

      const startPoint = winH * 0.95;
      const endPoint = winH * 0.15;

      const progress = (startPoint - rect.top) / (startPoint - endPoint);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCardStyles = (index: number, rowOffset: number) => {
    const delayFactor = (index + rowOffset) * 0.12; 
    const localProgress = Math.min(1, Math.max(0, (scrollProgress - delayFactor) / (1 - delayFactor)));

    const translateY = (1 - localProgress) * 45; // Smoothly floats 45px up
    const scale = 0.96 + localProgress * 0.04;    // Subtle 3D pop up scale

    return {
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: localProgress,
    };
  };

  return (
    <section className="features glass-bg" id="features" ref={sectionRef}>

      {/* Arch decoration */}
      <div className="features__arch-wrap" aria-hidden="true">
        <img src={ASSETS.arch} alt="" className="features__arch-img" />
        <div className="features__arch-label">Features</div>
      </div>

      {/* Heading */}
      <div className="features__head">
        <h2 className="features__title">
          Know Exactly what's<br />making you Money
        </h2>
        <p className="features__sub">
          Connect every sale back to the content that caused<br />
          it — across YouTube, Instagram, and Twitter.
        </p>
      </div>

      {/* Cards */}
      <div className="features__container">

        {/* Top row — 3 equal columns */}
        <div className="features__row features__row--3">
          {topCards.map((card, i) => (
            <div 
              key={card.id} 
              className="feat-card"
              style={getCardStyles(i, 0)}
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

        {/* Bottom row — wide + narrow */}
        <div className="features__row features__row--2">
          {bottomCards.map((card, i) => (
            <div
              key={card.id}
              className={`feat-card ${card.wide ? "feat-card--wide" : ""}`}
              style={getCardStyles(i, 1.5)} 
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