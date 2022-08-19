import React from 'react';

interface IEngagementAnalyticEntryProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const EngagementAnalyticEntry: React.FC<IEngagementAnalyticEntryProps> = (props) => {
  const { title, description, icon } = props;

  return (
    <div className="flex flex-row items-start justify-center space-x-2 sm:space-x-4">
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-200 p-2 sm:h-14 sm:w-14 sm:p-4">
        {icon}
      </div>
      {/* Content */}
      <div className="flex flex-col">
        {/* Title */}
        <h3 className="text-base font-bold sm:text-lg md:text-xl">{title}</h3>
        {/* Description */}
        <p className="text-sm font-normal sm:text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default EngagementAnalyticEntry;
