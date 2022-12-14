import React from 'react';

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  thumbnail: string;
};

interface ITeamMemberCardProps {
  member: TeamMember;
}

const TeamMember: React.FC<ITeamMemberCardProps> = (props) => {
  const { member } = props;

  return (
    <div className="mx-auto h-full w-full max-w-[300px] overflow-hidden rounded-xl drop-shadow-xl">
      <img src={member.thumbnail} alt="image" className="h-full w-full object-cover" />
      <div className="absolute bottom-5 left-0 w-full cursor-pointer text-center">
        <div className="relative mx-5 overflow-hidden rounded-lg bg-white p-4 transition-colors hover:bg-lime-500">
          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          {/* Role */}
          <p className="text-base font-semibold text-gray-900">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
