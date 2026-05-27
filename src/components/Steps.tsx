import { useEffect, useRef, useState } from "react";
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
  const lineTrackRef = useRef<HTMLDivElement>(null);

  // progress[i] = 0..1 for each step's content fade
  const [progress, setProgress] = useState<number[]>(STEPS.map(() => 0));
  // lineProgress = 0..1 for the full vertical line fill
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionH   = section.offsetHeight;
      const winH       = window.innerHeight;

      // Overall section scroll progress 0..1
      // We want the animation to run from when the section enters
      // the viewport until it fully exits at the top.
      const raw = (-sectionTop) / (sectionH - winH * 0.5);
      const total = Math.min(1, Math.max(0, raw));

      // Line fills proportionally across all steps
      setLineProgress(total);

      // Each step occupies an equal slice of total progress
      const slice = 1 / STEPS.length;
      const newProgress = STEPS.map((_, i) => {
        const start = i * slice;
        const end   = start + slice;
        // Content fades in as its slice begins, fades out when next slice ends
        const p = (total - start) / slice;
        return Math.min(1, Math.max(0, p));
      });
      setProgress(newProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="steps" id="how-it-works" ref={sectionRef}>
      <div className="steps__container" ref={containerRef}>

        {/* Single vertical track line — the filled purple line rides on top */}
        <div className="steps__track">
          <div
            className="steps__track-fill"
            style={{ transform: `scaleY(${lineProgress})` }}
          />
        </div>

        {STEPS.map((step, i) => {
          const p = progress[i];
          // Fade in: 0→1 over first 60% of the step's slice
          // Fade out: 1→0 over last 40% (only for steps that aren't last)
          const fadeIn  = Math.min(1, p / 0.6);
          const fadeOut = i < STEPS.length - 1
            ? Math.max(0, 1 - (p - 0.6) / 0.4)
            : 1;
          const opacity   = fadeIn * fadeOut;
          const translateY = (1 - fadeIn) * 32; // slides up as it fades in

          return (
            <div key={step.num} className="steps__item">
              {/* Left — number dot on the track */}
              <div className="steps__left">
                <div
                  className="steps__dot-wrap"
                  style={{ opacity: Math.min(1, p / 0.3) }}
                >
                  <div className={`steps__dot ${p > 0.05 ? "steps__dot--active" : ""}`} />
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
                <a href="#pricing" className="btn-black steps__btn">
                  Get Started <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}