// 文件位置: src/components/whitefire/TheProcess.tsx

import { FileText, Settings2, DownloadCloud } from 'lucide-react';

const TheProcess = () => {
  return (
    <section id="diagnostic" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          The Diagnostic Process – Secure & Automated
        </h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FileText className="h-12 w-12 mx-auto text-blue-600" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">1. Complete the Sequence</h4>
            <p className="mt-2 text-gray-600">Answer a series of guided, non-invasive prompts online.</p>
          </div>
          <div className="text-center">
            <Settings2 className="h-12 w-12 mx-auto text-blue-600" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">2. System Analyzes Your Inputs</h4>
            <p className="mt-2 text-gray-600">Our system processes your unique responses to generate your personalized report.</p>
          </div>
          <div className="text-center">
            <DownloadCloud className="h-12 w-12 mx-auto text-blue-600" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">3. Receive Your Encrypted Report</h4>
            <p className="mt-2 text-gray-600">Your PDF report is generated and delivered instantly to your inbox.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;