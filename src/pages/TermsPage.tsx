// 文件位置: src/pages/TermsPage.tsx

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
      <div className="mt-8 prose prose-lg max-w-none text-gray-700">
        <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using our Site and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to all of these terms, do not use this Site.</p>

        <h2>2. Service Description</h2>
        <p><strong>RESONANCE SYNC LTD</strong> provides a one-time, non-clinical, educational cognitive pattern diagnostic tool, delivered as a digital PDF report. This service is for informational purposes only. Please refer to our full Disclaimer.</p>

        <h2>3. Payments and Refunds</h2>
        <p>All purchases are for a single-use, one-time generation of a digital report. All payments are processed through a secure third-party payment processor.</p>
        <p className="font-bold border-l-4 border-gray-500 pl-4 py-2 bg-gray-50">
          Due to the immediate, irreversible, and digital nature of our service, all sales are final. We do not offer refunds, exchanges, or credits for any purchases. By completing your purchase, you explicitly waive your right to a refund.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>The Site and its original content, features, and functionality (including the diagnostic questions, analysis framework, and report structure) are and will remain the exclusive property of <strong>RESONANCE SYNC LTD</strong> and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>

        <h2>5. User Conduct</h2>
        <p>You agree not to use the service for any unlawful purpose or to violate any laws in your jurisdiction. You may not reverse-engineer, decompile, or attempt to extract the source code of our software.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Our liability to you for any cause whatsoever, and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us for the service. Please see our Disclaimer for further details on liability limitations.</p>

        <h2>7. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.</p>
        
        <h2>8. Governing Law</h2>
        <p>
          {/* 修正: 更新为真实的司法管辖区 */}
          These Terms shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>, without regard to its conflict of law provisions.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;