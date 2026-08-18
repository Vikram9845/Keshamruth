import React, { useState } from 'react';
import { Sparkles, Info, X, Check, ShieldAlert, Award, ExternalLink, Leaf } from 'lucide-react';
import { INGREDIENTS } from '../data/productData';
import { Ingredient } from '../types';

export const IngredientsSection: React.FC<{ initialSelectedId?: string | null }> = ({ initialSelectedId }) => {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(
    initialSelectedId ? INGREDIENTS.find(i => i.id === initialSelectedId) || null : null
  );
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterDosha, setFilterDosha] = useState<string>('All');

  const scalpHerbIds = ['red-onion', 'brahmi', 'rosemary', 'neem', 'bhringraj', 'neelambari'];
  const nourishmentHerbIds = ['coconut-oil', 'castor-oil', 'olive-oil', 'flaxseed'];
  const traditionHerbIds = ['amla', 'curry-leaves', 'kalonji', 'ginger'];

  const filteredIngredients = INGREDIENTS.filter((item) => {
    // Category check
    if (filterCategory === 'Scalp' && !scalpHerbIds.includes(item.id)) return false;
    if (filterCategory === 'Nourishment' && !nourishmentHerbIds.includes(item.id)) return false;
    if (filterCategory === 'Tradition' && !traditionHerbIds.includes(item.id)) return false;

    // Dosha check
    if (filterDosha !== 'All' && item.ayurvedicDosha !== filterDosha && item.ayurvedicDosha !== 'Tridoshic') {
      return false;
    }
    return true;
  });

  const bannedIngredients = [
    { name: 'Liquid Paraffin & Mineral Oil', reason: 'Clogs hair follicles and suffocates scalp skin.' },
    { name: 'Silicones (Dimethicone)', reason: 'Creates fake temporary slip while causing heavy long-term buildup.' },
    { name: 'Synthetic Fragrances & Phthalates', reason: 'Disrupts hormonal balance and causes scalp eczema.' },
    { name: 'Parabens & Sulfates', reason: 'Strips natural protective sebum and damages hair proteins.' },
    { name: 'Artificial Chemical Dyes', reason: 'Causes oxidative damage to fragile follicle roots.' }
  ];

  return (
    <section id="ingredients" className="py-8 sm:py-14 bg-[#F6F2EC] border-t border-[#EAE3D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3DAC7] text-[#234E39] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" /> 100% Pure Botanical Alchemy
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1D2E25] tracking-tight">
            Detailed Ayurvedic Ingredient Breakdown
          </h2>
          <p className="mt-2.5 text-base text-[#56685D] leading-relaxed">
            Every drop of Kesh Amruth is infused with authentic Ayurvedic Rasayana herbs, cold-pressed in traditional wooden Ghanis without chemical solvents. Click any herb to inspect its bioactive profile.
          </p>

          {/* Dual Filter Controls: Purpose Synergy & Dosha Balancing */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            {/* 3 Pillar Purpose Tabs */}
            <div className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-[#DDD3C2] shadow-2xs flex-wrap justify-center">
              {[
                { id: 'All', label: 'All 14 Ingredients' },
                { id: 'Scalp', label: 'For the Scalp (6)' },
                { id: 'Nourishment', label: 'For Nourishment (4)' },
                { id: 'Tradition', label: 'Traditional Goodness (4)' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    filterCategory === cat.id
                      ? 'bg-[#234E39] text-white shadow-2xs'
                      : 'text-[#5A6C60] hover:text-[#1E3F2F] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Dosha Filter Tabs */}
            <div className="inline-flex items-center gap-1 p-1 bg-[#EBE4D8] rounded-full border border-[#D5CBB8] shadow-2xs">
              {['All', 'Vata', 'Pitta', 'Kapha'].map((dosha) => (
                <button
                  key={dosha}
                  onClick={() => setFilterDosha(dosha)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    filterDosha === dosha
                      ? 'bg-[#8C6D37] text-white shadow-2xs'
                      : 'text-[#67573D] hover:text-[#234E39] hover:bg-[#DDD3C2]'
                  }`}
                >
                  {dosha === 'All' ? 'All Doshas' : `${dosha} Dosha`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredIngredients.map((ing) => (
            <div
              key={ing.id}
              onClick={() => setSelectedIngredient(ing)}
              className="bg-white rounded-2xl p-5 border border-[#E5DEC9] shadow-2xs hover:border-[#234E39] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Botanical Badge & Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF5F1] text-[#234E39] shrink-0 border border-[#D1E5DA] flex items-center justify-center shadow-2xs group-hover:bg-[#234E39] group-hover:text-white transition-colors duration-300">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="text-base font-bold text-[#1E3F2F] group-hover:text-[#234E39] transition-colors leading-tight">
                        {ing.name}
                      </h3>
                      {ing.tagline && (
                        <span className="text-[9px] font-bold bg-[#FAF2E6] text-[#7A5623] px-1.5 py-0.5 rounded border border-[#EADBCA]">
                          {ing.tagline}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#8C6D37] italic font-serif mt-0.5">
                      {ing.sanskritName} • {ing.botanicalName}
                    </p>
                    <span className="inline-block text-[10px] font-semibold bg-[#EEF5F1] text-[#1E3F2F] px-2 py-0.5 rounded mt-1">
                      {ing.percentage}
                    </span>
                  </div>
                </div>

                {/* Role Pill */}
                <div className="bg-[#FAF6EE] text-[#4E3F27] text-xs font-semibold px-2.5 py-1 rounded-lg border border-[#EADECA] mb-3">
                  Role: {ing.role}
                </div>

                {/* Key Benefits */}
                <ul className="space-y-1.5 text-xs text-[#526458] mb-4">
                  {ing.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5 leading-snug">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Action */}
              <div className="pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs text-[#234E39] font-bold">
                <span className="text-[11px] text-[#7A8C81] font-medium">Dosha: {ing.ayurvedicDosha}</span>
                <span className="flex items-center gap-1 group-hover:underline">
                  Inspect Profile <Info className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The Clean & Pure Formulation Promise (Banned List) */}
        <div className="bg-white rounded-2xl border border-[#E5DEC9] shadow-xs p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#1E3F2F]">
                Our Zero-Toxin Promise: What We NEVER Put in Kesh Amruth
              </h3>
              <p className="text-xs text-[#6B7D72]">
                Commercial hair oils often use 80% cheap liquid paraffin with 1% herb essence. We use 100% active botanicals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {bannedIngredients.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE3D4] flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-200">
                  ✕
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A3C31] leading-tight">
                    NO {item.name}
                  </h4>
                  <p className="text-[11px] text-[#697C70] mt-0.5 leading-snug">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-[#EEF7F2] p-3.5 rounded-xl border border-[#C6E4D3] flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#14532D] leading-tight">
                  100% Edible-Grade Herbs
                </h4>
                <p className="text-[11px] text-[#1E3F2F] mt-0.5 leading-snug">
                  Safe enough to ingest, formulated specifically for dermal scalp absorption.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Ingredient Detail Modal Dialog */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#DDD4C0] shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF5F1] text-[#234E39] shrink-0 border border-[#D1E5DA] flex items-center justify-center shadow-xs">
                <Leaf className="w-7 h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className="text-xl font-serif font-bold text-[#1E3F2F]">
                    {selectedIngredient.name}
                  </h3>
                  {selectedIngredient.tagline && (
                    <span className="text-[10px] font-bold bg-[#FAF2E6] text-[#7A5623] px-2 py-0.5 rounded-md border border-[#EADBCA]">
                      {selectedIngredient.tagline}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#8C6D37] italic font-serif mt-0.5">
                  {selectedIngredient.sanskritName} ({selectedIngredient.botanicalName})
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] font-bold bg-[#E8F3ED] text-[#1E3F2F] px-2 py-0.5 rounded">
                    {selectedIngredient.percentage}
                  </span>
                  <span className="text-[10px] font-medium text-[#64766B]">
                    Dosha: {selectedIngredient.ayurvedicDosha}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs text-[#3D4F44]">
              <div>
                <h4 className="font-bold text-[#1E3F2F] text-sm mb-1">Traditional Ayurvedic Background</h4>
                <p className="leading-relaxed text-[#55675C]">{selectedIngredient.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#1E3F2F] text-sm mb-2">
                  {selectedIngredient.detailedBenefits ? `Why Your Hair Will Love ${selectedIngredient.name}:` : 'Key Biological Benefits'}
                </h4>
                {selectedIngredient.detailedBenefits ? (
                  <div className="space-y-2">
                    {selectedIngredient.detailedBenefits.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EDE4D4]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-[#1D3E2F] block text-xs mb-0.5">{item.title}:</strong>
                          <p className="text-[#55675C] text-[11px] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-1.5">
                    {selectedIngredient.keyBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {selectedIngredient.brandDifference && (
                <div className="bg-[#FAF3E8] p-3.5 rounded-xl border border-[#DFC9A6]">
                  <h4 className="font-bold text-[#6D491C] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                    Kesh Amruth Difference
                  </h4>
                  <p className="text-[#3D2D18] font-medium text-xs leading-relaxed">
                    {selectedIngredient.brandDifference}
                  </p>
                </div>
              )}

              <div className="bg-[#FAF4EB] p-3.5 rounded-xl border border-[#E7DCBF]">
                <h4 className="font-bold text-[#4D3A1F] mb-1">Isolated Active Phytochemicals</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedIngredient.activeCompounds.map((compound, cIdx) => (
                    <span
                      key={cIdx}
                      className="bg-white text-[#1E3F2F] px-2 py-1 rounded text-[11px] font-semibold border border-[#D8C9AA]"
                    >
                      {compound}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#EEF7F2] p-3.5 rounded-xl border border-[#C6E4D3]">
                <h4 className="font-bold text-[#14532D] mb-1 flex items-center gap-1">
                  <Award className="w-4 h-4 text-emerald-700" /> Modern Dermatology Research Note
                </h4>
                <p className="text-[#1E3F2F] leading-relaxed">
                  {selectedIngredient.clinicalNote}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE2D2] flex justify-end">
              <button
                onClick={() => setSelectedIngredient(null)}
                className="px-5 py-2 rounded-xl bg-[#234E39] text-white font-bold text-xs hover:bg-[#1A3B2B] transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
