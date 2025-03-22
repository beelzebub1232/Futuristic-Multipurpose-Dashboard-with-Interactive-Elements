import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, KeyIcon, CodeIcon, FolderIcon, UsersIcon, ShieldIcon } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import RevealOnScroll from '../components/RevealOnScroll';
const LandingPage = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <RevealOnScroll direction="zoom">
          <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Command<span className="text-blue-400">Hub</span>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p className="text-xl md:text-2xl text-center text-gray-300 max-w-2xl mb-12">
            Your all-in-one solution for password management, script execution,
            and project coordination.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={400}>
          <Link to="/dashboard" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
            Get Started
            <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </RevealOnScroll>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful <span className="text-blue-400">Features</span>
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RevealOnScroll direction="up" delay={100}>
            <GlassCard glowColor="rgba(59, 130, 246, 0.2)" className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-500/20 rounded-full mb-4">
                  <KeyIcon size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Password Manager</h3>
                <p className="text-gray-400">
                  Securely store and manage all your passwords in one place with
                  advanced encryption.
                </p>
              </div>
            </GlassCard>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={200}>
            <GlassCard glowColor="rgba(168, 85, 247, 0.2)" className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-purple-500/20 rounded-full mb-4">
                  <CodeIcon size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Script Runner</h3>
                <p className="text-gray-400">
                  Execute and monitor Python scripts directly from your browser
                  with real-time output.
                </p>
              </div>
            </GlassCard>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={300}>
            <GlassCard glowColor="rgba(236, 72, 153, 0.2)" className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-pink-500/20 rounded-full mb-4">
                  <FolderIcon size={32} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Project Management</h3>
                <p className="text-gray-400">
                  Plan, track, and visualize your projects with intuitive kanban
                  boards and timelines.
                </p>
              </div>
            </GlassCard>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={400}>
            <GlassCard glowColor="rgba(34, 211, 238, 0.2)" className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-cyan-500/20 rounded-full mb-4">
                  <UsersIcon size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
                <p className="text-gray-400">
                  Manage team members, assign tasks, and collaborate seamlessly
                  across projects.
                </p>
              </div>
            </GlassCard>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={500}>
            <GlassCard glowColor="rgba(16, 185, 129, 0.2)" className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-emerald-500/20 rounded-full mb-4">
                  <ShieldIcon size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security First</h3>
                <p className="text-gray-400">
                  End-to-end encryption and advanced security protocols to keep
                  your data safe.
                </p>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <RevealOnScroll>
            <GlassCard className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who trust CommandHub for their
                daily workflow.
              </p>
              <Link to="/dashboard" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300">
                Launch Dashboard
                <ArrowRightIcon size={18} />
              </Link>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>
    </div>;
};
export default LandingPage;