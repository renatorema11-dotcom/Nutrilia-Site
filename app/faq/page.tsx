'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "How does NutriAli work?",
      answer: "NutriAli uses your unique body metrics, lifestyle activity, and dietary preferences combined with clinical-grade algorithms to create personalized nutrition assessments and meal plans. Our AI assistant, Ali, also offers context-aware, 24/7 proactive guidance based on your progress."
    },
    {
      question: "Is NutriAli a substitute for a medical doctor?",
      answer: "No. NutriAli is designed to powerfully support and track your wellness journey, but it is not a replacement for professional medical advice, diagnosis, or treatment. Always consult with a healthcare professional before making drastic dietary changes."
    },
    {
      question: "How do I start my nutritional assessment?",
      answer: "You can start by clicking the 'Get Started' button on our homepage. This will seamlessly take you to our secure application portal where you'll sign up and complete an initial, comprehensive biological questionnaire."
    },
    {
      question: "Can I use NutriAli if I have specific food allergies?",
      answer: "Absolutely. During your initial assessment, you will be prompted to log any allergies, intolerances (e.g., lactose, gluten), or dietary restrictions (e.g., vegan, keto). All generated plans and AI suggestions strictly respect these boundaries."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you have complete control. You can cancel your subscription at any time directly from your account settings without any hidden cancellation fees."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8 pt-32">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-primary hover:underline font-medium text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-on-background tracking-tight">Frequently Asked Questions</h1>
        <p className="text-xl text-on-surface-variant mb-12">
          Everything you need to know about the product and billing.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-surface rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary shadow-sm' : 'border-surface-container-high hover:border-surface-container-highest'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left outline-none"
                >
                  <h3 className="text-lg font-semibold text-on-background">{faq.question}</h3>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 p-8 bg-primary-container text-on-primary-container rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 opacity-90">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
          <Link href="/contact" className="inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors active:scale-95 duration-150">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
