import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkleId = 0;

    const createSparkle = (x: number, y: number) => {
      const newSparkle: Sparkle = {
        id: sparkleId++,
        x,
        y,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.8 + 0.2,
      };

      setSparkles(prev => [...prev, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Create sparkle occasionally on mouse move
      if (Math.random() < 0.3) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};

export default SparkleEffect;