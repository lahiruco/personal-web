import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'habitnode',
    title: 'HabitNode',
    description:
      'A minimalist habit tracker designed to build consistency with streaks, analytics, and gentle daily reminders. Built with a focus on distraction-free UX.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    githubUrl: 'https://github.com/lahirukumarasinghe/habitnode',
    liveUrl: '',
    imageUrl: '/images/project-habitnode.jpg',
    featured: true,
    status: 'wip',
    year: 2026,
  },
  {
    id: 'smart-calendar',
    title: 'Smart Calendar',
    description:
      'An intelligent scheduling app with AI-powered time-blocking and drag-and-drop event management. Integrates with Google Calendar.',
    techStack: ['Next.js', 'TypeScript', 'React DnD', 'OpenAI'],
    githubUrl: 'https://github.com/lahirukumarasinghe/smart-calendar',
    liveUrl: '',
    imageUrl: '/images/project-calendar.jpg',
    featured: true,
    status: 'wip',
    year: 2026,
  },
  {
    id: 'automotive-dashboard',
    title: 'Automotive Dashboard UI',
    description:
      'A real-time vehicle telemetry dashboard concept designed in Figma and prototyped in React. Displays RPM, temperature, fuel level, and diagnostics.',
    techStack: ['Figma', 'React', 'Chart.js', 'ESP32'],
    githubUrl: '',
    liveUrl: '',
    imageUrl: '/images/project-dashboard.jpg',
    featured: true,
    status: 'live',
    year: 2025,
  },
  {
    id: 'lk-brand-system',
    title: 'LK Auto Brand Identity',
    description:
      'Complete brand identity system for my automotive services venture — logo, color system, typography guide, and marketing templates.',
    techStack: ['Figma', 'Adobe Illustrator'],
    githubUrl: '',
    liveUrl: '',
    imageUrl: '/images/project-brand.jpg',
    featured: false,
    status: 'live',
    year: 2025,
  },
];
