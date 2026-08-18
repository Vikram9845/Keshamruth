import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeshAmruthDifference } from './components/KeshAmruthDifference';
import { BenefitsSection } from './components/BenefitsSection';
import { IngredientsSection } from './components/IngredientsSection';
import { HowToUseSection } from './components/HowToUseSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { BottomOrderCta } from './components/BottomOrderCta';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { HairQuizModal } from './components/HairQuizModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CartItem, Order, ProductVariant } from './types';
import { PRODUCT_VARIANTS, INITIAL_ORDERS } from './data/productData';
import { ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

export function App() {
  // Selected variant for Hero display
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(PRODUCT_VARIANTS[1]);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    {
      variant: PRODUCT_VARIANTS[1], // Default: 200ml Bottle (₹998)
      quantity: 1,
      customGiftWrap: false,
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Orders store
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Show floating mobile bottom bar when scrolled
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  // Add to cart handler
  const handleAddToCart = (variant: ProductVariant, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.variant.id === variant.id);
      if (existing) {
        return prev.map((item) =>
          item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { variant, quantity, customGiftWrap: false }];
      }
    });

    showToast(`Added ${quantity}x ${variant.name} to your Ayurvedic bag!`);
    setIsCartOpen(true);
  };

  // Buy Now immediate handler
  const handleDirectCheckout = (variant: ProductVariant) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.variant.id === variant.id);
      if (existing) {
        return prev;
      } else {
        return [...prev, { variant, quantity: 1, customGiftWrap: false }];
      }
    });
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Update item quantity with delta (+1 or -1)
  const handleUpdateQuantity = (variantId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.variant.id === variantId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Toggle gift wrap
  const handleToggleGiftWrap = (variantId: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.variant.id === variantId
          ? { ...item, customGiftWrap: !item.customGiftWrap }
          : item
      )
    );
  };

  // Remove item
  const handleRemoveItem = (variantId: string) => {
    setCart((prev) => prev.filter((item) => item.variant.id !== variantId));
  };

  // Subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);

  // Apply discount coupon
  const handleApplyCoupon = (code: string): boolean => {
    const upper = code.trim().toUpperCase();
    if (upper === 'KESHAMRUTH10' || upper === 'AMRUTH10') {
      setAppliedCoupon('KESHAMRUTH10 (10% OFF)');
      setCouponDiscount(Math.round(subtotal * 0.1));
      showToast('10% Ayurvedic discount applied!');
      return true;
    } else if (upper === 'AYURVEDA15') {
      setAppliedCoupon('AYURVEDA15 (15% OFF)');
      setCouponDiscount(Math.round(subtotal * 0.15));
      showToast('15% Holistic blessing applied!');
      return true;
    } else if (upper === 'FIRSTBOTTLE') {
      setAppliedCoupon('FIRSTBOTTLE (₹150 OFF)');
      setCouponDiscount(150);
      showToast('₹150 First Order discount applied!');
      return true;
    } else {
      showToast('Invalid coupon code. Try KESHAMRUTH10');
      return false;
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
  };

  // When checkout successfully completes
  const handleOrderSuccess = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]); // clear bag
    setAppliedCoupon(null);
    setCouponDiscount(0);
  };

  const scrollToIngredients = () => {
    const el = document.getElementById('ingredients');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProduct = () => {
    const el = document.getElementById('product-buy');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2C3322] font-sans antialiased selection:bg-[#4A5D23] selection:text-white relative">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-[#2C3322] text-[#FDFCFB] border border-[#D4AF37] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium font-sans">{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        cartItems={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          selectedVariant={selectedVariant}
          onSelectVariant={(v) => setSelectedVariant(v)}
          onAddToCart={handleAddToCart}
          onDirectCheckout={handleDirectCheckout}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenIngredients={scrollToIngredients}
        />

        {/* The Kesh Amruth Difference (14 Ingredients Synergy & Nature's Heritage) */}
        <KeshAmruthDifference
          onExploreIngredients={(ingId) => {
            scrollToIngredients();
          }}
        />

        {/* Benefits Section */}
        <BenefitsSection
          onOpenIngredients={scrollToIngredients}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 14 Sacred Ingredients Apothecary Section */}
        <IngredientsSection />

        {/* How To Use & Shiroabhyanga Ritual Section */}
        <HowToUseSection />

        {/* Real Customer Testimonials & Reviews Section */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Bottom Closing Call-to-Action */}
        <BottomOrderCta
          onOrderNow={scrollToProduct}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectVariant={scrollToProduct}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onSelectSpecificVariant={(variantId) => {
          const match = PRODUCT_VARIANTS.find(v => v.id === variantId);
          if (match) {
            setSelectedVariant(match);
          }
          scrollToProduct();
        }}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onToggleGiftWrap={handleToggleGiftWrap}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        appliedCoupon={appliedCoupon}
        discountAmount={couponDiscount}
        onApplyCoupon={handleApplyCoupon}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotal={subtotal}
        discountAmount={couponDiscount}
        appliedCoupon={appliedCoupon}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Ayurvedic Scalp & Hair Quiz Modal */}
      <HairQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectRecommended={(variant) => {
          setSelectedVariant(variant);
          handleAddToCart(variant, 1);
        }}
      />

      {/* Floating WhatsApp Quick Support Widget */}
      <WhatsAppWidget />

      {/* Mobile Sticky Quick Buy Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-[#E5E2D9] px-4 py-3 sm:hidden shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
          <div className="flex flex-col">
            <span className="font-serif text-xs font-bold text-[#2C3322]">Kesh Amruth</span>
            <span className="text-[11px] font-bold text-[#4A5D23]">From ₹599 • Pure Ayurvedic</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDirectCheckout(selectedVariant)}
              className="px-5 py-2.5 rounded-full bg-[#2C3322] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4A5D23] shadow-md flex items-center gap-1.5 border border-[#D4AF37]/30"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
