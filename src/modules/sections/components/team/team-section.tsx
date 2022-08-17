import React from 'react';
import TeamMemberCard, { TeamMember } from './team-member-card';

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'CEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquam massa, quis aliquam nisl nunc et nisl. Sed euismod.',
    thumbnail:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80',
  },
  {
    name: 'Jane Doe',
    role: 'CTO',
    description: "I'm a software engineer with 10 years of experience in the industry.",
    thumbnail:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
  },
  {
    name: 'John Doe',
    role: 'Community Manager',
    description: "I'm a community manager with 5 years of experience in the industry.",
    thumbnail:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'Jane Doe',
    role: 'Senior Designer',
    description: "I'm a senior designer with 8 years of experience in the industry.",
    thumbnail:
      'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'John Doe',
    role: 'Senior Developer',
    description: "I'm a senior developer with 10 years of experience in the industry.",
    thumbnail:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
  },
  {
    name: 'Jane Doe',
    role: 'Junior Developer',
    description: "I'm a junior developer with 2 years of experience in the industry.",
    thumbnail:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-amber-50 py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl space-y-10 py-8 px-4 text-center lg:py-16 lg:px-12">
        {/* Top Part */}
        <div className="flex w-full flex-col items-center ">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            Meet our
            <br />
            <span className="text-lime-400">talented </span>
            team
          </h2>
        </div>
        {/* Bottom Part */}
        <div className="grid grid-cols-1 gap-4 place-self-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
