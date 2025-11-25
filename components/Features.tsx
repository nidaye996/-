import React from 'react';
import { Section } from './ui/Section';
import { FileText, Shield, Table, BarChart3, Layout, CreditCard, Archive, Zap } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'f1',
    title: 'Word文档自动识别',
    description: '无需手动转换，直接读取Word文档，自动提取表格和文本信息，支持.docx和.doc格式。',
    icon: FileText
  },
  {
    id: 'f2',
    title: '智能数据验证',
    description: '内置身份证号格式验证（地区码+校验位）及银行卡号Luhn算法验证，确保源头数据准确。',
    icon: Shield
  },
  {
    id: 'f3',
    title: '三表对比功能',
    description: '支付表、报审表、支付明细表一键交叉对比，毫秒级发现不一致数据。',
    icon: Table
  },
  {
    id: 'f4',
    title: '专业报告生成',
    description: '12种Excel报告自动生成，错误数据红色高亮，不一致数据黄色标记，自动排序。',
    icon: BarChart3
  },
  {
    id: 'f5',
    title: '图形化界面',
    description: '操作简单直观，实时显示处理进度，支持字体自定义，自适应不同分辨率。',
    icon: Layout
  },
  {
    id: 'f6',
    title: '银行信息验证',
    description: '支持自定义银行信息库，自动验证开户行名称，确保转账无忧。',
    icon: CreditCard
  },
  {
    id: 'f7',
    title: '电子档案系统',
    description: '完整的核对记录自动归档，形成不可篡改的电子档案，满足专业审计需求。',
    icon: Archive
  },
  {
    id: 'f8',
    title: '极速性能',
    description: '1000条数据处理小于30秒。无需安装Python，双击即用。',
    icon: Zap
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="features" bg="gray">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心功能矩阵</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Collatrix 作为一个精密的数字矩阵，集成了多项核心技术，为您的薪资核对工作提供全方位保障。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div 
            key={feature.id} 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};