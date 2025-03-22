import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { FolderIcon, PlusIcon, UsersIcon, CalendarIcon, CheckSquareIcon, ListIcon, LayoutGridIcon } from 'lucide-react';
const ProjectManager = () => {
  const [viewMode, setViewMode] = useState('grid');
  const projects = [{
    id: 1,
    name: 'Project Alpha',
    description: 'Main product development',
    status: 'Active',
    progress: 70,
    members: 5,
    tasks: {
      total: 24,
      completed: 18
    },
    dueDate: '2023-12-15'
  }, {
    id: 2,
    name: 'Project Beta',
    description: 'Mobile app redesign',
    status: 'In Progress',
    progress: 45,
    members: 3,
    tasks: {
      total: 18,
      completed: 8
    },
    dueDate: '2023-11-30'
  }, {
    id: 3,
    name: 'Project Gamma',
    description: 'Backend infrastructure update',
    status: 'Planning',
    progress: 15,
    members: 4,
    tasks: {
      total: 32,
      completed: 5
    },
    dueDate: '2024-01-20'
  }, {
    id: 4,
    name: 'Project Delta',
    description: 'Customer portal enhancements',
    status: 'On Hold',
    progress: 60,
    members: 2,
    tasks: {
      total: 12,
      completed: 7
    },
    dueDate: '2023-12-05'
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Planning':
        return 'bg-blue-500/20 text-blue-400';
      case 'On Hold':
        return 'bg-orange-500/20 text-orange-400';
      case 'Completed':
        return 'bg-purple-500/20 text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  return <div className="min-h-screen pt-6 pb-24 px-4 max-w-7xl mx-auto">
      <RevealOnScroll>
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Project Manager</h1>
          <p className="text-gray-400">Organize and track your projects</p>
        </header>
      </RevealOnScroll>
      <div className="mb-8">
        <RevealOnScroll direction="up" delay={100}>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-center gap-2">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}>
                <LayoutGridIcon size={20} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}>
                <ListIcon size={20} />
              </button>
            </div>
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <PlusIcon size={18} />
              <span>New Project</span>
            </button>
          </div>
        </RevealOnScroll>
      </div>
      {viewMode === 'grid' ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <RevealOnScroll key={project.id} direction="up" delay={100 + index * 100}>
              <GlassCard className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <FolderIcon size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{
                width: `${project.progress}%`,
                backgroundColor: project.progress > 60 ? '#10B981' : project.progress > 30 ? '#F59E0B' : '#3B82F6'
              }}></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <UsersIcon size={14} className="text-gray-400" />
                    <span>{project.members} members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckSquareIcon size={14} className="text-gray-400" />
                    <span>
                      {project.tasks.completed}/{project.tasks.total} tasks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon size={14} className="text-gray-400" />
                    <span>Due {project.dueDate}</span>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>)}
        </div> : <RevealOnScroll direction="up" delay={100}>
          <GlassCard>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4">Project</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Progress</th>
                    <th className="text-left py-3 px-4">Members</th>
                    <th className="text-left py-3 px-4">Tasks</th>
                    <th className="text-left py-3 px-4">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(project => <tr key={project.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-blue-500/20 rounded-lg">
                            <FolderIcon size={16} className="text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium">{project.name}</div>
                            <div className="text-sm text-gray-400">
                              {project.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-black/30 rounded-full h-1.5">
                            <div className="h-1.5 rounded-full" style={{
                        width: `${project.progress}%`,
                        backgroundColor: project.progress > 60 ? '#10B981' : project.progress > 30 ? '#F59E0B' : '#3B82F6'
                      }}></div>
                          </div>
                          <span className="text-sm">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <UsersIcon size={14} className="text-gray-400" />
                          <span>{project.members}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <CheckSquareIcon size={14} className="text-gray-400" />
                          <span>
                            {project.tasks.completed}/{project.tasks.total}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{project.dueDate}</td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </RevealOnScroll>}
    </div>;
};
export default ProjectManager;