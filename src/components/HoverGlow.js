import React, { useEffect, useState } from 'react';

const HoverGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let rafId;
    
    const handleMouseMove = (e) => {
      // Usar requestAnimationFrame para melhor performance
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsActive(true);
      });
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  if (!isActive) return null;

  return (
    <div
      className="fixed pointer-events-none z-30 transition-all duration-500 ease-out"
      style={{
        left: position.x,
        top: position.y,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(243, 17, 93, 0.08) 0%, transparent 60%)',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(40px)',
      }}
    />
  );
};

export default HoverGlow;
