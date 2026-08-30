import React, { useState, useMemo } from 'react';
import { DateProduct } from '../types';
import { DATE_PRODUCTS } from '../data/products';
import { Search, Filter, MessageCircle, Info, Check, Sparkles } from 'lucide-react';
import { IslamicDivider } from './IslamicDecorations';

interface ProductsSectionProps {
  urduMode: boolean;
  onSelectProduct: (product: DateProduct) => void;
  onQuickInquiry: (product: DateProduct) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  urduMode,
  onSelectProduct,
  onQuickInquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Varieties', urdu: 'تمام اقسام' },
    { id: 'madina', label: 'Madina Specials (عجوہ و مدینہ)', urdu: 'مدینہ منورہ خاص' },
    { id: 'sweet', label: 'Soft & Sweet (سکری وغیرہ)', urdu: 'نرم و شیریں' },
    { id: 'firm', label: 'Slender & Chewy (مبروم)', urdu: 'مبروم و کلمی' },
    { id: 'premium', label: 'Premium Saudi Jumbo', urdu: 'سعودی پریمیم' },
    { id: 'seasonal', label: 'Seasonal Varieties', urdu: 'موسمی ورائٹی' },
  ];

  const filteredProducts = useMemo(() => {
    return DATE_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.urduName.includes(q) ||
        product.arabicName.includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.flavorProfile.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FDFCF0] relative border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Geometric Balance styling */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-900 text-[10px] font-bold uppercase tracking-widest mb-3 rounded-xs">
            <span className="w-1.5 h-1.5 bg-amber-500 rotate-45" />
            <span>{urduMode ? 'کھجوروں کا وسیع ذخیرہ' : 'Direct Commission Selection'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-900 tracking-tight">
            {urduMode ? (
              <span className="font-urdu leading-relaxed">ہماری معیاری کھجوریں</span>
            ) : (
              'Our Premium Dates Collection'
            )}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            {urduMode
              ? 'مدینہ منورہ اور خلیجی باغات سے منتخب شدہ درجہ اول کی تازہ کھجوریں۔ ریٹس اور آرڈر کی معلومات کے لیے براہِ راست رابطہ کریں۔'
              : 'Directly sourced authentic varieties with preserved moisture, pristine natural flavor, and quality inspection.'}
          </p>

          <IslamicDivider />
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-white rounded-xs p-4 sm:p-5 shadow-xs border border-amber-200/60 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-emerald-800/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="search-dates-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={urduMode ? 'کھجور کا نام تلاش کریں (مثلاً عجوہ، سکری)...' : 'Search dates (e.g. Ajwa, Safawi, Sukkari)...'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xs border border-amber-200 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 outline-none text-xs sm:text-sm text-gray-800 transition-all bg-[#FDFCF0]/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 md:pb-0 no-scrollbar">
              <Filter className="w-4 h-4 text-amber-600 shrink-0 hidden sm:block ml-1" />
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xs text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-emerald-900 text-white shadow-xs border border-amber-400'
                        : 'bg-[#FDFCF0] text-emerald-900 hover:bg-emerald-50 border border-amber-200/60'
                    }`}
                  >
                    <span>{urduMode ? cat.urdu : cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xs border border-dashed border-amber-200 p-8">
            <p className="text-gray-500 font-medium text-base">
              {urduMode ? 'کوئی کھجور دستیاب نہیں برائے نام: ' : 'No date varieties match your search for: '} "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs"
            >
              {urduMode ? 'تمام ورائٹی دکھائیں' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const monogramLetter = product.name.charAt(0);
              return (
                <div
                  key={product.id}
                  id={`card-${product.id}`}
                  className="bg-white rounded-xs overflow-hidden border border-amber-200/70 shadow-xs card-geometric-hover flex flex-col justify-between group"
                >
                  {/* Top Image & Monogram Badge Container */}
                  <div>
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-emerald-950/10">
                      <img
                        src={product.imageUrl}
                        alt={`${product.name} - Noor-e-Madina`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Monogram Badge + Pill Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/95 text-emerald-900 font-serif font-bold italic text-sm flex items-center justify-center shadow-xs border border-amber-300">
                          {monogramLetter}
                        </div>
                        <span className="bg-emerald-900/90 backdrop-blur-xs text-amber-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-amber-400/30">
                          {product.badge.split('•')[0]}
                        </span>
                      </div>

                      {/* Detail Info Modal Trigger */}
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white text-emerald-900 p-2 rounded-full shadow-xs transition-all"
                        title="View Details"
                        aria-label="View product details"
                      >
                        <Info className="w-3.5 h-3.5" />
                      </button>

                      {/* Origin banner */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent p-2.5 text-white">
                        <span className="text-[10px] font-semibold text-amber-200 block truncate uppercase tracking-wider">
                          📍 {product.origin}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      <div>
                        <h3 className="text-base sm:text-lg font-serif font-bold text-emerald-900 group-hover:text-amber-700 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-amber-700 font-urdu font-semibold">
                          {product.urduName}
                        </p>
                      </div>

                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {urduMode ? product.urduDescription : product.description}
                      </p>

                      {/* Highlights tags */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {product.nutritionalHighlights.slice(0, 2).map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-900 border border-emerald-200/60"
                          >
                            <Check className="w-2.5 h-2.5 mr-1 text-amber-600" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 sm:p-5 pt-0 mt-auto border-t border-amber-100 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-gray-500 pb-1 pt-2 uppercase tracking-widest font-bold">
                      <span className="text-amber-700">Commission Stock</span>
                      <span>1kg / Carton</span>
                    </div>

                    {/* Geometric "Contact for Price" button */}
                    <button
                      id={`contact-price-btn-${product.id}`}
                      onClick={() => onQuickInquiry(product)}
                      className="w-full py-2.5 px-3 bg-emerald-900 text-white hover:bg-emerald-800 text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 rounded-none border-r-2 border-amber-400 shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>{urduMode ? 'قیمت معلوم کریں' : 'Contact for Price'}</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-1 text-center text-[11px] font-bold text-emerald-900 hover:text-amber-700 uppercase tracking-wider"
                    >
                      {urduMode ? 'تفصیلات دیکھیں →' : 'View Specs →'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Notice Banner */}
        <div className="mt-12 p-5 rounded-xs bg-emerald-900 text-white border border-amber-400/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xs bg-emerald-950 border border-amber-400 flex items-center justify-center shrink-0 rotate-45">
              <Sparkles className="w-4 h-4 text-amber-400 -rotate-45" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-amber-300 uppercase tracking-wider">
                {urduMode
                  ? 'کمیشن مارکیٹ ریٹس روزانہ تبدیل ہوتے ہیں'
                  : 'Daily Commission Market Rates Policy'}
              </h4>
              <p className="text-xs text-emerald-100/80 mt-0.5">
                {urduMode
                  ? 'تازہ ترین امپورٹ اور ہول سیل ریٹ معلوم کرنے کے لیے ہمارے نمبر پر کال یا واٹس ایپ کریں۔'
                  : 'Call or WhatsApp 0333 6418966 directly for fresh lot rates, bulk packaging, and special Ramadan bookings.'}
              </p>
            </div>
          </div>

          <a
            href="tel:03336418966"
            className="shrink-0 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none transition-colors"
          >
            Call 0333 6418966
          </a>
        </div>
      </div>
    </section>
  );
};

