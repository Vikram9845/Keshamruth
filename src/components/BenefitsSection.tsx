import React, { useState } from 'react';
import { Sparkles, Shield, Droplets, CheckCircle2, ChevronRight, Activity, ArrowRight, Leaf, Sprout, HeartHandshake } from 'lucide-react';
import { BRAND_IMAGES } from '../data/images';

interface BenefitsSectionProps {
  onOpenIngredients: () => void;
  onOpenQuiz: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  onOpenIngredients,
  onOpenQuiz,
}) => {
  const [activeTab, setActiveTab] = useState<'roots' | 'growth' | 'nourishment' | 'scalp'>('roots');
  const [sliderPosition, setSliderPosition] = useState(50);

  const benefits = [
    {
      id: 'roots',
      emoji: '🌱',
      title: 'Stronger Roots',
      subtitle: 'Root-to-Tip Fortification & Dryness Defense',
      description: 'Kesh Amruth nourishes the scalp and helps strengthen hair from root to tip. Botanical ingredients such as Bhringraj, Brahmi, Amla, Castor Oil and Coconut Oil help condition hair, reduce dryness and support stronger-feeling strands with regular use.',
      highlight: 'Conditions hair, reduces dryness and supports stronger-feeling strands with regular use.',
      icon: Sprout,
      color: 'from-[#1E3F2F] to-[#2D5A43]',
      badgeBg: 'bg-[#EEF5F1] text-[#234E39] border-[#D1E5DA]',
      herbs: ['Bhringraj', 'Brahmi', 'Amla', 'Castor Oil', 'Coconut Oil'],
      image: BRAND_IMAGES.benefit1,
      caption: 'Nourishes the hair bulb and locks moisture into the hair cuticle'
    },
    {
      id: 'growth',
      emoji: '🌿',
      title: 'Healthy Hair Growth',
      subtitle: 'Follicular Nourishment & Circulation Support',
      description: 'A carefully selected blend of Red Onion, Rosemary, Amla, Curry Leaves, Kalonji and Bhringraj supports scalp nourishment and healthy-looking hair growth. Regular scalp massage with Kesh Amruth complements a consistent hair-care routine.',
      highlight: 'Supports scalp nourishment and healthy-looking hair growth through routine massage.',
      icon: Leaf,
      color: 'from-[#2C5E43] to-[#3B7A58]',
      badgeBg: 'bg-[#EBF6EE] text-[#1E5738] border-[#CCE8D5]',
      herbs: ['Red Onion', 'Rosemary', 'Amla', 'Curry Leaves', 'Kalonji', 'Bhringraj'],
      image: BRAND_IMAGES.benefit2,
      caption: 'Rich in sulfur, thymoquinone and emblicanins to boost microcirculation'
    },
    {
      id: 'nourishment',
      emoji: '💧',
      title: 'Deep Nourishment',
      subtitle: 'Rich Conditioning & Moisture-Focused Care',
      description: 'Coconut Oil, Castor Oil, Olive Oil and Flaxseed provide rich conditioning and moisture-focused care. The blend helps improve softness, smoothness and manageability while supporting naturally healthy-looking shine.',
      highlight: 'Improves softness, smoothness and manageability with a radiant, healthy-looking shine.',
      icon: Droplets,
      color: 'from-[#6E5531] to-[#8C6D37]',
      badgeBg: 'bg-[#FAF5ED] text-[#8C6D37] border-[#EADCC3]',
      herbs: ['Coconut Oil', 'Castor Oil', 'Olive Oil', 'Flaxseed'],
      image: BRAND_IMAGES.benefit3,
      caption: 'Deep lipid infusion with Omega-3, Squalene, Lauric and Ricinoleic acids'
    },
    {
      id: 'scalp',
      emoji: '✨',
      title: 'Healthy Scalp Care',
      subtitle: 'Traditional Botanical Soothing & Flake Defense',
      description: 'Neem, Rosemary, Ginger and Brahmi bring traditional botanical scalp-care properties to the formula. They help nourish and soothe the scalp while supporting care against dryness, flakes, itching and buildup.',
      highlight: 'Nourishes and soothes the scalp while shielding against dryness, flakes, itching and buildup.',
      icon: Sparkles,
      color: 'from-[#3A5043] to-[#4F6D5B]',
      badgeBg: 'bg-[#F2F7F4] text-[#3A5043] border-[#D4E4DB]',
      herbs: ['Neem', 'Rosemary', 'Ginger', 'Brahmi'],
      image: BRAND_IMAGES.benefit4,
      caption: 'Purifies scalp ecosystem and calms irritation without altering pH'
    }
  ];

  return (
    <section id="benefits" className="py-8 sm:py-14 bg-[#FAF8F5] border-t border-[#EDE6D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE2D2] text-[#234E39] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" /> Target Benefits & Botanical Action
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1D2E25] tracking-tight">
            How Kesh Amruth Revitalizes Hair & Scalp
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-[#526359] leading-relaxed">
            Formulated to support every phase of your hair-care journey. Experience the synergy of 14 botanical ingredients working across 4 essential dimensions.
          </p>
        </div>

        {/* Deep-Dive Interactive Showcase Pane for Active Tab */}
        <div className="bg-white rounded-3xl border border-[#E6DEC8] shadow-sm p-5 sm:p-8 relative overflow-hidden">
          {/* Subtle Background Deco */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 border-b border-[#EFE8DC] pb-5">
            {benefits.map((b) => {
              const isActive = activeTab === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveTab(b.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? 'bg-[#234E39] text-white border-[#234E39] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#4E5E54] border-[#E5DDCB] hover:bg-[#F2ECE1]'
                  }`}
                >
                  <span>{b.emoji}</span>
                  <span>{b.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          {benefits.map((benefit) => {
            if (benefit.id !== activeTab) return null;
            return (
              <div key={benefit.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4EB] border border-[#E5D7C2] text-[#8C6D37] text-xs font-bold uppercase tracking-wider">
                    <span>{benefit.emoji}</span>
                    <span>{benefit.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1E3F2F]">
                    {benefit.emoji} {benefit.title}
                  </h3>

                  <p className="text-base text-[#4E6055] leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="bg-[#FAF5ED] border-l-4 border-[#234E39] p-4 rounded-r-xl">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8C6D37]">
                      Expected Outcome:
                    </p>
                    <p className="text-sm font-semibold text-[#1E3F2F] mt-0.5">
                      {benefit.highlight}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#3B4E43] uppercase tracking-wider block mb-2.5">
                      Key Botanical Ingredients at Work:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {benefit.herbs.map((herb, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F4EE] border border-[#DDD3C2] text-[#1E3F2F] text-xs font-semibold rounded-lg shadow-2xs hover:border-[#234E39] transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {herb}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-[#E6DFCFA0] flex flex-col justify-center">
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-stone-200 shadow-inner">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B24]/80 via-transparent to-transparent flex items-end p-4">
                      <p className="text-white text-xs font-medium leading-snug">
                        {benefit.caption}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between text-xs px-1">
                    <span className="text-[#67796E] font-medium">100% Pure Botanical Synergy</span>
                    <button
                      onClick={onOpenIngredients}
                      className="text-[#234E39] font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      View All 14 Botanicals <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
