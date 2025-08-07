// 文件位置: src/pages/DisclaimerPage.tsx

const DisclaimerPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Disclaimer</h1>
      <div className="mt-8 prose prose-lg max-w-none text-gray-700">
        <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2><strong>IMPORTANT: NOT MEDICAL, PSYCHOLOGICAL, OR FINANCIAL ADVICE</strong></h2>
        <p>
          The information, services, and products provided by <strong>RESONANCE SYNC LTD</strong> ("we," "us," or "our") on this website (the "Site") are for <strong>educational, informational, and entertainment purposes only</strong>. The Z2.5 Cognitive Pattern Diagnostic is a non-clinical tool designed for self-exploration and personal development.
        </p>

        <p className="font-bold text-red-600 border-l-4 border-red-500 pl-4 py-2 bg-red-50">
          Under no circumstances should any information or materials on this Site be considered or used as a substitute for professional medical, psychological, psychiatric, therapeutic, or financial advice, diagnosis, or treatment.
        </p>
        
        <h2>No Professional-Client Relationship</h2>
        <p>
          Your use of this Site, including the purchase or use of any products or services, does not create a professional-client, doctor-patient, or any other fiduciary relationship between you and <strong>RESONANCE SYNC LTD</strong> or any of its employees or affiliates. Always seek the advice of your physician, mental health professional, or other qualified health provider with any questions you may have regarding a medical or psychological condition. Never disregard professional advice or delay in seeking it because of something you have read on this Site.
        </p>

        <h2>No Guarantees or Warranties</h2>
        <p>
          We make no guarantees, representations, or warranties of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the Site. We do not warrant that the insights provided will lead to any specific personal, professional, or financial outcomes. Your life, decisions, and outcomes are solely your own responsibility. Any testimonials or examples shown are exceptional results and are not intended to represent or guarantee that anyone will achieve the same or similar results.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, <strong>RESONANCE SYNC LTD</strong>, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; or (c) unauthorized access, use, or alteration of your transmissions or content.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;