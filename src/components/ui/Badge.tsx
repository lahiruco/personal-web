import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default:  'bg-surface-card dark:bg-surface-card-dark text-ink-muted dark:text-ink-muted-dark border border-surface-border dark:border-surface-border-dark',
    accent:   'bg-brand-pink/10 dark:bg-brand-pink/20 text-brand-coral border border-brand-pink/30',
    success:  'bg-brand-green/10 text-brand-green border border-brand-green/30',
    warning:  'bg-brand-yellow/10 text-amber-600 dark:text-amber-400 border border-brand-yellow/30',
    outline:  'bg-transparent border border-surface-border dark:border-surface-border-dark text-ink-muted dark:text-ink-muted-dark',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
