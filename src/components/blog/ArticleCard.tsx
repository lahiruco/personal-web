'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import { Article } from '@/types';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="h-full"
    >
      <Link
        href={`/blog/${article.slug}`}
        id={`article-card-${article.slug}`}
        className="flex flex-col h-full gum-card p-5 group"
      >
        {/* Category + Language tag */}
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="accent">{article.category}</Badge>
          {article.language === 'si' && (
            <Badge variant="outline" className="font-sinhala text-[10px]">සිංහල</Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base text-ink-DEFAULT dark:text-ink-dark group-hover:text-brand-coral transition-colors duration-200 leading-snug mb-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed flex-1 mb-4">
          {article.excerpt}
        </p>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-surface-DEFAULT dark:bg-surface-dark border border-surface-border dark:border-surface-border-dark text-ink-muted dark:text-ink-muted-dark"
              >
                <Tag size={9} />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta: date + reading time */}
        <div className="flex items-center justify-between text-xs text-ink-muted dark:text-ink-muted-dark mt-auto pt-3 border-t border-surface-border dark:border-surface-border-dark">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {article.readingTime}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
