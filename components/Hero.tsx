import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden text-white pt-16">
      {/* Background Matrix Animation Effect (Simplified) */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        {/* Animated Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="flex items-center space-x-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              v2.0.0 正式发布
            </span>
            <span className="flex items-center text-green-400 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 mr-1" /> 零错误率
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
            <span className="font-serif-sc">核薪录</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white font-sans text-4xl md:text-6xl mt-2 block">
              Collatrix
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
            一键核对，万分安心
            <span className="block text-sm md:text-base mt-2 opacity-70">
              The Salary Verification Matrix
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            用严谨核对的态度，守护劳动者的辛苦薪水。一个强大、精密且可靠的薪资数据矩阵。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#download" className="group flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50">
              <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              立即下载
            </a>
            <a href="#story" className="group flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-medium transition-all backdrop-blur-sm">
              了解更多
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Mockup Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/80 backdrop-blur-md">
            {/* Window Header */}
            <div className="h-8 bg-slate-900/50 flex items-center px-4 space-x-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 text-xs text-gray-400 font-mono">Collatrix v2.0.0 - Processing...</div>
            </div>
            {/* Window Content Mockup */}
            <div className="p-6 relative">
              <div className="flex justify-between items-center mb-6">
                <div className="h-4 w-32 bg-slate-600 rounded animate-pulse"></div>
                <div className="h-8 w-24 bg-blue-600 rounded text-center text-xs text-white flex items-center justify-center">执行核对</div>
              </div>
              
              {/* Data Grid Mockup */}
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-4 p-3 rounded bg-slate-700/50 border border-slate-600/30">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex-shrink-0"></div>
                    <div className="flex-1 h-2 bg-slate-500 rounded"></div>
                    <div className="w-24 h-2 bg-slate-500 rounded"></div>
                    <div className={`w-16 h-4 rounded text-[10px] flex items-center justify-center font-bold ${i === 3 ? 'bg-red-500/20 text-red-300 border border-red-500/50' : 'bg-green-500/20 text-green-300 border border-green-500/50'}`}>
                      {i === 3 ? 'ERROR' : 'MATCH'}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Scanning Line Animation */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-10"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              />
            </div>
          </div>
          
          {/* Floating Stats Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl flex items-center space-x-3 z-20">
            <div className="bg-green-100 p-2 rounded-full">
               <ShieldCheck className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Validation Accuracy</p>
              <p className="text-xl font-bold text-gray-900">100%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};