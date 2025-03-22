import React from 'react';
import GlassCard from '../components/GlassCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { KeyIcon, CodeIcon, FolderIcon, UsersIcon, ClockIcon, BellIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return <div className="min-h-screen pt-6 pb-24 px-4 max-w-7xl mx-auto">
      <RevealOnScroll>
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-gray-400">Welcome back, User</p>
        </header>
      </RevealOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <RevealOnScroll direction="up" delay={100}>
          <GlassCard className="col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link to="/passwords" className="flex flex-col items-center bg-black/30 hover:bg-black/50 p-4 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/20">
                <KeyIcon className="text-blue-400 mb-2" size={24} />
                <span className="text-sm">Passwords</span>
              </Link>
              <Link to="/scripts" className="flex flex-col items-center bg-black/30 hover:bg-black/50 p-4 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/20">
                <CodeIcon className="text-purple-400 mb-2" size={24} />
                <span className="text-sm">Scripts</span>
              </Link>
              <Link to="/projects" className="flex flex-col items-center bg-black/30 hover:bg-black/50 p-4 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/20">
                <FolderIcon className="text-pink-400 mb-2" size={24} />
                <span className="text-sm">Projects</span>
              </Link>
              <Link to="/teams" className="flex flex-col items-center bg-black/30 hover:bg-black/50 p-4 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/20">
                <UsersIcon className="text-cyan-400 mb-2" size={24} />
                <span className="text-sm">Teams</span>
              </Link>
            </div>
          </GlassCard>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={200}>
          <GlassCard>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">
                3 New
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <BellIcon size={18} className="text-blue-400" />
                <span className="text-sm">Project "Alpha" updated</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <BellIcon size={18} className="text-blue-400" />
                <span className="text-sm">New team member added</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <BellIcon size={18} className="text-blue-400" />
                <span className="text-sm">Password expires in 3 days</span>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RevealOnScroll direction="up" delay={300}>
          <GlassCard>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Passwords</h2>
              <Link to="/passwords" className="text-blue-400 text-sm hover:text-blue-300">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <KeyIcon size={16} className="text-blue-400" />
                  <span>Github</span>
                </div>
                <span className="text-xs text-gray-400">2 days ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <KeyIcon size={16} className="text-blue-400" />
                  <span>AWS Console</span>
                </div>
                <span className="text-xs text-gray-400">1 week ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <KeyIcon size={16} className="text-blue-400" />
                  <span>Database Admin</span>
                </div>
                <span className="text-xs text-gray-400">2 weeks ago</span>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={400}>
          <GlassCard>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Scripts</h2>
              <Link to="/scripts" className="text-blue-400 text-sm hover:text-blue-300">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <CodeIcon size={16} className="text-purple-400" />
                  <span>data_analysis.py</span>
                </div>
                <span className="text-xs text-gray-400">Today</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <CodeIcon size={16} className="text-purple-400" />
                  <span>backup_db.py</span>
                </div>
                <span className="text-xs text-gray-400">Yesterday</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <CodeIcon size={16} className="text-purple-400" />
                  <span>api_test.py</span>
                </div>
                <span className="text-xs text-gray-400">3 days ago</span>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={500}>
          <GlassCard>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Active Projects</h2>
              <Link to="/projects" className="text-blue-400 text-sm hover:text-blue-300">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Project Alpha</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-1.5 mb-1">
                  <div className="bg-green-400 h-1.5 rounded-full" style={{
                  width: '70%'
                }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Progress</span>
                  <span>70%</span>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Project Beta</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">
                    In Progress
                  </span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-1.5 mb-1">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{
                  width: '45%'
                }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Progress</span>
                  <span>45%</span>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Project Gamma</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                    Planning
                  </span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-1.5 mb-1">
                  <div className="bg-blue-400 h-1.5 rounded-full" style={{
                  width: '15%'
                }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Progress</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </div>;
};
export default Dashboard;