import { Metadata } from 'next';
import { BookOpen, GraduationCap, Cpu, Layers, Image as ImageIcon, Calendar } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Now — Lahiru Kumarasinghe',
  description:
    'A public journal of what Lahiru Kumarasinghe is currently learning, building, reading, and working on.',
};

export default function NowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 border-b border-surface-border dark:border-surface-border-dark pb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent">Public Journal</Badge>
          <span className="text-xs text-ink-muted dark:text-ink-muted-dark">Updated July 2026</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4">
          What I'm Doing Now
        </h1>
        <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          Inspired by Derek Sivers' <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="text-brand-coral hover:underline font-medium">/now movement</a>. This page serves as a public log of my focus right now.
        </p>
      </div>

      <div className="space-y-10">
        {/* What I'm Learning */}
        <section className="gum-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-card bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center text-brand-coral">
              <Cpu size={20} />
            </div>
            <h2 className="text-2xl font-bold text-ink-DEFAULT dark:text-ink-dark">
              What I'm Learning
            </h2>
          </div>
          <ul className="space-y-3 text-ink-muted dark:text-ink-muted-dark text-base leading-relaxed pl-2">
            <li className="flex items-start gap-2">
              <span className="text-brand-coral font-bold">•</span>
              <span><strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">Embedded Systems & CAN Bus Integration:</strong> Deepening C++ micro-controller programming on ESP32 to interface directly with vehicle sensors and OLED displays.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-coral font-bold">•</span>
              <span><strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">Professional English Proficiency:</strong> Practicing technical documentation, video scriptwriting, and international communication skills.</span>
            </li>
          </ul>
        </section>

        {/* Current Projects */}
        <section className="gum-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-card bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink">
              <Layers size={20} />
            </div>
            <h2 className="text-2xl font-bold text-ink-DEFAULT dark:text-ink-dark">
              Current Projects
            </h2>
          </div>
          <ul className="space-y-3 text-ink-muted dark:text-ink-muted-dark text-base leading-relaxed pl-2">
            <li className="flex items-start gap-2">
              <span className="text-brand-pink font-bold">•</span>
              <span><strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">HabitNode:</strong> Developing a minimal, distraction-free habit tracking web app using Next.js 15, TypeScript, and Supabase.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-pink font-bold">•</span>
              <span><strong className="text-ink-DEFAULT dark:text-ink-dark font-semibold">Workshop Training at CGTTI:</strong> Hands-on automotive diagnostics, engine overhaul procedures, and electronic testing modules at Ceylon German Technical Training Institute.</span>
            </li>
          </ul>
        </section>

        {/* Books I'm Reading */}
        <section className="gum-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-card bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green">
              <BookOpen size={20} />
            </div>
            <h2 className="text-2xl font-bold text-ink-DEFAULT dark:text-ink-dark">
              Books I'm Reading
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-DEFAULT dark:bg-surface-dark">
              <p className="font-bold text-ink-DEFAULT dark:text-ink-dark text-sm">The Design of Everyday Things</p>
              <p className="text-xs text-ink-muted dark:text-ink-muted-dark">by Don Norman</p>
              <Badge variant="accent" className="mt-2">UI/UX Design</Badge>
            </div>
            <div className="p-4 rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-DEFAULT dark:bg-surface-dark">
              <p className="font-bold text-ink-DEFAULT dark:text-ink-dark text-sm">Atomic Habits</p>
              <p className="text-xs text-ink-muted dark:text-ink-muted-dark">by James Clear</p>
              <Badge variant="success" className="mt-2">Productivity</Badge>
            </div>
          </div>
        </section>

        {/* Recent Updates & Photo Gallery */}
        <section className="gum-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-card bg-brand-yellow/20 border border-brand-yellow/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <ImageIcon size={20} />
            </div>
            <h2 className="text-2xl font-bold text-ink-DEFAULT dark:text-ink-dark">
              Recent Snapshots & Lab Notes
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'CGTTI Automotive Workshop Lab', color: 'from-blue-500/20 to-indigo-500/20' },
              { label: 'ESP32 Microcontroller Prototyping', color: 'from-amber-500/20 to-orange-500/20' },
              { label: 'Figma UI/UX Component System', color: 'from-pink-500/20 to-purple-500/20' },
              { label: 'OBD-II Diagnostic Testing', color: 'from-emerald-500/20 to-teal-500/20' },
              { label: 'HabitNode Code & Refactoring', color: 'from-rose-500/20 to-red-500/20' },
              { label: 'Sri Lanka Tech & Automotive Workshop', color: 'from-cyan-500/20 to-sky-500/20' },
            ].map((photo, i) => (
              <div
                key={photo.label}
                className="relative aspect-square rounded-card border border-surface-border dark:border-surface-border-dark bg-surface-DEFAULT dark:bg-surface-dark overflow-hidden p-3 flex flex-col justify-end group hover:border-brand-coral transition-colors"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                <span className="relative z-10 text-xs font-semibold text-ink-DEFAULT dark:text-ink-dark leading-tight">
                  {photo.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
