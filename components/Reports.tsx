import React from 'react';
import { Section } from './ui/Section';

export const Reports: React.FC = () => {
  return (
    <Section id="reports" bg="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">专业报告展示</h2>
        <p className="text-gray-600">每一份报告，都是严谨核对的见证</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
             <h3 className="text-xl font-bold text-blue-900 mb-3">智能化格式处理</h3>
             <ul className="space-y-2 text-gray-600 text-sm">
               <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>错误数据红色高亮，一目了然</li>
               <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>不一致数据黄色标记</li>
               <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>自动列宽调整，适合打印</li>
               <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>序号自动重新排序</li>
             </ul>
           </div>
           
           <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
             <h3 className="text-xl font-bold text-blue-900 mb-3">覆盖场景</h3>
             <div className="flex flex-wrap gap-2">
               {['支付表与报审表差异', '银行信息验证', '三表交叉对比', '新增人员汇总', '身份证校验'].map(tag => (
                 <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                   {tag}
                 </span>
               ))}
             </div>
           </div>
        </div>

        {/* CSS Mockup of an Excel Report */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-300 text-xs font-mono">
          <div className="bg-[#1D6F42] text-white p-2 flex justify-between items-center">
            <span>核薪录_异常数据汇总报告.xlsx</span>
            <div className="flex gap-1">
               <div className="w-2 h-2 bg-white/50 rounded-full"></div>
               <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-gray-600">
                  <th className="p-2 border-r border-gray-200">序号</th>
                  <th className="p-2 border-r border-gray-200">姓名</th>
                  <th className="p-2 border-r border-gray-200">身份证号</th>
                  <th className="p-2 border-r border-gray-200">实发工资</th>
                  <th className="p-2 border-r border-gray-200">备注</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-2 border-r border-gray-100">1</td>
                  <td className="p-2 border-r border-gray-100">张三</td>
                  <td className="p-2 border-r border-gray-100">110101199001011234</td>
                  <td className="p-2 border-r border-gray-100 text-right">5000.00</td>
                  <td className="p-2 text-green-600">正常</td>
                </tr>
                <tr className="border-b border-gray-100 bg-red-50">
                  <td className="p-2 border-r border-gray-100">2</td>
                  <td className="p-2 border-r border-gray-100 font-bold">李四</td>
                  <td className="p-2 border-r border-gray-100 text-red-600 font-bold">1101011995... (Err)</td>
                  <td className="p-2 border-r border-gray-100 text-right">4500.00</td>
                  <td className="p-2 text-red-600 font-bold">身份证格式错误</td>
                </tr>
                <tr className="border-b border-gray-100 bg-yellow-50">
                  <td className="p-2 border-r border-gray-100">3</td>
                  <td className="p-2 border-r border-gray-100">王五</td>
                  <td className="p-2 border-r border-gray-100">120101198803045678</td>
                  <td className="p-2 border-r border-gray-100 text-right text-yellow-700 font-bold">6000.00</td>
                  <td className="p-2 text-yellow-700">与报审表金额不符</td>
                </tr>
                 <tr className="border-b border-gray-100">
                  <td className="p-2 border-r border-gray-100">4</td>
                  <td className="p-2 border-r border-gray-100">赵六</td>
                  <td className="p-2 border-r border-gray-100">130101199205069999</td>
                  <td className="p-2 border-r border-gray-100 text-right">5500.00</td>
                  <td className="p-2 text-green-600">正常</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 p-2 text-gray-400 text-[10px] border-t border-gray-200">
            Sheet1: 不一致汇总 | Sheet2: 银行校验 | Sheet3: 明细对比
          </div>
        </div>
      </div>
    </Section>
  );
};