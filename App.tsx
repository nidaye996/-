import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { PainPoints } from './components/PainPoints';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { Reports } from './components/Reports';
import { Download } from './components/Download';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <PainPoints />
        <Features />
        <Workflow />
        <Reports />
        <Download />
        <FAQ />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;