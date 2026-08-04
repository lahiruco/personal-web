import { Metadata } from 'next';
import { resources } from '@/data/resources';
import ResourcesClient from '@/components/resources/ResourcesClient';

export const metadata: Metadata = {
  title: 'Resources & Toolkit — Lahiru Kumarasinghe',
  description:
    'A curated stack of design tools, development libraries, automotive diagnostic software, and recommended books.',
};

export default function ResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-2">Toolkit</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4">
          Recommended Tools & Resources
        </h1>
        <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          Software, design tools, automotive diagnostic gear, and books that I use daily or highly recommend.
        </p>
      </div>

      <ResourcesClient resources={resources} />
    </div>
  );
}
