import { Resource } from '@/types';

export const resources: Resource[] = [
  // ─── Design ───────────────────────────────────────────────────────────────
  { id: 'figma', name: 'Figma', description: 'Industry-standard collaborative UI/UX design tool.', url: 'https://figma.com', category: 'design', free: true },
  { id: 'mobbin', name: 'Mobbin', description: 'Real-world mobile & web UI screenshot library for design inspiration.', url: 'https://mobbin.com', category: 'design', free: true },
  { id: 'unsplash', name: 'Unsplash', description: 'Free high-resolution photography for projects.', url: 'https://unsplash.com', category: 'design', free: true },
  { id: 'coolors', name: 'Coolors', description: 'Fast color palette generator with accessibility checks.', url: 'https://coolors.co', category: 'design', free: true },
  { id: 'fontshare', name: 'Fontshare', description: 'Free, high-quality fonts from the Indian Type Foundry.', url: 'https://www.fontshare.com', category: 'design', free: true },

  // ─── Development ──────────────────────────────────────────────────────────
  { id: 'nextjs', name: 'Next.js', description: 'The React framework for production-grade web applications.', url: 'https://nextjs.org', category: 'development', free: true },
  { id: 'tailwindcss', name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development.', url: 'https://tailwindcss.com', category: 'development', free: true },
  { id: 'framer-motion', name: 'Framer Motion', description: 'Production-ready animation library for React.', url: 'https://www.framer.com/motion', category: 'development', free: true },
  { id: 'supabase', name: 'Supabase', description: 'Open-source Firebase alternative with PostgreSQL.', url: 'https://supabase.com', category: 'development', free: true },
  { id: 'vercel', name: 'Vercel', description: 'Zero-config cloud platform for deploying Next.js apps.', url: 'https://vercel.com', category: 'development', free: true },

  // ─── Automotive ───────────────────────────────────────────────────────────
  { id: 'alldata', name: 'ALLDATA', description: 'Professional automotive repair information and OEM data.', url: 'https://alldata.com', category: 'automotive', free: false },
  { id: 'cgtti', name: 'CGTTI Sri Lanka', description: 'Ceylon German Technical Training Institute — vocational training in automotive.', url: 'https://www.cgtti.ac.lk', category: 'automotive', free: false },
  { id: 'elm327', name: 'ELM327 OBD-II', description: 'Universal vehicle diagnostic adapter protocol docs and tools.', url: 'https://elmelectronics.com', category: 'automotive', free: true },

  // ─── Books ────────────────────────────────────────────────────────────────
  { id: 'book-1', name: 'The Design of Everyday Things', description: 'Don Norman\'s classic on user-centered design thinking.', url: 'https://www.nngroup.com/books/design-everyday-things/', category: 'books', free: false },
  { id: 'book-2', name: 'Atomic Habits', description: 'James Clear\'s framework for building better habits incrementally.', url: 'https://jamesclear.com/atomic-habits', category: 'books', free: false },
  { id: 'book-3', name: 'Programming the ESP32', description: 'Hands-on guide for IoT projects with the ESP32 microcontroller.', url: 'https://randomnerdtutorials.com', category: 'books', free: true },

  // ─── Productivity ─────────────────────────────────────────────────────────
  { id: 'notion', name: 'Notion', description: 'All-in-one workspace for notes, tasks, and wikis.', url: 'https://notion.so', category: 'productivity', free: true },
  { id: 'linear', name: 'Linear', description: 'Streamlined project management tool for software teams.', url: 'https://linear.app', category: 'productivity', free: true },

  // ─── Learning ─────────────────────────────────────────────────────────────
  { id: 'freecodecamp', name: 'freeCodeCamp', description: 'Free coding courses and certifications.', url: 'https://freecodecamp.org', category: 'learning', free: true },
  { id: 'udemy', name: 'Udemy', description: 'Online course marketplace for technical and design skills.', url: 'https://udemy.com', category: 'learning', free: false },
];
