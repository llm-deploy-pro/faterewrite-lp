// 文件位置: src/pages/PrivacyPage.tsx

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <div className="mt-8 prose prose-lg max-w-none text-gray-700">
        <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p><strong>RESONANCE SYNC LTD</strong> ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect information about you in various ways:</p>
        <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, which you voluntarily provide to us when you purchase our diagnostic tool.</li>
            <li><strong>Diagnostic Data:</strong> The answers you provide during the diagnostic assessment. We process this data anonymously to generate your report. We do not store your individual answers after the report has been successfully delivered.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect, such as your IP address, browser type, and operating system.</li>
        </ul>
        
        <h2>2. Use of Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
            <li>Create and deliver your personalized diagnostic report.</li>
            <li>Process payments and transactions.</li>
            <li>Improve our website and services through aggregated, anonymized data analysis.</li>
            <li>Communicate with you regarding your order or to respond to inquiries.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>We do not sell, trade, or rent your personal identification information to others. We may share information with third-party service providers who perform services for us or on our behalf, such as payment processing and email delivery. These third parties are obligated to maintain the confidentiality of your information.</p>
        
        <h2>4. Data Security</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.</p>

        <h2>5. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have rights regarding your personal data, including the right to access, correct, or delete your information. Please contact us at support@z25.io to make such a request.</p>

        <h2>6. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: support@z25.io</p>
      </div>
    </div>
  );
};

export default PrivacyPage;