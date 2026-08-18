import React, { useState } from 'react';
import { Star, Check, Sparkles, Gift, Zap, Heart, ChevronRight } from 'lucide-react';
import { ProductVariant } from '../types';
import { PRODUCT_VARIANTS } from '../data/productData';
import { BRAND_IMAGES } from '../data/images';

interface HeroSectionProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onAddToCart: (variant: ProductVariant) => void;
  onDirectCheckout: (variant: ProductVariant) => void;
  onOpenQuiz: () => void;
  onOpenIngredients: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedVariant,
  onSelectVariant,
  onAddToCart,
  onDirectCheckout,
  onOpenQuiz,
  onOpenIngredients,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const galleryImages = [
    {
      url: BRAND_IMAGES.mainProduct,
      fallbackUrl: 'https://i.ibb.co/5gxFcgkM/center-image.png',
      title: 'Kesh Amruth Ayurvedic Hair Oil Center Botanical Composition',
      tag: 'Main Product'
    },
    {
      url: BRAND_IMAGES.formulaPoster,
      fallbackUrl: 'https://i.ibb.co/5gxFcgkM/center-image.png',
      title: 'Kesh Amruth 100% Traditional Herbal Power & Botanical Composition Poster',
      tag: 'Herbal Formula Chart'
    },
    {
      url: BRAND_IMAGES.logo,
      fallbackUrl: 'https://i.ibb.co/FbSkPKCM/finalized-logo-of-kesh-amruth.jpg',
      title: 'Kesh Amruth Certified Ayurvedic Quality Seal & Logo',
      tag: 'Brand Emblem'
    },
    {
      url: BRAND_IMAGES.rawIngredients,
      fallbackUrl: BRAND_IMAGES.mainProduct,
      title: 'Kesh Amruth 100% Pure Raw Ayurvedic Herbs & Botanical Ingredients',
      tag: 'Raw Herbs & Ingredients'
    }
  ];

  return (
    <section id="product-buy" className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EC] to-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#234E39]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Visual Showcase & Interactive Gallery (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Main Stage Display Card */}
            <div className="relative rounded-2xl bg-white border border-[#E8E0D2] shadow-sm overflow-hidden p-3 sm:p-5 group">
              {/* Floating Badges */}
              <div className="absolute top-5 left-5 z-10 flex flex-col gap-1.5 items-start">
                <span className="inline-flex items-center gap-1.5 bg-[#234E39] text-[#FAF8F5] text-xs font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-[#E7D6C1]" /> 100% Ayurvedic
                </span>
                <span className="inline-flex items-center gap-1 bg-[#855B2E] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                  Save {selectedVariant.discountPercentage}%
                </span>
              </div>

              {/* Wishlist button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Save to favorites"
                className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#E8E0D2] text-[#2E4238] hover:text-[#9B2C2C] hover:bg-white shadow-2xs transition-transform active:scale-90"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C53030] text-[#C53030]' : ''}`} />
              </button>

              {/* Product Hero Image */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#FAF8F5] flex items-center justify-center relative p-2">
                <img
                  src={galleryImages[activeImageIndex].url}
                  alt={galleryImages[activeImageIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center transition-all duration-500 group-hover:scale-102"
                  onError={(e) => {
                    const fallback = galleryImages[activeImageIndex]?.fallbackUrl;
                    if (fallback && e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />

                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white text-[11px] font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {galleryImages[activeImageIndex].tag}
                </div>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#234E39] shadow-sm scale-102 ring-2 ring-[#234E39]/20'
                      : 'border-[#E6DEC8] opacity-75 hover:opacity-100 hover:border-[#A69378]'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: E-commerce Product Details & Purchasing Engine (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            {/* Header / Reviews Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#1E3F2F]">4.92 / 5.0</span>
                <span className="text-xs text-[#6B7C72] underline cursor-pointer hover:text-[#234E39]" onClick={() => {
                  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  (1000+ Verified customer Ratings)
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1D2E25] font-bold tracking-tight leading-tight">
                KeshAmruth Pure Ayurvedic Hair Oil
              </h1>
              <h2 className="text-sm sm:text-base font-medium text-[#234E39] mt-1">
                Authentic Kesh Amruth Hair Growth & Anti-Hair Fall Elixir
              </h2>
              <p className="mt-2 text-sm text-[#4E6156] leading-relaxed">
                Ancient botanical Rasayana formulated with cold-pressed <strong className="text-[#1E3F2F]">Bhringraj, Wild Amla, Brahmi & French Rosemary</strong>. Stimulates dormant follicles, halts chronic hair fall, and restores root density naturally in 21 days.
              </p>
            </div>

            {/* Bundle Selection Section */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1E3F2F]">
                  Select Bottle Size:
                </label>
                <span className="text-xs font-medium text-[#234E39] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  Free Express Delivery on 200ml
                </span>
              </div>

              {/* Bundle Cards Grid */}
              <div className="space-y-2.5">
                {PRODUCT_VARIANTS.map((variant) => {
                  const isSelected = selectedVariant.id === variant.id;
                  return (
                    <div
                      key={variant.id}
                      onClick={() => onSelectVariant(variant)}
                      className={`relative rounded-xl p-3.5 sm:p-4 border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#234E39] bg-[#F4F9F6] shadow-sm'
                          : 'border-[#E4DCCE] bg-white hover:border-[#B5A58E]'
                      }`}
                    >
                      {/* Popular / Best Value Ribbon */}
                      {variant.bestValue && (
                        <div className="absolute -top-2.5 right-4 bg-[#D97706] text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                          <Gift className="w-3 h-3" /> BEST VALUE & REVIEWS
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-3">
                        {/* Radio Checkbox and Info */}
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full mt-0.5 flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'border-[#234E39] bg-[#234E39] text-white'
                              : 'border-[#B8AFA0] bg-white'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h2 className="text-sm sm:text-base font-bold text-[#1D2E25]">
                                {variant.name}
                              </h2>
                              <span className="text-xs font-medium text-[#687C71]">
                                ({variant.volume})
                              </span>
                            </div>
                            <p className="text-xs text-[#526359] mt-0.5">
                              {variant.subtitle} • {variant.bottles > 1 ? `Only ₹${Math.round(variant.price / (variant.durationMonths * 30))}/day` : 'Daily Ritual'}
                            </p>

                            {/* Free Gifts highlight */}
                            {variant.freeGifts.length > 0 && (
                              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                                {variant.freeGifts.map((gift, gIdx) => (
                                  <span
                                    key={gIdx}
                                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1E3F2F] bg-[#E7EFEA] px-2 py-0.5 rounded"
                                  >
                                    <Gift className="w-3 h-3 text-[#D97706]" /> {gift}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Price Column */}
                        <div className="text-right shrink-0">
                          <div className="flex items-baseline gap-1.5 justify-end">
                            <span className="text-base sm:text-lg font-extrabold text-[#1D2E25]">
                              ₹{variant.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-[#8C7E6C] line-through">
                              ₹{variant.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <span className="inline-block text-[11px] font-bold text-[#0D6B3C] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 mt-0.5">
                            {variant.discountPercentage}% OFF
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Add to Cart */}
                <button
                  id="hero-add-to-cart-btn"
                  onClick={() => onAddToCart(selectedVariant)}
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-[#FAF4EB] text-[#234E39] border-2 border-[#234E39] hover:bg-[#F0E6D4] active:scale-[0.98] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Add to Bag</span>
                  <span>•</span>
                  <span>₹{selectedVariant.price.toLocaleString('en-IN')}</span>
                </button>

                {/* Instant Express Checkout */}
                <button
                  id="hero-buy-now-btn"
                  onClick={() => onDirectCheckout(selectedVariant)}
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-[#234E39] text-[#FAF8F5] hover:bg-[#1A3B2B] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#C5A880]/30"
                >
                  <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>Buy Now (Express)</span>
                </button>
              </div>

              {/* Scalp Diagnosis Quiz Prompt */}
              <div
                id="scalp-diagnosis-banner"
                onClick={onOpenQuiz}
                className="bg-[#FAF4EB] border border-[#DDD5C5] hover:border-[#234E39] p-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 group shadow-xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#234E39]/10 flex items-center justify-center text-[#234E39] shrink-0 group-hover:bg-[#234E39] group-hover:text-[#FAF8F5] transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#234E39] truncate sm:whitespace-normal">
                      Not sure which routine fits your scalp?
                    </p>
                    <p className="text-[11px] text-[#556758]">
                      Take our 60-second Ayurvedic Scalp Diagnosis Quiz
                    </p>
                  </div>
                </div>
                <button
                  id="hero-quiz-diagnose-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuiz();
                  }}
                  className="shrink-0 px-3.5 py-1.5 bg-[#234E39] text-[#FAF8F5] text-xs font-bold rounded-lg group-hover:bg-[#1A3B2B] active:scale-95 transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <span>Diagnose</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Live Dispatch Ticker */}
              <div className="flex items-center justify-center gap-2 text-xs text-[#526359] text-center pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>
                  Ready to ship! Order in the next <strong>2 hrs 45 mins</strong> for today's dispatch.
                </span>
              </div>
            </div>

            {/* Trust Seals Footer in Card */}
            <div className="pt-2 border-t border-[#E6DEC8] flex items-center justify-between text-[11px] text-[#697B70] flex-wrap gap-2">
              <span className="flex items-center gap-1">
                🔒 256-Bit SSL Encrypted Checkout
              </span>
              <span className="flex items-center gap-1">
                💳 UPI, Cards, NetBanking & COD Available
              </span>
              <button
                onClick={onOpenIngredients}
                className="underline hover:text-[#234E39] cursor-pointer"
              >
                View Full Ingredients List →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
