import React from 'react';
import EngagementAnalytics from './engagement-analytics';
import EngagementIllustration from './engagement-illustration';

const EngagementSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="space-y-4 font-normal text-gray-700 sm:space-y-6 sm:text-lg">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            The numbers
            <br />
            <span className="text-lime-400"> speak</span> for
            <br />
            themselves
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur magni accusantium molestias modi rem!
            Illo, minima. Culpa maiores veniam optio? Eveniet illum rerum iste perspiciatis.
          </p>
          {/* Analytics */}
          <EngagementAnalytics />
        </div>
        {/* Second Part */}
        <div className="mt-8 grid gap-4">
          <EngagementIllustration />
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
