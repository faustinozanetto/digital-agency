import React from 'react';
import PricingPlanCardBenefit from './pricing-plan-card-benefit';

export type PricingPlan = {
  title: string;
  price: string;
  benefits: string[];
};

interface IPricingPlanCardProps {
  plan: PricingPlan;
}

const PricingPlanCard: React.FC<IPricingPlanCardProps> = (props) => {
  const { plan } = props;

  return (
    <div className="mx-auto flex flex-col rounded-2xl bg-white p-6 text-gray-900 drop-shadow-2xl sm:p-8">
      {/* Title */}
      <h3 className="text-2xl font-semibold">{plan.title}</h3>
      {/* Price */}
      <div className="my-6 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      {/* Benefits */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {plan.benefits.map((benefit, index) => (
          <PricingPlanCardBenefit key={index} benefit={benefit} />
        ))}
      </ul>
      {/* Button */}
      <button
        type="button"
        className="mt-auto rounded-lg bg-black px-5 py-2.5 text-center text-lg font-semibold text-white transition-colors hover:bg-lime-500"
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingPlanCard;
