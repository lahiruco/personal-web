import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mt-10 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-DEFAULT dark:text-ink-dark mt-8 mb-4 border-b border-surface-border dark:border-surface-border-dark pb-2" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold text-ink-DEFAULT dark:text-ink-dark mt-6 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-ink-DEFAULT dark:text-ink-dark leading-relaxed mb-6 text-base" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-ink-DEFAULT dark:text-ink-dark" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-ink-DEFAULT dark:text-ink-dark" {...props} />
  ),
  li: (props: any) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-brand-pink bg-surface-card dark:bg-surface-card-dark p-4 italic rounded-r-btn my-6 text-ink-muted dark:text-ink-muted-dark" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-surface-card dark:bg-surface-card-dark px-1.5 py-0.5 rounded text-xs font-mono text-brand-coral border border-surface-border dark:border-surface-border-dark" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-surface-card-dark text-gray-100 p-4 rounded-card overflow-x-auto my-6 text-sm font-mono border border-surface-border-dark" {...props} />
  ),
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link href={href} className="text-brand-coral hover:underline font-medium inline-flex items-center gap-0.5" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-coral hover:underline font-medium inline-flex items-center gap-0.5" {...props}>
        {children} <ExternalLink size={12} className="inline ml-0.5" />
      </a>
    );
  },
  hr: (props: any) => (
    <hr className="my-8 border-surface-border dark:border-surface-border-dark" {...props} />
  ),
  img: (props: any) => (
    <span className="block my-8 rounded-card overflow-hidden border border-surface-border dark:border-surface-border-dark shadow-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-full h-auto object-cover" {...props} alt={props.alt || ''} />
    </span>
  ),
};
