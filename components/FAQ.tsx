import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "软件需要安装Python吗？",
    answer: "不需要。软件已打包为独立的exe文件，内置运行环境，双击即可运行，无需安装Python或任何第三方依赖库。"
  },
  {
    question: "支持哪些文件格式？",
    answer: "完美支持Excel文件（.xlsx, .xls）和Word文件（.docx, .doc）。系统能够智能识别表头，无需繁琐的手动格式转换。"
  },
  {
    question: "数据安全吗？会不会上传到服务器？",
    answer: "绝对安全。Collatrix 是纯本地化运行的软件，所有数据处理都在您的电脑本地完成，不联网，不上传，确保财务数据零泄露。"
  },
  {
    question: "生成的报告包含哪些内容？",
    answer: "系统会生成12种Excel报告，包括不一致数据汇总、新增人员名单、银行信息验证报告等。所有报告都经过格式化处理，形成完整的电子档案。"
  },
  {
    question: "遇到问题怎么办？",
    answer: "您可以查看随软件附带的使用手册，或者通过页面底部的邮箱联系技术支持。"
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" bg="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">常见问题</h2>
        <p className="text-gray-600">解答您的疑惑</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
            >
              <span className="font-semibold text-gray-900 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-3" />
                {faq.question}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <div
              className={`bg-gray-50 px-5 text-gray-600 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-48 py-5 border-t border-gray-100' : 'max-h-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};