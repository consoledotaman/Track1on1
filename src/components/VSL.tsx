import { useEffect, useRef, useState } from "react";
import "./VSL.css";

const VIDEO_SRC = "/assets/demo.mp4";
const POSTER_SRC = "/assets/demo-poster.jpg"; 

export default function VSL() {
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;

      // Start animating when the top of the section enters from the bottom
      // Complete the transition when the section hits the upper center area
      const startPoint = winH;
      const endPoint = winH * 0.15;

      const totalDistance = startPoint - endPoint;
      const currentProgress = (startPoint - rect.top) / totalDistance;

      // Bound securely between 0 and 1
      setScrollProgress(Math.min(1, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger instantly on initial mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlay = () => {
    setPlaying(true);
    const video = document.getElementById("vsl-video") as HTMLVideoElement;
    video?.play();
  };

  // Interpolate progressive cinematic styling values
  const cardScale     = 0.9 + scrollProgress * 0.1;               // Scales 0.90 -> 1.00
  const cardRotateX   = (1 - scrollProgress) * 16;                // Tilts 16deg -> 0deg flat
  const cardTranslate = (1 - scrollProgress) * 40;                // Rises 40px up
  const ambientBlur   = (1 - scrollProgress) * 8;                 // Decays 8px blur down to 0

  return (
    <section className="vsl glass-bg" id="demo" ref={sectionRef}>
      <div className="vsl__container">

        {/* Cinematic Animated Video Wrapper Wrapper */}
        <div 
          className="vsl__perspective-wrapper"
          style={{
            transform: `perspective(1200px) rotateX(${cardRotateX}deg) translateY(${cardTranslate}px) scale(${cardScale})`,
            filter: `blur(${ambientBlur}px)`,
            opacity: Math.min(1, scrollProgress / 0.3) // Fades in quickly over first 30%
          }}
        >
          <div className="vsl__card">
            {/* Overlay — shown until user clicks play */}
            {!playing && (
              <div className="vsl__overlay" onClick={handlePlay}>
                <img
                  src={POSTER_SRC}
                  alt=""
                  className="vsl__poster"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />

                <div className="vsl__glow" aria-hidden="true" />

                <button className="vsl__play-btn" aria-label="Play demo video">
                  <span className="vsl__play-icon">▶</span>
                </button>

                <span className="vsl__duration">2:34</span>
              </div>
            )}

            <video
              id="vsl-video"
              className="vsl__video"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              controls={playing}
              playsInline
            />
          </div>
        </div>

        {/* Trust strip below card — fades up elegantly alongside the progress */}
        <div 
          className="vsl__trust"
          style={{
            transform: `translateY(${(1 - scrollProgress) * 16}px)`,
            opacity: Math.max(0, (scrollProgress - 0.4) / 0.6) // Only appears when video is mostly set
          }}
        >
          {[
            { value: "10k+", label: "Active users" },
            { value: "4.9",  label: "Average rating" },
            { value: "98%",  label: "Customer satisfaction" },
            { value: "2min", label: "Avg. setup time" },
          ].map(({ value, label }) => (
            <div key={label} className="vsl__stat">
              <span className="vsl__stat-value">{value}</span>
              <span className="vsl__stat-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}