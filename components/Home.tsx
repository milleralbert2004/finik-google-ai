'use client';

import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, BarChart3, Globe, ChevronRight } from "lucide-react";
import { EcosystemPreview } from "./EcosystemPreview";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Скоро на macOS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6"
          >
            Управляйте финансами <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent bg-[200%_auto] animate-gradient">
              с элегантностью.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Финик — это больше, чем кошелек. Это ваша финансовая экосистема, объединяющая красоту дизайна и мощь аналитики.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="h-12 px-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all cursor-pointer">
              Скачать для iOS
            </button>
            <button className="group h-12 px-8 rounded-full bg-transparent border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2 cursor-pointer">
              Смотреть демо
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ECOSYSTEM PREVIEW --- */}
      <section className="w-full bg-transparent">
        <EcosystemPreview />
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Возможности нового поколения
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Всё необходимое для контроля капитала в одном интерфейсе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Analytics (Large) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 row-span-1 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Глубокая аналитика</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
                Визуализируйте расходы в реальном времени с помощью интерактивных графиков.
              </p>
            </div>
            {/* Abstract Chart Decoration */}
            <div className="absolute bottom-0 right-0 w-3/4 h-1/2 flex items-end justify-end gap-2 p-8 opacity-50 group-hover:opacity-100 transition-opacity">
              {[40, 70, 45, 90, 60, 85].map((h, i) => (
                <div 
                  key={i} 
                  className="w-8 bg-gradient-to-t from-blue-500/50 to-blue-500/10 rounded-t-md"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Card 2: Security */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="col-span-1 row-span-1 rounded-3xl bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 p-8 flex flex-col text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <ShieldCheck className="w-10 h-10 mb-auto text-green-400" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-zinc-400 text-sm">
                FaceID, сквозное шифрование и локальное хранение ключей.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Speed */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="col-span-1 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col"
          >
            <Zap className="w-10 h-10 mb-auto text-yellow-500" />
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Молниеносно</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Запуск за 0.3с. Никаких ожиданий загрузки данных.
              </p>
            </div>
          </motion.div>

           {/* Card 4: Multicurrency */}
           <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 rounded-3xl bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-800 p-8 flex items-center justify-between"
          >
             <div className="max-w-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Мультивалютность</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Путешествуйте без границ. Автоматическая конвертация по курсу ЦБ.
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
              <Globe className="w-8 h-8 text-zinc-600 dark:text-zinc-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-12 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-8">Нам доверяют</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
            {/* Placeholders for logos (Text based for now) */}
            <span className="text-xl font-bold font-serif italic">Forbes</span>
            <span className="text-xl font-bold font-mono">TechCrunch</span>
            <span className="text-xl font-bold font-sans tracking-tight">WIRED</span>
            <span className="text-xl font-bold font-serif">Bloomberg</span>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-auto py-12 px-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded-md" />
            <span className="font-bold text-zinc-900 dark:text-white">Finic</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Возможности</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Безопасность</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Поддержка</a>
          </div>
          <p className="text-sm text-zinc-500">© 2026 Finic Inc.</p>
        </div>
      </footer>
    </div>
  );
}
