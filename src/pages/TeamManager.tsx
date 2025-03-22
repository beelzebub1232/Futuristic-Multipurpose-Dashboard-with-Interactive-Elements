import React from 'react';
import GlassCard from '../components/GlassCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { UsersIcon, PlusIcon, UserPlusIcon, MailIcon, PhoneIcon, MessageSquareIcon } from 'lucide-react';
const TeamManager = () => {
  const teams = [{
    id: 1,
    name: 'Development Team',
    members: [{
      id: 1,
      name: 'Alex Johnson',
      role: 'Team Lead',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      status: 'active'
    }, {
      id: 2,
      name: 'Sarah Chen',
      role: 'Senior Developer',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      status: 'active'
    }, {
      id: 3,
      name: 'Michael Brown',
      role: 'Backend Developer',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      status: 'away'
    }, {
      id: 4,
      name: 'Emma Wilson',
      role: 'Frontend Developer',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      status: 'active'
    }]
  }, {
    id: 2,
    name: 'Design Team',
    members: [{
      id: 5,
      name: 'James Lee',
      role: 'UI/UX Lead',
      avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
      status: 'active'
    }, {
      id: 6,
      name: 'Olivia Taylor',
      role: 'Senior Designer',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      status: 'offline'
    }, {
      id: 7,
      name: 'David Miller',
      role: 'Graphic Designer',
      avatar: 'https://randomuser.me/api/portraits/men/57.jpg',
      status: 'active'
    }]
  }, {
    id: 3,
    name: 'Marketing Team',
    members: [{
      id: 8,
      name: 'Sophia Martinez',
      role: 'Marketing Lead',
      avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
      status: 'active'
    }, {
      id: 9,
      name: 'William Davis',
      role: 'Content Strategist',
      avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
      status: 'active'
    }]
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };
  return <div className="min-h-screen pt-6 pb-24 px-4 max-w-7xl mx-auto">
      <RevealOnScroll>
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Team Manager</h1>
          <p className="text-gray-400">Manage your team members and roles</p>
        </header>
      </RevealOnScroll>
      <div className="mb-8">
        <RevealOnScroll direction="up" delay={100}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Teams</h2>
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <PlusIcon size={18} />
              <span>Create Team</span>
            </button>
          </div>
        </RevealOnScroll>
      </div>
      <div className="space-y-8">
        {teams.map((team, index) => <RevealOnScroll key={team.id} direction="up" delay={100 + index * 100}>
            <GlassCard>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <UsersIcon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{team.name}</h3>
                  <span className="text-sm text-gray-400">
                    {team.members.length} members
                  </span>
                </div>
                <button className="flex items-center gap-1 text-sm bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors">
                  <UserPlusIcon size={16} />
                  <span>Add Member</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {team.members.map(member => <div key={member.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}`}></div>
                      </div>
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-gray-400">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition-colors">
                        <MailIcon size={14} className="text-gray-400" />
                      </button>
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition-colors">
                        <PhoneIcon size={14} className="text-gray-400" />
                      </button>
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition-colors">
                        <MessageSquareIcon size={14} className="text-gray-400" />
                      </button>
                    </div>
                  </div>)}
              </div>
            </GlassCard>
          </RevealOnScroll>)}
      </div>
    </div>;
};
export default TeamManager;