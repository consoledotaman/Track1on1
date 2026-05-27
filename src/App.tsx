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
  )
}