'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from '@/types';
import Badge from '@/components/ui/Badge';

const journey: TimelineItem[] = [
  {
    year: '2026',
    title: 'Launching Digital Products & HabitNode',
    description: 'Developed HabitNode and automotive Figma UI kits, establishing an online digital creator presence.',
    type: 'project',
  },
  {
    year: '2025',
    title: 'ESP32 Automotive Telemetry Integration',
    description: 'Designed and prototyped real-time ESP32 HUD displays communicating with React web clients.',
    type: 'milestone',
  },
  {
    year: '2024',
    title: 'Freelance UI/UX & Brand Design',
    description: 'Started freelancing as a brand identity and UI/UX designer for automotive and tech startups.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'Automotive Studies at CGTTI',
    description: 'Enrolled in Ceylon German Technical Training Institute for specialized hands-on vehicle engineering.',
    type: 'education',
  },
];

export default function Timeline() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <p className="section-label mb-2">Milestones</p>
        <h2 className="section-title">My Journey</h2>
      </div>

      <div className="relative border-l-2 border-surface-border dark:border-surface-border-dark ml-4 md:ml-6 space-y-8">
        {journey.map((item, i) => (
          <motion.div
            key={item.year + item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="relative pl-6 md:pl-8 group"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface-DEFAULT dark:bg-surface-dark border-2 border-brand-coral group-hover:scale-125 transition-transform duration-200" />

            <div className="gum-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black tracking-wider text-brand-coral uppercase">
                  {item.year}
                </span>
                <Badge variant="accent">{item.type}</Badge>
              </div>
              <h3 className="font-bold text-base text-ink-DEFAULT dark:text-ink-dark mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
