import React from 'react';

const AboutUsStats: React.FC = () => {
  return (
    <div className="absolute -left-20 -bottom-40 grid grid-cols-3 rounded-lg bg-lime-400 p-4 text-gray-800">
      {/* Projects Launched */}
      <div className="flex flex-col items-center p-2">
        <span className="text-3xl font-bold">110</span>
        <span className="ml-2 text-lg font-semibold">Projects Launched</span>
      </div>
      {/* Happy Clients */}
      <div className="flex flex-col items-center p-2">
        <span className="text-3xl font-bold">120</span>
        <span className="ml-2 text-lg font-semibold">Happy Clients</span>
      </div>
      {/* Awards Won */}
      <div className="flex flex-col items-center p-2">
        <span className="text-3xl font-bold">10</span>
        <span className="ml-2 text-lg font-semibold">Awards Won</span>
      </div>
    </div>
  );
};

export default AboutUsStats;
