import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Heart, ShieldCheck } from 'lucide-react';
import { ProductVariant } from '../types';
import { PRODUCT_VARIANTS } from '../data/productData';

interface HairQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommended: (variant: ProductVariant) => void;
}

export const HairQuizModal: React.FC<HairQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommended,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [resultReady, setResultReady] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      title: 'What is your primary hair and scalp concern?',
      subtitle: 'Identify the active imbalance',
      options: [
        { label: 'Active hair fall & shedding when washing or brushing', dosha: 'Vata-Pitta' },
        { label: 'Receding hairline, crown thinning, and low density', dosha: 'Pitta' },
        { label: 'Dandruff, flaky buildup, or itchy scalp', dosha: 'Kapha' },
        { label: 'Dry, brittle, frizzy hair with split ends', dosha: 'Vata' }
      ]
    },
    {
      title: 'How would you describe your natural scalp texture?',
      subtitle: 'Determines botanical lipid absorption speed',
      options: [
        { label: 'Dry and sensitive (gets flaky quickly)', dosha: 'Vata' },
        { label: 'Hot, easily red or irritated (high sweat)', dosha: 'Pitta' },
        { label: 'Oily within 24 hours of shampooing', dosha: 'Kapha' },
        { label: 'Balanced / Normal', dosha: 'Tridoshic' }
      ]
    },
    {
      title: 'How long have you been noticing this concern?',
      subtitle: 'Determines the required cellular rejuvenation cycle',
      options: [
        { label: 'Recent (Past 1-3 months)', duration: '1-month' },
        { label: 'Moderate (3-6 months)', duration: '2-month' },
        { label: 'Chronic / Long-standing (6+ months)', duration: '3-month' }
      ]
    }
  ];

  const handleSelectOption = (idx: number, label: string) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQuestion]: label }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setResultReady(true);
    }
  };

  const recommendedVariant = PRODUCT_VARIANTS[1]; // 200ml Bottle (Comprehensive 2-Month Care)

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#2C3322]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FDFCFB] rounded-2xl max-w-xl w-full border border-[#E5E2D9] shadow-2xl overflow-hidden flex flex-col my-8">
        
        {/* Header */}
        <div className="bg-[#F5F2EC] px-6 py-4 border-b border-[#E5E2D9] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#4A5D23] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#2C3322]">
                Ayurvedic Scalp & Dosha Diagnostic
              </h3>
              <p className="text-[10px] text-[#8B9D64] font-bold uppercase tracking-widest font-sans">
                Personalized Hair Rejuvenation Regimen
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-[#2C3322] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!resultReady ? (
            <div className="space-y-6">
              {/* Progress dots */}
              <div className="flex items-center justify-between text-xs text-[#8B9D64] font-bold uppercase tracking-wider font-sans">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-1.5 rounded-full transition-all ${
                        i === currentQuestion
                          ? 'bg-[#4A5D23]'
                          : i < currentQuestion
                          ? 'bg-[#8B9D64]'
                          : 'bg-[#E5E2D9]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-xl font-bold text-[#2C3322]">
                  {questions[currentQuestion].title}
                </h4>
                <p className="text-xs text-[#556758] font-sans">
                  {questions[currentQuestion].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx, option.label)}
                    className="w-full text-left p-4 rounded-xl border border-[#E5E2D9] hover:border-[#4A5D23] hover:bg-[#F5F2EC] bg-white transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#2C3322]">
                      {option.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#4A5D23] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#556758] hover:text-[#2C3322] font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous Question
                </button>
              )}
            </div>
          ) : (
            /* Quiz Recommendation Result */
            <div className="space-y-6 text-center py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-[#4A5D23] text-[#4A5D23] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#4A5D23] uppercase tracking-widest block font-sans">
                  Ayurvedic Diagnostic Assessment
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#2C3322]">
                  Pitta-Vata Rebalancing Protocol
                </h4>
                <p className="text-xs text-[#556758] max-w-md mx-auto leading-relaxed">
                  Based on your follicular concerns, your dermal papilla requires bioactive Wedelolactone cooling combined with a complete 90-day Anagen regrowth cycle.
                </p>
              </div>

              {/* Recommended Pack Card */}
              <div className="bg-[#F5F2EC] rounded-2xl p-5 border border-[#E5E2D9] text-left flex flex-col sm:flex-row items-center gap-4">
                <img
                  src={recommendedVariant.image}
                  alt={recommendedVariant.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-[#E5E2D9]"
                />
                <div className="flex-1 space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] font-bold uppercase bg-[#4A5D23] text-white px-2 py-0.5 rounded">
                      Doctor Recommended
                    </span>
                    <span className="text-xs font-bold text-[#D4AF37]">{recommendedVariant.discountPercentage}% OFF</span>
                  </div>
                  <h5 className="font-serif text-base font-bold text-[#2C3322]">
                    {recommendedVariant.name}
                  </h5>
                  <p className="text-xs text-[#556758]">
                    Includes Free Express Priority Delivery
                  </p>
                  <div className="flex items-baseline justify-center sm:justify-start gap-2 pt-1">
                    <span className="text-lg font-extrabold text-[#4A5D23]">
                      ₹{recommendedVariant.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{recommendedVariant.originalPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    onSelectRecommended(recommendedVariant);
                    onClose();
                  }}
                  className="flex-1 py-3.5 rounded-full bg-[#2C3322] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#4A5D23] shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/30"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Accept Protocol & Add to Bag</span>
                </button>
                <button
                  onClick={onClose}
                  className="py-3.5 px-6 rounded-full bg-white border border-[#E5E2D9] text-[#2C3322] text-xs font-bold uppercase tracking-wider hover:bg-[#F5F2EC]"
                >
                  Explore All Options
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
