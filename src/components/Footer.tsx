import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  ShoppingBag, 
  Instagram, 
  Facebook, 
  Youtube, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  X,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';
import { BRAND_IMAGES } from '../data/images';
import { PRODUCT_VARIANTS } from '../data/productData';

interface FooterProps {
  onSelectVariant: () => void;
  onOpenQuiz?: () => void;
  onSelectSpecificVariant?: (variantId: string) => void;
}

type PolicyType = 'privacy' | 'terms' | 'shipping' | 'refund' | 'authenticity' | null;

export const Footer: React.FC<FooterProps> = ({ onSelectVariant, onOpenQuiz, onSelectSpecificVariant }) => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const whatsappNumber = '917019072843';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Kesh Amruth team, I would like to consult regarding the Hair Oil.')}`;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/keshamruth',
      color: 'hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10',
      label: '@keshamruth'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/keshamruth',
      color: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10',
      label: 'KeshAmruth Ayurveda'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@keshamruth',
      color: 'hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10',
      label: 'KeshAmruth Rituals'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: whatsappUrl,
      color: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10',
      label: 'Direct Consultation'
    }
  ];

  const policyContent: Record<NonNullable<PolicyType>, { title: string; subtitle: string; content: string[] }> = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Customer Data Protection',
      content: [
        'At KeshAmruth, we respect your privacy and are committed to protecting your personal data.',
        '1. Information Collection: We collect only necessary details (name, shipping address, contact phone, email) to process orders and provide delivery updates.',
        '2. Data Security: All transactions are processed through encrypted, compliant payment gateways. We never store card details, UPI PINs, or bank credentials.',
        '3. Zero Spam: We never sell or share your phone number or email with third-party advertisers.',
        '4. Customer Rights: You may request access or removal of your records at any time by emailing kesh.amruth@gmail.com.'
      ]
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Ayurvedic Commerce Agreement',
      content: [
        'Welcome to KeshAmruth. By placing an order, you agree to the following terms:',
        '1. Natural Formulation: KeshAmruth is made with 100% natural cold-pressed botanicals and herbal decoctions. Subtle natural variations in color and aroma are typical of authentic herbal preparations.',
        '2. Order Pricing: Displayed prices (100ml @ ₹599, 200ml @ ₹998) are inclusive of all applicable taxes.',
        '3. Intellectual Property: Formulations, trade names, and brand assets are the exclusive property of KeshAmruth Ayurveda.'
      ]
    },
    shipping: {
      title: 'Shipping & Delivery Policy',
      subtitle: 'Express Pan-India Logistics',
      content: [
        'Every glass bottle is packaged with protective cushioning to ensure safe transit.',
        '1. Processing: Orders placed before 3:00 PM IST are dispatched within 24 hours.',
        '2. Delivery Time: Metro cities receive deliveries in 2–4 business days. Other regions in 3–6 business days.',
        '3. Free Express Shipping: Included automatically on all 200ml bottle orders.',
        '4. Tracking: Live tracking links are sent via WhatsApp and SMS immediately after courier dispatch.'
      ]
    },
    refund: {
      title: 'Return & Replacement Policy',
      subtitle: 'Hassle-Free Customer Assurance',
      content: [
        'We stand behind the authenticity and quality of every bottle.',
        '1. Transit Damage / Leaks: If your parcel arrives damaged, message us on WhatsApp (+91 7019072843) within 48 hours for an instant, free replacement dispatch.',
        '2. Pre-Dispatch Cancellation: Orders can be cancelled at zero charge before dispatch.',
        '3. Refund Timeline: Approved refunds are credited back to the original payment source within 3–5 business days.'
      ]
    },
    authenticity: {
      title: 'Ayurvedic Authenticity Certificate',
      subtitle: 'Classical Taila Paka Vidhi',
      content: [
        'KeshAmruth is formulated according to classical Ayurvedic principles:',
        '• 14 Botanical Actives: Pure Bhringraj, Wild Amla, Brahmi, Rosemary, Hibiscus, Methi, and cold-pressed botanical carrier oils.',
        '• 0% Mineral Oil, 0% Silicones, 0% Synthetic Dyes, 0% Added Parabens.',
        '• Slow-cooked Kshirapak infusion preserving all natural phytonutrients and herbal properties.'
      ]
    }
  };

  return (
    <>
      <footer className="bg-[#172018] text-[#FDFCFB] border-t border-[#2A3B2C] font-sans">
        
        {/* TOP COMPACT HIGHLIGHTS */}
        <div className="border-b border-[#253627] bg-[#121A13]/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-xs text-[#C5D8C3] font-medium">100% Classical Ayurveda</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-xs text-[#C5D8C3] font-medium">14 Botanical Ingredients</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <Truck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-xs text-[#C5D8C3] font-medium">Free Express Delivery on 200ml</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <RotateCcw className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-xs text-[#C5D8C3] font-medium">Doorstep Replacement Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* BRAND & SOCIAL MEDIA (5 COLS) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D4AF37] shadow-md bg-white p-0.5 flex-shrink-0">
                  <img
                    src={BRAND_IMAGES.logo}
                    alt="KeshAmruth"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = 'https://i.ibb.co/FbSkPKCM/finalized-logo-of-kesh-amruth.jpg';
                    }}
                  />
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block leading-none">
                    KeshAmruth
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-bold block mt-1">
                    Pure Ayurvedic Hair Oil
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#B8CEB5] leading-relaxed max-w-sm">
                Authentic Taila Paka formulation with 14 pure botanical actives. Restores scalp vitality, reduces chronic hair fall, and nourishes roots naturally.
              </p>

              {/* SOCIAL MEDIA INTEGRATION */}
              <div className="pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A2BA9E] block mb-2">
                  Follow Our Hair Care Journey
                </span>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`w-9 h-9 rounded-xl bg-[#202E22] border border-[#334835] text-[#D1E0CE] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 ${social.color}`}
                        title={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* NEWSLETTER */}
              <div className="pt-2">
                {newsletterSubscribed ? (
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#224028] border border-[#36603E] text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#73D186] flex-shrink-0" />
                    <span>Subscribed! Thank you for joining KeshAmruth.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-xs">
                    <input
                      type="email"
                      required
                      placeholder="Enter email for hair tips & offers..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="bg-[#121A13] border border-[#344837] focus:border-[#D4AF37] text-white text-xs px-3 py-2 rounded-lg w-full outline-none transition-colors placeholder:text-[#647C66]"
                    />
                    <button
                      type="submit"
                      className="bg-[#D4AF37] hover:bg-[#c29d2b] text-[#142316] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer"
                      title="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* QUICK EXPLORE (2.5 COLS) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-b border-[#2C3E2E] pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#B8CEB5]">
                <li>
                  <button
                    onClick={() => {
                      if (onSelectSpecificVariant) onSelectSpecificVariant('100ml');
                      else onSelectVariant();
                    }}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                  >
                    <span>100 ml Bottle</span>
                    <span className="text-[#D4AF37] font-semibold">₹599</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (onSelectSpecificVariant) onSelectSpecificVariant('200ml');
                      else onSelectVariant();
                    }}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                  >
                    <span>200 ml Bottle</span>
                    <span className="text-[#D4AF37] font-semibold">₹998</span>
                  </button>
                </li>
                {onOpenQuiz && (
                  <li>
                    <button
                      onClick={onOpenQuiz}
                      className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer text-[#E5DDD0] font-medium"
                    >
                      Hair Quiz (1 Min)
                    </button>
                  </li>
                )}
                <li>
                  <a href="#ingredients" className="hover:text-[#D4AF37] transition-colors block">
                    14 Botanicals
                  </a>
                </li>
                <li>
                  <a href="#ritual" className="hover:text-[#D4AF37] transition-colors block">
                    How To Use
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-[#D4AF37] transition-colors block">
                    Reviews (4.9★)
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#D4AF37] transition-colors block">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* POLICIES (2 COLS) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-b border-[#2C3E2E] pb-2">
                Policies
              </h4>
              <ul className="space-y-2 text-xs text-[#B8CEB5]">
                <li>
                  <button
                    onClick={() => setActivePolicy('shipping')}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer block"
                  >
                    Shipping Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('refund')}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer block"
                  >
                    Return & Refund
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('privacy')}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer block"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('terms')}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer block"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy('authenticity')}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer text-[#D4AF37] font-medium block"
                  >
                    Authenticity
                  </button>
                </li>
              </ul>
            </div>

            {/* DIRECT SUPPORT & CONTACT (3 COLS) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-b border-[#2C3E2E] pb-2">
                Customer Support
              </h4>

              <div className="space-y-2.5 text-xs text-[#D1E0CE]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <a href="tel:+917019072843" className="hover:text-[#D4AF37] font-semibold text-white transition-colors">
                    +91 7019072843
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <a href="mailto:kesh.amruth@gmail.com" className="hover:text-[#D4AF37] text-white transition-colors break-all">
                    kesh.amruth@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[#9AB197]">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <span>Mon – Sat: 9 AM – 8 PM IST</span>
                </div>

                <div className="pt-1.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Concierge</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM PAYMENT STRIP & COPYRIGHT */}
        <div className="border-t border-[#233324] bg-[#101711] pt-5 pb-24 sm:py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
              
              {/* Payment Methods */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 text-[11px] text-[#A2BA9E]">
                <span className="font-semibold text-white mr-1">Accepted Payments:</span>
                <span className="px-2 py-0.5 rounded bg-[#1B271D] border border-[#2D402F] text-white">UPI</span>
                <span className="px-2 py-0.5 rounded bg-[#1B271D] border border-[#2D402F] text-white">GPay</span>
                <span className="px-2 py-0.5 rounded bg-[#1B271D] border border-[#2D402F] text-white">PhonePe</span>
                <span className="px-2 py-0.5 rounded bg-[#1B271D] border border-[#2D402F] text-white">Paytm</span>
                <span className="px-2 py-0.5 rounded bg-[#1B271D] border border-[#2D402F] text-white">Cards</span>
                <span className="px-2 py-0.5 rounded bg-[#1B271D] border border-[#2D402F] text-white">NetBanking</span>
                <span className="px-2 py-0.5 rounded bg-[#1B271D] border border-[#2D402F] text-[#D4AF37] font-semibold">COD Available</span>
              </div>

              {/* Copyright */}
              <div className="text-[11px] text-[#81997F]">
                © {new Date().getFullYear()} KeshAmruth Ayurveda. All rights reserved.
              </div>

            </div>
          </div>
        </div>

      </footer>

      {/* POLICY POPUP MODAL */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] text-[#1D2B24] max-w-lg w-full rounded-2xl shadow-2xl border border-[#D5D0C5] overflow-hidden">
            
            <div className="bg-[#1E3F2F] text-white p-4 sm:p-5 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                  {policyContent[activePolicy].title}
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                  {policyContent[activePolicy].subtitle}
                </p>
              </div>
              <button
                onClick={() => setActivePolicy(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm text-[#3E4E44] leading-relaxed max-h-[60vh] overflow-y-auto">
              {policyContent[activePolicy].content.map((paragraph, idx) => (
                <p key={idx} className={paragraph.startsWith('•') || paragraph.match(/^[0-9]\./) ? 'font-medium text-[#1E3F2F]' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="p-3.5 bg-[#F2EFE9] border-t border-[#E3DFD4] flex items-center justify-between">
              <span className="text-xs text-[#6B7D72]">
                Helpline: +91 7019072843
              </span>
              <button
                onClick={() => setActivePolicy(null)}
                className="px-4 py-1.5 bg-[#1E3F2F] text-white text-xs font-bold rounded-lg hover:bg-[#163023] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};


