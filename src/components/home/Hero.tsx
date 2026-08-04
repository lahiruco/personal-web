'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

const HEADLINE = 'Lahiru Kumarasinghe';
const ROLES = ['Automotive Technician', 'UI/UX Designer', 'Creator', 'Entrepreneur'];

// Stagger each word of the headline
const words = HEADLINE.split(' ');

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.1, duration: 0.5 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-pink/15 dark:bg-brand-pink/8 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -5, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-yellow/10 dark:bg-brand-yellow/5 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/8 dark:bg-brand-green/12 text-brand-green text-xs font-semibold mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-slow" />
          Available for freelance projects
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark leading-none mb-4"
        >
          {words.map((word) => (
            <motion.span
              key={word}
              variants={wordVariant}
              className="inline-block mr-4 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle — role pills */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-2 mt-6 mb-8"
        >
          {ROLES.map((role, i) => (
            <span
              key={role}
              className="px-3 py-1 rounded-full text-sm font-medium border border-surface-border dark:border-surface-border-dark bg-surface-card dark:bg-surface-card-dark text-ink-muted dark:text-ink-muted-dark"
            >
              {i > 0 && <span className="mr-2 text-brand-pink">•</span>}
              {role}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-xl mx-auto text-base sm:text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-10"
        >
          I blend <strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">hands-on automotive expertise</strong> with
          digital product thinking — designing interfaces, building embedded systems, and crafting the brand of the modern vehicle technician.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/projects"
            id="hero-cta-projects"
            className="btn-primary group"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            id="hero-cta-contact"
            className="btn-secondary"
          >
            <MessageCircle size={16} />
            Contact Me
          </Link>
        </motion.div>

        {/* Floating indicator */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 flex items-center justify-center gap-6 text-xs text-ink-muted dark:text-ink-muted-dark"
        >
          {[
            { icon: <Zap size={12} />, label: '3+ Years Automotive' },
            { icon: <Zap size={12} />, label: 'ESP32 & Embedded' },
            { icon: <Zap size={12} />, label: 'UI/UX Figma' },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              <span className="text-brand-coral">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
