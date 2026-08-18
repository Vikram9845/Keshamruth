import React, { useState } from 'react';
import { Sparkles, Info, Check, ShieldCheck } from 'lucide-react';
import { BRAND_IMAGES } from '../data/images';

interface HerbNode {
  name: string;
  sanskrit: string;
  role: string;
  iconImg: string;
  angle: number; // degrees around center
  distance: number; // % from center
}

const HERBS_DATA: HerbNode[] = [
  {
    name: 'Rosemary',
    sanskrit: 'रुचिरा (Ruchira)',
    role: "The Modern Botanical Favourite: Rich in carnosic & rosmarinic acids that stimulate microcirculation & block hair loss (DHT).",
    iconImg: 'https://images.unsplash.com/photo-1515586000433-a5512c1266e3?auto=format&fit=crop&w=200&q=80',
    angle: 0,
    distance: 42
  },
  {
    name: 'Ginger',
    sanskrit: 'आर्द्रक (Ardraka)',
    role: 'A Warming Botanical Tradition: Gingerol energizes microcirculation, fights dandruff yeast & strengthens brittle shafts.',
    iconImg: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=200&q=80',
    angle: 26,
    distance: 41
  },
  {
    name: 'Amla',
    sanskrit: 'आमलकी (Amalaki)',
    role: 'The Indian Hair-Care Classic: Super-potent Vitamin C & tannins stimulate regrowth, prevent greying & strengthen shafts.',
    iconImg: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=200&q=80',
    angle: 51,
    distance: 40
  },
  {
    name: 'Coconut',
    sanskrit: 'नारिकेल (Narikela)',
    role: 'Deeply Nourishing Hair Care: Lauric acid penetrates deep inside hair shaft to bind proteins & stop hygral fatigue.',
    iconImg: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=200&q=80',
    angle: 77,
    distance: 41
  },
  {
    name: 'Castor',
    sanskrit: 'एरण्ड (Eranda)',
    role: 'Rich, Luxurious Conditioning: 90% ricinoleic acid locks deep moisture, reduces friction & promotes thicker regrowth.',
    iconImg: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=200&q=80',
    angle: 103,
    distance: 41
  },
  {
    name: 'Curry Leaves',
    sanskrit: 'कैटर्य (Kaidarya)',
    role: "India's Traditional Herb: Beta-carotene, plant proteins & carbazole alkaloids prevent greying & reduce shedding.",
    iconImg: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80',
    angle: 129,
    distance: 42
  },
  {
    name: 'Neelambari',
    sanskrit: 'नीलाम्बरी (Neelambari)',
    role: 'The Ayurvedic Indigo Tradition: Sheeta Virya cooling herb with flavonoids & indirubin to protect melanin & soothe scalp.',
    iconImg: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=200&q=80',
    angle: 154,
    distance: 41
  },
  {
    name: 'Flax Seed',
    sanskrit: 'अतसी (Atasi)',
    role: 'Smooth & Manageable Hair: Omega-3 ALA, B-vitamins & mucilage hydrate cuticles, define curls & eliminate frizz.',
    iconImg: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80',
    angle: 180,
    distance: 42
  },
  {
    name: 'Kalonji',
    sanskrit: 'उपकुञ्चिका (Kalonji)',
    role: 'Traditional Wellness Black Seed: Thymoquinone & essential fatty acids block shedding, stimulate regrowth & soothe scalp.',
    iconImg: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=200&q=80',
    angle: 206,
    distance: 42
  },
  {
    name: 'Neem',
    sanskrit: 'निम्ब (Nimba)',
    role: "Nature's Scalp-Care Guardian: Nimbin & active fatty acids purify scalp, eliminate Malassezia dandruff & balance oil.",
    iconImg: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=200&q=80',
    angle: 231,
    distance: 41
  },
  {
    name: 'Olive',
    sanskrit: 'जैतून (Jaitun)',
    role: 'Botanical Moisture & Smoothness: Squalene & oleic acid seal cuticles, reduce breakage & eliminate flyaways.',
    iconImg: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=200&q=80',
    angle: 257,
    distance: 40
  },
  {
    name: 'Red Onion',
    sanskrit: 'पलाण्डु (Palandu)',
    role: "Nature's Scalp-Nourishing Powerhouse: Rich in dietary sulfur, quercetin & antioxidants that boost keratin and stimulate regrowth.",
    iconImg: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=200&q=80',
    angle: 283,
    distance: 41
  },
  {
    name: 'Brahmi',
    sanskrit: 'ब्राह्मी (Brahmi)',
    role: 'The Ayurvedic Scalp-Nourishing Herb: Rich in bacosides & adaptogens to fortify root fibers, reduce stress shedding & soothe scalp.',
    iconImg: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=200&q=80',
    angle: 309,
    distance: 41
  },
  {
    name: 'Bhringraj',
    sanskrit: 'केशराज (Kesharaja)',
    role: 'The Ayurvedic King of Hair: Wedelolactone & vital minerals stimulate anagen growth, strengthen roots & fight greying.',
    iconImg: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=200&q=80',
    angle: 334,
    distance: 42
  }
];

