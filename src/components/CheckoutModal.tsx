import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Truck, Copy, Check, MessageCircle, ArrowRight, MapPin, User, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, Order, PaymentMethod, ShippingAddress } from '../types';
import { PRODUCT_VARIANTS } from '../data/productData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discountAmount: number;
  appliedCoupon: string | null;
  onOrderSuccess: (order: Order) => void;
}

const WHATSAPP_NUMBER = '7019072843';
const WHATSAPP_INTL_NUMBER = '917019072843';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discountAmount,
  appliedCoupon,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'details' | 'confirmed'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  // Form states - clean fields with high-quality placeholders
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');

  // Form errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  // Active items fallback if cart is empty on direct checkout
  const activeItems: CartItem[] = items.length > 0 
    ? items 
    : [{ variant: PRODUCT_VARIANTS[1] || PRODUCT_VARIANTS[0], quantity: 1, customGiftWrap: false }];

  const calculatedSubtotal = subtotal > 0 
    ? subtotal 
    : activeItems.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);

  const totalAmount = Math.max(0, calculatedSubtotal - discountAmount);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your 10-digit mobile / WhatsApp number';
    } else if (phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!street.trim()) newErrors.street = 'Please enter house/flat/building & street address';
    if (!city.trim()) newErrors.city = 'Please enter your city';
    if (!state.trim()) newErrors.state = 'Please enter your state';
    if (!pincode.trim() || pincode.trim().length < 6) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createWhatsAppOrderMessage = (paymentModeText: string) => {
    const itemsList = activeItems
      .map((item, idx) => `  ${idx + 1}. *${item.variant.name}* (Qty: ${item.quantity}) - ₹${(item.variant.price * item.quantity).toLocaleString('en-IN')}`)
      .join('\n');

    const addressText = `${street.trim()}${apartment.trim() ? `, ${apartment.trim()}` : ''}, ${city.trim()}, ${state.trim()} - ${pincode.trim()}`;

    const text = 
`🌿 *NEW ORDER: KESH AMRUTH AYURVEDIC HAIR OIL*
----------------------------------------
📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}

👤 *CUSTOMER DETAILS:*
• *Name:* ${fullName.trim()}
• *Phone/WhatsApp:* ${phone.trim()}
• *Email:* ${email.trim() || 'N/A'}

📍 *DELIVERY ADDRESS:*
• *Address:* ${addressText}
• *Country:* India

🛒 *ORDER ITEMS:*
${itemsList}

${appliedCoupon ? `🏷️ *Coupon Applied:* ${appliedCoupon} (-₹${discountAmount.toLocaleString('en-IN')})\n` : ''}💳 *Payment Method:* ${paymentModeText}
🚚 *Delivery:* FREE Express Delivery
💰 *TOTAL AMOUNT:* ₹${totalAmount.toLocaleString('en-IN')}

----------------------------------------
Please confirm my order and share delivery details! 🌿`;

    return text;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const paymentModeLabel = 
      paymentMethod === 'cod' 
        ? 'Cash on Delivery (COD)' 
        : paymentMethod === 'upi' 
        ? 'UPI (GPay / PhonePe / Paytm)' 
        : 'Online Card Payment';

    const messageText = createWhatsAppOrderMessage(paymentModeLabel);
    const encodedMessage = encodeURIComponent(messageText);
    const targetUrl = `https://wa.me/${WHATSAPP_INTL_NUMBER}?text=${encodedMessage}`;
    setWhatsappUrl(targetUrl);

    const shippingDetails: ShippingAddress = {
      fullName: fullName.trim(),
      email: email.trim() || `${phone.trim()}@keshamruth.in`,
      phone: phone.trim(),
      street: street.trim(),
      apartment: apartment.trim(),
      city: city.trim(),
      state: state.trim(),
      pincode: pincode.trim(),
      country: 'India'
    };

    const newOrder: Order = {
      id: `${Date.now()}`,
      date: 'Today, ' + new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      customer: shippingDetails,
      items: [...activeItems],
      subtotal: calculatedSubtotal,
      discount: discountAmount,
      shippingFee: 0,
      total: totalAmount,
      couponApplied: appliedCoupon || undefined,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'PENDING_COD' : 'PAID',
      status: 'Processing',
      courierName: 'Express Air Courier',
      trackingNumber: '',
      estimatedDelivery: 'Within 2-3 Business Days',
      timeline: []
    };

    // Open WhatsApp directly in new window / tab
    try {
      window.open(targetUrl, '_blank');
    } catch {
      // Fallback if blocked
      window.location.href = targetUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedOrder(newOrder);
      onOrderSuccess(newOrder);
      setStep('confirmed');

      // Trigger Celebration Confetti
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#25D366', '#234E39', '#D4AF37', '#1E3F2F']
      });
    }, 400);
  };

  const handleCopyOrderSummary = () => {
    if (confirmedOrder) {
      const paymentModeLabel = 
        confirmedOrder.paymentMethod === 'cod' 
          ? 'Cash on Delivery (COD)' 
          : confirmedOrder.paymentMethod === 'upi' 
          ? 'UPI' 
          : 'Card Payment';
      const text = createWhatsAppOrderMessage(paymentModeLabel);
      navigator.clipboard.writeText(text);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 bg-[#1E3F2F]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full border border-[#DDD5C5] shadow-2xl overflow-hidden flex flex-col my-4 sm:my-8 max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-[#1E3F2F] text-[#FAF8F5] px-5 py-4 border-b border-[#2D5A43] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
              <MessageCircle className="w-5 h-5 fill-[#25D366]/20" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                {step === 'details' ? 'Delivery Details & WhatsApp Order' : 'Order Details Sent to WhatsApp!'}
              </h3>
              <p className="text-[11px] text-[#D4AF37] font-medium tracking-wide flex items-center gap-1">
                <span>Direct WhatsApp Support: +91 {WHATSAPP_NUMBER}</span>
              </p>
            </div>
          </div>

          <button
            id="close-checkout-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          
          {/* STEP 1: ORDER DETAILS FORM */}
          {step === 'details' && (
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              
              {/* WhatsApp Notification Banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-emerald-900">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-bold text-emerald-950">
                    Direct WhatsApp Order Booking (+91 {WHATSAPP_NUMBER})
                  </p>
                  <p className="text-[11.5px] text-emerald-800 leading-relaxed">
                    Fill your delivery address below. When you click <strong>Send Order to WhatsApp</strong>, your complete order summary will open in WhatsApp directly for instant confirmation.
                  </p>
                </div>
              </div>

              {/* Customer Contact Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F2F] flex items-center gap-1.5 border-b border-[#E7E2D6] pb-1.5">
                  <User className="w-3.5 h-3.5 text-[#234E39]" />
                  <span>1. Contact Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#234E39] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="checkout-full-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-[#1E3F2F] bg-white focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-400 bg-red-50/50' : 'border-[#DDD5C5] focus:border-[#234E39]'
                      }`}
                    />
                    {errors.fullName && <p className="text-[10.5px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#234E39] mb-1">
                      WhatsApp / Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-semibold">
                        +91
                      </span>
                      <input
                        id="checkout-phone"
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full pl-11 pr-3.5 py-2.5 rounded-lg border text-xs text-[#1E3F2F] bg-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/50' : 'border-[#DDD5C5] focus:border-[#234E39]'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[10.5px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#234E39] mb-1">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD5C5] bg-white text-xs text-[#1E3F2F] focus:outline-none focus:border-[#234E39]"
                  />
                </div>
              </div>

              {/* Shipping Address Section */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F2F] flex items-center gap-1.5 border-b border-[#E7E2D6] pb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#234E39]" />
                  <span>2. Delivery Address</span>
                </h4>

                <div>
                  <label className="block text-xs font-bold text-[#234E39] mb-1">
                    Flat / House No., Building Name & Street <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="checkout-street"
                    type="text"
                    required
                    placeholder="e.g. Flat 302, Green Meadows, 5th Main Road"
                    value={street}
                    onChange={(e) => {
                      setStreet(e.target.value);
                      if (errors.street) setErrors({ ...errors, street: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-[#1E3F2F] bg-white focus:outline-none transition-colors ${
                      errors.street ? 'border-red-400 bg-red-50/50' : 'border-[#DDD5C5] focus:border-[#234E39]'
                    }`}
                  />
                  {errors.street && <p className="text-[10.5px] text-red-500 mt-1">{errors.street}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#234E39] mb-1">
                    Landmark / Colony / Sector <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="checkout-apartment"
                    type="text"
                    placeholder="e.g. Near City Mall / Opp. ICICI Bank"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD5C5] bg-white text-xs text-[#1E3F2F] focus:outline-none focus:border-[#234E39]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#234E39] mb-1">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="checkout-pincode"
                      type="text"
                      required
                      maxLength={6}
                      placeholder="e.g. 560034"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value);
                        if (errors.pincode) setErrors({ ...errors, pincode: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-[#1E3F2F] bg-white focus:outline-none transition-colors ${
                        errors.pincode ? 'border-red-400 bg-red-50/50' : 'border-[#DDD5C5] focus:border-[#234E39]'
                      }`}
                    />
                    {errors.pincode && <p className="text-[10.5px] text-red-500 mt-1">{errors.pincode}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#234E39] mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="checkout-city"
                      type="text"
                      required
                      placeholder="e.g. Bengaluru"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        if (errors.city) setErrors({ ...errors, city: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-[#1E3F2F] bg-white focus:outline-none transition-colors ${
                        errors.city ? 'border-red-400 bg-red-50/50' : 'border-[#DDD5C5] focus:border-[#234E39]'
                      }`}
                    />
                    {errors.city && <p className="text-[10.5px] text-red-500 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#234E39] mb-1">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="checkout-state"
                      type="text"
                      required
                      placeholder="e.g. Karnataka"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                        if (errors.state) setErrors({ ...errors, state: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-[#1E3F2F] bg-white focus:outline-none transition-colors ${
                        errors.state ? 'border-red-400 bg-red-50/50' : 'border-[#DDD5C5] focus:border-[#234E39]'
                      }`}
                    />
                    {errors.state && <p className="text-[10.5px] text-red-500 mt-1">{errors.state}</p>}
                  </div>
                </div>
              </div>

              {/* Payment Mode Selection */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F2F] flex items-center gap-1.5 border-b border-[#E7E2D6] pb-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#234E39]" />
                  <span>3. Preferred Payment Method</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#234E39] bg-[#FAF4EB] shadow-xs'
                        : 'border-[#DDD5C5] bg-white hover:border-[#234E39]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#234E39] focus:ring-[#234E39]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#1E3F2F]">Cash on Delivery (COD)</p>
                      <p className="text-[10.5px] text-[#556758]">Pay upon delivery</p>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#234E39] bg-[#FAF4EB] shadow-xs'
                        : 'border-[#DDD5C5] bg-white hover:border-[#234E39]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="text-[#234E39] focus:ring-[#234E39]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#1E3F2F]">Instant UPI (GPay / PhonePe / Paytm)</p>
                      <p className="text-[10.5px] text-[#556758]">Fast & direct</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Items & Pricing Breakdown */}
              <div className="bg-[#FAF4EB] rounded-xl p-4 border border-[#DDD5C5] text-xs space-y-2">
                <div className="font-bold text-[#1E3F2F] pb-1 border-b border-[#DDD5C5]/70 flex items-center justify-between">
                  <span>Selected Package</span>
                  <span className="text-[#556758] font-normal">Direct WhatsApp Order</span>
                </div>

                <div className="space-y-1.5">
                  {activeItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[#234E39]">
                      <span className="font-medium">
                        {item.quantity}x {item.variant.name}
                      </span>
                      <span className="font-bold">
                        ₹{(item.variant.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold pt-1 border-t border-[#DDD5C5]/40">
                    <span>Ayurvedic Coupon ({appliedCoupon})</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#556758] pt-1">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-700" /> Express Delivery
                  </span>
                  <span className="font-bold text-emerald-700">FREE</span>
                </div>

                <div className="pt-2 border-t border-[#DDD5C5] flex justify-between items-baseline font-bold text-sm text-[#1E3F2F]">
                  <span>Total Payable:</span>
                  <span className="text-[#234E39] font-extrabold text-lg">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#DDD5C5] text-xs font-bold text-[#556758] hover:bg-[#FAF4EB] transition-colors order-2 sm:order-1 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  id="send-order-whatsapp-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wide shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] order-1 sm:order-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Opening WhatsApp...
                    </span>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Send Order to WhatsApp (7019072843)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#556758] text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#234E39]" />
                <span>100% Authentic Ayurvedic Quality • Free Delivery • 60-Day Guarantee</span>
              </p>
            </form>
          )}

          {/* STEP 2: ORDER CONFIRMATION & WHATSAPP REDIRECT SCREEN */}
          {step === 'confirmed' && confirmedOrder && (
            <div className="py-3 space-y-5 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-2xl font-bold text-[#1E3F2F]">
                  Order Sent to WhatsApp!
                </h3>
                <p className="text-xs text-[#556758] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{confirmedOrder.customer.fullName}</strong>! Your order details have been forwarded to our WhatsApp support on <strong>+91 {WHATSAPP_NUMBER}</strong> for confirmation.
                </p>
              </div>

              {/* Direct WhatsApp Action Button */}
              {whatsappUrl && (
                <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-4 text-center space-y-2.5 max-w-md mx-auto">
                  <p className="text-xs font-semibold text-emerald-950">
                    If WhatsApp did not open automatically, tap the button below:
                  </p>
                  <a
                    id="whatsapp-direct-open-link"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs tracking-wide shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp Chat (+91 {WHATSAPP_NUMBER})</span>
                  </a>
                </div>
              )}

              {/* Order Details Summary Box */}
              <div className="bg-[#FAF4EB] rounded-2xl p-4 sm:p-5 border border-[#DDD5C5] text-left space-y-3 max-w-md mx-auto text-xs">
                <div className="flex items-center justify-between border-b border-[#DDD5C5] pb-2.5">
                  <div>
                    <span className="text-xs font-bold text-[#1E3F2F]">
                      Order Summary
                    </span>
                    <span className="text-[11px] text-[#556758] block">
                      Sent to +91 {WHATSAPP_NUMBER}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyOrderSummary}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#234E39] bg-white border border-[#DDD5C5] px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
                  >
                    {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSummary ? 'Copied Details' : 'Copy Details'}</span>
                  </button>
                </div>

                <div className="space-y-1.5 text-[#556758]">
                  <div className="flex justify-between">
                    <span className="font-medium">Customer:</span>
                    <span className="font-bold text-[#1E3F2F]">{confirmedOrder.customer.fullName} ({confirmedOrder.customer.phone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Delivery Address:</span>
                    <span className="font-bold text-[#1E3F2F] text-right truncate max-w-[220px]">
                      {confirmedOrder.customer.street}, {confirmedOrder.customer.city} - {confirmedOrder.customer.pincode}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Payment Mode:</span>
                    <span className="font-bold text-[#1E3F2F]">
                      {confirmedOrder.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Instant UPI / Online'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DDD5C5] flex justify-between font-bold text-xs">
                  <span className="text-[#1E3F2F]">Total Amount:</span>
                  <span className="text-[#234E39] font-extrabold text-sm">
                    ₹{confirmedOrder.total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  id="checkout-continue-shopping-btn"
                  onClick={onClose}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#1E3F2F] hover:bg-[#234E39] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
