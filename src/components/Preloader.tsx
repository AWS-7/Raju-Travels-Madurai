import { useEffect, useState } from 'react';
import { Compass, Map, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFastConnection, setIsFastConnection] = useState(true);

  useEffect(() => {
    // Detect network speed using Network Information API
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const effectiveType = connection.effectiveType;
      setIsFastConnection(['4g', '5g'].includes(effectiveType));
    }

    const handleLoad = () => {
      setProgress(100);
      // Delay to show full progress
      setTimeout(onComplete, isFastConnection ? 500 : 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);

      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const increment = isFastConnection ? 15 : 8;
          const next = Math.min(prev + increment, 95);
          if (next >= 95) clearInterval(progressInterval);
          return next;
        });
      }, 300);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(progressInterval);
      };
    }
  }, [onComplete, isFastConnection]);

  const travelIcons = [
    { Icon: Compass, delay: 0 },
    { Icon: Map, delay: 0.3 },
    { Icon: Globe2, delay: 0.6 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2C59] via-[#1a3f7a] to-[#0F2C59]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-[#C9952A]/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-[#C9952A]/15 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Main preloader content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6">
        {/* Icon ring animation */}
        <div className="relative w-48 h-36">
          {/* Rotating outer ring */}
          <motion.div
            className="absolute inset-0 border-2 border-[#C9952A]/30 rounded-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-2 border border-[#C9952A]/50 rounded-3xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img 
                src="/images/logo.png" 
                alt="Blessings Tours & Travels Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          {/* Travel icons orbiting */}
          {travelIcons.map(({ Icon, delay }, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
                delay,
              }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay + 0.5,
                }}
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <Icon className="w-5 h-5 text-[#C9952A]" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Text content */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9952A]" />
            <span className="text-[#C9952A] text-sm font-medium tracking-[0.3em] uppercase">
              Crafting Memories
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C9952A]" />
          </div>
        </motion.div>

        {/* Modern progress bar */}
        <div className="w-full max-w-xs">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C9952A] via-[#d4a030] to-[#C9952A] bg-[length:200%_100%]"
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                width: { duration: 0.3 },
                backgroundPosition: { duration: 2, repeat: Infinity, ease: 'linear' },
              }}
            />
          </div>
          <motion.div
            className="flex items-center justify-center gap-2 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white/40 text-xs tracking-widest uppercase">
              Preparing your journey
            </span>
            <span className="text-[#C9952A] text-xs font-semibold">
              {progress}%
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
