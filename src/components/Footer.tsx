import React from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { PalmTreeEmblem } from './IslamicDecorations';

interface FooterProps {
  urduMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ urduMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-white border-t border-amber-500/30 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900 border border-amber-400 flex items-center justify-center">
                <PalmTreeEmblem className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-white">
                  Noor-e-Madina
                </h3>
                <span className="text-[10px] text-amber-400 tracking-widest uppercase font-bold block">
                  Commission Shop
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed">
              “Premium Dates • Quality Products • Trusted Service”
            </p>

            <p className="text-xs font-urdu text-amber-200">
              نورِ مدینہ کمیشن شاپ — اعلیٰ معیار کی کھجوریں اور دیانتدارانہ کمیشن سروس۔
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 font-serif uppercase tracking-widest">
              {urduMode ? 'اہم لنکس' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rotate-45" />
                  <span>Home (مرکزی صفحہ)</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rotate-45" />
                  <span>Products (کھجوروں کی اقسام)</span>
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rotate-45" />
                  <span>Ramadan & Occasions (رمضان و تقریبات)</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rotate-45" />
                  <span>Why Choose Us (ہمارا انتخاب کیوں؟)</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rotate-45" />
                  <span>About Us (ہمارا تعارف)</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rotate-45" />
                  <span>Contact (رابطہ)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Featured Dates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 font-serif uppercase tracking-widest">
              {urduMode ? 'کھجوروں کے خاص انتخاب' : 'Popular Varieties'}
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['Ajwa Madina', 'Safawi', 'Mabroom', 'Sukkari', 'Kalmi', 'Premium Saudi', 'Rotab Seasonal'].map((d) => (
                <span
                  key={d}
                  className="px-2.5 py-1 rounded-xs bg-emerald-900 border border-amber-400/30 text-amber-200 text-[11px]"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Phone */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 font-serif uppercase tracking-widest">
              {urduMode ? 'رابطہ نمبر' : 'Phone & WhatsApp'}
            </h4>

            <div className="p-3.5 rounded-xs bg-emerald-900 border border-amber-400/40 space-y-2">
              <span className="text-[10px] text-emerald-200/70 uppercase tracking-wider block">Hotline & WhatsApp:</span>
              <a
                href="tel:03336418966"
                className="text-lg font-serif font-bold text-white hover:text-amber-300 block flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>0333 6418966</span>
              </a>

              <a
                href="https://wa.me/923336418966"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-300 hover:underline flex items-center gap-1.5 pt-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-amber-300 text-emerald-900" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-emerald-300/60 leading-tight">
              [Shop Location & Market stall details available upon direct call / WhatsApp]
            </p>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div>
            © {new Date().getFullYear()} Noor-e-Madina Commission Shop. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-urdu text-sm">بارک اللہ فی تجارتکم</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-none bg-emerald-900 hover:bg-emerald-800 text-white border border-amber-400/40 transition-colors flex items-center gap-1.5 text-xs uppercase tracking-wider cursor-pointer"
              title="Scroll to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

