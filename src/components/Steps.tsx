import { useEffect, useRef, useState } from "react";
import { LiquidButton } from "./ui/liquid-glass-button"; // ── 1. IMPORT THE LIQUID BUTTON ──
import "./Steps.css";

const STEPS = [
  {
    num: "01",
    tag: "Data Sources",
    title: "Connect Your Data",
    desc: "Seamlessly integrate all your key data sources whether it's databases, spreadsheets, APIs or third party tools using our intuitive no code connectors. You can unify structured and unstructured data with minimal setup ensuring every decision starts with a complete picture.",
  },
  {
    num: "02",
    tag: "Smart Cleanup",
    title: "Clean & Organize Instantly",
    desc: "Our smart data engine automatically detects inconsistencies, outliers and formatting issues. Within seconds you can standardize datasets, define schemas and apply transformation logic without writing a single line of code. Clean trustworthy data becomes your new default.",
  },
  {
    num: "03",
    tag: "Clear Insights",
    title: "Visualize with Purpose",
    desc: "Turn your refined data into clear impactful dashboards. Choose from pre built templates or design custom visualizations that align with your KPIs. Whether you need trends, comparisons or deep insights, every chart is crafted to drive confident decision making.",
  },
  {
    num: "04",
    tag: "Team Access",
    title: "Collaborate Across Teams",
    desc: "Easily share insights across departments, clients or leadership teams. Set granular permissions, create workflows and control visibility. With built in comments and version history your entire team stays aligned and data literate with no extra tools needed.",
  },
  {
    num: "05",
    tag: "Live Actions",
    title: "Act on Your Insights",
    desc: "Move from insight to action in real time. Trigger automated reports, sync filtered data to other tools or use built in webhooks to activate workflows. With decisions driven by live data your business becomes faster, leaner and infinitely more scalable.",
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