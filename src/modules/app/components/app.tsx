import Layout from 'modules/layout/components/layout';
import AboutSection from 'modules/sections/components/about/about-section';
import HeroSection from 'modules/sections/components/hero/hero-section';
import ServicesSection from 'modules/sections/components/services/services-section';
import React from 'react';

const App: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </Layout>
  );
};

export default App;
