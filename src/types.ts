import { LucideIcon } from 'lucide-react';

export interface DateProduct {
  id: string;
  name: string;
  urduName: string;
  arabicName: string;
  origin: string;
  category: 'madina' | 'sweet' | 'firm' | 'premium' | 'seasonal';
  badge: string;
  texture: string;
  sweetness: string;
  flavorProfile: string;
  recommendedFor: string[];
  description: string;
  urduDescription: string;
  imageUrl: string;
  popularFor: string;
  nutritionalHighlights: string[];
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  selectedProduct: string;
  quantity: string;
  unit: string;
  occasion: string;
  message: string;
}

export interface OccasionItem {
  id: string;
  title: string;
  urduTitle: string;
  description: string;
  urduDescription: string;
  idealDates: string;
  iconName: string;
  image: string;
}
