import { useEffect, useRef, useState } from "react";
import { LiquidButton } from "./ui/liquid-glass-button"; // ── 1. IMPORT THE LIQUID BUTTON ──
import "./Steps.css";

const STEPS = [
  {
    num: "01",
    tag: "Setup",
    title: "Connect Your Accounts",
    desc: "Link your YouTube, Instagram, and Twitter in one click. Track 1on1 scans your videos, reels, and posts and deploys Smart Links automatically. No developer needed, no code, no setup headache.",
  },
  {
    num: "02",
    tag: "Smart Links",
    title: "Smart Links Deploy Instantly",
    desc: "The moment you connect, Track 1on1 attaches a Smart Link to every post across every platform — automatically. When someone clicks, we follow that exact visitor through your page, your video, and your checkout.",
  },
  {
    num: "03",
    tag: "Visitor Intelligence",
    title: "Watch How Visitors Behave",
    desc: "See how far people scroll, how long they stay, and whether they watched your sales video or just closed the tab. See the exact minute in your YouTube video where people paused and clicked the link to your page.",
  },
  {
    num: "04",
    tag: "Revenue Attribution",
    title: "See Which Post Made You Money",
    desc: "Every time someone buys your course, Track 1on1 shows you exactly which Instagram reel, YouTube video, or tweet sent them to you. No more guessing which content is actually working.",
  },
  {
    num: "05",
    tag: "Growth",
    title: "Spy, Optimize & Scale",
    desc: "Type in any competitor's YouTube, Instagram, or Twitter account and see which of their posts get the most engagement — then get a ready-made content outline to create your own version. Stop guessing what to post next.",
  },
];

export default function Steps() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState<number[]>(STEPS.map(() => 0));
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionH   = section.offsetHeight;
      const winH       = window.innerHeight;

      const raw = (winH * 0.65 - sectionTop) / (sectionH - winH * 0.35);
      const total = Math.min(1, Math.max(0, raw));
      setLineProgress(total);

      const slice = 1 / STEPS.length;
      const newProgress = STEPS.map((_, i) => {
        const start = i * slice;
        const p = (total - start) / slice;
        return Math.min(1, Math.max(0, p));
      });
      setProgress(newProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="steps glass-bg" id="how-it-works" ref={sectionRef}>

      {/* Section header */}

      <div className="steps__container" ref={containerRef}>

        {/* Single vertical track line */}
        <div className="steps__track">
          <div
            className="steps__track-fill"
            style={{ transform: `scaleY(${lineProgress})` }}
          />
        </div>

        {STEPS.map((step, i) => {
          const p = progress[i];
          const opacity = Math.min(1, p / 0.4);
          const translateY = (1 - opacity) * 24; 

          return (
            <div key={step.num} className="steps__item">
              {/* Left — number dot on the track */}
              <div className="steps__left">
                <div
                  className="steps__dot-wrap"
                  style={{ opacity: Math.min(1, p / 0.2) }}
                >
                  <div className={`steps__dot ${p > 0.02 ? "steps__dot--active" : ""}`} />
                  <span className="steps__num">{step.num}</span>
                </div>
              </div>

              {/* Right — content */}
              <div
                className="steps__content"
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                }}
              >
                <span className="steps__tag">{step.tag}</span>
                <h3 className="steps__title">{step.title}</h3>
                <p className="steps__desc">{step.desc}</p>
                
                {/* ── 2. REPLACED WITH LIQUID BUTTON ── */}
                <LiquidButton
                  size="md"
                  variant="purple"
                  className="w-fit min-w-[140px] h-10 px-6 flex items-center justify-center text-sm font-medium tracking-tight"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started <span style={{ display: 'inline-block', transform: 'rotate(-45deg)', fontSize: '13px', marginLeft: '4px' }}>↗</span>
                </LiquidButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}