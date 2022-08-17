import Layout from 'modules/layout/components/layout';
import HeroSection from 'modules/sections/components/hero/hero-section';
import React from 'react';

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  const {} = props;

  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default App;
