import Layout from 'modules/layout/components/layout';
import AboutSection from 'modules/sections/components/about/about-section';
import ContactSection from 'modules/sections/components/contact/contact-section';
import EngagementSection from 'modules/sections/components/engagement/engagement-section';
import HeroSection from 'modules/sections/components/hero/hero-section';
import NewsLetterSection from 'modules/sections/components/newsletter/newsletter-section';
import PricingSection from 'modules/sections/components/pricing/pricing-section';
import ServicesSection from 'modules/sections/components/services/services-section';
import TeamSection from 'modules/sections/components/team/team-section';
import TestimonialsSection from 'modules/sections/components/testimonials/testimonials-section';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <EngagementSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsLetterSection />
    </Layout>
  );
};
export default HomePage;
