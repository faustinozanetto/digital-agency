import React from 'react';

export type Service = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

interface IServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<IServiceCardProps> = (props) => {
  const { service } = props;

  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-300 bg-white p-8 text-gray-900 drop-shadow-lg">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">{service.icon}</div>
      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
      {/* Description */}
      <p className="mb-8 text-lg font-semibold">{service.description}</p>
      {/* Learn More */}
      <button
        type="button"
        className="rounded-lg bg-black px-6 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-lime-500"
      >
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
