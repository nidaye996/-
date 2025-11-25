import React from 'react';
import { Section } from './ui/Section';
import { Download as DownloadIcon, Monitor, Check } from 'lucide-react';

export const Download: React.FC = () => {
  return (
    <Section id="download" bg="blue" className="text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif-sc">
          一键核对，万分安心
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          立即下载核薪录 (Collatrix) v2.0.0，体验用严谨核对的态度，守护劳动者的辛苦薪水。
        </p>

        <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-1">Collatrix v2.0.0</h3>
              <p className="text-gray-500 text-sm">更新日期：2025年11月24日 | 大小：约 45 MB</p>
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
              <DownloadIcon className="w-6 h-6 mr-2" />
              立即下载 Windows 版
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left border-t border-gray-100 pt-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-blue-600" />
                系统要求
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Windows 7 及以上版本</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> 64位操作系统（推荐）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <DownloadIcon className="w-5 h-5 mr-2 text-blue-600" />
                其他资源
              </h4>
              <ul className="space-y-2 text-sm text-blue-600 font-medium">
                <li><a href="#" className="hover:underline">下载使用手册 (PDF)</a></li>
                <li><a href="#" className="hover:underline">下载测试数据包 (Zip)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};