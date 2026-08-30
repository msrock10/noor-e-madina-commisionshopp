import React, { useState } from 'react';
import { DateProduct } from '../types';
import { X, MessageCircle, Phone, CheckCircle2, MapPin } from 'lucide-react';

interface ProductDetailModalProps {
  product: DateProduct | null;
  urduMode: boolean;
  onClose: () => void;
  onSendInquiry: (data: { productName: string; quantity: string; unit: string; occasion: string; notes: string }) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  urduMode,
  onClose,
  onSendInquiry,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState('2');
  const [unit, setUnit] = useState('KG');
  const [occasion, setOccasion] = useState('Everyday Household & Sunnah');
  const [notes, setNotes] = useState('');

  const units = ['KG', 'Cartons (5kg)', 'Boxes (10kg)', 'Maund / Man (40kg Bulk)'];
  const occasions = [
    'Everyday Household & Sunnah',
    'Ramadan Iftar & Sehri',
    'Hajj / Umrah Tabarruk Gift',
    'Wedding & Nikkah Favors',
    'Religious Gathering / Khatam',
    'Wholesale / Commercial Supply',
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Noor-e-Madina Commission Shop,\n\nI want to inquire about the price and availability of:\n• Date Variety: ${product.name}\n• Quantity Required: ${quantity} ${unit}\n• Occasion: ${occasion}\n${notes ? `• Special Notes: ${notes}\n` : ''}\nPlease let me know your current commission rate and delivery details. JazakAllah!`
    );
    window.open(`https://wa.me/923336418966?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div
        className="relative bg-white w-full max-w-3xl rounded-xs overflow-hidden shadow-2xl border-2 border-amber-500/60 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-emerald-950/90 hover:bg-emerald-900 border border-amber-400/50 text-white p-2 rounded-xs transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-amber-300" />
        </button>

        {/* Modal Header Image Banner */}
        <div className="relative h-60 sm:h-68 bg-emerald-950">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent flex flex-col justify-end p-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-900 border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest w-fit mb-2 rounded-xs">
              <span className="w-1 h-1 bg-amber-400 rotate-45" />
              <span>{product.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm font-urdu text-amber-300 font-semibold mt-0.5">
              {product.urduName} ({product.arabicName})
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Origin & Key Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xs bg-[#FAF8ED] border border-amber-200/80">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Origin</span>
              <span className="text-xs sm:text-sm font-serif font-bold text-emerald-900 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                {product.origin}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Texture Profile</span>
              <span className="text-xs sm:text-sm font-serif font-bold text-emerald-900 block mt-0.5">
                {product.texture}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Sweetness & Flavor</span>
              <span className="text-xs sm:text-sm font-serif font-bold text-emerald-900 block mt-0.5">
                {product.sweetness}
              </span>
            </div>
          </div>

          {/* Detailed Descriptions */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800">
              About This Variety & Quality
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {product.description}
            </p>
            <p className="text-xs font-urdu text-emerald-950 bg-[#FAF8ED] p-3 rounded-xs border border-amber-200/80 leading-relaxed">
              {product.urduDescription}
            </p>
          </div>

          {/* Nutritional & Health Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-2.5">
              Nutritional Benefits & Sunnah Virtues
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {product.nutritionalHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xs bg-white border border-amber-200/80 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="text-xs font-medium text-emerald-950">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Inquiry & WhatsApp Generator Form */}
          <div className="border-t border-amber-100 pt-6">
            <div className="p-4 sm:p-5 rounded-xs bg-emerald-950 text-white border border-amber-400/40 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-amber-300 uppercase tracking-wider">
                    Direct Commission Price Inquiry
                  </h4>
                  <p className="text-xs text-emerald-100/80">
                    Rates are determined daily per fresh lot. Specify your quantity below:
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-amber-400 block uppercase tracking-widest font-bold">Hotline / WhatsApp</span>
                  <a href="tel:03336418966" className="text-xs sm:text-sm font-mono font-bold text-white hover:underline">
                    0333 6418966
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block mb-1">
                    Quantity Required
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-24 px-3 py-2 rounded-none bg-emerald-900 border border-amber-400/40 text-white text-xs sm:text-sm outline-none"
                    />
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-none bg-emerald-900 border border-amber-400/40 text-white text-xs sm:text-sm outline-none"
                    >
                      {units.map((u) => (
                        <option key={u} value={u} className="bg-emerald-950 text-white">
                          {u}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block mb-1">
                    Purpose / Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3 py-2 rounded-none bg-emerald-900 border border-amber-400/40 text-white text-xs sm:text-sm outline-none"
                  >
                    {occasions.map((o) => (
                      <option key={o} value={o} className="bg-emerald-950 text-white">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Buttons inside modal */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3 px-4 rounded-none bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950" />
                  <span>Send WhatsApp Inquiry to 0333 6418966</span>
                </button>

                <a
                  href="tel:03336418966"
                  className="py-3 px-5 rounded-none bg-emerald-900 hover:bg-emerald-800 border border-amber-400/50 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call 0333 6418966</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

