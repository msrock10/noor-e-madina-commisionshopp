import React from 'react';
import { Phone, MessageCircle, ArrowDown, Sparkles } from 'lucide-react';
import { BismillahHeader } from './IslamicDecorations';

import ajwaImg from '../assets/images/real_ajwa_dates_1788072872419.jpg';
import safawiImg from '../assets/images/real_safawi_dates_1788072892218.jpg';
import mabroomImg from '../assets/images/real_mabroom_dates_1788072907281.jpg';
import assortmentImg from '../assets/images/real_dates_assortment_1788072944600.jpg';

interface HeroProps {
  urduMode: boolean;
  onViewDates: () => void;
  onOpenInquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ urduMode, onViewDates, onOpenInquiry }) => {
  return (
    <section id="home" className="relative bg-[#FDFCF0] text-gray-900 border-b border-amber-200/50 overflow-hidden">
      {/* Geometric background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#064E3B 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        {/* Bismillah Header in elegant geometric frame */}
        <div className="mb-8">
          <BismillahHeader />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Geometric Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:border-r lg:border-amber-100/80 lg:pr-12">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-widest mb-4 rounded-xs w-fit border border-emerald-200">
              <span className="w-1.5 h-1.5 bg-amber-500 rotate-45 inline-block" />
              <span>
                {urduMode
                  ? 'مدینہ منورہ و خلیجی باغات سے منتخب شدہ — سن 1998 سے'
                  : 'Direct Commission Trading Since 1998'}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-emerald-900 leading-[1.12] mb-5 tracking-tight">
              {urduMode ? (
                <span className="font-urdu leading-relaxed text-emerald-900">
                  اعلیٰ معیار کی کھجوریں،<br />
                  <span className="text-amber-600 font-serif italic font-normal">قابلِ اعتماد سروس</span>
                </span>
              ) : (
                <>
                  Premium Dates,<br />
                  <span className="text-amber-600 italic font-normal">Trusted Quality</span>
                </>
              )}
            </h2>

            {/* Subtitle / Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {urduMode
                ? 'نورِ مدینہ کمیشن شاپ مدینہ منورہ اور سعودی عرب کی چیدہ کھجوریں براہِ راست آپ تک پہنچاتی ہے۔ رمضان، شادی، تقریبات اور گھریلو استعمال کے لیے تھوک و پرچون ریٹس۔'
                : 'Noor-e-Madina Commission Shop brings the finest harvest from Madina and across Saudi Arabia to your doorstep. Quality Khajoor for Ramadan, weddings, and every holy occasion.'}
            </p>

            {/* Geometric Action Buttons */}
            <div className="flex flex-wrap gap-3.5 mb-10">
              <button
                id="hero-view-dates-btn"
                onClick={onViewDates}
                className="bg-emerald-900 text-white px-7 py-3.5 rounded-none border-r-4 border-amber-500 font-bold text-xs sm:text-sm hover:bg-emerald-800 uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>{urduMode ? 'کھجوریں دیکھیں' : 'View Our Dates'}</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </button>

              <a
                id="hero-call-btn"
                href="tel:03336418966"
                className="border border-emerald-900 text-emerald-900 px-6 py-3.5 rounded-none font-bold text-xs sm:text-sm hover:bg-emerald-50 uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>0333 6418966</span>
              </a>

              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20am%20contacting%20Noor-e-Madina%20Commission%20Shop%20regarding%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 text-white px-5 py-3.5 rounded-none font-bold text-xs sm:text-sm hover:bg-emerald-900 uppercase tracking-wider transition-colors flex items-center gap-2 border-r-4 border-amber-400"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{urduMode ? 'واٹس ایپ' : 'WhatsApp Us'}</span>
              </a>
            </div>

            {/* Geometric Stats Bar */}
            <div className="pt-6 border-t border-amber-100 flex gap-10 sm:gap-14">
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-emerald-900 font-bold">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">
                  {urduMode ? 'تازہ اسٹاک' : 'Fresh Selection'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-emerald-900 font-bold">25+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">
                  {urduMode ? 'کھجوروں کی اقسام' : 'Date Varieties'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-emerald-900 font-bold">No. 1</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">
                  {urduMode ? 'دیانتدار کمیشن' : 'Trusted Shop'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Variety Showcase with Real Dates Photography */}
          <div className="lg:col-span-6 p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-emerald-950/5 border border-amber-100 rounded-xs self-center">
            {/* Card 1: Ajwa Madina */}
            <div className="bg-white rounded-xs overflow-hidden border border-amber-200/80 shadow-xs flex flex-col justify-between group hover:border-amber-500 transition-all">
              <div className="relative h-32 overflow-hidden bg-emerald-950/10">
                <img
                  src={ajwaImg}
                  alt="Ajwa Madina Dates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-2 right-2 text-[9px] bg-amber-500 text-emerald-950 px-2 py-0.5 font-bold uppercase tracking-wider">
                  King of Dates
                </span>
                <span className="absolute bottom-2 left-2.5 text-xs font-serif font-bold text-white tracking-wide">
                  Ajwa Madina (عجوة)
                </span>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1">
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  Soft, dark, wrinkled Sunnah favorite harvested directly from the blessed palm groves of Madina.
                </p>

                <a
                  href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20want%20to%20know%20the%20price%20for%20Ajwa%20Madina%20Dates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full py-1.5 bg-emerald-900 text-amber-300 text-[10px] font-bold uppercase tracking-widest text-center hover:bg-emerald-800 transition-colors block"
                >
                  Inquire Price
                </a>
              </div>
            </div>

            {/* Card 2: Safawi Dates */}
            <div className="bg-white rounded-xs overflow-hidden border border-amber-200/80 shadow-xs flex flex-col justify-between group hover:border-amber-500 transition-all">
              <div className="relative h-32 overflow-hidden bg-emerald-950/10">
                <img
                  src={safawiImg}
                  alt="Safawi Dates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-2 right-2 text-[9px] bg-emerald-900 text-amber-300 border border-amber-400/40 px-2 py-0.5 font-bold uppercase tracking-wider">
                  Madina Origin
                </span>
                <span className="absolute bottom-2 left-2.5 text-xs font-serif font-bold text-white tracking-wide">
                  Safawi Dates (صفاوي)
                </span>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1">
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  Fleshy, deep black-cherry dates with a rich chewy texture and sustained energy.
                </p>

                <a
                  href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20want%20to%20know%20the%20price%20for%20Safawi%20Dates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full py-1.5 border border-emerald-900 text-emerald-900 text-[10px] font-bold uppercase tracking-widest text-center hover:bg-emerald-50 transition-colors block"
                >
                  Inquire Price
                </a>
              </div>
            </div>

            {/* Card 3: Mabroom Premium */}
            <div className="bg-white rounded-xs overflow-hidden border border-amber-200/80 shadow-xs flex flex-col justify-between group hover:border-amber-500 transition-all">
              <div className="relative h-32 overflow-hidden bg-emerald-950/10">
                <img
                  src={mabroomImg}
                  alt="Mabroom Dates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-2 right-2 text-[9px] bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 font-bold uppercase tracking-wider">
                  Premium Gift
                </span>
                <span className="absolute bottom-2 left-2.5 text-xs font-serif font-bold text-white tracking-wide">
                  Mabroom Premium (مبروم)
                </span>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1">
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  Slender, bronze-red dates with a pleasant toffee chew. Ideal for hospitality and gifts.
                </p>

                <a
                  href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20want%20to%20know%20the%20price%20for%20Mabroom%20Dates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full py-1.5 border border-emerald-900 text-emerald-900 text-[10px] font-bold uppercase tracking-widest text-center hover:bg-emerald-50 transition-colors block"
                >
                  Inquire Price
                </a>
              </div>
            </div>

            {/* Card 4: Special Occasions Showcase */}
            <div className="bg-emerald-950 rounded-xs overflow-hidden border border-amber-400/40 text-white flex flex-col justify-between relative shadow-xs group">
              <div className="relative h-32 overflow-hidden bg-emerald-950">
                <img
                  src={assortmentImg}
                  alt="Special Occasions Dates Assortment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />
                <span className="absolute bottom-2 left-2.5 text-xs font-serif font-bold text-amber-300 tracking-wide">
                  Special Occasions
                </span>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1">
                <p className="text-xs text-emerald-100/80 leading-relaxed line-clamp-2">
                  Ramadan Iftar, Sehri, and Hajj/Umrah bulk commission lots at competitive rates.
                </p>

                <a
                  href="#occasions"
                  className="mt-3 flex items-center justify-between py-1.5 px-3 bg-emerald-900 hover:bg-emerald-800 border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <span>{urduMode ? 'تفصیلات دیکھیں' : 'View Occasions'}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

