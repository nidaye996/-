import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '品牌故事', href: '#story' },
    { name: '功能亮点', href: '#features' },
    { name: '使用流程', href: '#workflow' },
    { name: '常见问题', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`text-2xl font-bold font-serif-sc tracking-tight ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
              核薪录 <span className={`font-sans text-sm font-normal ${isScrolled ? 'text-gray-500' : 'text-blue-200'}`}>Collatrix</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#download" 
              className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-900 hover:bg-gray-100'
              }`}
            >
              <Download className="w-4 h-4 mr-2" />
              立即下载
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-gray-800' : 'text-white'}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full px-4 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-800 font-medium text-lg block"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#download" 
            className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            <Download className="w-5 h-5 mr-2" />
            立即下载
          </a>
        </div>
      )}
    </nav>
  );
};