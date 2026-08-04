import { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects — Lahiru Kumarasinghe',
  description:
    'Explore projects built by Lahiru Kumarasinghe — Habit Tracker, Smart Calendar, Automotive UI Dashboards, and ESP32 IoT implementations.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-2">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4">
          Featured Work & Side Projects
        </h1>
        <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          A collection of software tools, hardware telemetry prototypes, and brand identity projects built with focus on utility and craft.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
