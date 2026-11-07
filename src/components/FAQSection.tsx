import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is AJO.ng?',
      answer:
        'AJO.ng is a modern mobile platform built for two core savings experiences: organized community rotating savings (Ajo) and independent personal goal-based savings. Whether you want to coordinate rotating savings circles with trusted peers or save towards personal milestones at your own pace, AJO.ng provides the clarity and structure you need.',
    },
    {
      question: 'Can I save towards personal goals without joining an Ajo group?',
      answer:
        'Yes. Personal goal-based savings on AJO.ng is completely independent. You can define your own target amount, save at your own pace, and monitor your progress in real time without joining, creating, or depending on an Ajo group.',
    },
    {
      question: 'What is Ajo (Rotating Savings)?',
      answer:
        'Ajo is a time-tested community financial practice where a trusted group of individuals contributes a fixed amount of money on a regular schedule (such as weekly or monthly). During each cycle, one member receives the entire collective pool as a lump-sum payout, rotating until every member has taken their turn.',
    },
    {
      question: 'How does a rotating savings group work on AJO.ng?',
      answer:
        'A group coordinator or member creates a group, invites trusted peers, and agrees on the contribution amount, frequency, and rotation sequence. The mobile app provides complete visibility into contribution timelines, scheduled payouts, and active turns for all participants.',
    },
    {
      question: 'Who can participate in an Ajo group?',
      answer:
        'Anyone with a trusted network can participate. Groups are commonly formed among family members, close friends, market trading communities, workplace colleagues, or formal cooperatives who want to save collaboratively toward personal or shared financial goals.',
    },
    {
      question: 'Is AJO.ng a web platform or a mobile application?',
      answer:
        'AJO.ng is focused entirely on delivering a seamless mobile application experience for iOS and Android devices, allowing members to check schedules, monitor cycles, track personal goals, and receive notifications on the go. This website serves as the official brand information hub.',
    },
    {
      question: 'How do I download the mobile application?',
      answer:
        'The mobile application will be available on the Apple App Store for iOS devices and Google Play Store for Android devices. You can use the download section on this page to stay updated on rollout availability.',
    },
    {
      question: 'Can I create multiple Ajo groups for different goals?',
      answer:
        'Yes. You can participate in or organize distinct groups for different circles and purposes — such as a family holiday fund, a business inventory circle, or a salary-earners savings group — alongside your personal goal savings.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about AJO.ng, rotating community savings, and personal goals.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-slate-50"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    isOpen ? 'pb-6 pt-0 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
