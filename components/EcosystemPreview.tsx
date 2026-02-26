'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { Laptop, Smartphone, Wifi } from "lucide-react";
import { useRef } from "react";

export function EcosystemPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 md:p-16 shadow-2xl shadow-zinc-200/20 dark:shadow-black/40">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[120px]" 
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-center lg:text-left lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-500/20"
            >
              <Wifi className="w-4 h-4" />
              Cloud Sync
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
              Одна экосистема.
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">
                Все ваши устройства.
              </span>
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Начните перевод на iPhone, продолжите на Mac. История операций и аналитика синхронизируются мгновенно через зашифрованный канал iCloud.
            </p>
          </div>

          {/* Visual Sync Animation */}
          <div className="flex items-center gap-6 md:gap-12 perspective-[1000px]">
            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -20, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="relative w-32 h-64 bg-zinc-900 dark:bg-black rounded-[2.5rem] border-[6px] border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-2xl z-20"
            >
              <div className="absolute top-2 w-1/3 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-full z-30" />
              {/* Screen Content Mockup */}
              <div className="absolute inset-1 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] overflow-hidden flex flex-col p-3 gap-2">
                <div className="w-full h-1/3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-inner" />
                <div className="w-full h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                <div className="w-full h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
              </div>
            </motion.div>

            {/* Sync Waves */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center"
              >
                <Wifi className="w-6 h-6 text-blue-500" />
              </motion.div>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2 h-2 rounded-full bg-blue-400"
                  />
                ))}
              </div>
            </div>

            {/* Laptop */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 20, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", delay: 0.2 }}
              whileHover={{ scale: 1.05, rotateY: -10 }}
              className="relative w-80 h-52 bg-zinc-200 dark:bg-zinc-800 rounded-2xl border border-zinc-300 dark:border-zinc-700 flex flex-col items-center shadow-2xl z-10"
            >
              {/* Lid */}
              <div className="w-full h-[90%] bg-zinc-900 dark:bg-black rounded-t-xl p-2 flex flex-col relative overflow-hidden">
                 <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rounded-full" />
                 <div className="mt-4 flex-1 bg-zinc-50 dark:bg-zinc-900 rounded border border-zinc-800/50 p-4 flex gap-4">
                    <div className="w-1/3 h-full bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="w-full h-1/2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-md" />
                      <div className="w-full h-1/2 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                    </div>
                 </div>
              </div>
              {/* Base */}
              <div className="w-[115%] h-[10%] bg-zinc-300 dark:bg-zinc-700 rounded-b-xl shadow-md flex justify-center">
                <div className="w-1/4 h-1/2 bg-zinc-400 dark:bg-zinc-600 rounded-b-md" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
