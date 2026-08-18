import React from 'react';
import { ShoppingBag, ArrowUp, Sparkles, ShieldCheck, Truck, Star } from 'lucide-react';
import { BRAND_IMAGES } from '../data/images';

interface BottomOrderCtaProps {
  onOrderNow: () => void;
}

export const BottomOrderCta: React.FC<BottomOrderCtaProps> = ({ onOrderNow }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FDFCFB] border-t border-[#EBE4D5] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#EBE4D5]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-gradient-to-br from-[#1E3F2F] via-[#234E39] to-[#173024] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-[#4A5D23]/40 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Product Thumbnail & Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/95 p-1.5 shadow-lg border border-[#D4AF37] flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={BRAND_IMAGES.mainProduct}
                alt="Kesh Amruth Ayurvedic Hair Oil"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-bold tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Ayurvedic Botanical Elixir</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Transform Your Hair with <span className="text-[#D4AF37] font-semibold">Kesh Amruth</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#E0EAE3] max-w-md leading-relaxed font-sans">
                14 potent Ayurvedic botanicals infused for denser, thicker, and deeply nourished hair from root to tip.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-[#C2D6C9]">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" /> 4.9/5 Rating (1,480+ Reviews)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#D4AF37]" /> Free Delivery in India
                </span>
              </div>
            </div>
          </div>

          {/* Right: Order Now Button */}
          <div className="flex flex-col items-center gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={onOrderNow}
              id="bottom-order-now-btn"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E6C35C] hover:from-[#C5A030] hover:to-[#D4AF37] text-[#1E3F2F] font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
              aria-label="Order Kesh Amruth Hair Oil Now"
            >
              <ShoppingBag className="w-5 h-5 text-[#1E3F2F] group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide">Order Now</span>
              <ArrowUp className="w-4 h-4 text-[#1E3F2F] group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <p className="text-[11px] text-[#A5C4B1] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> 100% Herbal • COD & Prepaid Available
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
