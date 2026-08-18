import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Droplets, Leaf, Flower2, Heart, ArrowRight } from 'lucide-react';

interface KeshAmruthDifferenceProps {
  onExploreIngredients?: (ingredientId?: string) => void;
}

export const KeshAmruthDifference: React.FC<KeshAmruthDifferenceProps> = ({ onExploreIngredients }) => {
  const [activePillar, setActivePillar] = useState<'scalp' | 'nourishment' | 'tradition' | null>(null);

  const pillars = [
    {
      id: 'scalp',
      category: 'For the Scalp',
      tagline: 'Vitality, Follicle Health & Balance',
      icon: ShieldCheck,
      color: 'from-[#1E3F2F] to-[#2D5A43]',
      accentBg: 'bg-[#EEF5F1]',
      badgeColor: 'bg-[#234E39] text-white',
      ingredients: [
        { name: 'Red Onion', id: 'red-onion', benefit: 'Dietary Sulfur & Keratin Boost' },
        { name: 'Brahmi', id: 'brahmi', benefit: 'Bacosides & Stress Reduction' },
        { name: 'Rosemary', id: 'rosemary', benefit: 'Microcirculation & Regrowth' },
        { name: 'Neem', id: 'neem', benefit: 'Antifungal Scalp Purification' },
        { name: 'Bhringraj', id: 'bhringraj', benefit: 'Follicular Activation (King of Hair)' },
        { name: 'Neelambari', id: 'neelambari', benefit: 'Sheeta Virya Cooling & Melanin' }
      ],
      description: 'A thoughtfully selected group of traditional and modern botanical ingredients designed to complement a nourishing scalp-care routine.',
      quote: 'Targeting the root ecosystem to clear buildup, stimulate circulation, and anchor follicles firmly.'
    },
    {
      id: 'nourishment',
      category: 'For Nourishment',
      tagline: 'Deep Moisture, Softness & Elasticity',
      icon: Droplets,
      color: 'from-[#6E5531] to-[#8C6D37]',
      accentBg: 'bg-[#FAF5ED]',
      badgeColor: 'bg-[#8C6D37] text-white',
      ingredients: [
        { name: 'Coconut Oil', id: 'coconut-oil', benefit: 'Lauric Acid Cortex Penetration' },
        { name: 'Castor Oil', id: 'castor-oil', benefit: 'Ricinoleic Acid & Follicle Strength' },
        { name: 'Olive Oil', id: 'olive-oil', benefit: 'Squalene & High-Porosity Sealing' },
        { name: 'Flaxseed', id: 'flaxseed', benefit: 'Omega-3 ALA & Frizz Control' }
      ],
      description: 'Rich plant oils and botanical ingredients that help condition the hair and leave it feeling softer, smoother and more manageable.',
      quote: 'Hydro-lipid barrier restoration that lubricates coarse strands and prevents mechanical breakage.'
    },
    {
      id: 'tradition',
      category: 'For Traditional Herbal Goodness',
      tagline: 'Time-Honoured Ayurvedic Heritage',
      icon: Leaf,
      color: 'from-[#3A5043] to-[#4F6D5B]',
      accentBg: 'bg-[#F2F7F4]',
      badgeColor: 'bg-[#3A5043] text-white',
      ingredients: [
        { name: 'Amla', id: 'amla', benefit: 'Vitamin C & Melanin Preservation' },
        { name: 'Curry Leaves', id: 'curry-leaves', benefit: 'Beta-Carotene & Root Strength' },
        { name: 'Kalonji', id: 'kalonji', benefit: 'Thymoquinone & Anti-Shedding' },
        { name: 'Ginger', id: 'ginger', benefit: 'Gingerols & Warm Micro-Perfusion' }
      ],
      description: 'Time-honoured botanical ingredients that bring the richness of Indian and traditional herbal hair care to every application.',
      quote: 'Ancient Rasayana wisdom passed down through generations for lustrous shine and lasting density.'
    }
  ];

  const handleIngredientClick = (id: string) => {
    if (onExploreIngredients) {
      onExploreIngredients(id);
    } else {
      const el = document.getElementById('ingredients');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="difference" className="pt-6 sm:pt-8 pb-8 sm:pb-12 bg-gradient-to-b from-[#FBF9F5] via-[#F5EFE6] to-[#FBF9F5] border-t border-b border-[#E5DEC9] relative overflow-hidden">
      {/* Background Subtle Motifs */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-radial from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DFC8] border border-[#D8CCA9] text-[#234E39] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#B8860B]" />
            The Kesh Amruth Difference
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1D2E25] tracking-tight leading-tight">
            14 Ingredients. One Complete Hair-Care Ritual.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#4E6156] leading-relaxed">
            What makes <strong className="text-[#1D2E25]">Kesh Amruth</strong> special isn&apos;t simply one ingredient.
            <br className="hidden sm:inline" /> It is the <strong>synergy of 14 carefully selected botanical ingredients</strong> working in harmony across three targeted dimensions.
          </p>
        </div>

        {/* The 3 Synergy Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8 sm:mb-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isHovered = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActivePillar(pillar.id as any)}
                onMouseLeave={() => setActivePillar(null)}
                className={`bg-white rounded-2xl p-6 sm:p-7 border-2 transition-all duration-300 shadow-sm flex flex-col justify-between relative group ${
                  isHovered ? 'border-[#234E39] shadow-lg -translate-y-1' : 'border-[#E6DEC9] hover:border-[#234E39]/60'
                }`}
              >
                <div>
                  {/* Pillar Header & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${pillar.color} text-white shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${pillar.badgeColor}`}>
                      {pillar.ingredients.length} Botanicals
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1D2E25] group-hover:text-[#234E39] transition-colors mb-1">
                    {pillar.category}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C6D37] mb-3">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm text-[#4E6156] leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Ingredients Chips List */}
                  <div className="border-t border-[#F0EBE1] pt-4 mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A6A53] mb-2.5 flex items-center gap-1.5">
                      <Flower2 className="w-3.5 h-3.5 text-[#234E39]" /> Key Botanicals:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.ingredients.map((ing) => (
                        <button
                          key={ing.id}
                          onClick={() => handleIngredientClick(ing.id)}
                          title={`${ing.name}: ${ing.benefit} (Click to view full profile)`}
                          className="text-xs font-medium bg-[#F7F4EE] hover:bg-[#234E39] hover:text-white text-[#2C3E35] px-2.5 py-1 rounded-lg border border-[#E3DAC7] hover:border-[#234E39] transition-all cursor-pointer flex items-center gap-1 group/btn"
                        >
                          <span>{ing.name}</span>
                          <span className="text-[10px] opacity-60 group-hover/btn:opacity-100 font-serif">•</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Quote at bottom */}
                <div className={`mt-2 p-3 rounded-xl ${pillar.accentBg} border border-[#E4DEC9]/60 text-xs text-[#4F6357] italic flex items-start gap-2`}>
                  <Heart className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>&quot;{pillar.quote}&quot;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ritual Synergy Banner */}
        <div className="bg-[#1D2E25] text-white rounded-3xl p-6 sm:p-10 border border-[#395646] shadow-xl relative overflow-hidden">
          {/* Subtle gold glow inside */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#2E6B4A]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Complete Synergy Formulation
            </p>
            
            <p className="text-base sm:text-xl md:text-2xl font-serif text-[#F4EFE6] leading-relaxed sm:leading-snug mb-6">
              &quot;Together, these 14 ingredients create a rich, botanical hair-oiling experience designed to <span className="text-[#E2C775] font-semibold">nourish the scalp</span>, <span className="text-[#E2C775] font-semibold">condition the hair</span>, and support <span className="text-[#E2C775] font-semibold">healthy-looking, stronger-feeling hair</span>.&quot;
            </p>

            <div className="w-16 h-0.5 bg-[#D4AF37]/40 mx-auto mb-6" />

            {/* Nature's Heritage & Brand Slogan */}
            <div className="space-y-3">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                Nature&apos;s Heritage. Modern Hair Care.
              </h4>
              
              <p className="text-xs sm:text-sm text-[#C8D6CD] leading-relaxed max-w-3xl mx-auto">
                Kesh Amruth brings together the wisdom of traditional Indian hair care with carefully selected botanical ingredients for today&apos;s hair-care needs.
                From Bhringraj and Amla to Red Onion and Rosemary, from nourishing Coconut and Castor Oils to the traditional goodness of Neem, Brahmi, Curry Leaves and Neelambari, every ingredient has a purpose in our botanical philosophy.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#D4AF37]">
                <span className="bg-[#294235] px-3 py-1 rounded-full border border-[#446552]">Nourished roots</span>
                <span>•</span>
                <span className="bg-[#294235] px-3 py-1 rounded-full border border-[#446552]">Conditioned hair</span>
                <span>•</span>
                <span className="bg-[#294235] px-3 py-1 rounded-full border border-[#446552]">A ritual inspired by nature</span>
              </div>

              {/* Tagline Badge */}
              <div className="pt-5">
                <div className="inline-flex flex-col items-center">
                  <span className="text-xs uppercase tracking-widest text-[#A8BDB1] font-semibold">Official Motto</span>
                  <span className="text-lg sm:text-2xl font-serif font-bold text-[#FFDF80] tracking-wide mt-0.5">
                    Kesh Amruth: Nourished Roots, Stronger You.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
