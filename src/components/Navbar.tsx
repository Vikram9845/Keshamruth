import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X, ShieldCheck, HelpCircle, Leaf } from 'lucide-react';
import { CartItem } from '../types';
import { BRAND_IMAGES } from '../data/images';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenQuiz: () => void;
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onOpenCart,
  onOpenQuiz,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#1E3F2F] text-[#FAF8F5] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center border-b border-[#2D5A43]">
        <div className="inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold text-xs tracking-wide">
          <Leaf className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>100% Pure & Authentic Ayurvedic Formula</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E6DEC8]/60 py-3'
            : 'bg-[#FAF8F5] border-b border-[#ECE6D8] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Kesh Amruth Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#D4AF37]/70 shadow-xs bg-white p-0.5 group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src={BRAND_IMAGES.logo}
                alt="Kesh Amruth Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.ibb.co/FbSkPKCM/finalized-logo-of-kesh-amruth.jpg';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-luxury tracking-[0.18em] font-bold text-lg sm:text-xl text-[#1E3F2F] group-hover:text-[#234E39] transition-colors">
                  KESH AMRUTH
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-[#6B7C72] uppercase font-medium -mt-0.5 hidden sm:block">
                Pure Ayurvedic Hair Elixir
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-[13.5px] font-medium text-[#2E4238]">
            <button
              onClick={() => scrollToSection('difference')}
              className="hover:text-[#234E39] font-semibold text-[#1E3F2F] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              The Difference
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="hover:text-[#234E39] transition-colors cursor-pointer"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('ingredients')}
              className="hover:text-[#234E39] transition-colors cursor-pointer"
            >
              14 Botanicals
            </button>
            <button
              onClick={() => scrollToSection('ritual')}
              className="hover:text-[#234E39] transition-colors cursor-pointer"
            >
              How to Use
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-[#234E39] transition-colors cursor-pointer"
            >
              Reviews ({4.9} ★)
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#234E39] transition-colors cursor-pointer flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#6B7C72]" /> FAQ
            </button>
          </div>

          {/* Action Right CTA & Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Hair Quiz Pill Button */}
            <button
              id="nav-hair-quiz-btn"
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF4EB] text-[#234E39] border border-[#D5C2A5] hover:bg-[#EFE7D8] transition-all shadow-2xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Hair Quiz</span>
            </button>

            {/* Cart Drawer Trigger Button */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#234E39] text-[#FAF8F5] hover:bg-[#1A3B2B] active:scale-95 transition-all shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D97706] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF8F5] animate-scale">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2E4238] hover:bg-[#ECE6D8] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E6DEC8] px-4 pt-3 pb-5 mt-2 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#2E4238]">
              <button
                onClick={() => scrollToSection('product-buy')}
                className="text-left px-3 py-2 rounded-md hover:bg-[#F2ECE1] text-[#234E39] font-bold"
              >
                🌿 Buy Kesh Amruth
              </button>
              <button
                onClick={() => scrollToSection('difference')}
                className="text-left px-3 py-2 rounded-md hover:bg-[#F2ECE1] text-[#1E3F2F] font-semibold flex items-center gap-1"
              >
                ✨ The Difference
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-left px-3 py-2 rounded-md hover:bg-[#F2ECE1]"
              >
                Benefits & Science
              </button>
              <button
                onClick={() => scrollToSection('ingredients')}
                className="text-left px-3 py-2 rounded-md hover:bg-[#F2ECE1]"
              >
                14 Botanicals
              </button>
              <button
                onClick={() => scrollToSection('ritual')}
                className="text-left px-3 py-2 rounded-md hover:bg-[#F2ECE1]"
              >
                How to Apply
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left px-3 py-2 rounded-md hover:bg-[#F2ECE1]"
              >
                Customer Reviews
              </button>
            </div>

            <div className="pt-2 border-t border-[#E6DEC8]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full py-2.5 px-4 bg-[#FAF4EB] text-[#234E39] border border-[#D5C2A5] rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#B8860B]" /> Take 60s Scalp & Hair Quiz
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
