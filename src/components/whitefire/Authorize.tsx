// 文件位置: src/components/whitefire/Authorize.tsx
// 目标: 将支付行为，100% 地再编码为一次“授权生成报告”的动作。

import { CheckCircle2 } from 'lucide-react';

const Authorize = () => {
  return (
    // 蓝图指令: section 根元素，应用浅灰色背景，并标记为滚动捕捉点
    <section id="authorize" className="bg-gray-50 scroll-snap-align-start">
      
      {/* 蓝图指令: 全局容器约束 和 模块间距 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* 蓝图指令: 支付授权卡片容器 */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
          
          {/* 蓝图指令: H3 产品名 */}
          <h3 className="text-2xl font-bold text-gray-900">
            Z2.5 Cognitive Pattern Diagnostic Report
          </h3>

          {/* 蓝图指令: 价格描述 */}
          <p className="mt-4 text-gray-900"> {/* 修正: 确保价格颜色为主要文字色 */}
            <span className="text-5xl font-bold">$49</span>
            <span className="text-gray-600"> / One-Time Generation & Delivery Fee</span>
          </p>

          {/* 蓝图指令: 特性列表 */}
          <ul className="mt-6 text-left space-y-2 text-gray-900"> {/* 修正: 确保列表文字为主要文字色 */}
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Personalized PDF Report</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Secure Digital Delivery</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>No Subscription</span>
            </li>
          </ul>

          {/* 蓝图指令: 主 CTA 按钮 */}
          <a 
            href="https://example.com/checkout" // 注意: 这里的 "支付链接" 已被替换为示例链接
            target="_blank" 
            rel="noopener noreferrer" // 安全最佳实践
            className="mt-8 w-full inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Authorize and Generate My Report
          </a>

        </div>
      </div>
    </section>
  );
};

export default Authorize;