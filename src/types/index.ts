// ─── Article / Blog ───────────────────────────────────────────────────────────
export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  readingTime: string;
  language?: 'en' | 'si'; // 'si' = Sinhala
  coverImage?: string;
}

// ─── Project ──────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
  status: 'live' | 'wip' | 'archived';
  year: number;
}

// ─── Product ──────────────────────────────────────────────────────────────────
export type ProductType = 'digital' | 'physical';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  type: ProductType;
  imageUrl: string;
  buyUrl: string;
  featured?: boolean;
  badge?: string; // e.g. "New", "Bestseller"
}

// ─── Resource ─────────────────────────────────────────────────────────────────
export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ResourceCategory;
  free: boolean;
  icon?: string;
}

export type ResourceCategory =
  | 'design'
  | 'development'
  | 'automotive'
  | 'books'
  | 'productivity'
  | 'learning';

// ─── Timeline ─────────────────────────────────────────────────────────────────
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'project' | 'milestone';
}

// ─── Social Link ──────────────────────────────────────────────────────────────
export interface SocialLink {
  label: string;
  url: string;
  icon: string; // Lucide icon name
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}
