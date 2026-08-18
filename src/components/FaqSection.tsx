import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-14 bg-[#F5F2EC] border-t border-[#E5E2D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E2D9] text-[#2C3322] text-[11px] font-bold uppercase tracking-[0.2em] font-sans">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Ayurvedic Wisdom & Clarity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C3322] font-normal">
            Frequently Asked <span className="italic font-normal">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#556758] max-w-xl mx-auto font-sans leading-relaxed">
            Everything you need to know about our cold-infusion process, daily ritual, suitability, and expected results.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#FDFCFB] rounded-2xl border border-[#E5E2D9] overflow-hidden transition-all duration-200 hover:border-[#8B9D64]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2C3322]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#2C3322] transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#4A5D23] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#556758] font-sans leading-relaxed border-t border-[#E5E2D9]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
