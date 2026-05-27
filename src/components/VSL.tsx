import { useState } from "react";
import "./VSL.css";

// Replace with your real video source when ready
const VIDEO_SRC = "/assets/demo.mp4";
const POSTER_SRC = "/assets/demo-poster.jpg"; // optional thumbnail

export default function VSL() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    const video = document.getElementById("vsl-video") as HTMLVideoElement;
    video?.play();
  };

  return (
    <section className="vsl" id="demo">
      <div className="vsl__container">

        {/* Top label */}
        <div className="vsl__head">
          <span className="vsl__label">See It In Action</span>
          <h2 className="vsl__title">
            Watch How Purply<br />Transforms Your Data
          </h2>
          <p className="vsl__sub">
            See how teams go from raw data to actionable insights
            in minutes — no setup required.
          </p>
        </div>

        {/* Video card */}
        <div className="vsl__card">

          {/* Overlay — shown until user clicks play */}
          {!playing && (
            <div className="vsl__overlay" onClick={handlePlay}>
              {/* Poster image — falls back to gradient */}
              <img
                src={POSTER_SRC}
                alt=""
                className="vsl__poster"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />

              {/* Purple glow behind play button */}
              <div className="vsl__glow" aria-hidden="true" />

              {/* Play button */}
              <button className="vsl__play-btn" aria-label="Play demo video">
                <span className="vsl__play-icon">▶</span>
              </button>

              {/* Duration badge */}
              <span className="vsl__duration">2:34</span>
            </div>
          )}

          {/* Actual video element */}
          <video
            id="vsl-video"
            className="vsl__video"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            controls={playing}
            playsInline
          />
        </div>

        {/* Trust strip below card */}
        <div className="vsl__trust">
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