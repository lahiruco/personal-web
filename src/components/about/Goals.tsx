'use client';

import { motion } from 'framer-motion';
import { Target, Compass, Rocket } from 'lucide-react';

export default function Goals() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <p className="section-label mb-2">Vision</p>
        <h2 className="section-title">Long-Term Goals</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gum-card p-6 md:p-8 relative overflow-hidden bg-gradient-to-br from-surface-card via-surface-card to-brand-pink/5 dark:from-surface-card-dark dark:via-surface-card-dark dark:to-brand-pink/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-card bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center text-brand-coral">
              <Target size={20} />
            </div>
            <h3 className="font-bold text-lg text-ink-DEFAULT dark:text-ink-dark">
              Modern Workshop Launch
            </h3>
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
              Establish a modern, tech-forward automotive workshop in Sri Lanka integrating state-of-the-art diagnostic scanners with clean customer UI platforms.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-card bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink">
              <Compass size={20} />
            </div>
            <h3 className="font-bold text-lg text-ink-DEFAULT dark:text-ink-dark">
              Hardware-Software Ecosystem
            </h3>
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
              Build proprietary ESP32-based hardware diagnostic accessories and digital design templates for independent mechanics and car enthusiasts worldwide.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-card bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green">
              <Rocket size={20} />
            </div>
            <h3 className="font-bold text-lg text-ink-DEFAULT dark:text-ink-dark">
              Creator Knowledge Sharing
            </h3>
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
              Publish educational articles and video guides bridging vehicle electronics and software engineering in both English and Sinhala.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
