import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { OccasionsSection } from './components/OccasionsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { DateGuide } from './components/DateGuide';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { GoogleSheetsSyncModal } from './components/GoogleSheetsSyncModal';
import { DateProduct } from './types';
import { googleSheetsService } from './services/googleSheets';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [urduMode, setUrduMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<DateProduct | null>(null);
  const [prefilledProductForContact, setPrefilledProductForContact] = useState<string | undefined>(undefined);
  const [googleSheetsModalOpen, setGoogleSheetsModalOpen] = useState(false);
  const [isSheetsConnected, setIsSheetsConnected] = useState(false);

  useEffect(() => {
    // Check initial GIS & connection state
    googleSheetsService.initGis();
    setIsSheetsConnected(googleSheetsService.isConnected());
  }, []);

  const handleViewDates = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickInquiry = (product: DateProduct) => {
    // Format direct WhatsApp inquiry to 0333 6418966
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Noor-e-Madina Commission Shop,\n\nI am inquiring about the current price & rate for: *${product.name}*\nPlease provide fresh batch rates for 1kg / cartons. JazakAllah!`
    );
    window.open(`https://wa.me/923336418966?text=${text}`, '_blank');
  };

  const handleSelectProduct = (product: DateProduct) => {
    setSelectedProduct(product);
  };

  const handleOccasionClick = (title: string) => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendModalInquiry = (data: {
    productName: string;
    quantity: string;
    unit: string;
    occasion: string;
    notes: string;
  }) => {
    // Log to Google Sheets
    googleSheetsService.appendInquiry({
      timestamp: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
      fullName: 'Website Inquirer',
      phone: '0333 6418966 (Customer WhatsApp)',
      productName: data.productName,
      quantity: `${data.quantity} ${data.unit}`,
      occasion: data.occasion,
      notes: data.notes,
      status: 'Sent via Modal',
    });

    // Close modal
    setSelectedProduct(null);
  };

  return (
    <div className={`min-h-screen flex flex-col ${urduMode ? 'direction-rtl' : ''}`}>
      {/* Navigation Header */}
      <Header
        urduMode={urduMode}
        setUrduMode={setUrduMode}
        onOpenGoogleSheets={() => setGoogleSheetsModalOpen(true)}
        isSheetsConnected={isSheetsConnected}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          urduMode={urduMode}
          onViewDates={handleViewDates}
          onOpenInquiry={(prod) => {
            setPrefilledProductForContact(prod);
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Products Section */}
        <ProductsSection
          urduMode={urduMode}
          onSelectProduct={handleSelectProduct}
          onQuickInquiry={handleQuickInquiry}
        />

        {/* Ramadan & Islamic Occasions */}
        <OccasionsSection
          urduMode={urduMode}
          onSelectOccasion={handleOccasionClick}
        />

        {/* Why Choose Us */}
        <WhyChooseUs urduMode={urduMode} />

        {/* About Noor-e-Madina Commission Shop */}
        <AboutUs urduMode={urduMode} />

        {/* Date Selection & Sunnah Guide */}
        <DateGuide
          urduMode={urduMode}
          onSelectDateByName={(name) => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Contact Section */}
        <ContactSection
          urduMode={urduMode}
          prefilledProduct={prefilledProductForContact}
        />
      </main>

      {/* Footer */}
      <Footer urduMode={urduMode} />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar urduMode={urduMode} />

      {/* Floating Desktop WhatsApp Trigger */}
      <aside aria-label="Quick WhatsApp support" className="hidden lg:block fixed bottom-6 right-6 z-40">
        <a
          id="floating-desktop-whatsapp"
          href="https://wa.me/923336418966?text=Assalam-o-Alaikum,%20I%20am%20contacting%20Noor-e-Madina%20Commission%20Shop%20regarding%20dates."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-2xl hover:bg-[#1EBE5D] transition-all hover:scale-105 border-2 border-white/40"
          title="Direct WhatsApp with 0333 6418966"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-xs tracking-wide">0333 6418966</span>
        </a>
      </aside>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        urduMode={urduMode}
        onClose={() => setSelectedProduct(null)}
        onSendInquiry={handleSendModalInquiry}
      />

      {/* Google Sheets Sync Modal */}
      <GoogleSheetsSyncModal
        isOpen={googleSheetsModalOpen}
        onClose={() => {
          setGoogleSheetsModalOpen(false);
          setIsSheetsConnected(googleSheetsService.isConnected());
        }}
        urduMode={urduMode}
      />
    </div>
  );
}
