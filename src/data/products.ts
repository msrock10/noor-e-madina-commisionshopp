import { DateProduct, OccasionItem } from '../types';

import ajwaImg from '../assets/images/real_ajwa_dates_1788072872419.jpg';
import safawiImg from '../assets/images/real_safawi_dates_1788072892218.jpg';
import mabroomImg from '../assets/images/real_mabroom_dates_1788072907281.jpg';
import sukkariImg from '../assets/images/real_sukkari_dates_1788072925320.jpg';
import kalmiImg from '../assets/images/real_kalmi_dates_1788072968147.jpg';
import assortmentImg from '../assets/images/real_dates_assortment_1788072944600.jpg';
import ramadanImg from '../assets/images/real_ramadan_dates_1788072984818.jpg';

export const DATE_PRODUCTS: DateProduct[] = [
  {
    id: 'ajwa-dates',
    name: 'Ajwa Dates (عجوة)',
    urduName: 'عجوہ کھجور (مدینہ منورہ)',
    arabicName: 'عجوة المدينة',
    origin: 'Madina Al-Munawwarah, Saudi Arabia',
    category: 'madina',
    badge: 'Holy City Blessing • Sunnah Favorite',
    texture: 'Soft, Fine wrinkled skin with delicate melt',
    sweetness: 'Moderate & balanced natural sweetness',
    flavorProfile: 'Smooth prune notes with subtle hints of cinnamon',
    recommendedFor: ['Morning Sunnah', 'Cardiovascular health', 'Daily protection', 'Tabarruk gift'],
    description: 'Revered globally and harvested directly from the blessed palm groves of Madina Munawwarah. Ajwa is rich in antioxidants, minerals, and dietary fiber with deep dark hue and white natural striations.',
    urduDescription: 'مدینہ منورہ کے مبارک باغات سے خاص چنیدہ اصلی عجوہ کھجور۔ سنتِ نبوی ﷺ کے مطابق روزانہ صبح نہار منہ استعمال اور ہدیہ دینے کے لیے بہترین۔',
    imageUrl: ajwaImg,
    popularFor: 'Sunnah consumption & Tabarruk',
    nutritionalHighlights: ['High in Iron & Potassium', 'Natural Polyphenols', 'Zero Added Sugars', 'Fiber Rich']
  },
  {
    id: 'safawi-dates',
    name: 'Safawi Dates (صفاوي)',
    urduName: 'صفاوی کھجور',
    arabicName: 'تمر صفاوي',
    origin: 'Madina Region, Saudi Arabia',
    category: 'madina',
    badge: 'Deep Black • Nutrient Powerhouse',
    texture: 'Moist, delightfully chewy and fleshy',
    sweetness: 'Rich caramel sweetness without being overwhelming',
    flavorProfile: 'Deep molasses and dried cherry undertones',
    recommendedFor: ['Ramadan Iftar', 'Energy boost', 'Post-workout recovery', 'Family consumption'],
    description: 'Renowned for its dark blackish-cherry color, substantial meatiness, and long shelf life. Safawi dates from Madina provide sustained natural vitality and delicious everyday sweetness.',
    urduDescription: 'گہرے سیاہ رنگ، نرم اور گوشت دار صفاوی کھجور۔ رمضان المبارک میں افطار اور روزمرہ جسمانی توانائی کی بحالی کے لیے انتہائی پسندیدہ۔',
    imageUrl: safawiImg,
    popularFor: 'Ramadan Sehri & Iftar staple',
    nutritionalHighlights: ['Rich in Magnesium', 'Sustained Energy', 'Digestive Health', 'Vital Minerals']
  },
  {
    id: 'mabroom-dates',
    name: 'Mabroom Dates (مبروم)',
    urduName: 'مبروم کھجور',
    arabicName: 'تمر مبروم',
    origin: 'Madina Al-Munawwarah, Saudi Arabia',
    category: 'firm',
    badge: 'Slender & Elegant • Premium Grade',
    texture: 'Firm outer bite with a satisfying toffee-like chew',
    sweetness: 'Mild, refined and subtle caramel',
    flavorProfile: 'Pleasantly nutty with toasted brown sugar notes',
    recommendedFor: ['Tea accompaniment', 'Wedding gift boxes', 'Long storage', 'Light snacking'],
    description: 'Easily recognized by their distinctive elongated shape and bronzed golden-red skin. Mabroom is neither overly sweet nor sticky, making it a sophisticated favorite among connoisseurs.',
    urduDescription: 'خوبصورت لمبوتری ساخت اور دلکش سرخی مائل رنگت۔ نرم چبانے والی اور متوازن مٹھاس کے ساتھ مہمان نوازی اور تقریبات کے لیے پرفیکٹ۔',
    imageUrl: mabroomImg,
    popularFor: 'High-end hospitality & corporate gifting',
    nutritionalHighlights: ['Low Glycemic Load', 'Loaded with Zinc & Calcium', 'Excellent shelf life', 'High Fiber']
  },
  {
    id: 'sukkari-dates',
    name: 'Sukkari Dates (سكري)',
    urduName: 'سکری کھجور (سفید / نرم)',
    arabicName: 'تمر سكري فاخر',
    origin: 'Al-Qassim / Saudi Arabia',
    category: 'sweet',
    badge: 'Golden Amber • Melt in Mouth',
    texture: 'Extra soft, tender and naturally creamy',
    sweetness: 'Decadent honey-like natural sweetness',
    flavorProfile: 'Creamy butterscotch and wild flower honey essence',
    recommendedFor: ['Children & elders', 'Coffee & Qahwah pairing', 'Natural sweetener', 'Desserts'],
    description: 'The celebrated "Sweet One" of Saudi Arabia. With its luscious golden amber tone, Sukkari melts effortlessly on the tongue, delivering natural energy and wholesome indulgence.',
    urduDescription: 'سنہری رنگت اور مکھن جیسی نرم ملائم سکری کھجور۔ شہد جیسی قدرتی مٹھاس جو قہوہ اور چائے کے ساتھ بے حد لذیذ لگتی ہے۔',
    imageUrl: sukkariImg,
    popularFor: 'Arabic Qahwah & quick morning energy',
    nutritionalHighlights: ['Rich in Potassium', 'Instant Energy', 'Easily Digestible', 'Vitamin B Complex']
  },
  {
    id: 'kalmi-dates',
    name: 'Kalmi Dates (کلمی)',
    urduName: 'کلمی کھجور',
    arabicName: 'تمر كلمي',
    origin: 'Saudi Arabia',
    category: 'madina',
    badge: 'Rich Texture • Superb Everyday Value',
    texture: 'Succulent, dense flesh with velvety smooth skin',
    sweetness: 'Harmonious deep sweetness',
    flavorProfile: 'Rich dates essence with dark fruit nuances',
    recommendedFor: ['Daily nutrition', 'Bulk community events', 'Sehri meals', 'Milk shakes'],
    description: 'A prized variety with thick, succulent pulp and high moisture content. Kalmi dates offer remarkable value and robust natural nutrition for the entire family.',
    urduDescription: 'گوشت دار، تازہ اور غذائیت سے بھرپور کلمی کھجور۔ روزمرہ گھریلو استعمال، دودھ شیک اور رمضان المبارک کے لیے بہترین انتخاب۔',
    imageUrl: kalmiImg,
    popularFor: 'Family health & bulk gathering distribution',
    nutritionalHighlights: ['High Iron content', 'Essential Amino Acids', 'Heart Friendly', 'Muscle recovery']
  },
  {
    id: 'madina-dates',
    name: 'Madina Special Assortment (کھجور مدینہ)',
    urduName: 'خاص مدینہ کھجور سلیکشن',
    arabicName: 'تشكيلة تمور المدينة',
    origin: 'Madina Munawwarah, Saudi Arabia',
    category: 'madina',
    badge: 'Traditional Harvest • Pure Blessed Origin',
    texture: 'Varied hand-selected assortment (soft to medium-firm)',
    sweetness: 'Balanced spectrum of natural flavours',
    flavorProfile: 'Authentic Saudi palm grove profile',
    recommendedFor: ['Umrah / Hajj welcome gifts', 'Religious gatherings', 'Milad & Khatam', 'Family sharing'],
    description: 'Curated directly from Madina commission harvests. Every lot is inspected for consistent size, clean skin, and uncompromised freshness for domestic and commercial buyers.',
    urduDescription: 'مدینہ منورہ سے درآمد شدہ خصوصی سلیکشن۔ صاف ستھری اور معیاری کھجوریں جو مذہبی محافل اور ہدیہ جات کے لیے تیار کی گئی ہیں۔',
    imageUrl: assortmentImg,
    popularFor: 'Hajj & Umrah Tabarruk packs',
    nutritionalHighlights: ['Authentic Origin Assured', 'Clean Hygienic Packaging', '100% Sun Dried', 'No Preservatives']
  },
  {
    id: 'premium-saudi-dates',
    name: 'Premium Saudi Dates (سعودی سپیشل)',
    urduName: 'پریمیم سعودی امپورٹڈ کھجور',
    arabicName: 'تمور سعودية فاخرة',
    origin: 'Kingdom of Saudi Arabia',
    category: 'premium',
    badge: 'Export Grade A+ • Jumbo Size',
    texture: 'Plump, generous pulp, tender mouthfeel',
    sweetness: 'Rich, lingering natural date honey',
    flavorProfile: 'Deep caramel notes with velvety finish',
    recommendedFor: ['VIP Gift boxes', 'Wedding distribution', 'Corporate clients', 'Festive celebrations'],
    description: 'Hand-graded jumbo specimen dates with immaculate skin and prime moisture balance. Ideal for luxury presentation boxes and discerning clients who demand the very best.',
    urduDescription: 'درجہ اول کی بڑی اور موٹی سعودی کھجوریں۔ شادی بیاہ، خاص تحائف اور وی آئی پی مہمان نوازی کے لیے شاندار معیار۔',
    imageUrl: mabroomImg,
    popularFor: 'Luxury wedding favors & Eid hampers',
    nutritionalHighlights: ['Large Caliber / Jumbo', 'Flawless Skin Finish', 'Pristine Storage Quality', 'Rich in Copper & Iron']
  },
  {
    id: 'seasonal-varieties',
    name: 'Seasonal Varieties (دیگر موسمی کھجوریں)',
    urduName: 'موسمی کھجوروں کی اقسام (ربی، زاہدی، عنبر وغیرہ)',
    arabicName: 'أصناف تمور موسمية',
    origin: 'Saudi Arabia & Regional Palms',
    category: 'seasonal',
    badge: 'Fresh Crop • Seasonal Availability',
    texture: 'Crisp, semi-dry to soft seasonal batches',
    sweetness: 'Light to moderate natural sweetness',
    flavorProfile: 'Vibrant date sweetness with distinctive regional notes',
    recommendedFor: ['Commercial baking', 'Dry fruit mixing', 'Budget friendly bulk', 'All year consumption'],
    description: 'We stock seasonal arrivals including Amber, Zahidi, Rabbi, Deglet, and fresh Rotab in season. Inquire with our commission shop for current crop availability and market rates.',
    urduDescription: 'موسم کی مناسبت سے دستیاب تازہ فصلیں بشمول عنبر، زاہدی، ربی اور تازہ رطب کھجور۔ مارکیٹ کے تازہ ترین ریٹس کے لیے رابطہ کریں۔',
    imageUrl: ramadanImg,
    popularFor: 'Bulk retail & wholesale trade',
    nutritionalHighlights: ['High Dietary Energy', 'Great Shelf Longevity', 'Clean Natural Sweetness', 'Economical Rates']
  }
];

