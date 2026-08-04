'use client';

import { useState, useMemo } from 'react';
import { Resource, ResourceCategory } from '@/types';
import { ExternalLink, Search } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { motion } from 'framer-motion';

interface ResourcesClientProps {
  resources: Resource[];
}

const categories: { label: string; value: ResourceCategory | 'all' }[] = [
  { label: 'All',           value: 'all' },
  { label: 'Design',        value: 'design' },
  { label: 'Development',   value: 'development' },
  { label: 'Automotive',    value: 'automotive' },
  { label: 'Books',         value: 'books' },
  { label: 'Productivity',  value: 'productivity' },
  { label: 'Learning',      value: 'learning' },
];

export default function ResourcesClient({ resources }: ResourcesClientProps) {
  const [selectedCat, setSelectedCat] = useState<ResourceCategory | 'all'>('all');
  const [search, setSearch]           = useState('');

  const filtered = useMemo(() => {
    return resources.filter((item) => {
      const matchCat = selectedCat === 'all' || item.category === selectedCat;
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [resources, selectedCat, search]);

  return (
    <div>
      {/* Category Pills + Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-10 pb-6 border-b border-surface-border dark:border-surface-border-dark">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`resource-cat-${cat.value}`}
              onClick={() => setSelectedCat(cat.value)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                selectedCat === cat.value
                  ? 'bg-ink-DEFAULT dark:bg-ink-dark text-surface-DEFAULT dark:text-ink-DEFAULT border-ink-DEFAULT dark:border-ink-dark'
                  : 'bg-transparent border-surface-border dark:border-surface-border-dark text-ink-muted dark:text-ink-muted-dark hover:border-ink-muted dark:hover:border-ink-muted-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
          <input
            id="resources-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="w-full pl-9 pr-4 py-2 rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-card dark:bg-surface-card-dark text-ink-DEFAULT dark:text-ink-dark text-xs focus:outline-none focus:ring-2 focus:ring-brand-pink"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -3 }}
            className="gum-card p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-base text-ink-DEFAULT dark:text-ink-dark group-hover:text-brand-coral transition-colors">
                  {item.name}
                </h3>
                <Badge variant={item.free ? 'success' : 'outline'}>
                  {item.free ? 'Free' : 'Paid'}
                </Badge>
              </div>
              <p className="text-xs text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-surface-border dark:border-surface-border-dark mt-auto">
              <span className="text-[11px] font-medium capitalize text-ink-muted dark:text-ink-muted-dark">
                {item.category}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.name}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-coral hover:underline"
              >
                Visit <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
