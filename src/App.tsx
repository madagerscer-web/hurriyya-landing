import { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { SignupModal } from './components/SignupModal';

function App() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [signupCount, setSignupCount] = useState(0);

  const handleSignupSuccess = () => {
    setSignupCount(prev => prev + 1);
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Hero onSignupClick={() => setSignupOpen(true)} />
      <Benefits />
      <Features />
      <Testimonials />
      <CTA onSignupClick={() => setSignupOpen(true)} />
      <Footer />
      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSuccess={handleSignupSuccess}
      />
    </div>
  );
}

export default App;