export const OCCASIONS_DATA: OccasionItem[] = [
  {
    id: 'ramadan-iftar',
    title: 'Ramadan & Iftar Blessing',
    urduTitle: 'رمضان المبارک اور افطار',
    description: 'Revive the noble Sunnah of opening the fast with wholesome, nutrient-dense dates that gently elevate blood sugar and revitalize the body.',
    urduDescription: 'سنتِ نبوی ﷺ کے مطابق افطار کے لیے بہترین کھجوریں جو دن بھر کے روزے کے بعد فوری توانائی اور غذائیت فراہم کرتی ہیں۔',
    idealDates: 'Ajwa, Safawi, Sukkari',
    iconName: 'Moon',
    image: ramadanImg
  },
  {
    id: 'sehri-energy',
    title: 'Sehri & Sustained Vitality',
    urduTitle: 'سحری اور روزانہ توانائی',
    description: 'Slow-releasing complex carbohydrates and high fiber content help sustain endurance throughout long fasting hours in holy Ramadan.',
    urduDescription: 'سحری کے وقت کھجور کا استعمال دن بھر پیاس اور نقاہت سے بچاؤ اور دیرپا جسمانی توانائی کے لیے اکسیر ہے۔',
    idealDates: 'Kalmi, Mabroom, Safawi',
    iconName: 'Sun',
    image: safawiImg
  },
  {
    id: 'hajj-umrah',
    title: 'Hajj & Umrah Tabarruk Gifts',
    urduTitle: 'حج و عمرہ تبرک اور تحائف',
    description: 'Blessed souvenirs from Madina palms to share with arriving pilgrims, beloved relatives, neighbours, and community members.',
    urduDescription: 'حرمین شریفین سے واپسی پر عزیز و اقارب اور مہمانوں میں بانٹنے کے لیے مدینہ منورہ کی پربرکت کھجوروں کے خوبصورت پیک۔',
    idealDates: 'Ajwa Madina, Mabroom, Safawi',
    iconName: 'Compass',
    image: ajwaImg
  },
  {
    id: 'weddings-events',
    title: 'Weddings & Celebrations',
    urduTitle: 'شادی بیاہ اور تقریباتی تقسیم',
    description: 'Elevate your Nikkah ceremonies and wedding favors with premium packaged Saudi dates that reflect warm hospitality and auspicious tradition.',
    urduDescription: 'نکاح، شادی کی تقریبات اور مہمانوں کی تواضع کے لیے دیدہ زیب پیکنگ میں اعلیٰ درجہ کی خوش ذائقہ کھجوریں۔',
    idealDates: 'Premium Saudi Jumbo, Mabroom, Sukkari',
    iconName: 'HeartHandshake',
    image: mabroomImg
  },
  {
    id: 'islamic-gatherings',
    title: 'Milad, Khatam & Gatherings',
    urduTitle: 'محافلِ میلاد اور ختمِ قرآن',
    description: 'Hygienically sorted bulk dates for distribution in mosques, religious study circles, Khatam-ul-Quran, and charity drives.',
    urduDescription: 'مساجد، محافلِ نعت اور ختمِ پاک کی تقسیم کے لیے صاف ستھری اور مناسب نرخوں پر معیاری کھجوروں کا وسیع ذخیرہ۔',
    idealDates: 'Kalmi, Madina Selection, Seasonal Bulk',
    iconName: 'Users',
    image: kalmiImg
  },
  {
    id: 'gift-packages',
    title: 'Custom Gift Packages & Boxes',
    urduTitle: 'مخصوص گفٹ باکسز اور پیکجز',
    description: 'Specially arranged gift assortments in elegant presentation cartons, ideal for corporate gestures and family tokens of love.',
    urduDescription: 'عزیزوں اور دوستوں کو بھیجنے کے لیے خاص تیار کردہ گفٹ پیکجز جو آپ کی محبت اور عزت کا بہترین اظہار ہیں۔',
    idealDates: 'Multi-variety Madina Collection',
    iconName: 'Gift',
    image: assortmentImg
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Premium Quality',
    urduTitle: 'اعلیٰ اور معیاری کوالٹی',
    description: 'Carefully sorted and inspected dates with uncompromised caliber, natural glow, and hygienic packaging.',
    icon: 'Sparkles'
  },
  {
    title: 'Fresh Dates',
    urduTitle: 'تازہ اور محفوظ اسٹاک',
    description: 'Temperature-controlled storage ensuring optimal moisture, tenderness, and rich natural taste all year.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Wide Variety',
    urduTitle: 'کھجوروں کی وسیع ورائٹی',
    description: 'Direct access to authentic Ajwa, Safawi, Mabroom, Sukkari, Kalmi, and seasonal regional varieties.',
    icon: 'Layers'
  },
  {
    title: 'Competitive Rates',
    urduTitle: 'مارکیٹ کے مناسب ترین ریٹس',
    description: 'Transparent commission shop rates with excellent wholesale & retail pricing directly passed to you.',
    icon: 'BadgePercent'
  },
  {
    title: 'Trusted Service',
    urduTitle: 'دیانتدارانہ اور قابلِ اعتماد سروس',
    description: 'Dedicated Pakistani commission shop values: honest weights, prompt WhatsApp support, and genuine advice.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Quality Products',
    urduTitle: 'مستند اور تصدیق شدہ پراڈکٹس',
    description: 'Authentic sourcing directly from renowned Saudi orchards and verified agricultural commission channels.',
    icon: 'CheckCircle2'
  }
];
