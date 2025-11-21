import { useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'aurora-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isVisible = false;

    const showCursor = () => {
      if (!isVisible) {
        cursor.style.opacity = '0.85';
        isVisible = true;
      }
    };

    const hideCursor = () => {
      if (isVisible) {
        cursor.style.opacity = '0';
        isVisible = false;
      }
    };

    const updateTarget = (x, y) => {
      mouseX = x;
      mouseY = y;
      showCursor();
    };

    const handleMouseMove = (e) => {
      updateTarget(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      hideCursor();
    };

    const handleMouseEnter = () => {
      showCursor();
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      updateTarget(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      hideCursor();
    };

    // Smooth cursor following with easing
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('touchstart', handleTouchMove, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);
    
    // Initialize cursor position
    if (window.innerWidth > 0) {
      mouseX = window.innerWidth / 2;
      mouseY = window.innerHeight / 2;
      cursorX = mouseX;
      cursorY = mouseY;
      cursor.style.opacity = '0';
    }
    
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('touchstart', handleTouchMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return null;
};

export default CursorEffect;

