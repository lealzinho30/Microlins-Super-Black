import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Círculo externo */}
      <div className="w-8 h-8 border-2 border-[#f3115d] rounded-full opacity-50" />
      
      {/* Ponto central */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#f3115d] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default MouseFollower;
