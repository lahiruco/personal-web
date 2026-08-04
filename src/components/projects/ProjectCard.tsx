'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const statusLabel: Record<Project['status'], { label: string; variant: 'success' | 'warning' | 'outline' }> = {
  live:     { label: 'Live',     variant: 'success' },
  wip:      { label: 'In Progress', variant: 'warning' },
  archived: { label: 'Archived', variant: 'outline' },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusLabel[project.status];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="h-full"
      id={`project-card-${project.id}`}
    >
      <div className="flex flex-col h-full gum-card overflow-hidden group">
        {/* Image area */}
        <div className="relative aspect-video bg-gradient-to-br from-surface-card to-surface-border dark:from-surface-card-dark dark:to-surface-border-dark overflow-hidden">
          {project.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          ) : null}
          {/* Placeholder gradient if no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-brand-purple/10 to-brand-yellow/10 flex items-center justify-center">
            <span className="text-4xl font-black text-white/20 select-none tracking-tighter">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>

          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>

          {/* Year badge */}
          <div className="absolute top-3 right-3">
            <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm font-medium">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-base text-ink-DEFAULT dark:text-ink-dark mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-surface-DEFAULT dark:bg-surface-dark border border-surface-border dark:border-surface-border-dark text-ink-muted dark:text-ink-muted-dark"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-auto pt-3 border-t border-surface-border dark:border-surface-border-dark">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub: ${project.title}`}
                className="flex items-center gap-1.5 text-xs font-medium text-ink-muted dark:text-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark transition-colors"
              >
                <Github size={14} />
                Code
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live preview: ${project.title}`}
                className="flex items-center gap-1.5 text-xs font-medium text-brand-coral hover:opacity-75 transition-opacity"
              >
                <ExternalLink size={14} />
                Live Preview
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
