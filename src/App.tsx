import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PasswordManager from './pages/PasswordManager';
import ScriptRunner from './pages/ScriptRunner';
import ProjectManager from './pages/ProjectManager';
import TeamManager from './pages/TeamManager';
import BottomNavbar from './components/BottomNavbar';
export function App() {
  return <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-cyan-500 rounded-full filter blur-[150px] opacity-10"></div>
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/passwords" element={<PasswordManager />} />
            <Route path="/scripts" element={<ScriptRunner />} />
            <Route path="/projects" element={<ProjectManager />} />
            <Route path="/teams" element={<TeamManager />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/*" element={<BottomNavbar />} />
        </Routes>
      </div>
    </Router>;
}