import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { BookOpen, Database } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <Section id="story" bg="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">品牌故事</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Chinese Name Meaning */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm"
        >
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
            <h3 className="text-3xl font-bold font-serif-sc text-gray-900">核薪录</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">【核】精准、核对、负责</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                以严谨、细致、负责的工作态度为基石，进行核心数据的核对、审核与交叉比对，保障数据绝对准确。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">【薪】关怀、价值、根本</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                承载重大社会价值，以有温度的情感关怀劳动者，用心守护每一份劳动成果。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">【录】档案、凭证、传承</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                建立正式、可信、可溯源的档案系统，记录并传承对劳动价值的尊重。
              </p>
            </div>
            <p className="text-blue-900 font-medium italic pt-4 border-t border-gray-200 mt-4">
              "用严谨核对的态度，守护劳动者的辛苦薪水，并将其准确无误地记录在案的庄重承诺。"
            </p>
          </div>
        </motion.div>

        {/* English Name Meaning */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-8 rounded-2xl border-l-4 border-emerald-500 shadow-xl text-white relative overflow-hidden"
        >
            {/* Abstract bg element */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>

          <div className="flex items-center mb-6 relative z-10">
            <Database className="w-8 h-8 text-emerald-400 mr-4" />
            <h3 className="text-3xl font-bold font-sans tracking-wider">Collatrix</h3>
          </div>
          
          <div className="space-y-6 relative z-10">
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-2">【Collate】核对、校对、整理</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                系统的核心技术动作：进行精准的系统性比对与数据校验。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-2">【Matrix】母体、矩阵、系统</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                一个精密、有序、科技感十足的数字矩阵，代表着现代化的力量与先进性。
              </p>
            </div>
            <p className="text-white font-medium italic pt-4 border-t border-gray-700 mt-4">
              "一个强大、精密且可靠的数字矩阵，所有薪资数据流入其中，都会被自动、精准地完成核对与整理。"
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};