'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: 'About',     href: '/about' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Projects',  href: '/projects' },
  { label: 'Products',  href: '/products' },
  { label: 'Now',       href: '/now' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact',   href: '/contact' },
];

export default function Footer() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // TODO: wire to Mailchimp / ConvertKit / Resend
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="border-t border-surface-border dark:border-surface-border-dark mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-card bg-ink-DEFAULT dark:bg-ink-dark flex items-center justify-center">
                <span className="text-surface-DEFAULT dark:text-ink-DEFAULT text-sm font-black">LK</span>
              </div>
              <span className="font-bold text-ink-DEFAULT dark:text-ink-dark text-sm">Lahiru Kumarasinghe</span>
            </div>
            <p className="text-ink-muted dark:text-ink-muted-dark text-sm leading-relaxed">
              Automotive Technician · UI/UX Designer · Creator building at the intersection of machines and software.
            </p>
            <Link
              href="mailto:hello@lahirukumarasinghe.com"
              className="inline-flex items-center gap-2 text-sm text-ink-muted dark:text-ink-muted-dark hover:text-brand-coral transition-colors duration-200"
            >
              <Mail size={14} />
              hello@lahirukumarasinghe.com
            </Link>
            <SocialLinks size="sm" className="mt-1" />
          </div>

          {/* Links column */}
          <div>
            <p className="section-label mb-4">Pages</p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-muted dark:text-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter column */}
          <div>
            <p className="section-label mb-2">Newsletter</p>
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark mb-4">
              Occasional essays on design, automotive tech, and building things.
            </p>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-card border border-brand-green/30 bg-brand-green/5 text-brand-green text-sm font-medium"
              >
                🎉 You're subscribed! Thank you.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-3 py-2.5 rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-card dark:bg-surface-card-dark text-ink-DEFAULT dark:text-ink-dark text-sm placeholder:text-ink-muted dark:placeholder:text-ink-muted-dark focus:outline-none focus:ring-2 focus:ring-brand-pink transition-all"
                />
                <motion.button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  disabled={status === 'loading'}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-btn bg-ink-DEFAULT dark:bg-ink-dark text-surface-DEFAULT dark:text-ink-DEFAULT hover:opacity-85 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-surface-border dark:border-surface-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
            © {currentYear} Lahiru Kumarasinghe. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
            Built with Next.js & ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
