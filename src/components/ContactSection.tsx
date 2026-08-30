import React, { useState } from 'react';
import { Phone, MessageCircle, Send, MapPin, Clock, Share2, CheckCircle2 } from 'lucide-react';
import { DATE_PRODUCTS } from '../data/products';
import { IslamicDivider } from './IslamicDecorations';
import { googleSheetsService, SheetInquiryRecord } from '../services/googleSheets';

interface ContactSectionProps {
  urduMode: boolean;
  prefilledProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ urduMode, prefilledProduct }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    selectedProduct: prefilledProduct || 'Ajwa Dates (عجوة)',
    quantity: '2',
    unit: 'KG',
    occasion: 'Ramadan / Household',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const units = ['KG', '5 KG Carton', '10 KG Box', '40 KG Maund (Bulk)'];
  const occasions = [
    'Ramadan Iftar & Sehri',
    'Everyday Sunnah & Health',
    'Hajj / Umrah Return Gifts',
    'Wedding & Nikkah Favors',
    'Khatam / Religious Gathering',
    'Wholesale / Commercial Lot',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const record: SheetInquiryRecord = {
      timestamp: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
      fullName: formData.fullName || 'Customer',
      phone: formData.phone || '0333 6418966',
      productName: formData.selectedProduct,
      quantity: `${formData.quantity} ${formData.unit}`,
      occasion: formData.occasion,
      notes: formData.message || 'Direct Website Inquiry',
      status: 'Submitted via Website Form',
    };

    // Save to Google Sheets or Local Inquiries
    try {
      await googleSheetsService.appendInquiry(record);
    } catch (err) {
      console.warn('Google Sheets logging:', err);
    }

    // Format WhatsApp message to 0333 6418966
    const waText = encodeURIComponent(
      `Assalam-o-Alaikum Noor-e-Madina Commission Shop,\n\nI would like to place an inquiry for dates:\n` +
      `• Name: ${formData.fullName || 'Customer'}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Date Variety: ${formData.selectedProduct}\n` +
      `• Quantity: ${formData.quantity} ${formData.unit}\n` +
      `• Occasion: ${formData.occasion}\n` +
      (formData.message ? `• Note: ${formData.message}\n` : '') +
      `\nPlease provide the latest commission rates and availability. JazakAllah!`
    );

    setIsSubmitting(false);
    setSubmittedSuccess(true);

    // Open WhatsApp chat
    window.open(`https://wa.me/923336418966?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-emerald-950 text-white relative border-b border-amber-500/20 overflow-hidden">
      {/* Subtle geometric dot grid background */}
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
            <span>{urduMode ? 'براہِ راست رابطہ اور آرڈر' : 'Direct Inquiry & Commission Orders'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {urduMode ? (
              <span className="font-urdu leading-relaxed text-amber-200">
                ہم سے رابطہ کریں — 0333 6418966
              </span>
            ) : (
              'Contact Noor-e-Madina Commission Shop'
            )}
          </h2>

          <p className="text-emerald-100/80 text-sm sm:text-base mt-2 leading-relaxed">
            {urduMode
              ? 'کھجور کی قیمت، تازہ اسٹاک کی دستیابی اور کارٹن آرڈر کے لیے ہمہ وقت کال یا واٹس ایپ پر دستیاب۔'
              : 'Direct communication for retail inquiries, daily commission market rates, and bulk event bookings.'}
          </p>

          <IslamicDivider />
        </div>

        {/* Large Prominent Phone Call & WhatsApp Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-xs bg-emerald-900 border border-amber-400/50 shadow-xs text-center space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
            Official Commission Shop Hotline & WhatsApp
          </span>

          <div className="text-3xl sm:text-5xl font-serif font-bold tracking-wider text-white">
            0333 6418966
          </div>

          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl mx-auto leading-relaxed">
            {urduMode
              ? 'کال ملائیں یا واٹس ایپ پر پیغام بھیجیں۔ ہم جلد از جلد آپ کو تازہ ترین ریٹس اور تفصیلات فراہم کریں گے۔'
              : 'Direct line to our commission shop for price quotations, weight verification, and order confirmation.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              id="contact-call-btn"
              href="tel:03336418966"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-emerald-950 hover:bg-emerald-900 text-white border border-amber-400 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call 0333 6418966</span>
            </a>

            <a
              id="contact-whatsapp-btn"
              href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20am%20contacting%20Noor-e-Madina%20Commission%20Shop%20to%20inquire%20about%20dates%20availability%20and%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950" />
              <span>WhatsApp: 0333 6418966</span>
            </a>
          </div>
        </div>

        {/* Two Column Layout: Form & Business Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact & Price Inquiry Form */}
          <div className="lg:col-span-7 bg-emerald-900/90 p-6 sm:p-8 rounded-xs border border-amber-400/30 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-300 flex items-center gap-2">
                <Send className="w-4 h-4 text-amber-400" />
                <span>{urduMode ? 'قیمت و آرڈر معلوماتی فارم' : 'Send a Price & Booking Inquiry'}</span>
              </h3>
              <p className="text-xs text-emerald-100/80 mt-1">
                Fill this form to automatically initiate a WhatsApp inquiry and log your request.
              </p>
            </div>

            {submittedSuccess ? (
              <div className="p-6 rounded-xs bg-emerald-950 border border-amber-400 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                <h4 className="text-base font-serif font-bold text-white">Inquiry Generated!</h4>
                <p className="text-xs text-emerald-100/80">
                  WhatsApp has opened with your selected date specifications. If WhatsApp did not open automatically, you can message us directly at <strong>0333 6418966</strong>.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="px-4 py-2 bg-emerald-900 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-none border border-amber-400/40"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-amber-300 font-bold uppercase tracking-wider text-[10px] block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Muhammad Ali"
                      className="w-full px-3.5 py-2.5 rounded-none bg-emerald-950 border border-amber-400/30 text-white placeholder-emerald-300/40 focus:border-amber-400 outline-none text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-amber-300 font-bold uppercase tracking-wider text-[10px] block mb-1">
                      Your Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-3.5 py-2.5 rounded-none bg-emerald-950 border border-amber-400/30 text-white placeholder-emerald-300/40 focus:border-amber-400 outline-none text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-amber-300 font-bold uppercase tracking-wider text-[10px] block mb-1">
                      Select Date Variety
                    </label>
                    <select
                      value={formData.selectedProduct}
                      onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none bg-emerald-950 border border-amber-400/30 text-white focus:border-amber-400 outline-none text-xs sm:text-sm"
                    >
                      {DATE_PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name} className="bg-emerald-950 text-white">
                          {prod.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-amber-300 font-bold uppercase tracking-wider text-[10px] block mb-1">
                      Quantity
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-20 px-3 py-2.5 rounded-none bg-emerald-950 border border-amber-400/30 text-white outline-none text-xs sm:text-sm"
                      />
                      <select
                        value={formData.unit}
                        onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                        className="flex-1 px-3 py-2.5 rounded-none bg-emerald-950 border border-amber-400/30 text-white outline-none text-xs sm:text-sm"
                      >
                        {units.map((u) => (
                          <option key={u} value={u} className="bg-emerald-950 text-white">
                            {u}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-amber-300 font-bold uppercase tracking-wider text-[10px] block mb-1">
                    Occasion / Purpose
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-none bg-emerald-950 border border-amber-400/30 text-white focus:border-amber-400 outline-none text-xs sm:text-sm"
                  >
                    {occasions.map((occ) => (
                      <option key={occ} value={occ} className="bg-emerald-950 text-white">
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-amber-300 font-bold uppercase tracking-wider text-[10px] block mb-1">
                    Additional Notes / Specific Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Inquiring about delivery, carton packaging, or bulk Maund rates for Ramadan..."
                    className="w-full px-3.5 py-2.5 rounded-none bg-emerald-950 border border-amber-400/30 text-white placeholder-emerald-300/40 focus:border-amber-400 outline-none resize-none text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-none bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950" />
                  <span>Send Inquiry via WhatsApp to 0333 6418966</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Clearly Marked Placeholders & Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Shop Location Placeholder */}
            <div className="p-6 rounded-xs bg-emerald-900/90 border border-amber-400/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-300">
                <MapPin className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-serif font-bold uppercase tracking-wider">
                  Business Location & Commission Market
                </h4>
              </div>

              <div className="p-3.5 rounded-xs bg-emerald-950 border border-dashed border-amber-400/40 text-xs text-emerald-100/80 space-y-1">
                <span className="font-bold text-amber-400 block text-[10px] uppercase tracking-widest">
                  [Business Location Placeholder]
                </span>
                <p className="leading-relaxed">
                  Noor-e-Madina Commission Shop (Dates & Khajoor Wholesale/Retail). Specific market address, mandi stall number, and directions provided directly upon phone / WhatsApp contact at <strong>0333 6418966</strong>.
                </p>
              </div>
            </div>

            {/* Business Hours Placeholder */}
            <div className="p-6 rounded-xs bg-emerald-900/90 border border-amber-400/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-serif font-bold uppercase tracking-wider">
                  Business & Inquiry Timings
                </h4>
              </div>

              <div className="p-3.5 rounded-xs bg-emerald-950 border border-dashed border-amber-400/40 text-xs text-emerald-100/80 space-y-2">
                <span className="font-bold text-amber-400 block text-[10px] uppercase tracking-widest">
                  [Business Hours Placeholder]
                </span>
                <ul className="space-y-1 text-emerald-100/90">
                  <li className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-bold text-white">Morning to Evening</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-bold text-white">Open (Break for Juma Prayer)</span>
                  </li>
                  <li className="flex justify-between text-amber-300">
                    <span>Ramadan Season:</span>
                    <span className="font-bold">Extended 7-Day Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Channels Placeholder */}
            <div className="p-6 rounded-xs bg-emerald-900/90 border border-amber-400/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-300">
                <Share2 className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-serif font-bold uppercase tracking-wider">
                  Official Channels & Updates
                </h4>
              </div>

              <div className="p-3.5 rounded-xs bg-emerald-950 border border-dashed border-amber-400/40 text-xs text-emerald-100/80 space-y-1">
                <span className="font-bold text-amber-400 block text-[10px] uppercase tracking-widest">
                  [Social Media Placeholders]
                </span>
                <p className="text-emerald-200/70 leading-relaxed">
                  Official social media profiles (Facebook, Instagram, YouTube) will be linked here once officially announced. For all active inquiries, kindly reach out directly on WhatsApp: <strong>0333 6418966</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

