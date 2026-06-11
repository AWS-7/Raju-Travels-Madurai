import { useEffect, useState } from 'react';
import { Plane, Sparkles, MapPin } from 'lucide-react';
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

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] bg-[#0F2C59] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#C9952A]/10"
            initial={{ x: -100, y: 0, opacity: 0 }}
            animate={{ x: window.innerWidth + 100, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 3,
              ease: 'linear'
            }}
            style={{ top: `${20 + i * 15}%` }}
          >
            <Plane className="w-12 h-12" />
          </motion.div>
        ))}
      </div>

      {/* Main preloader content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo area */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#C9952A] to-[#b07f20] rounded-full flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Plane className="w-10 h-10 text-white" fill="white" />
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white font-serif tracking-wide">
              Blessings Tours & Travels
            </h2>
            <div className="flex items-center justify-center gap-1 mt-1">
              <Sparkles className="w-3 h-3 text-[#C9952A]" />
              <span className="text-[#C9952A] text-xs font-medium uppercase tracking-widest">
                Your Journey Begins Here
              </span>
              <Sparkles className="w-3 h-3 text-[#C9952A]" />
            </div>
          </div>
        </motion.div>

        {/* Progress indicator */}
        <div className="w-72">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C9952A] to-[#b07f20]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60">Loading...</span>
            <span className="text-[#C9952A] font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Travel icons animation */}
        <div className="flex gap-4">
          {[MapPin, Plane, Sparkles].map((Icon, i) => (
            <motion.div
              key={i}
              className="text-[#C9952A]/40"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
