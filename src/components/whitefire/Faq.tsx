// 文件位置: src/components/whitefire/Faq.tsx

import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h3>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          <details className="p-4 border rounded-lg">
            <summary className="font-bold cursor-pointer list-none">
              Is this a medical or psychological diagnosis?
            </summary>
            <p className="mt-2 text-gray-600">
              Absolutely not. This is a non-clinical, educational tool for self-exploration only. It is not a substitute for professional medical or psychological advice. Please see our full <Link to="/disclaimer" className="text-blue-600 underline hover:text-blue-700">disclaimer</Link>.
            </p>
          </details>
          <details className="p-4 border rounded-lg">
            <summary className="font-bold cursor-pointer list-none">
              Do you guarantee any results?
            </summary>
            <p className="mt-2 text-gray-600">
              No. We do not promise or guarantee any specific life outcomes, financial gains, or personal improvements. This is a tool for reflection, not a solution.
            </p>
          </details>
          <details className="p-4 border rounded-lg">
            <summary className="font-bold cursor-pointer list-none">
              Is this a subscription?
            </summary>
            <p className="mt-2 text-gray-600">
              No. This is a one-time purchase for a single report generation.
            </p>
          </details>
          <details className="p-4 border rounded-lg">
            <summary className="font-bold cursor-pointer list-none">
              What is your refund policy?
            </summary>
            <p className="mt-2 text-gray-600">
              Due to the immediate and irreversible nature of digital product delivery, all sales are final and non-refundable.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;