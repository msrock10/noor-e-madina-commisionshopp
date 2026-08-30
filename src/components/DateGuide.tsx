import React, { useState } from 'react';
import { Sparkles, Heart, Shield, Check } from 'lucide-react';
import { IslamicDivider } from './IslamicDecorations';

interface DateGuideProps {
  urduMode: boolean;
  onSelectDateByName: (name: string) => void;
}

export const DateGuide: React.FC<DateGuideProps> = ({ urduMode, onSelectDateByName }) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'sunnah' | 'storage'>('comparison');

  const guideItems = [
    {
      name: 'Ajwa (عجوہ)',
      bestFor: 'Morning Sunnah & Healing',
      taste: 'Subtle sweet, smooth, prune-like',
      texture: 'Soft, fine wrinkling',
      color: 'Deep black with delicate white lines',
    },
    {
      name: 'Sukkari (سکری)',
      bestFor: 'Qahwah, Sweets & Children',
      taste: 'Rich honey & caramel sweetness',
      texture: 'Extra soft, buttery melt',
      color: 'Golden amber',
    },
    {
      name: 'Mabroom (مبروم)',
      bestFor: 'Formal Gifting & Tea Companion',
      taste: 'Refined, mild brown sugar',
      texture: 'Firm outer bite, toffee chew',
      color: 'Elongated bronze-red',
    },
    {
      name: 'Safawi (صفاوی)',
      bestFor: 'Ramadan Fasting & Energy',
      taste: 'Moist molasses & cherry notes',
      texture: 'Plump and fleshy chew',
      color: 'Dark brownish-black',
    },
  ];

  return (
    <section className="py-16 bg-[#FDFCF0] border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-900 text-[10px] font-bold uppercase tracking-widest mb-3 rounded-xs">
            <span className="w-1.5 h-1.5 bg-amber-500 rotate-45" />
            <span>{urduMode ? 'کھجوروں کی رہنمائی اور فوائد' : 'Buyer’s Guide & Knowledge'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-900 tracking-tight">
            {urduMode ? (
              <span className="font-urdu leading-relaxed">کھجور کے انتخاب کی رہنمائی</span>
            ) : (
              'How to Choose Your Date Variety'
            )}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
            {urduMode
              ? 'ہر کھجور کی اپنی منفرد مٹھاس، ساخت اور غذائی افادیت ہے۔ اپنی ضرورت کے مطابق درست انتخاب کیجیے۔'
              : 'Each date variety offers a unique texture, sweetness level, and traditional purpose.'}
          </p>

          <IslamicDivider />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'comparison'
                ? 'bg-emerald-900 text-white border-r-4 border-amber-500 shadow-xs'
                : 'bg-white text-emerald-900 hover:bg-emerald-50 border border-amber-200/60'
            }`}
          >
            {urduMode ? 'اقسام کا موازنہ' : 'Quick Variety Comparison'}
          </button>

          <button
            onClick={() => setActiveTab('sunnah')}
            className={`px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'sunnah'
                ? 'bg-emerald-900 text-white border-r-4 border-amber-500 shadow-xs'
                : 'bg-white text-emerald-900 hover:bg-emerald-50 border border-amber-200/60'
            }`}
          >
            {urduMode ? 'سنتِ نبوی ﷺ اور برکات' : 'Sunnah & Nutritional Virtues'}
          </button>

          <button
            onClick={() => setActiveTab('storage')}
            className={`px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'storage'
                ? 'bg-emerald-900 text-white border-r-4 border-amber-500 shadow-xs'
                : 'bg-white text-emerald-900 hover:bg-emerald-50 border border-amber-200/60'
            }`}
          >
            {urduMode ? 'کھجور کو محفوظ رکھنے کے طریقے' : 'Freshness & Storage Tips'}
          </button>
        </div>

        {/* Tab 1: Comparison Table */}
        {activeTab === 'comparison' && (
          <div className="overflow-x-auto rounded-xs border border-amber-200/80 shadow-xs bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-emerald-950 text-amber-300 font-serif">
                <tr>
                  <th className="p-3.5 sm:p-4 uppercase tracking-wider text-xs">Variety</th>
                  <th className="p-3.5 sm:p-4 uppercase tracking-wider text-xs">Best Suited For</th>
                  <th className="p-3.5 sm:p-4 uppercase tracking-wider text-xs">Flavor Profile</th>
                  <th className="p-3.5 sm:p-4 uppercase tracking-wider text-xs">Texture & Color</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                {guideItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-serif font-bold text-emerald-900 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">
                      {item.bestFor}
                    </td>
                    <td className="p-3.5 sm:p-4 text-gray-600">
                      {item.taste}
                    </td>
                    <td className="p-3.5 sm:p-4 text-gray-600">
                      {item.texture} • <span className="text-amber-700 font-medium">{item.color}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Sunnah & Health */}
        {activeTab === 'sunnah' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xs bg-emerald-950 text-white border border-amber-400/40 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-amber-400">
                <Heart className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold">Sunnah of Ajwa & Fasting</h3>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Dates hold profound reverence in Islamic tradition. Breaking the fast with dates restores vital electrolytes and balances blood glucose gently without overburdening the digestive system.
              </p>
              <div className="p-3 rounded-xs bg-emerald-900 border border-amber-400/30 text-xs text-amber-200">
                "Whoever begins their day with seven Ajwa dates will not be harmed on that day by poison or magic." (Sahih Bukhari)
              </div>
            </div>

            <div className="p-6 rounded-xs bg-white border border-amber-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-900">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-serif font-bold">Natural Wholesome Nutrition</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Natural Electrolytes:</strong> High in potassium, magnesium, and calcium.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Digestive Fiber:</strong> Supports smooth digestion and satiety during fasting.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Zero Refined Sugar:</strong> Pure fruit glucose and fructose for steady vitality.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Storage */}
        {activeTab === 'storage' && (
          <div className="p-6 rounded-xs bg-white border border-amber-200/80 shadow-xs space-y-4 max-w-3xl mx-auto">
            <h3 className="text-lg font-serif font-bold text-emerald-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-600" />
              <span>Keeping Your Dates Tender & Fresh</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-700">
              <div className="p-3 bg-[#FDFCF0] rounded-xs border border-amber-200">
                <strong className="block text-emerald-900 mb-1">Room Temperature:</strong>
                <span>Store in an airtight container away from direct sunlight for up to 1-2 months.</span>
              </div>
              <div className="p-3 bg-[#FDFCF0] rounded-xs border border-amber-200">
                <strong className="block text-emerald-900 mb-1">Refrigeration (Best):</strong>
                <span>Preserves natural moisture and softness for 6 to 12 months in sealed packs.</span>
              </div>
              <div className="p-3 bg-[#FDFCF0] rounded-xs border border-amber-200">
                <strong className="block text-emerald-900 mb-1">Bulk Freezing:</strong>
                <span>Dates freeze exceptionally well without loss of texture for up to 2 years.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

