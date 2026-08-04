'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const all = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {all.map((cat) => {
        const isActive = cat === active;
        return (
          <motion.button
            key={cat}
            id={`filter-${cat.toLowerCase()}`}
            onClick={() => onChange(cat)}
            whileTap={{ scale: 0.95 }}
            aria-pressed={isActive}
            className={cn(
              'px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200',
              isActive
                ? 'bg-ink-DEFAULT dark:bg-ink-dark text-surface-DEFAULT dark:text-ink-DEFAULT border-ink-DEFAULT dark:border-ink-dark'
                : 'bg-transparent border-surface-border dark:border-surface-border-dark text-ink-muted dark:text-ink-muted-dark hover:border-ink-muted dark:hover:border-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark'
            )}
          >
            {cat}
          </motion.button>
        );
      })}
    </div>
  );
}
