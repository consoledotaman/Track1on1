import { useEffect } from 'react';
import { EtheralShadow } from './components/ui/etheral-shadow';
import { GlassDistortionFilter } from './components/ui/liquid-glass';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import VSL          from './components/VSL';
import Features     from './components/Features';
import Steps        from './components/Steps';
import Integrations from './components/Integrations';
import FAQ          from './components/FAQ';
import Comparison   from './components/Comparision';
import Pricing      from './components/Pricing';
import Footer       from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Fixed full-page ethereal shadow background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -10,
          overflow: 'hidden',
          background: '#f5f3ff',
        }}
        aria-hidden="true"
      >
        <EtheralShadow
          color="rgba(109, 40, 217, 0.72)"
          animation={{ scale: 75, speed: 65 }}
          noise={{ opacity: 0.55, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Global SVG filter for liquid-glass distortion effect */}
      <GlassDistortionFilter />
      <Navbar />
      <Hero />
      <VSL />
      <Features />
      <Steps />
      <Integrations />
      <FAQ />
      <Comparison />
      <Pricing />
      <Footer />
    </div>
  );
}
