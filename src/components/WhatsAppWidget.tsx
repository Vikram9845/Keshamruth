import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, Mail } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '917019072843';
  const defaultMessage = 'Hi Kesh Amruth, I would like to know more about the Ayurvedic Hair Oil and place an order.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#E6DEC8] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#1E3F2F] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-sm">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm tracking-wide">Kesh Amruth Support</h4>
                <p className="text-[11px] text-[#A5D6A7] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" /> Online • Quick Reply
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#FBF9F5] text-xs text-[#394B40] space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-[#EBE4D5] shadow-2xs">
              <p className="font-medium text-[#1E3F2F] mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Namaste! 🙏
              </p>
              <p className="leading-relaxed">
                Have questions regarding your hair type, dosage, or order delivery? Chat with our Ayurvedic hair care advisor directly on WhatsApp.
              </p>
            </div>

            <div className="text-[11px] text-[#6B7D72] space-y-1 pt-1 border-t border-[#EDE6D6]">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#234E39]" /> +91 7019072843
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#234E39]" /> kesh.amruth@gmail.com
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-3 bg-white border-t border-[#EBE4D5]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button (Compact Icon-Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none border-2 border-white cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 animate-pulse" />
        </span>
      </button>
    </div>
  );
};
