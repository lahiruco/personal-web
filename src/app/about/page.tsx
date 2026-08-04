import { Metadata } from 'next';
import MyStory from '@/components/about/MyStory';
import SkillsGrid from '@/components/about/SkillsGrid';
import Timeline from '@/components/about/Timeline';
import Goals from '@/components/about/Goals';

export const metadata: Metadata = {
  title: 'About — Lahiru Kumarasinghe',
  description:
    'Learn more about Lahiru Kumarasinghe — Automotive Technician, UI/UX Designer, Embedded Systems builder, and Creator from Sri Lanka.',
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-2">About Me</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4">
          Automotive Technician & Digital Creator
        </h1>
        <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          I craft digital software interfaces, build embedded microcontroller systems, and diagnose automotive electronics.
        </p>
      </div>

      <MyStory />
      <SkillsGrid />
      <Timeline />
      <Goals />
    </div>
  );
}
