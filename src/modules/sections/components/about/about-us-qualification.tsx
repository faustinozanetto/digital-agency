import React from 'react';

interface IAboutUsQualificationProps {
  text: string;
}

const AboutUsQualification: React.FC<IAboutUsQualificationProps> = (props) => {
  const { text } = props;

  return (
    <div className="flex flex-row items-center p-2">
      <svg
        className="mr-2 h-8 w-8 text-lime-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="text-lg font-semibold text-gray-800">{text}</span>
    </div>
  );
};

export default AboutUsQualification;
