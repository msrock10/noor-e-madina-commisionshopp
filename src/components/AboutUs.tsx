import React from 'react';
import { ShieldCheck, HeartHandshake, Phone, MessageCircle } from 'lucide-react';
import { PalmTreeEmblem } from './IslamicDecorations';

interface AboutUsProps {
  urduMode: boolean;
}

export const AboutUs: React.FC<AboutUsProps> = ({ urduMode }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAF8ED] relative border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual & Commission Emblem */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-xs overflow-hidden bg-emerald-950 border-2 border-amber-500/50 shadow-xs p-6 text-white text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-900 border-2 border-amber-400 flex items-center justify-center shadow-xs">
                <PalmTreeEmblem className="w-9 h-9 text-amber-400" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                  Commission Trading & Retail
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Noor-e-Madina Commission Shop
                </h3>
                <p className="text-xs font-urdu text-amber-200">
                  نورِ مدینہ کمیشن شاپ برائے کھجور
                </p>
              </div>

              <div className="p-4 rounded-xs bg-emerald-900/90 border border-amber-400/30 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-gray-300">Hotline / WhatsApp:</span>
                  <span className="font-mono font-bold text-amber-300">0333 6418966</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-gray-300">Specialization:</span>
                  <span className="font-semibold text-white">Madina & Saudi Dates</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Trading Model:</span>
                  <span className="font-semibold text-white">Retail & Commission Bulk</span>
                </div>
              </div>

              <div className="text-center pt-1">
                <a
                  href="tel:03336418966"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-none bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 0333 6418966</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Verifiable Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-900 text-[10px] font-bold uppercase tracking-widest mb-2 rounded-xs">
                <span className="w-1.5 h-1.5 bg-amber-500 rotate-45" />
                <span>{urduMode ? 'ہمارا تعارف و اصول' : 'About Our Business'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-900 tracking-tight">
                {urduMode ? (
                  <span className="font-urdu leading-relaxed">
                    نورِ مدینہ کمیشن شاپ کے بارے میں
                  </span>
                ) : (
                  'About Noor-e-Madina Commission Shop'
                )}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {urduMode
                ? 'نورِ مدینہ کمیشن شاپ کا بنیادی مقصد اپنے تمام گاہکوں کو اعلیٰ معیار کی تازہ کھجوریں، شفاف کمیشن نرخوں اور قابلِ اعتماد سروس کے ساتھ فراہم کرنا ہے۔ ہم براہِ راست معیاری باغات اور درآمدی ذرائع سے کھجوریں حاصل کر کے عام صارفین اور تاجروں تک پہنچاتے ہیں۔'
                : 'Noor-e-Madina Commission Shop is dedicated to providing quality dates (Khajoor) while serving customers with reliable products, competitive commission rates, and trustworthy service.'}
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {urduMode
                ? 'ہم دیانتدارانہ ناپ تول، مستند اقسام کی پہچان اور گاہکوں کے ساتھ مخلصانہ تعاون پر یقین رکھتے ہیں۔ چاہے آپ اپنے گھر کے لیے ایک کلو عجوہ لینا چاہیں یا مساجد اور شادی بیاہ کے لیے بڑے کارٹن، ہم ہمیشہ بہترین مشورہ اور خدمات پیش کرتے ہیں۔'
                : 'Our commission shop bridges authentic date producers and discerning buyers across Pakistan. We cater to retail families seeking blessed Sunnah dates for daily health and Ramadan, as well as institutional buyers organizing Hajj/Umrah return gifts, wedding Nikkah distributions, and community charity events.'}
            </p>

            {/* Clear Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xs bg-white border border-amber-200/70 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-emerald-900 font-serif font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Reliable & Inspected Lots</span>
                </div>
                <p className="text-xs text-gray-600">
                  Each batch is checked for skin cleanliness, proper moisture level, and authentic variety characteristics.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-white border border-amber-200/70 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-emerald-900 font-serif font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-emerald-700" />
                  <span>Competitive & Fair Rates</span>
                </div>
                <p className="text-xs text-gray-600">
                  Direct commission structure eliminates excessive markups, offering fair market prices for both small and bulk buyers.
                </p>
              </div>
            </div>

            {/* WhatsApp Quick CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20would%20like%20to%20learn%20more%20about%20Noor-e-Madina%20Commission%20Shop."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border-r-4 border-amber-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{urduMode ? 'واٹس ایپ پر بات چیت شروع کریں' : 'Connect via WhatsApp'}</span>
              </a>

              <span className="text-xs text-gray-600 font-medium">
                Official Hotline: <strong className="text-emerald-900 font-mono">0333 6418966</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

