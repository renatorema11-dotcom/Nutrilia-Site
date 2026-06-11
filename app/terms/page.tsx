import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8 pt-32">
      <div className="max-w-4xl mx-auto bg-surface p-8 md:p-12 rounded-3xl shadow-sm border border-surface-container-high">
        <Link href="/" className="text-primary hover:underline font-medium text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-on-background tracking-tight">Terms of Service</h1>
        <p className="text-on-surface-variant mb-12">Last updated: June 2024</p>
        
        <div className="space-y-10 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the NutriAli website, mobile application, and related services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p>
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">2. Medical Disclaimer</h2>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-4">
              <p className="font-medium text-on-background">
                NutriAli is not a medical organization. The content provided is for informational and educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
            <p>
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary changes. Never disregard professional medical advice or delay in seeking it because of something you have read on our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">3. User Accounts & Responsibilities</h2>
            <p className="mb-4">
              To use certain features of the Service, you must register for an account. By doing so, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information as prompted by the registration form.</li>
              <li>Maintain and promptly update your information to keep it accurate, current, and complete.</li>
              <li>Maintain the security of your password and identification.</li>
              <li>Accept all responsibility for any and all activities that occur under your account.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">4. Subscriptions and Payments</h2>
            <p>
              We offer premium features through paid subscriptions. By choosing a paid subscription, you agree to pay the fees specified for the plan you select. Subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing period. You can manage and cancel your subscription in your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">5. Modifications to Service</h2>
            <p>
              NutriAli reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that NutriAli shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-background mb-4">6. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at <a href="mailto:support@nutriali.com" className="text-primary hover:underline">support@nutriali.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
