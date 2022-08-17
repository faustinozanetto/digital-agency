import React from 'react';
import PricingPlanCard, { PricingPlan } from './pricing-plan-card';

const PRICING_PLANS: PricingPlan[] = [
  {
    title: 'Basic',
    price: '$9.99',
    benefits: ['Lorem ipsum dolor sit ame.', 'Sed ut perspiciatis unde.', 'Nemo enim ipsam voluptatem.'],
  },
  {
    title: 'Premium',
    price: '$19.99',
    benefits: ['Lorem ipsum dolor sit ame.', 'Sed ut perspiciatis unde.', 'Nemo enim ipsam voluptatem.'],
  },
  {
    title: 'Ultimate',
    price: '$29.99',
    benefits: ['Lorem ipsum dolor sit ame.', 'Sed ut perspiciatis unde.', 'Nemo enim ipsam voluptatem.'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl space-y-10 py-8 px-4 text-center lg:py-16 lg:px-12">
        {/* Top Part */}
        <div className="flex w-full flex-col items-center ">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            Choose the plan
            <br />
            that fits <span className="text-lime-400">your</span> needs
          </h2>
        </div>
        {/* Bottom Part */}
        <div className="grid grid-cols-1 gap-4 place-self-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ">
          {PRICING_PLANS.map((plan) => (
            <PricingPlanCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
