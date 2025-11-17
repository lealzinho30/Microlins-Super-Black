import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      // Criar apenas 1 círculo ocasionalmente (mais leve)
      if (Math.random() < 0.1 && circlesRef.current.length < 10) {
        const circle = document.createElement('div');
        circle.className = 'mouse-circle';
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
        document.body.appendChild(circle);

        // Remover após animação
        setTimeout(() => {
          circle.remove();
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default InteractiveBackground;
