'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function NewsletterBlock() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // TODO: wire to email service
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-surface-border dark:border-surface-border-dark">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        className="relative overflow-hidden rounded-xl2 border border-surface-border dark:border-surface-border-dark bg-surface-card dark:bg-surface-card-dark px-8 py-12 text-center"
      >
        {/* Background decoration */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-pink/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-yellow/8 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-lg mx-auto">
          <div className="flex justify-center mb-4">
            <span className="w-10 h-10 rounded-card bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center">
              <Sparkles size={18} className="text-brand-coral" />
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-3">
            Stay in the loop
          </h2>
          <p className="text-ink-muted dark:text-ink-muted-dark text-sm mb-8">
            Occasional essays on automotive design, embedded tech, and the creator journey. No spam — ever.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-card border border-brand-green/30 bg-brand-green/8 text-brand-green font-medium"
            >
              🎉 You're in! Check your inbox for a welcome note.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                id="hero-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 max-w-xs px-4 py-3 rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-DEFAULT dark:bg-surface-dark text-ink-DEFAULT dark:text-ink-dark text-sm placeholder:text-ink-muted dark:placeholder:text-ink-muted-dark focus:outline-none focus:ring-2 focus:ring-brand-pink transition-all"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                disabled={status === 'loading'}
                className="btn-primary whitespace-nowrap disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe <ArrowRight size={14} />
                  </>
                )}
              </motion.button>
            </form>
          )}

          <p className="mt-4 text-xs text-ink-muted dark:text-ink-muted-dark">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
