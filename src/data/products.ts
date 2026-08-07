import { Product } from '@/types';

export const products: Product[] = [
  // ─── Digital Products ────────────────────────────────────────────────────────
  {
    id: 'Automotive Mastery System',
    title: 'Automotive Mastery System',
    description:
      'A structured self-study system for automotive technicians and engineers. Covers every vehicle system, every major brand, and professional diagnostics — built around one rule: never memorize, always understand why.',
    price: 0.00,
    currency: 'USD',
    type: 'digital',
    imageUrl: '/images/product-uikit.jpg',
    buyUrl: 'https://muddy-minnow-fed.notion.site/Automotive-Mastery-System-cd7ef94598204f718e0e881586b61798?pvs=143',
    featured: true,
    badge: 'New',
  },
   
   
  // ─── Physical Products ───────────────────────────────────────────────────────
  {
    id: 'custom-car-display',
    title: 'Custom Vehicle HUD Display',
    description:
      'Hand-assembled heads-up display unit powered by ESP32 — shows speed, RPM, and fuel level on a sleek semi-transparent screen.',
    price: 149,
    currency: 'USD',
    type: 'physical',
    imageUrl: '/images/product-hud.jpg',
    buyUrl: '#',
    featured: true,
    badge: 'Limited',
  },
  {
    id: 'lk-sticker-pack',
    title: 'LK Auto Sticker Pack',
    description:
      'Vinyl-cut premium automotive stickers — weather-resistant, UV-protected. Set of 10 curated designs.',
    price: 8,
    currency: 'USD',
    type: 'physical',
    imageUrl: '/images/product-stickers.jpg',
    buyUrl: '#',
    featured: false,
  },
];
