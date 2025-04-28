import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'signup'>('home');

  if (currentPage === 'login' || currentPage === 'signup') {
    return <Login isLogin={currentPage === 'login'} onPageChange={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={() => setCurrentPage('login')} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;