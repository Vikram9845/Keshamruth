import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ShieldCheck, Gift, ArrowRight, Sparkles, Check } from 'lucide-react';
import { CartItem, ProductVariant } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (variantId: string, delta: number) => void;
  onRemoveItem: (variantId: string) => void;
  onToggleGiftWrap: (variantId: string) => void;
  onProceedToCheckout: () => void;
  onApplyCoupon: (code: string) => boolean;
  appliedCoupon: string | null;
  discountAmount: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onToggleGiftWrap,
  onProceedToCheckout,
  onApplyCoupon,
  appliedCoupon,
  discountAmount,
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - discountAmount);
  const freeShippingThreshold = 1000;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    if (!couponInput.trim()) return;

    const success = onApplyCoupon(couponInput.trim().toUpperCase());
    if (success) {
      setCouponSuccess('Coupon AYURVEDA20 applied (20% OFF)!');
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code. Try AYURVEDA20');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#2C3322]/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFCFB] border-l border-[#E5E2D9] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#E5E2D9] flex items-center justify-between bg-[#F5F2EC]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#4A5D23] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2C3322]">
                  Your Ayurvedic Bag
                </h3>
                <p className="text-[11px] text-[#8B9D64] font-sans font-bold uppercase tracking-widest">
                  {totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'} Selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-400 hover:text-[#2C3322] hover:bg-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#FAF8F3] px-5 py-3 border-b border-[#E5E2D9] text-xs">
            <div className="flex items-center justify-between mb-1.5 font-medium">
              {subtotal >= freeShippingThreshold ? (
                <span className="text-[#4A5D23] font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> You unlocked FREE Express Air Delivery!
                </span>
              ) : (
                <span className="text-[#645642]">
                  Add <strong className="text-[#4A5D23]">₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')}</strong> more for Free Express Delivery
                </span>
              )}
              <span className="font-bold text-[#2C3322]">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E5E2D9] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#8B9D64] to-[#4A5D23] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F5F2EC] border border-[#E5E2D9] flex items-center justify-center mx-auto text-[#8B9D64]">
                  <ShoppingBag className="w-7 h-7 stroke-1" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2C3322]">
                  Your Bag is Currently Empty
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Experience cold-pressed Ayurvedic hair growth. Choose your ritual bottle to begin.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A5D23] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#39481A] transition-colors"
                >
                  Explore Ritual Packs
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.variant.id}
                  className="bg-white rounded-xl p-4 border border-[#E5E2D9] shadow-2xs space-y-3"
                >
                  <div className="flex items-start gap-3.5">
                    <img
                      src={item.variant.image}
                      alt={item.variant.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-contain bg-[#FAF8F5] border border-[#E5E2D9] p-1 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#2C3322] leading-snug truncate">
                          {item.variant.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.variant.id)}
                          className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#8B9D64] font-medium">
                        {item.variant.subtitle}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-extrabold text-[#4A5D23]">
                            ₹{(item.variant.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-gray-400 line-through">
                            ₹{(item.variant.originalPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* Qty controller */}
                        <div className="flex items-center border border-[#E5E2D9] rounded-lg bg-[#FAF8F5]">
                          <button
                            onClick={() => onUpdateQuantity(item.variant.id, -1)}
                            className="p-1 text-gray-600 hover:text-[#4A5D23] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#2C3322]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.variant.id, 1)}
                            className="p-1 text-gray-600 hover:text-[#4A5D23] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Free Gifts included */}
                  {item.variant.freeGifts.length > 0 && (
                    <div className="bg-[#F5F2EC] p-2 rounded-lg text-[10.5px] text-[#4A5D23] flex items-center gap-1.5 font-medium border border-[#E5E2D9]">
                      <Gift className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>Includes: {item.variant.freeGifts[0]}</span>
                    </div>
                  )}

                  {/* Gift Wrap Toggle */}
                  <label className="flex items-center gap-2 text-[11px] text-[#556758] cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={item.customGiftWrap || false}
                      onChange={() => onToggleGiftWrap(item.variant.id)}
                      className="accent-[#4A5D23] rounded"
                    />
                    <span>Add Eco-Friendly Artisanal Gift Packaging (Free)</span>
                  </label>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#F5F2EC] border-t border-[#E5E2D9] space-y-4">
              
              {/* Coupon input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Discount Code (e.g. AYURVEDA20)"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white border border-[#E5E2D9] rounded-lg text-xs uppercase tracking-wider focus:outline-none focus:border-[#4A5D23]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2C3322] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#4A5D23] transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponSuccess && (
                <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> {couponSuccess}
                </p>
              )}
              {couponError && (
                <p className="text-xs text-red-600 font-medium">
                  {couponError}
                </p>
              )}

              {/* Price Calculation Summary */}
              <div className="space-y-1.5 text-xs text-[#556758]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2C3322]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Ayurvedic Promo Savings</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Insured Shipping</span>
                  <span className="font-semibold text-emerald-700">FREE</span>
                </div>
                <div className="pt-2 border-t border-[#E5E2D9] flex justify-between text-sm font-extrabold text-[#2C3322]">
                  <span>Total Amount</span>
                  <span className="text-base text-[#4A5D23]">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                id="cart-checkout-proceed-btn"
                onClick={onProceedToCheckout}
                className="w-full py-4 bg-[#2C3322] text-white rounded-full font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#4A5D23] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/30"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10.5px] text-[#6B7E6F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D23]" />
                <span>256-Bit SSL Encrypted • 30-Day Money Back Guarantee</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
