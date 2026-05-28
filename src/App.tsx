import { useEffect } from 'react';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import VSL          from './components/VSL';
import Features     from './components/Features';
import Steps        from './components/Steps';
import SocialProof  from './components/SocialProof';
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
    <>
      <Navbar />
      <Hero />
      <VSL />
      <Features />
      <Steps />
      <SocialProof />
      <Integrations />
      <FAQ />
      <Comparison />
      <Pricing />
      <Footer />
    </>
  );
}
