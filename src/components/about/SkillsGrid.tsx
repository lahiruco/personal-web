'use client';

import { motion } from 'framer-motion';
import { Wrench, Layout, Cpu, Palette, Code, CpuIcon, Layers, Monitor } from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Automotive Diagnostics',
    icon: <Wrench className="text-brand-coral" size={20} />,
    skills: ['OBD-II Scanning', 'Engine Tuning', 'CAN Bus Protocol', 'Sensor Analysis', 'Vehicle Electricals'],
    description: 'Advanced diagnostic troubleshooting and electrical system repairs for modern automobiles.',
  },
  {
    title: 'UI/UX Design',
    icon: <Layout className="text-brand-pink" size={20} />,
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
    description: 'Crafting clean, accessible, and intuitive interfaces for web applications and mobile dashboards.',
  },
  {
    title: 'Embedded Systems',
    icon: <Cpu className="text-amber-500" size={20} />,
    skills: ['ESP32 / ESP8266', 'C++', 'Arduino Framework', 'WebSockets', 'Telemetry Display'],
    description: 'Programming hardware microcontrollers to connect sensors with real-time web displays.',
  },
  {
    title: 'Brand Identity',
    icon: <Palette className="text-emerald-500" size={20} />,
    skills: ['Logo Design', 'Typography', 'Color Systems', 'Brand Guidelines', 'Social Assets'],
    description: 'Developing complete, cohesive visual brand identities for automotive & tech ventures.',
  },
];

export default function SkillsGrid() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <p className="section-label mb-2">Capabilities</p>
        <h2 className="section-title">Skills & Technical Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -2 }}
            className="gum-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-card bg-surface-DEFAULT dark:bg-surface-dark border border-surface-border dark:border-surface-border-dark flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-ink-DEFAULT dark:text-ink-dark">
                  {cat.title}
                </h3>
              </div>
              <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-4">
                {cat.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border dark:border-surface-border-dark">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-surface-DEFAULT dark:bg-surface-dark">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
