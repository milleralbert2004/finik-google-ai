'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, BarChart3, Globe, ChevronRight, Sparkles } from "lucide-react";
import { EcosystemPreview } from "./EcosystemPreview";
import { BackgroundOrbs } from "./BackgroundOrbs";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen relative" ref={containerRef}>
      <BackgroundOrbs />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        <motion.div 
          style={{ y, opacity }}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-sm hover:bg-white dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Скоро на macOS
            </motion.span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]"
          >
            Управляйте финансами <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              с элегантностью.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Финик — это больше, чем кошелек. Это ваша финансовая экосистема, объединяющая красоту дизайна и мощь аналитики.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xl shadow-zinc-900/20 dark:shadow-white/10 cursor-pointer text-lg"
            >
              Скачать для iOS
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group h-14 px-8 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium hover:bg-white dark:hover:bg-zinc-800 transition-colors flex items-center gap-2 cursor-pointer text-lg"
            >
              Смотреть демо
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ECOSYSTEM PREVIEW --- */}
      <section className="w-full bg-transparent z-10">
        <EcosystemPreview />
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Возможности нового поколения
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Всё необходимое для контроля капитала в одном интерфейсе.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Analytics (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="md:col-span-2 row-span-1 rounded-[2rem] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 flex flex-col justify-between overflow-hidden relative group shadow-lg hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 shadow-sm">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">Глубокая аналитика</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-sm leading-relaxed">
                Визуализируйте расходы в реальном времени с помощью интерактивных графиков и AI-подсказок.
              </p>
            </div>
            {/* Pie Chart Decoration */}
            <div className="absolute bottom-0 right-0 w-full h-full flex items-center justify-end pr-8 md:pr-16 opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-xl">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="36" fill="transparent" className="stroke-zinc-100 dark:stroke-zinc-800/50" strokeWidth="12" />
                  
                  {/* Segment 1 (Blue) - 45% */}
                  <motion.circle 
                    cx="50" cy="50" r="36" fill="transparent" 
                    className="stroke-blue-500" strokeWidth="12"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    initial={{ strokeDashoffset: 100 }}
                    whileInView={{ strokeDashoffset: 100 - 45 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                  
                  {/* Segment 2 (Purple) - 30% */}
                  <motion.circle 
                    cx="50" cy="50" r="36" fill="transparent" 
                    className="stroke-purple-500" strokeWidth="12"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    initial={{ strokeDashoffset: 100 }}
                    whileInView={{ strokeDashoffset: 100 - 30 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    style={{ rotate: "162deg", transformOrigin: "50px 50px" }}
                  />
                  
                  {/* Segment 3 (Emerald) - 15% */}
                  <motion.circle 
                    cx="50" cy="50" r="36" fill="transparent" 
                    className="stroke-emerald-400" strokeWidth="12"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    initial={{ strokeDashoffset: 100 }}
                    whileInView={{ strokeDashoffset: 100 - 15 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    style={{ rotate: "270deg", transformOrigin: "50px 50px" }}
                  />
                  
                  {/* Segment 4 (Yellow) - 10% */}
                  <motion.circle 
                    cx="50" cy="50" r="36" fill="transparent" 
                    className="stroke-yellow-400" strokeWidth="12"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    initial={{ strokeDashoffset: 100 }}
                    whileInView={{ strokeDashoffset: 100 - 10 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    style={{ rotate: "324deg", transformOrigin: "50px 50px" }}
                  />
                </svg>
                
                {/* Center text */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute inset-0 m-auto w-24 h-24 md:w-28 md:h-28 bg-white dark:bg-zinc-900 rounded-full shadow-inner flex flex-col items-center justify-center"
                >
                  <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-0.5">Расходы</span>
                  <span className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white">$4,250</span>
                </motion.div>

                {/* Floating Labels */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -left-12 top-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-zinc-200/50 dark:border-zinc-700/50 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Жилье</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute -right-8 bottom-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-zinc-200/50 dark:border-zinc-700/50 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Еда</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Security */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="col-span-1 row-span-1 rounded-[2rem] bg-white/80 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800 p-8 flex flex-col text-zinc-900 dark:text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/30 transition-colors duration-500" />
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mb-auto text-emerald-600 dark:text-emerald-400 backdrop-blur-sm"
            >
              <ShieldCheck className="w-6 h-6" />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3">Безопасность</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                FaceID, сквозное шифрование и локальное хранение ключей на устройстве.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Speed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="col-span-1 rounded-[2rem] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 flex flex-col shadow-lg hover:shadow-xl transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-auto text-yellow-600 dark:text-yellow-500 shadow-sm relative z-10"
            >
              <Zap className="w-6 h-6" />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">Молниеносно</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                Запуск за 0.3с. Никаких ожиданий загрузки данных. Всё работает локально.
              </p>
            </div>
          </motion.div>

           {/* Card 4: Multicurrency */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="md:col-span-2 rounded-[2rem] bg-gradient-to-br from-zinc-100/80 to-white/80 dark:from-zinc-800/80 dark:to-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-lg hover:shadow-xl transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
             <div className="max-w-md relative z-10 mb-6 sm:mb-0">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">Мультивалютность</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                Путешествуйте без границ. Автоматическая конвертация по курсу ЦБ и поддержка более 150 валют мира.
              </p>
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-24 h-24 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-md border border-zinc-100 dark:border-zinc-700 relative z-10 shrink-0"
            >
              <Globe className="w-10 h-10 text-blue-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SOCIAL PROOF (Marquee) --- */}
      <section className="py-20 border-y border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <p className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">О нас говорят</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap items-center gap-16 md:gap-32 px-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            {/* Double the items for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-32">
                <span className="text-2xl md:text-3xl font-bold font-serif italic text-zinc-900 dark:text-white">Forbes</span>
                <span className="text-2xl md:text-3xl font-bold font-mono text-zinc-900 dark:text-white">TechCrunch</span>
                <span className="text-2xl md:text-3xl font-bold font-sans tracking-tighter text-zinc-900 dark:text-white">WIRED</span>
                <span className="text-2xl md:text-3xl font-bold font-serif text-zinc-900 dark:text-white">Bloomberg</span>
                <span className="text-2xl md:text-3xl font-bold font-sans tracking-widest text-zinc-900 dark:text-white">WSJ</span>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-auto py-16 px-4 bg-white dark:bg-zinc-950 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
               <span className="text-white dark:text-zinc-900 font-bold">F</span>
            </div>
            <span className="font-bold text-xl text-zinc-900 dark:text-white tracking-tight">Finic</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Возможности</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Безопасность</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Поддержка</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Конфиденциальность</a>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-600">© 2026 Finic Inc. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

