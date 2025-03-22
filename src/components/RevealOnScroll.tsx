import React, { useEffect, useState, useRef } from 'react';
interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
  className?: string;
}
const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-20 opacity-0';
        case 'down':
          return '-translate-y-20 opacity-0';
        case 'left':
          return 'translate-x-20 opacity-0';
        case 'right':
          return '-translate-x-20 opacity-0';
        case 'zoom':
          return 'scale-95 opacity-0';
        default:
          return 'opacity-0';
      }
    }
    return 'translate-y-0 translate-x-0 scale-100 opacity-100';
  };
  return <div ref={ref} className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      {children}
    </div>;
};
export default RevealOnScroll;