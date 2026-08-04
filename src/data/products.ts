import { Product } from '@/types';

export const products: Product[] = [
  // ─── Digital Products ────────────────────────────────────────────────────────
  {
    id: 'ui-kit-automotive',
    title: 'Automotive UI Kit',
    description:
      'A premium Figma UI kit with 60+ components tailored for automotive dashboards, service apps, and garage management systems.',
    price: 29,
    currency: 'USD',
    type: 'digital',
    imageUrl: '/images/product-uikit.jpg',
    buyUrl: '#',
    featured: true,
    badge: 'Bestseller',
  },
  {
    id: 'brand-identity-template',
    title: 'Brand Identity Starter Pack',
    description:
      'Editable Figma templates for logos, business cards, social media kits, and color guides — ready for small businesses.',
    price: 19,
    currency: 'USD',
    type: 'digital',
    imageUrl: '/images/product-brand.jpg',
    buyUrl: '#',
    featured: true,
    badge: 'New',
  },
  {
    id: 'esp32-starter-guide',
    title: 'ESP32 Automotive Starter Guide',
    description:
      'A comprehensive PDF guide on using ESP32 for vehicle diagnostics, OBD-II integration, and embedded display projects.',
    price: 12,
    currency: 'USD',
    type: 'digital',
    imageUrl: '/images/product-esp32.jpg',
    buyUrl: '#',
    featured: false,
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
