import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8 pt-32">
      <div className="max-w-4xl mx-auto bg-surface p-8 md:p-12 rounded-3xl shadow-sm border border-surface-container-high">
        <Link href="/" className="text-primary hover:underline font-medium text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-on-background tracking-tight">Privacy Policy</h1>
        
        <div className="space-y-10 text-on-surface-variant leading-relaxed mt-8">
          <p className="text-lg">
            Last updated: June 2024
          </p>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">1. Introduction</h2>
            <p>
              Welcome to NutriAli. We strongly respect your privacy and are committed to protecting your personal, physical, and health-related data. This privacy policy informs you how we carefully handle and protect your data when you interact with our platform, app, or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">2. The Data We Collect</h2>
            <p className="mb-4">
              To provide personalized nutrition and wellness insights, we collect different types of data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-on-background">Identity Data:</strong> Name, age, gender, and contact details.</li>
              <li><strong className="text-on-background">Health & Body Metrics:</strong> Weight, height, activity levels, dietary preferences, and self-reported health goals.</li>
              <li><strong className="text-on-background">Technical Data:</strong> IP address, browser type, time zone setting, and operating system.</li>
              <li><strong className="text-on-background">Usage Data:</strong> Information about how you navigate and use our application, including interactions with our AI assistant, Ali.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">3. How We Use Your Data</h2>
            <p className="mb-4">
              Your data is strictly utilized to deliver and improve our services. We use it to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Formulate personalized meal plans and predictive health insights.</li>
              <li>Provide 24/7 proactive guidance through our AI algorithms.</li>
              <li>Secure your account and prevent fraudulent activities.</li>
              <li>Comply with necessary legal and regulatory obligations.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">4. Data Security & Storage</h2>
            <p>
              We implement industry-standard security measures, including end-to-end encryption for sensitive health metrics, to prevent your data from being accidentally lost, accessed, or altered. Your data is stored on secure cloud servers complying with modern privacy standards. 
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">5. Your Data Rights</h2>
            <p className="mb-4">
              You possess complete control over your data. Under certain circumstances, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data (a data subject access request).</li>
              <li>Request correction of incomplete or inaccurate data.</li>
              <li>Request erasure (deletion) of your personal data.</li>
              <li>Withdraw consent at any time where we rely on consent to process your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer at <a href="mailto:privacy@nutriali.com" className="text-primary hover:underline">privacy@nutriali.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
