// 文件位置: src/components/whitefire/Footer.tsx

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // 根元素: 深灰色背景，浅灰色文字
    <footer className="bg-gray-800 text-gray-300">
      
      {/* 全局容器约束 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 内部 Flexbox 布局，响应式 */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          
          {/* 左侧列: 更新后的公司信息 */}
          <div className="text-center md:text-left text-sm">
            <p>&copy; {new Date().getFullYear()} RESONANCE SYNC LTD. All Rights Reserved.</p>
            <p className="mt-1 text-gray-400">
              {/* 修正: 更新联系邮箱地址 */}
              Company Number: 16528999 | Registered in England and Wales | support@faterewrite.com
            </p>
          </div>

          {/* 右侧列: 法律链接 (保持不变) */}
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;