'use client';

import { motion, useAnimation, useMotionValue, useTransform } from 'motion/react';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggleCord() {
  const { toggleTheme } = useTheme();
  const y = useMotionValue(0);
  const controls = useAnimation();

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.y > 40) {
      toggleTheme();
    }
    controls.start({ y: 0, transition: { type: 'spring', stiffness: 400, damping: 10 } });
  };

  const handleClick = () => {
    // Animate a quick pull down and up
    controls.start({ y: [0, 50, 0], transition: { duration: 0.4, type: 'spring' } }).then(() => {
      toggleTheme();
    });
  };

  return (
    <div className="fixed top-0 right-6 md:right-12 z-[100] flex flex-col items-center pointer-events-none group">
      {/* The cord */}
      <motion.div
        className="w-[2px] bg-zinc-300 dark:bg-zinc-700 origin-top"
        style={{ height: useTransform(y, (val) => Math.max(60, 60 + val)) }}
      />
      {/* The handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 80 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        onTap={handleClick}
        animate={controls}
        style={{ y }}
        className="w-3 h-12 bg-gradient-to-b from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-800 rounded-full cursor-grab active:cursor-grabbing shadow-sm pointer-events-auto border border-zinc-400 dark:border-zinc-600 flex items-end justify-center pb-1 relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
        
        {/* Tooltip */}
        <div className="absolute top-14 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-[10px] font-medium text-zinc-500 dark:text-zinc-400 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-2 py-1 rounded-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
          Потяните или нажмите
        </div>
      </motion.div>
    </div>
  );
}
