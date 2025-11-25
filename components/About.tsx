import React from 'react';
import { Section } from './ui/Section';
import { Heart, UserCheck, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" bg="gray" className="text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">关于我们</h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          核薪录（Collatrix）是一款专业的工资核对系统，开发者张德帅致力于用技术手段解决繁琐的薪酬核对痛点。
          我们深知，每一个数字背后都是劳动者的汗水，每一分钱的准确发放都是对劳动价值的尊重。
        </p>

        <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-2">
              <Heart className="w-5 h-5 text-orange-500" />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">有温度</h4>
            <p className="text-xs text-gray-500 mt-1">用心关怀</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <UserCheck className="w-5 h-5 text-blue-500" />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">负责任</h4>
            <p className="text-xs text-gray-500 mt-1">严谨细致</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-purple-500" />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">更专业</h4>
            <p className="text-xs text-gray-500 mt-1">追求卓越</p>
          </div>
        </div>
      </div>
    </Section>
  );
};