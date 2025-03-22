import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { CodeIcon, PlayIcon, PauseIcon, PlusIcon, DownloadIcon, TrashIcon, ClockIcon } from 'lucide-react';
const ScriptRunner = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const [scriptContent, setScriptContent] = useState('# Enter your Python script here\n\nprint("Hello, world!")\n\n# Example: Loop through numbers\nfor i in range(5):\n    print(f"Number: {i}")');
  return <div className="min-h-screen pt-6 pb-24 px-4 max-w-7xl mx-auto">
      <RevealOnScroll>
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Script Runner</h1>
          <p className="text-gray-400">Execute and manage Python scripts</p>
        </header>
      </RevealOnScroll>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevealOnScroll direction="up" delay={100} className="lg:col-span-2">
          <GlassCard className="h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('editor')} className={`px-3 py-1 rounded-md transition-colors ${activeTab === 'editor' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                  Editor
                </button>
                <button onClick={() => setActiveTab('output')} className={`px-3 py-1 rounded-md transition-colors ${activeTab === 'output' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                  Output
                </button>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors">
                  <PlayIcon size={16} />
                </button>
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                  <DownloadIcon size={16} />
                </button>
              </div>
            </div>
            {activeTab === 'editor' ? <div className="bg-black/50 rounded-lg border border-white/10 h-96 overflow-hidden">
                <textarea value={scriptContent} onChange={e => setScriptContent(e.target.value)} className="w-full h-full bg-transparent p-4 font-mono text-sm focus:outline-none text-gray-200" spellCheck="false" />
              </div> : <div className="bg-black/50 rounded-lg border border-white/10 h-96 overflow-auto p-4 font-mono text-sm text-gray-200">
                <div className="text-green-400">$ python script.py</div>
                <div className="mt-2">Hello, world!</div>
                <div>Number: 0</div>
                <div>Number: 1</div>
                <div>Number: 2</div>
                <div>Number: 3</div>
                <div>Number: 4</div>
                <div className="mt-2 text-green-400">
                  $ Execution completed successfully
                </div>
              </div>}
          </GlassCard>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={200}>
          <div className="space-y-6">
            <GlassCard>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Saved Scripts</h2>
                <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                  <PlusIcon size={16} />
                </button>
              </div>
              <div className="space-y-2">
                {['data_analysis.py', 'backup_db.py', 'api_test.py', 'image_processor.py', 'log_analyzer.py'].map((script, index) => <div key={index} className="flex justify-between items-center p-2 rounded-md hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2">
                      <CodeIcon size={16} className="text-purple-400" />
                      <span>{script}</span>
                    </div>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-purple-500/20 rounded transition-colors">
                        <PlayIcon size={14} className="text-purple-400" />
                      </button>
                      <button className="p-1 hover:bg-white/10 rounded transition-colors">
                        <TrashIcon size={14} className="text-gray-400" />
                      </button>
                    </div>
                  </div>)}
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Execution History</h2>
              </div>
              <div className="space-y-2">
                {[{
                name: 'data_analysis.py',
                time: '10 minutes ago',
                status: 'success'
              }, {
                name: 'backup_db.py',
                time: '1 hour ago',
                status: 'success'
              }, {
                name: 'api_test.py',
                time: '3 hours ago',
                status: 'error'
              }, {
                name: 'log_analyzer.py',
                time: '1 day ago',
                status: 'success'
              }].map((item, index) => <div key={index} className="flex justify-between items-center p-2 rounded-md hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2">
                      <CodeIcon size={16} className={item.status === 'success' ? 'text-green-400' : 'text-red-400'} />
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <ClockIcon size={12} />
                      <span>{item.time}</span>
                    </div>
                  </div>)}
              </div>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </div>
    </div>;
};
export default ScriptRunner;