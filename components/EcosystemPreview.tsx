import { motion } from "motion/react";
import { Laptop, Smartphone, Wifi } from "lucide-react";

export function EcosystemPreview() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left md:max-w-md">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Одна экосистема.
              <br />
              <span className="text-zinc-500 dark:text-zinc-400">
                Все ваши устройства.
              </span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Начните перевод на iPhone, продолжите на Mac. История операций и аналитика синхронизируются мгновенно через зашифрованный канал.
            </p>
          </div>

          {/* Visual Sync Animation */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-24 h-48 bg-black dark:bg-zinc-800 rounded-[2rem] border-4 border-zinc-300 dark:border-zinc-700 flex items-center justify-center shadow-xl"
            >
              <Smartphone className="text-white w-8 h-8" />
              {/* Screen Content Mockup */}
              <div className="absolute inset-2 bg-zinc-800 rounded-[1.5rem] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-blue-500/20 to-transparent" />
              </div>
            </motion.div>

            {/* Sync Waves */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <motion.div 
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Wifi className="w-6 h-6 text-blue-500" />
              </motion.div>
              <div className="h-0.5 w-12 md:w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>

            {/* Laptop */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-64 h-40 bg-zinc-200 dark:bg-zinc-800 rounded-xl border border-zinc-300 dark:border-zinc-700 flex flex-col items-center shadow-xl"
            >
              {/* Lid */}
              <div className="w-full h-[85%] bg-black dark:bg-zinc-900 rounded-t-lg p-2 flex items-center justify-center">
                 <Laptop className="text-zinc-700 dark:text-zinc-600 w-12 h-12" />
                 <div className="absolute inset-x-4 inset-y-4 border border-zinc-800 rounded flex items-center justify-center">
                    <span className="text-xs text-zinc-500">Finic for macOS</span>
                 </div>
              </div>
              {/* Base */}
              <div className="w-[110%] h-[15%] bg-zinc-300 dark:bg-zinc-700 rounded-b-lg shadow-md" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
