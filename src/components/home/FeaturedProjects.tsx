'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/projects/ProjectCard';
import { Project } from '@/types';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-surface-border dark:border-surface-border-dark">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="section-label mb-2">Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-ink-muted dark:text-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark transition-colors group"
        >
          All projects
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 sm:hidden text-center">
        <Link href="/projects" className="btn-secondary text-sm">
          All projects <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
