import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, KeyIcon, CodeIcon, FolderIcon, UsersIcon } from 'lucide-react';
const BottomNavbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navItems = [{
    path: '/dashboard',
    icon: HomeIcon,
    label: 'Dashboard'
  }, {
    path: '/passwords',
    icon: KeyIcon,
    label: 'Passwords'
  }, {
    path: '/scripts',
    icon: CodeIcon,
    label: 'Scripts'
  }, {
    path: '/projects',
    icon: FolderIcon,
    label: 'Projects'
  }, {
    path: '/teams',
    icon: UsersIcon,
    label: 'Teams'
  }];
  return <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1 flex items-center gap-1 shadow-lg">
        {navItems.map(item => {
        const isActive = location.pathname === item.path;
        const isHovered = hoveredItem === item.path;
        return <Link key={item.path} to={item.path} className={`relative flex flex-col items-center p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`} onMouseEnter={() => setHoveredItem(item.path)} onMouseLeave={() => setHoveredItem(null)}>
              <item.icon className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-white/70'}`} size={20} />
              <div className={`absolute -bottom-8 whitespace-nowrap bg-black/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md border border-white/10 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {item.label}
              </div>
              {isActive && <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse"></div>}
            </Link>;
      })}
      </div>
    </div>;
};
export default BottomNavbar;