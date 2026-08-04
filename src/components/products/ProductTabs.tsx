'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProductType } from '@/types';

interface ProductTabsProps {
  active: ProductType | 'all';
  onChange: (tab: ProductType | 'all') => void;
}

const tabs: { label: string; value: ProductType | 'all' }[] = [
  { label: 'All Products', value: 'all' },
  { label: 'Digital',      value: 'digital' },
  { label: 'Physical',     value: 'physical' },
];

export default function ProductTabs({ active, onChange }: ProductTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Product type filter"
      className="inline-flex p-1 rounded-card bg-surface-card dark:bg-surface-card-dark border border-surface-border dark:border-surface-border-dark gap-1"
    >
      {tabs.map((tab) => (
        <motion.button
          key={tab.value}
          role="tab"
          aria-selected={active === tab.value}
          id={`product-tab-${tab.value}`}
          onClick={() => onChange(tab.value)}
          whileTap={{ scale: 0.96 }}
          className={cn(
            'relative px-5 py-2 text-sm font-semibold rounded-btn transition-colors duration-200',
            active === tab.value
              ? 'text-ink-DEFAULT dark:text-ink-dark'
              : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark'
          )}
        >
          {active === tab.value && (
            <motion.span
              layoutId="product-tab-bg"
              className="absolute inset-0 rounded-btn bg-surface-DEFAULT dark:bg-surface-dark border border-surface-border dark:border-surface-border-dark shadow-card"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
