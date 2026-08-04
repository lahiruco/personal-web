'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { Article } from '@/types';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface ArticleHeaderProps {
  article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-10 pb-8 border-b border-surface-border dark:border-surface-border-dark">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted dark:text-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark transition-colors mb-6"
      >
        <ArrowLeft size={14} />
        Back to all articles
      </Link>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant="accent">{article.category}</Badge>
        {article.language === 'si' && (
          <Badge variant="outline" className="font-sinhala text-[10px]">සිංහල</Badge>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4 leading-tight">
        {article.title}
      </h1>

      <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-6">
        {article.excerpt}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ink-muted dark:text-ink-muted-dark pt-4 border-t border-surface-border/50 dark:border-surface-border-dark/50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Calendar size={13} />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {article.readingTime}
          </span>
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-surface-card dark:bg-surface-card-dark border border-surface-border dark:border-surface-border-dark">
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
