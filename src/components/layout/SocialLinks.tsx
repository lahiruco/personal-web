'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    label: 'Facebook (Personal)',
    href: 'https://web.facebook.com/lahirukumarasinghe03/',
    icon: <Facebook size={18} strokeWidth={1.8} />,
  },
  {
    label: 'Facebook (Auto Page)',
    href: 'https://web.facebook.com/profile.php?id=100063501139178',
    icon: <Facebook size={18} strokeWidth={1.8} />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lahiru.auto/',
    icon: <Instagram size={18} strokeWidth={1.8} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lahiruauto/',
    icon: <Linkedin size={18} strokeWidth={1.8} />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/94786584504',
    icon: <MessageCircle size={18} strokeWidth={1.8} />,
  },
];

interface SocialLinksProps {
  size?: 'sm' | 'md';
  className?: string;
}

export default function SocialLinks({ size = 'md', className }: SocialLinksProps) {
  const btnSize = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {socialLinks.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              btnSize,
              'flex items-center justify-center rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-card dark:bg-surface-card-dark text-ink-muted dark:text-ink-muted-dark hover:text-brand-coral hover:border-brand-coral/40 transition-all duration-200'
            )}
          >
            {link.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
