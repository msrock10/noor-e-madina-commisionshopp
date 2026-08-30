import React from 'react';
import { WHY_CHOOSE_US } from '../data/products';
import { Sparkles, ShieldCheck, Layers, BadgePercent, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { IslamicDivider } from './IslamicDecorations';

interface WhyChooseUsProps {
  urduMode: boolean;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ urduMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-500" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FDFCF0] relative border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-900 text-[10px] font-bold uppercase tracking-widest mb-3 rounded-xs">
            <span className="w-1.5 h-1.5 bg-amber-500 rotate-45" />
            <span>{urduMode ? 'ہمارے بنیادی اوصاف' : 'Our Core Commitment'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-900 tracking-tight">
            {urduMode ? (
              <span className="font-urdu leading-relaxed">نورِ مدینہ کمیشن شاپ کا انتخاب کیوں؟</span>
            ) : (
              'Why Choose Noor-e-Madina'
            )}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
            {urduMode
              ? 'دیانتداری، شفاف کمیشن اور اعلیٰ معیار کی فراہمی ہمارا نصب العین ہے۔'
              : 'Built on integrity, verified freshness, fair commission trading, and dedicated customer care.'}
          </p>

          <IslamicDivider />
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xs p-6 border border-amber-200/70 shadow-xs card-geometric-hover flex flex-col items-start space-y-3.5 group"
            >
              <div className="w-11 h-11 rounded-xs bg-emerald-950 border border-amber-400 flex items-center justify-center shadow-xs group-hover:bg-emerald-900 transition-colors">
                {getIcon(item.icon)}
              </div>

              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-serif font-bold text-emerald-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-urdu font-semibold text-amber-700">
                  {item.urduTitle}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

