import React from 'react';
import { Section } from './ui/Section';
import { XCircle, CheckCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <Section id="comparison" bg="dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">为什么选择核薪录？</h2>
        <p className="text-gray-400">不仅仅是工具，更是您的薪资档案管家</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Pain Points */}
        <div className="bg-red-900/20 border border-red-900/50 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
            <XCircle className="w-6 h-6 mr-2" /> 传统方式的困扰
          </h3>
          <ul className="space-y-4">
            {[
              "手工核对，耗时耗力（2-3小时/次）",
              "容易出现人为疏忽，数据不准确",
              "Word文档需要手动转换，繁琐低效",
              "银行信息验证困难，容易退票",
              "报告格式不统一，缺乏专业度",
              "缺乏可追溯的档案记录，审计困难"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-300">
                <span className="mr-3 text-red-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-green-900/20 border border-green-900/50 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full"></div>
          <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2" /> 核薪录解决方案
          </h3>
          <ul className="space-y-4">
            {[
              "一键自动核对，秒级完成（2-3分钟）",
              "智能验证算法，准确率100%",
              "支持Word直接读取，无需格式转换",
              "银行信息自动验证 (Luhn算法 + 库匹配)",
              "12种专业报告自动生成，即刻打印",
              "完整的电子档案系统，随时追溯"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start text-white font-medium">
                <span className="mr-3 text-green-500 mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};