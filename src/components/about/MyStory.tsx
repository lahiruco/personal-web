'use client';

import { motion } from 'framer-motion';

export default function MyStory() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gum-card p-6 md:p-10 relative overflow-hidden"
      >
        <p className="section-label mb-2">Background & Journey</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-DEFAULT dark:text-ink-dark mb-6">
          Bridging the Physical & Digital Worlds
        </h2>

        <div className="space-y-4 text-ink-muted dark:text-ink-muted-dark leading-relaxed text-base">
          <p>
            Hello! I'm <strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">Lahiru Kumarasinghe</strong>, an Automotive Technician, UI/UX Designer, Embedded Systems builder, and Creator based in Sri Lanka.
          </p>
          <p>
            My journey began with a deep fascination for how complex mechanical systems operate under the hood. As I pursued my formal automotive technology studies at <strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">CGTTI (Ceylon German Technical Training Institute)</strong>, I quickly realized that modern vehicles are essentially sophisticated computers on wheels.
          </p>
          <p>
            This insight led me to explore digital software design, microcontrollers like the <strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">ESP32</strong>, and full-stack web technologies. Today, I combine diagnostic engineering with human-centered UI/UX design to build physical products, digital tools, and memorable brand identities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
