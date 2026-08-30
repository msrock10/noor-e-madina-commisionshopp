import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Globe, Sparkles, Sheet } from 'lucide-react';

interface HeaderProps {
  urduMode: boolean;
  setUrduMode: (val: boolean) => void;
  onOpenGoogleSheets: () => void;
  isSheetsConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  urduMode,
  setUrduMode,
  onOpenGoogleSheets,
  isSheetsConnected,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home', urdu: 'مرکزی صفحہ' },
    { href: '#products', label: 'Products', urdu: 'کھجوروں کی اقسام' },
    { href: '#occasions', label: 'Occasions', urdu: 'رمضان و تقریبات' },
    { href: '#why-us', label: 'Why Us', urdu: 'ہمارا انتخاب' },
    { href: '#about', label: 'About', urdu: 'تعارف' },
    { href: '#contact', label: 'Contact', urdu: 'رابطہ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-200/60 shadow-xs">
      {/* Top Micro-Bar */}
      <div className="bg-[#064E3B] text-white text-[11px] py-1 px-4 sm:px-8 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-amber-200">
            <span className="inline-block w-1.5 h-1.5 bg-amber-400 rotate-45" />
            <span className="font-medium tracking-wider uppercase text-[10px]">
              {urduMode
                ? 'نورِ مدینہ کمیشن شاپ — اصلی مدینہ و سعودی کھجوریں'
                : 'Direct Commission Trading • Authentic Madina & Saudi Dates'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenGoogleSheets}
              className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-white bg-emerald-950/60 px-2.5 py-0.5 rounded-sm border border-amber-400/30 transition-colors"
              title="Google Sheets Inquiries Sync"
            >
              <Sheet className="w-3 h-3 text-emerald-400" />
              <span>{isSheetsConnected ? 'Sheets Connected' : 'Sync Google Sheets'}</span>
            </button>

            <button
              onClick={() => setUrduMode(!urduMode)}
              className="flex items-center gap-1 text-white hover:text-amber-300 text-[11px] font-medium transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{urduMode ? 'English' : 'اردو'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo & Geometric Diamond Emblem */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 bg-emerald-900 rounded-xs rotate-45 flex items-center justify-center border border-amber-400 shadow-xs group-hover:bg-emerald-800 transition-colors">
              <span className="text-amber-400 font-serif -rotate-45 font-bold text-xs tracking-tighter">
                NM
              </span>
            </div>
            <div>
              <h1 className="text-emerald-900 font-serif text-lg sm:text-xl font-bold tracking-tight uppercase leading-none">
                Noor-e-Madina
              </h1>
              <span className="text-amber-600 text-[11px] font-sans block leading-tight font-semibold tracking-wider uppercase mt-0.5">
                Commission Shop <span className="font-urdu text-emerald-800 font-normal lowercase ml-1">نورِ مدینہ</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-emerald-900">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-600 transition-colors relative py-1 hover:border-b-2 hover:border-amber-500"
              >
                {urduMode ? link.urdu : link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Block */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:03336418966"
              className="text-emerald-900 font-mono text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:text-amber-700 transition-colors px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>0333 6418966</span>
            </a>

            <a
              href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20am%20interested%20in%20dates%20(Khajoor)%20from%20Noor-e-Madina%20Commission%20Shop."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-emerald-900 transition-all uppercase tracking-tight flex items-center gap-1.5 shadow-xs border border-amber-400/30"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>{urduMode ? 'واٹس ایپ کریں' : 'WhatsApp Us'}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:03336418966"
              className="p-2 rounded-full bg-emerald-900 text-white text-xs"
              aria-label="Call"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-emerald-900 hover:bg-amber-100/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFCF0] border-t border-amber-200 px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-emerald-900 hover:text-amber-600 py-1"
              >
                {urduMode ? link.urdu : link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-amber-200 flex flex-col gap-2.5">
            <div className="text-center font-mono font-bold text-emerald-900 text-sm py-1">
              Hotline: 0333 6418966
            </div>
            <a
              href="https://wa.me/923336418966"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-800 text-white text-center rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

