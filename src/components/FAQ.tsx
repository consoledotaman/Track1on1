import { useEffect, useRef, useState } from "react";
import "./FAQ.css";

const ARCH_SRC = "/assets/features-arch.png"; 

const FAQS = [
  { q: "Do I need to be a developer or technical person to use Track 1on1?", a: "Not at all. You connect your accounts in one click and Track 1on1 deploys everything automatically. No code, no setup, no developer needed. If you can log into Instagram, you can use Track 1on1." },
  { q: "How does Track 1on1 know which post made the sale?", a: "The moment you connect your accounts, we attach a Smart Link to every post across every platform. When someone clicks, we follow that exact visitor — through your page, through your video, through your checkout — and tie the final purchase back to the post that started their journey." },
  { q: "Will this slow down my website or sales page?", a: "No. Track 1on1 runs silently in the background. Your page loads exactly the same speed. Your visitors never know it's there." },
  { q: "What platforms does Track 1on1 support?", a: "Currently YouTube, Instagram, and Twitter (X). With full integrations for course platforms like Kajabi, Teachable, ThriveCart, Gumroad, and Stan Store — plus email tools like ConvertKit and ActiveCampaign." },
  { q: "How does the 11× guarantee actually work?", a: "Simple. If at the end of your first month you can't see at least 11 times your subscription amount in attributed revenue inside your Track 1on1 dashboard — you pay nothing. No forms, no arguments, no fine print." },
  { q: "What exactly does the Auto DM feature do?", a: "When someone comments on your reel, replies to your tweet, or uses a keyword you set — Track 1on1 automatically sends them a DM with your link or message instantly. You set it once, it runs 24/7 while you sleep." },
  { q: "Is my data and my audience's data safe?", a: "Yes. Track 1on1 uses enterprise-grade encryption and never sells, shares, or exposes your audience data to any third party. Everything tracked stays inside your dashboard and belongs to you." },
  { q: "What's the difference between Track 1on1 and just using UTM links?", a: "UTM links tell you someone clicked. Track 1on1 tells you who clicked, which video minute made them click, how long they stayed on your page, how much of your VSL they watched, whether they hovered the buy button, and exactly how much money that one post made you. UTMs show you the door. Track 1on1 shows you everything that happened inside." },
  { q: "Can I track competitors even if I don't follow them?", a: "Yes. Just type in any YouTube channel name, Instagram handle, or Twitter account. Track 1on1 scans their top performing content publicly and generates outlines for you — no following, no connection needed." },
  { q: "How quickly can I get set up and see my first data?", a: "Most creators see their first tracked clicks within minutes of connecting. Full revenue attribution data — meaning a complete sale traced back to a specific post — typically shows up within the first 24 to 48 hours depending on your traffic volume." }
];

const LEFT  = FAQS.filter((_, i) => i % 2 === 0);
const RIGHT = FAQS.filter((_, i) => i % 2 === 1);

interface ItemProps {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ q, a, open, onToggle, index }: ItemProps) {
  return (
    <div 
      className={`faq__item ${open ? "faq__item--open" : ""}`}
      style={{ "--item-idx": index } as React.CSSProperties}
    >
      <button className="faq__q" onClick={onToggle} aria-expanded={open}>
        <span className="faq__q-text">{q}</span>
        <span className="faq__icon" aria-hidden="true">
          <span className="faq__icon-cross" />
        </span>
      </button>

      <div className="faq__body">
        <div className="faq__a-wrap">
          <div className="faq__bar" aria-hidden="true" />
          <p className="faq__a">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null); 
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Fire animation timeline once
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section className="faq glass-bg" id="faqs">
      <div className="faq__arch-wrap" aria-hidden="true">
        <img src={ARCH_SRC} alt="" className="faq__arch-img" />
        <div className="faq__arch-label">FAQs</div>
      </div>

      <div className="faq__head">
        <h2 className="faq__title">Questions, Answered</h2>
        <p className="faq__sub">
          Everything you need to know about Track 1on1 —<br />
          from setup to the 11× guarantee.
        </p>
      </div>

      <div 
        ref={containerRef} 
        className={`faq__container ${isVisible ? "faq__container--visible" : ""}`}
      >
        <div className="faq__col">
          {LEFT.map((item, i) => (
            <FAQItem
              key={`L-${i}`}
              index={i}
              q={item.q}
              a={item.a}
              open={openKey === `L-${i}`}
              onToggle={() => toggle(`L-${i}`)}
            />
          ))}
        </div>

        <div className="faq__col">
          {RIGHT.map((item, i) => (
            <FAQItem
              key={`R-${i}`}
              index={i}
              q={item.q}
              a={item.a}
              open={openKey === `R-${i}`}
              onToggle={() => toggle(`R-${i}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}