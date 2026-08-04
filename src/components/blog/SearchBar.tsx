'use client';

import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Search articles…' }: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        size={15}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted dark:text-ink-muted-dark pointer-events-none"
      />
      <input
        id="blog-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search articles"
        className="w-full pl-9 pr-4 py-2.5 rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-card dark:bg-surface-card-dark text-ink-DEFAULT dark:text-ink-dark text-sm placeholder:text-ink-muted dark:placeholder:text-ink-muted-dark focus:outline-none focus:ring-2 focus:ring-brand-pink transition-all"
      />
    </div>
  );
}
