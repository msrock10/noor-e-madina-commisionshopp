import React from 'react';
import { OCCASIONS_DATA } from '../data/products';
import { Moon, Sun, Compass, HeartHandshake, Users, Gift, MessageCircle } from 'lucide-react';
import { IslamicDivider } from './IslamicDecorations';

interface OccasionsSectionProps {
  urduMode: boolean;
  onSelectOccasion: (occasionTitle: string) => void;
}

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({ urduMode, onSelectOccasion }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Moon':
        return <Moon className="w-5 h-5 text-amber-500" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-500" />;
      default:
        return <Gift className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="occasions" className="py-16 sm:py-20 bg-emerald-950 text-white relative border-b border-amber-500/20 overflow-hidden">
      {/* Subtle geometric dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-900 border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-3 rounded-xs">
            <span className="w-1.5 h-1.5 bg-amber-400 rotate-45" />
            <span>{urduMode ? 'مبارک ایام اور تقریبات' : 'Sacred Seasons & Celebrations'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {urduMode ? (
              <span className="font-urdu leading-relaxed text-amber-200">
                رمضان اور اسلامی تقریبات کے لیے کھجوریں
              </span>
            ) : (
              'Dates for Ramadan & Islamic Occasions'
            )}
          </h2>

          <p className="text-emerald-100/80 text-sm sm:text-base mt-2 leading-relaxed">
            {urduMode
              ? 'رمضان المبارک، سحری، افطار، حج و عمرہ کے تبرکات، شادی بیاہ اور محافل کے لیے خصوصی پیکیجنگ اور مناسب نرخ۔'
              : 'Whether preparing for holy Ramadan fasts, presenting pilgrim gifts, or distributing blessed treats at weddings and gatherings, we supply tailored cartons and premium lots.'}
          </p>

          <IslamicDivider />
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCCASIONS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-emerald-900/80 rounded-xs overflow-hidden border border-amber-400/30 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-colors group"
            >
              {/* Image banner */}
              <div className="relative h-44 overflow-hidden bg-emerald-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />

                <div className="absolute top-3 left-3 bg-emerald-950/90 p-2.5 rounded-xs border border-amber-400/50 shadow-xs">
                  {getIcon(item.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-serif font-bold text-amber-300">
                  {urduMode ? item.urduTitle : item.title}
                </h3>

                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  {urduMode ? item.urduDescription : item.description}
                </p>

                <div className="p-3 rounded-xs bg-emerald-950/80 border border-amber-400/20 text-xs">
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] block mb-0.5">
                    {urduMode ? 'تجویز کردہ اقسام:' : 'Recommended Varieties:'}
                  </span>
                  <span className="text-white font-medium">{item.idealDates}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 mt-auto">
                <a
                  href={`https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20want%20to%20inquire%20about%20dates%20for%20${encodeURIComponent(
                    item.title
                  )}%20from%20Noor-e-Madina%20Commission%20Shop.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-none bg-emerald-950 hover:bg-emerald-900 border-r-2 border-amber-400 text-amber-200 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-amber-300" />
                  <span>{urduMode ? 'اس تقریب کے لیے ریٹ معلوم کریں' : 'Inquire for This Occasion'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Orders Note */}
        <div className="mt-12 text-center p-6 rounded-xs bg-emerald-900 border border-amber-400/40 max-w-4xl mx-auto shadow-xs">
          <h4 className="text-base font-serif font-bold text-amber-300 mb-1 uppercase tracking-wider">
            {urduMode
              ? 'مساجد، مدارس اور رفاہی تقسیم کے لیے خصوصی تعاون'
              : 'Bulk Support for Mosques, Madrassahs, Charity & Corporate Distribution'}
          </h4>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl mx-auto mb-4">
            {urduMode
              ? 'رمضان المبارک اور دیگر اہم مواقع پر کلوگرام اور من (40 کلو) کے حساب سے مناسب کمیشن ریٹس پر کھجور دستیاب ہیں۔'
              : 'We provide custom packing in 1kg gift pouches, 5kg/10kg cartons, and 40kg (Maund) bulk bags with verified weights.'}
          </p>
          <a
            href="tel:03336418966"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-none bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
          >
            <span>Call Hotline: 0333 6418966</span>
          </a>
        </div>
      </div>
    </section>
  );
};

