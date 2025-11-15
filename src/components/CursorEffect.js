import { useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  useEffect(() => {
    // Don't show cursor on mobile devices
    if (window.innerWidth <= 768) {
      return;
    }

    const cursor = document.createElement('div');
    cursor.className = 'rainbow-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isVisible = false;

    const showCursor = () => {
      if (!isVisible) {
        cursor.style.opacity = '0.8';
        isVisible = true;
      }
    };

    const hideCursor = () => {
      if (isVisible) {
        cursor.style.opacity = '0';
        isVisible = false;
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showCursor();
    };

    const handleMouseLeave = () => {
      hideCursor();
    };

    const handleMouseEnter = () => {
      showCursor();
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
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return null;
};

export default CursorEffect;