export const ProductCenterImage: React.FC = () => {
  const [activeHerb, setActiveHerb] = useState<HerbNode | null>(null);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#FDFBF7] to-[#F5EFE6] border border-[#E5DEC9] p-4 sm:p-6 overflow-hidden shadow-sm flex flex-col items-center">
      
      {/* Top Banner */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-[#E5DEC9]/80 mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4A5D23] animate-pulse" />
          <span className="text-[11px] font-bold text-[#2C3322] uppercase tracking-[0.2em] font-sans">
            Botanical Aura • 14 Potent Whole Herbs
          </span>
        </div>
        <span className="text-[10px] text-[#8B9D64] font-semibold uppercase bg-white px-2.5 py-1 rounded-full border border-[#E5DEC9]">
          Interactive Formulation
        </span>
      </div>

      {/* Main Center Image Stage */}
      <div className="relative w-full max-w-lg aspect-square flex items-center justify-center my-2 rounded-2xl overflow-hidden bg-gradient-to-b from-[#FDFBF7] to-[#F5EFE6] border border-[#E8E0D2] shadow-inner group">
        
        {/* Real Product Image from GitHub / ImgBB */}
        <img
          src={BRAND_IMAGES.mainProduct}
          alt="Kesh Amruth Ayurvedic Hair Oil Center Botanical Composition"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-700 group-hover:scale-103"
          onError={(e) => {
            e.currentTarget.src = 'https://i.ibb.co/5gxFcgkM/center-image.png';
          }}
        />

        {/* Floating Quick Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          <span className="inline-flex items-center gap-1 bg-[#234E39]/90 backdrop-blur-md text-[#FAF8F5] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" /> 100% Ayurvedic
          </span>
          <span className="inline-flex items-center gap-1 bg-[#855B2E]/90 backdrop-blur-md text-white text-[9.5px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
            14 Whole Herbs
          </span>
        </div>

        {/* Hover Botanical Quick Tags Overlay at Bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 pt-6 flex items-center justify-between text-white pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-medium tracking-wide">
              Official Formulation • Kshirapaka Method
            </span>
          </div>
          <span className="text-[10px] text-emerald-200 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20">
            Certified Authentic
          </span>
        </div>
      </div>

      {/* 14 Botanical Herb Chips Quick Bar */}
      <div className="w-full mt-2">
        <div className="text-[11px] font-bold text-[#4A5D23] uppercase tracking-wider mb-1.5 flex items-center justify-between">
          <span>Explore 14 Active Botanicals in Jar:</span>
          <span className="text-[10px] text-[#8B9D64] font-normal">Click any herb to inspect</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
          {HERBS_DATA.map((herb, idx) => {
            const isSelected = activeHerb?.name === herb.name;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveHerb(isSelected ? null : herb)}
                onMouseEnter={() => setActiveHerb(herb)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#234E39] text-white border-[#234E39] shadow-xs'
                    : 'bg-white text-[#2C3322] border-[#E5DEC9] hover:border-[#4A5D23] hover:bg-[#FAF8F5]'
                }`}
              >
                <img
                  src={herb.iconImg}
                  alt={herb.name}
                  referrerPolicy="no-referrer"
                  className="w-3.5 h-3.5 rounded-full object-cover"
                />
                <span className="text-[11px] whitespace-nowrap">{herb.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Active Herb Details Callout */}
      <div className="w-full mt-2 min-h-[64px] p-3 rounded-xl bg-white border border-[#E5DEC9] shadow-2xs flex items-center justify-between gap-3 text-left transition-all">
        {activeHerb ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37] flex-shrink-0">
              <img
                src={activeHerb.iconImg}
                alt={activeHerb.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xs font-bold text-[#2C3322]">
                  {activeHerb.name}
                </span>
                <span className="text-[10px] text-[#8B9D64] font-medium font-serif">
                  {activeHerb.sanskrit}
                </span>
              </div>
              <p className="text-[11px] text-[#556758] leading-tight">
                {activeHerb.role}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-[#8B9D64]">
            <Info className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <span>
              Tap or hover on any of the <strong>14 botanical herbs</strong> around the Kesh Amruth jar to view Ayurvedic potency.
            </span>
          </div>
        )}

        <div className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-[#4A5D23] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 whitespace-nowrap">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>72-Hr Kshirapaka</span>
        </div>
      </div>

    </div>
  );
};
