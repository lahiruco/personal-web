'use client';

import { useState, useMemo } from 'react';
import { Article } from '@/types';
import ArticleCard from '@/components/blog/ArticleCard';
import SearchBar from '@/components/blog/SearchBar';
import CategoryFilter from '@/components/blog/CategoryFilter';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogClientProps {
  articles: Article[];
  categories: string[];
}

export default function BlogClient({ articles, categories }: BlogClientProps) {
  const [search, setSearch]       = useState('');
  const [category, setCategory]   = useState('All');

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        category === 'All' || article.category.toLowerCase() === category.toLowerCase();
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [articles, category, search]);

  return (
    <div>
      {/* Search & Filters Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-10 pb-6 border-b border-surface-border dark:border-surface-border-dark">
        <CategoryFilter
          categories={categories}
          active={category}
          onChange={setCategory}
        />
        <div className="w-full sm:w-72">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="gum-card p-12 text-center my-12">
          <p className="text-ink-muted dark:text-ink-muted-dark text-base">
            No articles found matching your query.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
