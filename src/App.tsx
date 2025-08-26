import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import InterestsSection from './components/InterestsSection';
import TimelineSection from './components/TimelineSection';
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection />
      <InterestsSection />
      <TimelineSection />
      <ResumeSection />
      <Footer />
    </div>
  );
}

export default App;