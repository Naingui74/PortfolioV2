import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const trailDotsRef = useRef<HTMLDivElement[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const speed = useMotionValue(0);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Spring physics for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Transform speed into visual effects
  const scale = useTransform(speed, [0, 1000], [1, 1.2]);
  const glow = useTransform(speed, [0, 1000], [0.3, 0.8]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePosition.current.x;
      const dy = e.clientY - lastMousePosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      speed.set(distance);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize trail dots
    const numTrailDots = 8;
    trailDotsRef.current = Array.from({ length: numTrailDots }).map(() => {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      trailRef.current?.appendChild(dot);
      return dot;
    });

    // Trail effect
    let trailPositions: { x: number; y: number }[] = [];
    const updateTrail = () => {
      const currentPosition = { x: mouseX.get(), y: mouseY.get() };
      trailPositions.unshift(currentPosition);
      trailPositions = trailPositions.slice(0, trailDotsRef.current.length);

      trailDotsRef.current.forEach((dot, index) => {
        if (trailPositions[index]) {
          const { x, y } = trailPositions[index];
          const scale = 1 - (index / trailDotsRef.current.length);
          dot.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
          dot.style.opacity = String(scale * 0.5);
        }
      });

      requestAnimationFrame(updateTrail);
    };

    // Event listeners
    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-clicked');
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-clicked');
      }
    };

    const handleElementInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
      
      if (cursorRef.current) {
        if (isInteractive) {
          cursorRef.current.classList.add('cursor-hover');
        } else {
          cursorRef.current.classList.remove('cursor-hover');
        }
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousemove', handleElementInteraction);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    requestAnimationFrame(updateTrail);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousemove', handleElementInteraction);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, speed]);

  return (
    <motion.div
      ref={cursorRef}
      className="cursor-container"
      style={{
        x: cursorX,
        y: cursorY,
        scale,
      }}
    >
      <div className="cursor-core" />
      <div className="cursor-ring" style={{ opacity: glow }} />
      <div ref={trailRef} className="cursor-trail" />
      
      <div className="cursor-holo">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="holo-ring"
            style={{
              animationDelay: `${i * 0.2}s`,
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>
      
      <div className="cursor-glitch">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="glitch-slice"
            style={{
              animationDelay: `${i * 0.05}s`,
              transform: `translateX(${(i - 1) * 2}px)`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CustomCursor;