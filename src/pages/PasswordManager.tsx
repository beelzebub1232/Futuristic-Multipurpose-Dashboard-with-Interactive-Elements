import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { KeyIcon, EyeIcon, EyeOffIcon, PlusIcon, SearchIcon, TrashIcon, PencilIcon } from 'lucide-react';
const PasswordManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  // Mock data
  const passwords = [{
    id: 1,
    name: 'Github',
    username: 'devuser',
    password: 'securepass123',
    category: 'Development',
    lastUpdated: '2023-10-15'
  }, {
    id: 2,
    name: 'AWS Console',
    username: 'admin',
    password: 'cloudAdmin!456',
    category: 'Cloud',
    lastUpdated: '2023-09-28'
  }, {
    id: 3,
    name: 'Database Admin',
    username: 'dbadmin',
    password: 'db$ecure789',
    category: 'Database',
    lastUpdated: '2023-09-05'
  }, {
    id: 4,
    name: 'Company Email',
    username: 'user@company.com',
    password: 'mailAccess!234',
    category: 'Communication',
    lastUpdated: '2023-10-02'
  }, {
    id: 5,
    name: 'Project Management',
    username: 'pm_user',
    password: 'project#567',
    category: 'Tools',
    lastUpdated: '2023-10-10'
  }];
  const togglePasswordVisibility = (id: number) => {
    setShowPassword(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const filteredPasswords = passwords.filter(pw => pw.name.toLowerCase().includes(searchTerm.toLowerCase()) || pw.username.toLowerCase().includes(searchTerm.toLowerCase()) || pw.category.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="min-h-screen pt-6 pb-24 px-4 max-w-7xl mx-auto">
      <RevealOnScroll>
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Password Manager</h1>
          <p className="text-gray-400">Securely manage your credentials</p>
        </header>
      </RevealOnScroll>
      <div className="mb-8">
        <RevealOnScroll direction="up" delay={100}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search passwords..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <PlusIcon size={18} />
              <span>Add Password</span>
            </button>
          </div>
        </RevealOnScroll>
      </div>
      <RevealOnScroll direction="up" delay={200}>
        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Username</th>
                  <th className="text-left py-3 px-4">Password</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Last Updated</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPasswords.map(pw => <tr key={pw.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-blue-500/20 rounded-full">
                          <KeyIcon size={14} className="text-blue-400" />
                        </div>
                        {pw.name}
                      </div>
                    </td>
                    <td className="py-3 px-4">{pw.username}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span>
                          {showPassword[pw.id] ? pw.password : '••••••••'}
                        </span>
                        <button onClick={() => togglePasswordVisibility(pw.id)} className="text-gray-400 hover:text-white transition-colors">
                          {showPassword[pw.id] ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                        {pw.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-sm">
                      {pw.lastUpdated}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 bg-white/5 hover:bg-white/10 rounded transition-colors">
                          <PencilIcon size={14} className="text-gray-400" />
                        </button>
                        <button className="p-1.5 bg-white/5 hover:bg-red-500/20 rounded transition-colors">
                          <TrashIcon size={14} className="text-gray-400 hover:text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </RevealOnScroll>
    </div>;
};
export default PasswordManager;