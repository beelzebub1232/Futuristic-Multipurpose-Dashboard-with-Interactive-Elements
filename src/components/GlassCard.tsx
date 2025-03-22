import React from 'react';
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
}
const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(255, 255, 255, 0.1)',
  hoverEffect = true
}) => {
  return <div className={`relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg transition-all duration-500 ${hoverEffect ? 'hover:shadow-xl hover:bg-black/40 hover:border-white/20' : ''} ${className}`} style={{
    boxShadow: `0 0 20px ${glowColor}`
  }}>
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>;
};
export default GlassCard;