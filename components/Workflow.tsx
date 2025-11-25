import React from 'react';
import { Section } from './ui/Section';
import { FolderInput, MousePointerClick, Zap, FileSpreadsheet, HardDrive } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: '准备文件',
    description: '准备Excel或Word格式的支付表与报审表',
    icon: FolderInput
  },
  {
    id: 2,
    title: '选择文件',
    description: '支持拖拽，无需手动转换格式',
    icon: MousePointerClick
  },
  {
    id: 3,
    title: '执行核对',
    description: '系统自动处理，实时显示进度',
    icon: Zap
  },
  {
    id: 4,
    title: '查看报告',
    description: '自动生成12种格式化报告，高亮错误',
    icon: FileSpreadsheet
  },
  {
    id: 5,
    title: '档案保存',
    description: '自动归档，形成可追溯记录',
    icon: HardDrive
  }
];

export const Workflow: React.FC = () => {
  return (
    <Section id="workflow" bg="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">简单五步，一键完成</h2>
        <p className="text-gray-600">效率提升60倍，从2小时缩短至2分钟</p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors relative z-10 shadow-sm">
                <step.icon className="w-10 h-10 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};