import { useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'rainbow-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        cursor.style.left = e.touches[0].clientX + 'px';
        cursor.style.top = e.touches[0].clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CursorEffect;

