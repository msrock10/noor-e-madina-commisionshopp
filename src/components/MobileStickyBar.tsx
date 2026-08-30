import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  urduMode: boolean;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ urduMode }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-emerald-950/95 backdrop-blur-md border-t border-amber-500/40 p-2 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Sticky Call Button */}
        <a
          id="mobile-sticky-call-btn"
          href="tel:03336418966"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-none bg-emerald-900 text-white border border-amber-400 font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Call: 0333 6418966</span>
        </a>

        {/* Sticky WhatsApp Button */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20am%20interested%20in%20dates%20from%20Noor-e-Madina%20Commission%20Shop."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-none bg-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-emerald-950 shrink-0" />
          <span className="truncate">{urduMode ? 'واٹس ایپ' : 'WhatsApp Us'}</span>
        </a>
      </div>
    </div>
  );
};

