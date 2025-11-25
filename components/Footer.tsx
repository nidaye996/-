import React from 'react';
import { Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">核薪录 Collatrix</h2>
            <p className="text-sm mb-4">The Salary Verification Matrix</p>
            <p className="text-gray-500 text-sm max-w-sm">
              用严谨核对的态度，守护劳动者的辛苦薪水。致力于打造最专业、最便捷的薪资档案核对系统。
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">联系与支持</h3>
            <div className="flex flex-col md:items-end space-y-2">
              <a href="mailto:2485652453@qq.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" /> 2485652453@qq.com
              </a>
              <a href="https://github.com/nidaye996/Collatrix" target="_blank" rel="noreferrer" className="flex items-center hover:text-white transition-colors">
                <Github className="w-4 h-4 mr-2" /> GitHub Repository
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2025 张德帅. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Version 2.0.0</span>
            <span>Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};